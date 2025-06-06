'use client'

import { motion } from 'framer-motion'
import { 
  Play, Clock, Users, Star, Bitcoin, FileText, ChevronRight, Code, Wrench
} from 'lucide-react'
import Header from '../../components/Header'

const BlockchainDevelopmentPage = () => {
  const weeks = [
    {
      title: "Weeks 1-2: Bitcoin Script",
      lessons: 6,
      content: "Master Bitcoin's native scripting language for creating complex smart contracts and applications."
    },
    {
      title: "Weeks 3-4: Transaction Building", 
      lessons: 6,
      content: "Learn to programmatically create, sign, and broadcast Bitcoin transactions with multiple inputs and outputs."
    },
    {
      title: "Weeks 5-6: Smart Contracts",
      lessons: 6,
      content: "Build sophisticated smart contracts using Bitcoin Script without additional layers or tokens."
    },
    {
      title: "Weeks 7-8: API Integration",
      lessons: 6,
      content: "Integrate your applications with Bitcoin SV infrastructure using modern APIs and development tools."
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
              Blockchain Development
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Learn to build applications on Bitcoin SV using Script and modern development tools.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-white" />
                8 weeks • 24 lessons
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-white" />
                1,923 students
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.8 rating
              </div>
              <div className="flex items-center text-gray-300">
                <Bitcoin className="w-5 h-5 mr-2 text-white" />
                £0.75/hour
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
                  className="card-glass p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {week.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {week.content}
                  </p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Instructor: Satoshi AI</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Master blockchain development with hands-on coding experience and real-world project building.
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

export default BlockchainDevelopmentPage 