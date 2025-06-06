'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

const CoursePreview = () => {
  const courses = [
    {
      title: 'Bitcoin Basics: The Original Vision',
      description: 'Start with Satoshi\'s whitepaper and understand what Bitcoin was truly designed to be.',
      duration: '2 hours',
      students: '1,247',
      rating: 4.9,
      level: 'Beginner',
      price: '£1.00',
      image: 'bg-gradient-to-br from-gray-600 to-gray-800',
      link: '/courses/bitcoin-basics'
    },
    {
      title: 'Bitcoin SV vs BTC: Understanding the Split',
      description: 'Learn why Bitcoin SV represents the original Bitcoin and how it differs from BTC.',
      duration: '3 hours', 
      students: '892',
      rating: 4.8,
      level: 'Beginner',
      price: '£1.50',
      image: 'bg-gradient-to-br from-gray-500 to-gray-700',
      link: '/courses/bitcoin-sv-vs-btc'
    },
    {
      title: 'Building Your First Bitcoin App',
      description: 'Hands-on development: create a simple payment application using Bitcoin SV.',
      duration: '8 hours',
      students: '634',
      rating: 4.9,
      level: 'Intermediate',
      price: '£4.00',
      image: 'bg-gradient-to-br from-gray-700 to-gray-900',
      link: '/courses/first-bitcoin-app'
    }
  ]

  return (
    <section id="courses" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Master Bitcoin SV
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From fundamentals to advanced enterprise applications, 
            learn Bitcoin as it was meant to be - scalable, stable, and powerful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card-glass overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-48 ${course.image} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {course.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursePreview 