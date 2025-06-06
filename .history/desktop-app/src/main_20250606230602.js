const { app, BrowserWindow, ipcMain, dialog, Tray, Menu, systemPreferences } = require('electron')
const path = require('path')
const fs = require('fs-extra')
const chokidar = require('chokidar')
const crypto = require('crypto')
const { machineId } = require('node-machine-id')
const si = require('systeminformation')

class SatoshiAIDesktop {
  constructor() {
    this.mainWindow = null
    this.tray = null
    this.fileWatcher = null
    this.isMonitoring = false
    this.userPermissions = {
      fileAccess: false,
      systemMonitoring: false
    }
  }

  async initialize() {
    await app.whenReady()
    
    // Request permissions on macOS
    if (process.platform === 'darwin') {
      await this.requestMacPermissions()
    }

    this.createWindow()
    this.createTray()
    this.setupIPC()
    this.initializeFileWatcher()
  }

  async requestMacPermissions() {
    try {
      // Request accessibility permissions for system monitoring
      const hasAccess = systemPreferences.isTrustedAccessibilityClient(false)
      if (!hasAccess) {
        const result = await dialog.showMessageBox(null, {
          type: 'question',
          buttons: ['Grant Access', 'Skip'],
          defaultId: 0,
          message: 'Accessibility Permissions Required',
          detail: 'Satoshi AI needs accessibility permissions to monitor file creation and help tokenize your intellectual property. Your data never leaves this computer.'
        })
        
        if (result.response === 0) {
          systemPreferences.isTrustedAccessibilityClient(true)
          this.userPermissions.systemMonitoring = true
        }
      } else {
        this.userPermissions.systemMonitoring = true
      }
    } catch (error) {
      console.log('Permission request failed:', error)
    }
  }

  createWindow() {
    this.mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
      titleBarStyle: 'hiddenInset',
      backgroundColor: '#000000',
      icon: path.join(__dirname, '../assets/icon.png'),
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
        webSecurity: true
      },
      show: false
    })

    this.mainWindow.loadFile(path.join(__dirname, 'index.html'))

    this.mainWindow.once('ready-to-show', () => {
      this.mainWindow.show()
    })

    this.mainWindow.on('closed', () => {
      this.mainWindow = null
    })

    // Hide to tray instead of closing
    this.mainWindow.on('close', (event) => {
      if (!app.isQuiting) {
        event.preventDefault()
        this.mainWindow.hide()
      }
    })
  }

  createTray() {
    this.tray = new Tray(path.join(__dirname, '../assets/tray-icon.png'))
    
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Show Satoshi AI',
        click: () => {
          this.mainWindow.show()
        }
      },
      {
        label: 'Toggle IP Monitoring',
        type: 'checkbox',
        checked: this.isMonitoring,
        click: () => {
          this.toggleMonitoring()
        }
      },
      { type: 'separator' },
      {
        label: 'Quit',
        click: () => {
          app.isQuiting = true
          app.quit()
        }
      }
    ])

    this.tray.setContextMenu(contextMenu)
    this.tray.setToolTip('Satoshi AI - Local IP Tokenization')
    
    this.tray.on('click', () => {
      this.mainWindow.isVisible() ? this.mainWindow.hide() : this.mainWindow.show()
    })
  }

  setupIPC() {
    ipcMain.handle('get-system-info', async () => {
      try {
        const [cpu, mem, os, graphics] = await Promise.all([
          si.cpu(),
          si.mem(),
          si.osInfo(),
          si.graphics()
        ])
        
        return {
          cpu: cpu.manufacturer + ' ' + cpu.brand,
          memory: Math.round(mem.total / 1024 / 1024 / 1024) + ' GB',
          os: os.platform + ' ' + os.release,
          graphics: graphics.controllers[0]?.model || 'Unknown'
        }
      } catch (error) {
        return { error: 'Unable to get system info' }
      }
    })

    ipcMain.handle('get-machine-id', async () => {
      try {
        return await machineId()
      } catch (error) {
        return 'unknown-machine'
      }
    })

    ipcMain.handle('toggle-monitoring', () => {
      return this.toggleMonitoring()
    })

    ipcMain.handle('hash-content', (event, content) => {
      return crypto.createHash('sha256').update(content).digest('hex')
    })

    ipcMain.handle('request-folder-access', async () => {
      try {
        const result = await dialog.showOpenDialog(this.mainWindow, {
          properties: ['openDirectory'],
          title: 'Select Folder to Monitor for IP Creation'
        })
        
        if (!result.canceled && result.filePaths.length > 0) {
          this.userPermissions.fileAccess = true
          return result.filePaths[0]
        }
        return null
      } catch (error) {
        return null
      }
    })
  }

  initializeFileWatcher() {
    // Watch common document directories
    const watchPaths = []
    
    if (process.platform === 'darwin') {
      watchPaths.push(
        path.join(require('os').homedir(), 'Documents'),
        path.join(require('os').homedir(), 'Desktop'),
        path.join(require('os').homedir(), 'Downloads')
      )
    } else if (process.platform === 'win32') {
      watchPaths.push(
        path.join(require('os').homedir(), 'Documents'),
        path.join(require('os').homedir(), 'Desktop'),
        path.join(require('os').homedir(), 'Downloads')
      )
    }

    // Only start if we have permissions
    if (this.userPermissions.fileAccess) {
      this.startFileWatching(watchPaths)
    }
  }

  startFileWatching(paths) {
    this.fileWatcher = chokidar.watch(paths, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    })

    this.fileWatcher
      .on('add', (filePath) => this.handleFileCreated(filePath))
      .on('change', (filePath) => this.handleFileModified(filePath))
  }

  async handleFileCreated(filePath) {
    if (!this.isMonitoring) return

    try {
      const stats = await fs.stat(filePath)
      const fileInfo = {
        path: filePath,
        name: path.basename(filePath),
        size: stats.size,
        created: stats.birthtime,
        modified: stats.mtime,
        type: this.getFileType(filePath)
      }

      // Hash the file content
      const content = await fs.readFile(filePath)
      const hash = crypto.createHash('sha256').update(content).digest('hex')
      
      fileInfo.hash = hash

      // Send to renderer
      if (this.mainWindow) {
        this.mainWindow.webContents.send('file-created', fileInfo)
      }

    } catch (error) {
      console.log('Error processing file:', error)
    }
  }

  async handleFileModified(filePath) {
    if (!this.isMonitoring) return
    
    // Similar to handleFileCreated but for modifications
    await this.handleFileCreated(filePath)
  }

  getFileType(filePath) {
    const ext = path.extname(filePath).toLowerCase()
    
    const typeMap = {
      '.doc': 'document',
      '.docx': 'document',
      '.pdf': 'document',
      '.txt': 'document',
      '.rtf': 'document',
      '.jpg': 'image',
      '.jpeg': 'image',
      '.png': 'image',
      '.gif': 'image',
      '.psd': 'image',
      '.ai': 'design',
      '.sketch': 'design',
      '.figma': 'design',
      '.mp4': 'video',
      '.mov': 'video',
      '.avi': 'video',
      '.mp3': 'audio',
      '.wav': 'audio',
      '.js': 'code',
      '.html': 'code',
      '.css': 'code',
      '.py': 'code',
      '.java': 'code'
    }

    return typeMap[ext] || 'unknown'
  }

  toggleMonitoring() {
    this.isMonitoring = !this.isMonitoring
    return this.isMonitoring
  }
}

// Initialize the app
const satoshiAI = new SatoshiAIDesktop()

app.on('ready', () => {
  satoshiAI.initialize()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (satoshiAI.mainWindow === null) {
    satoshiAI.createWindow()
  }
}) 