'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Code, DollarSign, Users, Zap, Wallet, Clock } from 'lucide-react'

const EducationSection = () => {
  const learningPaths = [
    {
      title: 'Bitcoin SV Fundamentals',
      description: 'Understanding the original Bitcoin vision, how it scales, and why bigger blocks matter.',
      duration: '4 weeks',
      lessons: 12,
      price: '£0.50/hour',
      level: 'Beginner',
      topics: ['Original Whitepaper', 'Scaling Solutions', 'Economic Incentives', 'Mining & Consensus']
    },
    {
      title: 'Blockchain Development',
      description: 'Learn to build applications on Bitcoin SV using Script and modern development tools.',
      duration: '8 weeks',
      lessons: 24,
      price: '£0.75/hour',
      level: 'Intermediate',
      topics: ['Bitcoin Script', 'Transaction Building', 'Smart Contracts', 'API Integration']
    },
    {
      title: 'Business Applications',
      description: 'Real-world use cases: payments, data storage, supply chain, and enterprise solutions.',
      duration: '6 weeks',
      lessons: 18,
      price: '£1.00/hour',
      level: 'Advanced',
      topics: ['Payment Systems', 'Data On-Chain', 'Enterprise Integration', 'Regulatory Compliance']
    }
  ]

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Learn directly from Satoshi AI - trained on the complete Bitcoin knowledge base and original vision.'
    },
    {
      icon: Wallet,
      title: 'Wallet-Based Login',
      description: 'Secure authentication using your Bitcoin SV wallet. Your progress and payments are tracked on-chain.'
    },
    {
      icon: DollarSign,
      title: 'Micropayment Lessons',
      description: 'Pay as you learn with tiny amounts. £0.50-£1.00 per hour of AI interaction and coursework.'
    },
    {
      icon: Code,
      title: 'Hands-On Projects',
      description: 'Build real applications while learning. Every project teaches practical Bitcoin SV development.'
    }
  ]

  return (
    <section id="education" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Learn Bitcoin the Right Way
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the original Bitcoin vision through structured learning paths, 
            AI-powered tutoring, and affordable micropayment lessons.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="w-12 h-12 text-bitcoin-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Learning Paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Choose Your Learning Path
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glass p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      path.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      path.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {path.level}
                    </span>
                    <span className="text-bitcoin-orange font-bold text-lg">{path.price}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{path.title}</h4>
                  <p className="text-gray-400 mb-4">{path.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {path.duration}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {path.lessons} lessons
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-white mb-3">What You'll Learn:</h5>
                  <ul className="space-y-2">
                    {path.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-400 flex items-center">
                        <Zap className="w-3 h-3 text-bitcoin-orange mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary"
                >
                  Start Learning
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass p-8 text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Pay-As-You-Learn Pricing
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            No upfront costs, no subscriptions. Pay tiny amounts for the time you actually spend learning. 
            Connect your Bitcoin SV wallet and start with just a few pence per hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Try Free Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection 