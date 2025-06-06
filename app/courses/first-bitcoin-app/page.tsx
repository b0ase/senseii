'use client'

import { motion } from 'framer-motion'
import { 
  Play, Clock, Users, Star, Bitcoin, FileText, ChevronRight, Code, Wrench
} from 'lucide-react'
import Header from '../../components/Header'

const FirstBitcoinAppPage = () => {
  const lessons = [
    {
      title: "Setting Up Development Environment",
      duration: "2 hours",
      content: "Install and configure all necessary tools for Bitcoin SV development including Node.js, Bitcoin SV libraries, and testing frameworks."
    },
    {
      title: "Understanding Bitcoin Transactions", 
      duration: "2.5 hours",
      content: "Learn the structure of Bitcoin transactions, inputs, outputs, and how to programmatically create and sign transactions."
    },
    {
      title: "Building Payment Flows",
      duration: "2.5 hours",
      content: "Implement complete payment workflows including wallet integration, transaction broadcasting, and confirmation handling."
    },
    {
      title: "Testing and Deployment",
      duration: "1 hour",
      content: "Test your application thoroughly and deploy to production with proper error handling and monitoring."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="section-padding bg-black pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              Intermediate Course
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Building Your First Bitcoin App
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Hands-on development: create a simple payment application using Bitcoin SV.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-white" />
                8 hours
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-white" />
                634 students
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.9 rating
              </div>
              <div className="flex items-center text-gray-300">
                <Bitcoin className="w-5 h-5 mr-2 text-white" />
                £4.00
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Course
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                <FileText className="w-5 h-5 mr-2" />
                Preview Lessons
              </motion.button>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Course Contents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glass p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400">
                      Lesson {index + 1}
                    </span>
                    <span className="text-sm text-gray-400">{lesson.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {lesson.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {lesson.content}
                  </p>
                  
                  <div className="mt-4 flex items-center text-white">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span className="text-sm">Start Learning</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instructors: Satoshi AI + Code Assistant</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Learn hands-on development with both theoretical guidance from Satoshi AI and practical 
                coding assistance. Get real-time help with debugging and code optimization.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => window.location.href = '/'}
              >
                Back to Platform
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstBitcoinAppPage 