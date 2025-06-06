// Renderer process script for Satoshi AI Desktop
let isMonitoring = false
let fileCount = 0
let tokenCount = 0

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  initializeApp()
})

async function initializeApp() {
  console.log('Satoshi AI Desktop initialized')
  
  // Check if electron API is available
  if (typeof window.electronAPI !== 'undefined') {
    console.log('Electron API available')
    setupEventListeners()
  } else {
    console.log('Running in demo mode')
    setupDemoMode()
  }
}

function setupEventListeners() {
  // Listen for file creation events
  window.electronAPI.onFileCreated((event, fileInfo) => {
    handleFileCreated(fileInfo)
  })
  
  // Listen for file modification events
  window.electronAPI.onFileModified((event, fileInfo) => {
    handleFileModified(fileInfo)
  })
}

function setupDemoMode() {
  // Demo functionality for when running without Electron
  console.log('Demo mode: Simulating IP monitoring')
}

async function toggleMonitoring() {
  try {
    if (typeof window.electronAPI !== 'undefined') {
      isMonitoring = await window.electronAPI.toggleMonitoring()
    } else {
      isMonitoring = !isMonitoring
    }
    
    updateMonitoringStatus()
    
    if (isMonitoring) {
      startMonitoringAnimation()
    } else {
      stopMonitoringAnimation()
    }
  } catch (error) {
    console.error('Error toggling monitoring:', error)
  }
}

function updateMonitoringStatus() {
  const statusElement = document.getElementById('monitoring-status')
  const toggleElement = document.getElementById('monitoring-toggle')
  
  if (statusElement) {
    statusElement.innerHTML = isMonitoring 
      ? '<span class="status-indicator status-active"></span>Monitoring: Active'
      : '<span class="status-indicator status-inactive"></span>Monitoring: Inactive'
  }
  
  if (toggleElement) {
    toggleElement.classList.toggle('active', isMonitoring)
  }
}

function handleFileCreated(fileInfo) {
  fileCount++
  tokenCount++
  
  // Update statistics
  updateStats()
  
  // Add to file list
  addFileToList(fileInfo, 'created')
  
  // Show notification
  showNotification(`New IP detected: ${fileInfo.name}`, 'success')
}

function handleFileModified(fileInfo) {
  // Add to file list
  addFileToList(fileInfo, 'modified')
  
  // Show notification
  showNotification(`IP updated: ${fileInfo.name}`, 'info')
}

function addFileToList(fileInfo, action) {
  const fileList = document.getElementById('file-list')
  if (!fileList) return
  
  // Remove placeholder if exists
  const placeholder = fileList.querySelector('.placeholder')
  if (placeholder) {
    placeholder.remove()
  }
  
  const fileItem = document.createElement('div')
  fileItem.className = 'file-item'
  fileItem.innerHTML = `
    <div class="file-info">
      <h4>${fileInfo.name}</h4>
      <div class="file-details">
        ${action === 'created' ? 'Created' : 'Modified'} • ${formatFileSize(fileInfo.size)} • ${fileInfo.type}
      </div>
      <div class="file-hash">Hash: ${fileInfo.hash ? fileInfo.hash.substring(0, 16) + '...' : 'Computing...'}</div>
    </div>
    <div class="file-actions">
      <button class="btn-small" onclick="tokenizeFile('${fileInfo.hash}')">Tokenize</button>
    </div>
  `
  
  fileList.insertBefore(fileItem, fileList.firstChild)
  
  // Limit to 10 items
  while (fileList.children.length > 10) {
    fileList.removeChild(fileList.lastChild)
  }
}

function updateStats() {
  const elements = {
    'files-monitored': fileCount,
    'tokens-created': tokenCount,
    'ip-value': `$${(tokenCount * 0.001).toFixed(3)}`,
    'security-level': '100%'
  }
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id)
    if (element) {
      element.textContent = value
    }
  })
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#00ff88' : '#4444ff'};
    color: #000;
    padding: 12px 20px;
    border-radius: 6px;
    z-index: 1000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  `
  
  document.body.appendChild(notification)
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1'
    notification.style.transform = 'translateX(0)'
  }, 100)
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0'
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

function startMonitoringAnimation() {
  // Add visual feedback for monitoring
  document.body.style.boxShadow = 'inset 0 0 20px rgba(0, 255, 136, 0.1)'
}

function stopMonitoringAnimation() {
  // Remove visual feedback
  document.body.style.boxShadow = 'none'
}

function tokenizeFile(hash) {
  showNotification('File tokenized successfully!', 'success')
  tokenCount++
  updateStats()
}

function requestPermissions() {
  if (typeof window.electronAPI !== 'undefined') {
    window.electronAPI.requestFolderAccess().then(folderPath => {
      if (folderPath) {
        showNotification(`Monitoring folder: ${folderPath}`, 'success')
      }
    })
  } else {
    showNotification('Permissions granted (demo mode)', 'success')
  }
}

// AI Chat functionality
function toggleAIChat() {
  const chatElement = document.getElementById('ai-chat')
  if (chatElement) {
    chatElement.classList.toggle('active')
  }
}

function handleChatInput(event) {
  if (event.key === 'Enter') {
    const input = event.target
    const message = input.value.trim()
    
    if (message) {
      addChatMessage(message, 'user')
      input.value = ''
      
      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "I can help you tokenize that file. Would you like me to create a hash and metadata?",
          "Your intellectual property is being monitored securely. All processing happens locally.",
          "I'm analyzing your creative patterns to suggest optimal tokenization strategies.",
          "Remember, everything we discuss stays on your computer. Your privacy is paramount."
        ]
        const response = responses[Math.floor(Math.random() * responses.length)]
        addChatMessage(response, 'ai')
      }, 1000)
    }
  }
}

function addChatMessage(message, sender) {
  const messagesContainer = document.getElementById('chat-messages')
  if (!messagesContainer) return
  
  const messageElement = document.createElement('div')
  messageElement.className = `chat-message chat-message-${sender}`
  messageElement.style.cssText = `
    margin: 10px 0;
    padding: 8px 12px;
    border-radius: 8px;
    background: ${sender === 'user' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 255, 136, 0.1)'};
    font-size: 14px;
  `
  messageElement.textContent = message
  
  messagesContainer.appendChild(messageElement)
  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

// Initialize page navigation
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'))
      item.classList.add('active')
      
      const page = item.getAttribute('data-page')
      loadPage(page)
    })
  })
}

function loadPage(page) {
  const pageTitle = document.querySelector('.page-title')
  const pages = {
    dashboard: 'Local IP Tokenization Dashboard',
    monitoring: 'IP Monitoring Center',
    tokenization: 'Token Management',
    settings: 'Application Settings',
    security: 'Security & Privacy'
  }
  
  if (pageTitle && pages[page]) {
    pageTitle.textContent = pages[page]
  }
}

// Set up monitoring toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleElement = document.getElementById('monitoring-toggle')
  if (toggleElement) {
    toggleElement.addEventListener('click', toggleMonitoring)
  }
  
  initializeNavigation()
}) 