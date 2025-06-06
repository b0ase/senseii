const { contextBridge, ipcRenderer } = require('electron')

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  toggleMonitoring: () => ipcRenderer.invoke('toggle-monitoring'),
  hashContent: (content) => ipcRenderer.invoke('hash-content', content),
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  getMachineId: () => ipcRenderer.invoke('get-machine-id'),
  requestFolderAccess: () => ipcRenderer.invoke('request-folder-access'),
  
  // Listen for file creation events
  onFileCreated: (callback) => ipcRenderer.on('file-created', callback),
  onFileModified: (callback) => ipcRenderer.on('file-modified', callback),
  
  // Remove listeners
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
}) 