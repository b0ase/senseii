'use client'

import { motion } from 'framer-motion'
import { Rocket, DollarSign, Search, Shield, Zap, TrendingUp } from 'lucide-react'

const IncubatorSection = () => {
  const tools = [
    {
      name: 'Shuriken',
      description: 'Automatically captures and tokenizes all your intellectual property across any app or device.',
      icon: Shield,
      features: ['Auto IP Capture', 'Cross-Platform', 'Real-time Tokenization', 'Privacy Protected']
    },
    {
      name: 'Kitana',
      description: 'Continuously indexes and updates your IP state for instant lookup, retrieval and settlement.',
      icon: Search,
      features: ['Global IP Index', 'Instant Settlement', 'Smart Contracts', 'Revenue Tracking']
    }
  ]

  const benefits = [
    {
      title: 'IP Tokenization',
      description: 'Turn any digital content into valuable IP tokens. Photos, emails, code, ideas - everything becomes an asset.',
      icon: DollarSign
    },
    {
      title: 'Economically Weighted Search',
      description: 'Replace Google\'s PageRank with economic value. Quality content rises based on real peer validation.',
      icon: TrendingUp
    },
    {
      title: 'Instant Micropayments',
      description: 'Earn fractions of pennies instantly for valuable content. Scale to thousands of stakeholders simultaneously.',
      icon: Zap
    }
  ]

  return (
    <section id="incubator" className="section-padding bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-bitcoin-orange to-bitcoin-yellow p-4"
            >
              <Rocket className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            IP-Powered Business Incubator
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transform your intellectual property into tokenized assets. 
            Build businesses using our revolutionary Economically Weighted Search system 
            that challenges Google's monopoly through peer-validated value creation.
          </p>
        </motion.div>

        {/* Core Tools Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glass p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bitcoin-orange to-bitcoin-dark p-3 mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-bitcoin-orange rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-bitcoin-orange to-bitcoin-dark p-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center card-glass p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Tokenize Your IP?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the MetaNet revolution. Turn your ideas into assets, 
            your content into capital, and your knowledge into a thriving business ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Tokenizing IP
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn About EWS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IncubatorSection 