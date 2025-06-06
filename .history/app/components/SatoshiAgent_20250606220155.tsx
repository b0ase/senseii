'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Zap, Brain, Bitcoin } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'satoshi'
  timestamp: Date
}

const SatoshiAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Satoshi, your AI teacher for Bitcoin education. I'm here to help you understand Bitcoin as it was originally designed - as a peer-to-peer electronic cash system that scales globally. Connect your wallet for personalized lessons, or ask me anything about Bitcoin SV. What would you like to learn today?",
      sender: 'satoshi',
      timestamp: new Date(),
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sampleResponses = [
    "Bitcoin was designed to be a peer-to-peer electronic cash system, not a digital gold. The original vision supports massive scaling through larger blocks and efficient transaction processing.",
    "The beauty of Bitcoin SV lies in its commitment to the original protocol. We maintain the stability needed for enterprise applications while supporting microtransactions and data storage.",
    "Smart contracts on Bitcoin don't require additional layers or tokens. The Bitcoin script language, when properly utilized, provides all the programmability needed for complex applications.",
    "Proof of Work isn't just about security - it's about honest accounting and creating a truly decentralized system. Bitcoin SV maintains this principle while scaling to global adoption.",
    "The blockchain is not just a ledger - it's a global database that can store any type of data immutably. This capability opens up possibilities far beyond simple value transfer."
  ]

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)]
      const satoshiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'satoshi',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, satoshiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section id="satoshi-agent" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-500 to-gray-300 opacity-20 blur-xl"
              />
              <div className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Meet Satoshi
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI agent embodies the knowledge and wisdom of Bitcoin's creator. 
            Learn directly from the source about the original Bitcoin vision, 
            scaling solutions, and building on Bitcoin SV.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glass p-6 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center pb-4 border-b border-white/20 mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                                      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Satoshi AI</h3>
                  <p className="text-sm text-gray-400">Online • Bitcoin SV Expert</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-primary-600' 
                          : 'bg-gradient-to-br from-gray-600 to-gray-800'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bitcoin className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-white/10 text-gray-100'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                                          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                      <Bitcoin className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Satoshi about Bitcoin SV..."
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                                  className="bg-gray-600 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SatoshiAgent 