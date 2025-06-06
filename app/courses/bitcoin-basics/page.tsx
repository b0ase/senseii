'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Play, Clock, Users, Star, CheckCircle, 
  Bitcoin, FileText, Lightbulb, Target, ChevronRight
} from 'lucide-react'
import Header from '../../components/Header'

const BitcoinBasicsPage = () => {
  const [activeLesson, setActiveLesson] = useState(0)

  const lessons = [
    {
      title: "Reading the Original Whitepaper",
      duration: "30 min",
      content: "Dive deep into Satoshi Nakamoto's original Bitcoin whitepaper to understand the foundational concepts that started the cryptocurrency revolution."
    },
    {
      title: "Why Bitcoin Needs to Scale",
      duration: "25 min", 
      content: "Explore why Satoshi designed Bitcoin to scale and handle increasing transaction volumes without compromising decentralization."
    },
    {
      title: "Understanding Proof of Work",
      duration: "35 min",
      content: "Master the cryptographic and economic principles behind Bitcoin's proof-of-work consensus mechanism."
    },
    {
      title: "The Peer-to-Peer Vision",
      duration: "30 min",
      content: "Understand Bitcoin's original peer-to-peer electronic cash vision and how it enables direct financial interactions."
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
              Beginner Course
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Bitcoin Basics: The Original Vision
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start with Satoshi's whitepaper and understand what Bitcoin was truly designed to be.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-white" />
                2 hours
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-white" />
                1,247 students
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.9 rating
              </div>
              <div className="flex items-center text-gray-300">
                <Bitcoin className="w-5 h-5 mr-2 text-white" />
                £1.00
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
                  onClick={() => setActiveLesson(index)}
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
                <Bitcoin className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instructor: Satoshi AI</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Learn directly from an AI trained on Satoshi Nakamoto's complete works and the original Bitcoin vision. 
                Get personalized guidance through the fundamental concepts that make Bitcoin revolutionary.
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

export default BitcoinBasicsPage 