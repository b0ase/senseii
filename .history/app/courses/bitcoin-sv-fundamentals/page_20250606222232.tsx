'use client'

import { motion } from 'framer-motion'
import { 
  Play, Clock, Users, Star, Bitcoin, FileText, ChevronRight, BookOpen, Target
} from 'lucide-react'
import Header from '../../components/Header'

const BitcoinSvFundamentalsPage = () => {
  const weeks = [
    {
      title: "Week 1: Original Whitepaper",
      lessons: 3,
      content: "Deep dive into Satoshi's vision, understanding the double-spending problem and how Bitcoin solves it."
    },
    {
      title: "Week 2: Scaling Solutions", 
      lessons: 3,
      content: "Learn why bigger blocks enable global scaling and the economic principles behind Bitcoin's design."
    },
    {
      title: "Week 3: Economic Incentives",
      lessons: 3,
      content: "Understand the game theory behind Bitcoin mining and how economic incentives secure the network."
    },
    {
      title: "Week 4: Mining & Consensus",
      lessons: 3,
      content: "Master proof-of-work consensus mechanism and the role of miners in the Bitcoin ecosystem."
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
              Bitcoin SV Fundamentals
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Understanding the original Bitcoin vision, how it scales, and why bigger blocks matter.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-white" />
                4 weeks • 12 lessons
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-white" />
                2,847 students
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.9 rating
              </div>
              <div className="flex items-center text-gray-300">
                <Bitcoin className="w-5 h-5 mr-2 text-white" />
                £0.50/hour
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                <FileText className="w-5 h-5 mr-2" />
                Course Syllabus
              </motion.button>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Course Timeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weeks.map((week, index) => (
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
                      {week.lessons} lessons
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center">
                      <span className="text-sm font-bold text-black">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {week.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {week.content}
                  </p>
                  
                  <div className="mt-4 flex items-center text-white">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span className="text-sm">Start Week {index + 1}</span>
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
                <BookOpen className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instructor: Satoshi AI</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Master the fundamentals of Bitcoin SV with comprehensive guidance through the original vision. 
                Learn at your own pace with personalized feedback and progress tracking.
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

export default BitcoinSvFundamentalsPage 