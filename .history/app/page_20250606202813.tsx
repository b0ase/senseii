'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Brain, BookOpen, Rocket, Shield, Zap, Users, ChevronDown, MessageCircle, Bitcoin } from 'lucide-react'
import Header from './components/Header'
import SatoshiAgent from './components/SatoshiAgent'
import FeatureSection from './components/FeatureSection'
import CoursesSection from './components/CoursesSection'
import EducationSection from './components/EducationSection'
import Footer from './components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 text-center section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isLoaded ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-8"
              >
                <Bitcoin className="w-24 h-24 mx-auto text-bitcoin-orange animate-float" />
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text text-shadow">
                Senseii
              </h1>
              
              <p className="text-2xl md:text-3xl mb-4 text-gray-300">
                Learn Bitcoin from 
                <span className="gradient-text font-bold"> Satoshi </span>
                himself
              </p>
              
              <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
                Master the original Bitcoin vision through AI-powered education. 
                Learn blockchain development, business applications, and the true scaling solutions with personalized lessons.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => document.getElementById('satoshi-agent')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  Talk to Satoshi
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <BookOpen className="w-5 h-5 mr-2 inline" />
                  Explore Courses
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-bitcoin-orange" />
        </motion.div>
      </section>

      {/* Satoshi AI Agent Section */}
      <SatoshiAgent />

      {/* Features Section */}
      <FeatureSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Education Section */}
      <EducationSection />

      {/* Footer */}
      <Footer />
    </main>
  )
} 