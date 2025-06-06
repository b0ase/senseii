'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Coins, Target, Calendar, TrendingUp, Users, BookOpen, 
  Shield, Zap, Globe, Code, ChevronRight, Bitcoin, 
  DollarSign, Clock, Rocket, Brain, BarChart3
} from 'lucide-react'
import Header from '../components/Header'

const TokenPage = () => {
  const [activePhase, setActivePhase] = useState(0)

  const roadmapPhases = [
    {
      phase: 'Foundation',
      timeline: 'Q1 2024',
      funding: '$250,000',
      percentage: '25%',
      goals: [
        'AI tutoring system development',
        'Core Bitcoin SV education modules',
        'Basic wallet authentication',
        'Platform MVP deployment'
      ],
      features: [
        'Satoshi AI agent foundation',
        'Interactive learning modules',
        'Micropayment infrastructure',
        'User onboarding system'
      ]
    },
    {
      phase: 'Expansion',
      timeline: 'Q2-Q3 2024',
      funding: '$500,000',
      percentage: '50%',
      goals: [
        'Advanced AI capabilities',
        'Economically weighted search prototype',
        'Content creation tools',
        'Developer API framework'
      ],
      features: [
        'Advanced natural language processing',
        'Search algorithm development',
        'NFT creation tools',
        'Smart contract templates'
      ]
    },
    {
      phase: 'Scale',
      timeline: 'Q4 2024',
      funding: '$250,000',
      percentage: '25%',
      goals: [
        'Enterprise integrations',
        'Global community features',
        'Advanced analytics',
        'Mobile applications'
      ],
      features: [
        'Enterprise dashboard',
        'Community governance',
        'Real-time analytics',
        'Cross-platform deployment'
      ]
    }
  ]

  const tokenDistribution = [
    { category: 'Development Fund', percentage: 60, amount: '600,000 SENSEII', color: 'bg-white' },
    { category: 'Team & Advisors', percentage: 20, amount: '200,000 SENSEII', color: 'bg-gray-300' },
    { category: 'Community Rewards', percentage: 15, amount: '150,000 SENSEII', color: 'bg-gray-500' },
    { category: 'Reserve Fund', percentage: 5, amount: '50,000 SENSEII', color: 'bg-gray-700' }
  ]

  const developmentCosts = [
    { category: 'AI Development', cost: '$400,000', description: 'Advanced natural language processing and machine learning systems' },
    { category: 'Platform Engineering', cost: '$300,000', description: 'Scalable infrastructure and user experience development' },
    { category: 'Bitcoin SV Integration', cost: '$150,000', description: 'Micropayments, smart contracts, and blockchain infrastructure' },
    { category: 'Content Creation', cost: '$100,000', description: 'Educational modules, documentation, and learning materials' },
    { category: 'Marketing & Community', cost: '$50,000', description: 'Community building, partnerships, and adoption initiatives' }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-black pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center mr-4">
                <Coins className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">$SENSEII</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Funding the Future of AI-First Bitcoin Education
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card-glass p-6">
                <Target className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-2xl font-bold text-white mb-2">$1M</div>
                <div className="text-gray-400">Funding Target</div>
              </div>
              <div className="card-glass p-6">
                <Users className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-2xl font-bold text-white mb-2">1M</div>
                <div className="text-gray-400">Total Supply</div>
              </div>
              <div className="card-glass p-6">
                <Rocket className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-2xl font-bold text-white mb-2">Q1 2024</div>
                <div className="text-gray-400">Launch Target</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.location.href = '/whitepaper'}
              >
                Read Whitepaper
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.location.href = '/'}
              >
                Explore Platform
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Raising Capital to Build the Future
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              $SENSEII tokens represent investment in the development and deployment of the world's first 
              AI-first Bitcoin SV education platform. Every token sold directly funds the development 
              of revolutionary educational technology that will transform how people learn about Bitcoin, 
              blockchain, and the future of digital economics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-8"
            >
              <Brain className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Revolutionary AI Education</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Building Satoshi AI - an advanced tutoring system that understands the Bitcoin whitepaper 
                better than any human teacher. This AI will guide millions of learners through complex 
                concepts with personalized, adaptive instruction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  Natural language understanding
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  Personalized learning paths
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  Real-time concept validation
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-8"
            >
              <Bitcoin className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Bitcoin SV Infrastructure</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Creating the foundational tools for economically weighted search, micropayment-based learning, 
                and blockchain-native content creation. This infrastructure will power the next generation 
                of internet applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  Micropayment integration
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  Smart contract templates
                </li>
                <li className="flex items-center text-gray-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  NFT creation tools
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Token sales are structured in phases to align funding with development milestones, 
              ensuring transparent progress and accountability to our investors.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 cursor-pointer ${activePhase === index ? 'scale-105' : ''}`}
                onClick={() => setActivePhase(index)}
              >
                <div className={`card-glass p-8 transition-all duration-300 ${
                  activePhase === index ? 'border border-white/20' : ''
                }`}>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-black">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{phase.phase} Phase</h3>
                        <p className="text-gray-400">{phase.timeline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{phase.funding}</div>
                      <div className="text-gray-400">{phase.percentage} of total supply</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Development Goals</h4>
                      <ul className="space-y-2">
                        {phase.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-center text-gray-300">
                            <Target className="w-4 h-4 mr-2 text-white" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <Zap className="w-4 h-4 mr-2 text-white" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Economics */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Token Economics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent allocation ensuring maximum value for development while rewarding 
              early supporters and building a sustainable community ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Token Distribution</h3>
              <div className="space-y-6">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded ${item.color} mr-3`}></div>
                      <div>
                        <div className="text-white font-medium">{item.category}</div>
                        <div className="text-sm text-gray-400">{item.amount}</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Development Costs</h3>
              <div className="space-y-6">
                {developmentCosts.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-white font-medium">{item.category}</div>
                      <div className="text-white font-bold">{item.cost}</div>
                    </div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Release Schedule */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-glass p-8 text-center">
              <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Token Release Schedule
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Tokens are released in incremental tranches tied to development milestones, 
                ensuring accountability and proper fund utilization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-6">
                  <Clock className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-lg font-bold text-white">Phase Release</div>
                  <div className="text-gray-400">Quarterly tranches</div>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <Shield className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-lg font-bold text-white">Milestone Based</div>
                  <div className="text-gray-400">Development accountability</div>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-lg font-bold text-white">Value Growth</div>
                  <div className="text-gray-400">Platform utility increase</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.location.href = 'mailto:invest@senseii.org'}
                >
                  Get Investment Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                  onClick={() => window.location.href = '/'}
                >
                  Back to Platform
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TokenPage 