'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, Play, Clock, Users, Star, ArrowRight, Target, 
  Code, Building, Zap, CheckCircle, Award, TrendingUp
} from 'lucide-react'
import Header from '../components/Header'

const LearningPage = () => {
  const learningPaths = [
    {
      title: 'Beginner Track',
      description: 'Start your Bitcoin SV journey from the fundamentals',
      courses: [
        {
          title: 'Bitcoin Basics: The Original Vision',
          duration: '2 hours',
          students: '1,247',
          rating: 4.9,
          price: '£1.00',
          link: '/courses/bitcoin-basics'
        },
        {
          title: 'Bitcoin SV vs BTC: Understanding the Split',
          duration: '3 hours',
          students: '892',
          rating: 4.8,
          price: '£1.50',
          link: '/courses/bitcoin-sv-vs-btc'
        },
        {
          title: 'Bitcoin SV Fundamentals',
          duration: '4 weeks • 12 lessons',
          students: '2,847',
          rating: 4.9,
          price: '£0.50/hour',
          link: '/courses/bitcoin-sv-fundamentals'
        }
      ]
    },
    {
      title: 'Developer Track',
      description: 'Build applications and master Bitcoin SV development',
      courses: [
        {
          title: 'Building Your First Bitcoin App',
          duration: '8 hours',
          students: '634',
          rating: 4.9,
          price: '£4.00',
          link: '/courses/first-bitcoin-app'
        },
        {
          title: 'Blockchain Development',
          duration: '8 weeks • 24 lessons',
          students: '1,923',
          rating: 4.8,
          price: '£0.75/hour',
          link: '/courses/blockchain-development'
        }
      ]
    },
    {
      title: 'Business Track',
      description: 'Enterprise applications and real-world use cases',
      courses: [
        {
          title: 'Business Applications',
          duration: '6 weeks • 18 lessons',
          students: '1,456',
          rating: 4.9,
          price: '£1.00/hour',
          link: '/courses/business-applications'
        }
      ]
    }
  ]

  const features = [
    {
      icon: Target,
      title: 'Structured Learning Paths',
      description: 'Follow curated tracks designed for your skill level and goals'
    },
    {
      icon: Zap,
      title: 'AI-Powered Tutoring',
      description: 'Learn with Satoshi AI - trained on the complete Bitcoin knowledge base'
    },
    {
      icon: Award,
      title: 'Earn Certificates',
      description: 'Get blockchain-verified certificates upon course completion'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed analytics and achievements'
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Master Bitcoin SV
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From fundamentals to advanced enterprise applications, learn Bitcoin as it was meant to be - 
              scalable, stable, and powerful. Choose your learning path and start building the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => document.getElementById('learning-paths')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.location.href = '/#courses'}
              >
                <Play className="w-5 h-5 mr-2" />
                Browse All Courses
              </motion.button>
            </div>
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
                <feature.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section id="learning-paths" className="section-padding bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning tracks designed to take you from beginner to expert. 
              Each path includes hands-on projects and real-world applications.
            </p>
          </motion.div>

          <div className="space-y-16">
            {learningPaths.map((path, pathIndex) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: pathIndex * 0.2 }}
                viewport={{ once: true }}
                className="card-glass p-8"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{path.title}</h3>
                  <p className="text-gray-300 text-lg">{path.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {path.courses.map((course, courseIndex) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: courseIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black/50 rounded-lg p-6 hover:scale-105 transition-all duration-300 border border-gray-800"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">{course.title}</h4>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" />
                          {course.rating}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-white">{course.price}</span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full btn-primary flex items-center justify-center"
                        onClick={() => window.location.href = course.link}
                      >
                        <span>Start Course</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start Your Bitcoin SV Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of learners mastering the original Bitcoin vision. 
              Connect your wallet and start with any course that interests you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.location.href = '/courses/bitcoin-basics'}
              >
                Start with Basics
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.location.href = '/community'}
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LearningPage 