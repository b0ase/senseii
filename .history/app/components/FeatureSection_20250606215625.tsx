'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Wallet, Zap, Users, Shield } from 'lucide-react'

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Satoshi AI Teacher',
      description: 'Learn directly from an AI trained on the complete Bitcoin knowledge base, original whitepaper, and scaling solutions.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Wallet,
      title: 'Wallet-Based Authentication',
      description: 'Secure login with your Bitcoin SV wallet. Your learning progress and payments are tracked on the blockchain.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Micropayment Learning',
      description: 'Pay tiny amounts for quality education. £0.50-£1.00 per hour means learning is accessible to everyone.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: BookOpen,
      title: 'Structured Curriculum',
      description: 'Comprehensive learning paths from Bitcoin basics to advanced development, all focused on the original vision.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Join study groups, ask questions, and learn alongside other students building on Bitcoin SV.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Original Bitcoin Focus',
      description: 'Learn the true Bitcoin protocol that scales globally, without the confusion of BTC limitations.',
      color: 'from-red-500 to-pink-600'
    }
  ]

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Why Choose Senseii?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The first AI-powered Bitcoin education platform that combines personalized learning 
            with blockchain-native payments and authentic Bitcoin SV knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-glass p-8 h-full hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Built for the Original Bitcoin Vision
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              While other platforms teach limited "digital gold" concepts, Senseii focuses on Bitcoin as it was designed: 
              a peer-to-peer electronic cash system that scales globally. Learn from an AI that understands the original 
              whitepaper, the importance of bigger blocks, and how Bitcoin SV enables real-world applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureSection 