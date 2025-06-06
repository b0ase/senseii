'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Rocket, Lightbulb, Users, TrendingUp, Target, Brain,
  Code, Coins, Clock, CheckCircle, Star, ArrowRight,
  Building, Globe, Zap, Shield, BookOpen, Award
} from 'lucide-react'
import Header from '../components/Header'

const IncubatorPage = () => {
  const [activeTab, setActiveTab] = useState('program')

  const incubatorPrograms = [
    {
      name: 'Bitcoin SV Builder Track',
      duration: '12 weeks',
      funding: 'Up to $100K',
      equity: '6-8%',
      description: 'For startups building on Bitcoin SV infrastructure',
      focus: ['Micropayments', 'Smart Contracts', 'Data Storage', 'Digital Identity'],
      icon: <Coins className="w-6 h-6" />
    },
    {
      name: 'AI Education Track',
      duration: '16 weeks',
      funding: 'Up to $150K',
      equity: '8-12%',
      description: 'For AI-powered educational technology startups',
      focus: ['Machine Learning', 'Natural Language Processing', 'Adaptive Learning', 'Content Generation'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Economic Search Track',
      duration: '20 weeks',
      funding: 'Up to $200K',
      equity: '10-15%',
      description: 'For startups reimagining search through economic signals',
      focus: ['Economic Algorithms', 'Search Infrastructure', 'Data Markets', 'Signal Processing'],
      icon: <Target className="w-6 h-6" />
    }
  ]

  const startupPortfolio = [
    {
      name: 'MicroLearn',
      category: 'Education Technology',
      stage: 'Series A',
      description: 'Micropayment-based skill verification platform',
      funding: '$2.5M raised',
      status: 'active'
    },
    {
      name: 'BSVault',
      category: 'Infrastructure',
      stage: 'Seed',
      description: 'Enterprise Bitcoin SV custody solutions',
      funding: '$800K raised',
      status: 'active'
    },
    {
      name: 'EcoSearch',
      category: 'Search Technology',
      stage: 'Pre-Seed',
      description: 'Economic signal-based search engine',
      funding: '$300K raised',
      status: 'active'
    },
    {
      name: 'ChainTutor',
      category: 'AI Education',
      stage: 'Acquired',
      description: 'AI-powered blockchain education platform',
      funding: 'Acquired for $15M',
      status: 'exited'
    }
  ]

  const applicationProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Submit your pitch deck, demo, and team information through our portal',
      duration: '1 week'
    },
    {
      step: 2,
      title: 'Initial Review',
      description: 'Our investment committee reviews applications and selects promising candidates',
      duration: '2 weeks'
    },
    {
      step: 3,
      title: 'Technical Interview',
      description: 'Deep dive into your technology, market fit, and scaling potential',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Final Presentation',
      description: 'Present to our full partnership team and industry advisors',
      duration: '1 week'
    },
    {
      step: 5,
      title: 'Due Diligence',
      description: 'Legal, technical, and market validation process',
      duration: '2 weeks'
    },
    {
      step: 6,
      title: 'Program Start',
      description: 'Welcome to the Senseii Incubator ecosystem!',
      duration: 'Day 1'
    }
  ]

  const mentorNetwork = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      company: 'Former Google DeepMind',
      expertise: 'Machine Learning, Natural Language Processing',
      image: '/mentors/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Bitcoin SV Developer',
      company: 'Core BSV Infrastructure',
      expertise: 'Blockchain Architecture, Smart Contracts',
      image: '/mentors/marcus-rodriguez.jpg'
    },
    {
      name: 'Lisa Park',
      role: 'EdTech Entrepreneur',
      company: 'Founded 3 successful EdTech startups',
      expertise: 'Educational Technology, Product Management',
      image: '/mentors/lisa-park.jpg'
    },
    {
      name: 'James Wilson',
      role: 'Search Technology Expert',
      company: 'Former Bing Principal Engineer',
      expertise: 'Search Algorithms, Information Retrieval',
      image: '/mentors/james-wilson.jpg'
    }
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
                <Rocket className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">Senseii Incubator</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerating the Next Generation of Bitcoin & AI Startups
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card-glass p-6">
                <Building className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-2xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Startups Incubated</div>
              </div>
              <div className="card-glass p-6">
                <TrendingUp className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-2xl font-bold text-white mb-2">$25M+</div>
                <div className="text-gray-400">Total Funding Raised</div>
              </div>
              <div className="card-glass p-6">
                <Award className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-2xl font-bold text-white mb-2">85%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => setActiveTab('apply')}
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => setActiveTab('portfolio')}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'program', label: 'Program Details', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'portfolio', label: 'Portfolio', icon: <Star className="w-4 h-4" /> },
              { id: 'mentors', label: 'Mentors', icon: <Users className="w-4 h-4" /> },
              { id: 'apply', label: 'Apply', icon: <ArrowRight className="w-4 h-4" /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Tab */}
      {activeTab === 'program' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Incubator Programs
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {incubatorPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card-glass p-8 h-full"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                        <div className="text-black">{program.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white">{program.name}</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Funding:</span>
                        <span className="text-white font-semibold">{program.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Equity:</span>
                        <span className="text-white font-semibold">{program.equity}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{program.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.focus.map((focus, focusIndex) => (
                          <span
                            key={focusIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Portfolio Tab */}
      {activeTab === 'portfolio' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Portfolio Companies
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {startupPortfolio.map((startup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-8"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{startup.name}</h3>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                            {startup.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            startup.status === 'exited' 
                              ? 'bg-green-900 text-green-300' 
                              : 'bg-blue-900 text-blue-300'
                          }`}>
                            {startup.stage}
                          </span>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        startup.status === 'exited' ? 'bg-green-500' : 'bg-blue-500'
                      }`} />
                    </div>

                    <p className="text-gray-300 mb-4">{startup.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{startup.funding}</span>
                      <span className={`text-sm ${
                        startup.status === 'exited' ? 'text-green-400' : 'text-blue-400'
                      }`}>
                        {startup.status === 'exited' ? 'Successfully Exited' : 'Active Portfolio'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Mentors Tab */}
      {activeTab === 'mentors' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Mentor Network
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {mentorNetwork.map((mentor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-6 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-300 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                    <p className="text-gray-400 mb-1">{mentor.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{mentor.company}</p>
                    <p className="text-gray-300 text-sm">{mentor.expertise}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Apply Tab */}
      {activeTab === 'apply' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Application Process
              </h2>

              <div className="space-y-8 mb-16">
                {applicationProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-6 flex items-start gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <span className="text-gray-400 text-sm">{step.duration}</span>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-xl px-12 py-4 mb-6"
                >
                  Start Your Application
                </motion.button>
                <p className="text-gray-400">
                  Applications are reviewed on a rolling basis. Apply early for the best consideration.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glass p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the Senseii Incubator and get access to funding, mentorship, and the resources 
              you need to build revolutionary Bitcoin and AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Apply to Incubator
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IncubatorPage 