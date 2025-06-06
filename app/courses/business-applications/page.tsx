'use client'

import { motion } from 'framer-motion'
import { 
  Play, Clock, Users, Star, Bitcoin, FileText, ChevronRight, Building, TrendingUp
} from 'lucide-react'
import Header from '../../components/Header'

const BusinessApplicationsPage = () => {
  const weeks = [
    {
      title: "Weeks 1-2: Payment Systems",
      lessons: 6,
      content: "Build robust payment infrastructure using Bitcoin SV for instant, low-cost global transactions."
    },
    {
      title: "Weeks 3-4: Data On-Chain", 
      lessons: 6,
      content: "Store and manage business data on-chain with immutable records and cryptographic verification."
    },
    {
      title: "Weeks 5-6: Enterprise Integration",
      lessons: 6,
      content: "Integrate Bitcoin SV into existing enterprise systems and workflows for maximum efficiency."
    },
    {
      title: "Weeks 7-8: Regulatory Compliance",
      lessons: 6,
      content: "Understand compliance requirements and build applications that meet regulatory standards."
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
              Advanced Course
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Business Applications
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real-world use cases: payments, data storage, supply chain, and enterprise solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-white" />
                6 weeks • 18 lessons
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-white" />
                1,456 students
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.9 rating
              </div>
              <div className="flex items-center text-gray-300">
                <Bitcoin className="w-5 h-5 mr-2 text-white" />
                £1.00/hour
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
                <Building className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instructor: Satoshi AI</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Learn to build enterprise-grade Bitcoin applications with real-world case studies and industry best practices.
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

export default BusinessApplicationsPage 