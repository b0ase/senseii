'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Shield, Zap, Users, Rocket } from 'lucide-react'

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-First Learning',
      description: 'Learn from Satoshi AI, trained on the complete knowledge base of Bitcoin\'s original vision and scaling solutions.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Master Bitcoin SV development, business applications, and the economics of a truly scalable blockchain.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Original Bitcoin Protocol',
      description: 'Understand the unchanged Bitcoin protocol that enables massive scaling, stability, and enterprise adoption.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Real-world Applications',
      description: 'Build practical solutions using Bitcoin SV\'s capabilities for micropayments, data storage, and smart contracts.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with fellow builders, entrepreneurs, and visionaries working on Bitcoin SV applications.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Rocket,
      title: 'Business Incubation',
      description: 'Get support to launch your Bitcoin SV startup with mentorship, funding connections, and technical guidance.',
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Why Choose Senseii
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most comprehensive Bitcoin SV education platform, 
            designed to turn vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-glass p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} p-4 mx-auto`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection 