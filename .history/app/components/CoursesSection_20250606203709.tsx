'use client'

import { motion } from 'framer-motion'
import { BookOpen, Play, Users, Star, Clock, CheckCircle } from 'lucide-react'

const CoursesSection = () => {
  const courses = [
    {
      title: 'Bitcoin Basics: The Original Vision',
      description: 'Start with Satoshi\'s whitepaper and understand what Bitcoin was truly designed to be.',
      instructor: 'Satoshi AI',
      duration: '2 hours',
      students: '1,247',
      rating: 4.9,
      price: '£1.00',
      level: 'Beginner',
      lessons: [
        'Reading the Original Whitepaper',
        'Why Bitcoin Needs to Scale',
        'Understanding Proof of Work',
        'The Peer-to-Peer Vision'
      ]
    },
    {
      title: 'Bitcoin SV vs BTC: Understanding the Split',
      description: 'Learn why Bitcoin SV represents the original Bitcoin and how it differs from BTC.',
      instructor: 'Satoshi AI',
      duration: '3 hours',
      students: '892',
      rating: 4.8,
      price: '£1.50',
      level: 'Beginner',
      lessons: [
        'The Blocksize Debate',
        'Protocol Stability vs Changes',
        'Scaling Solutions Comparison',
        'Enterprise Adoption Paths'
      ]
    },
    {
      title: 'Building Your First Bitcoin App',
      description: 'Hands-on development: create a simple payment application using Bitcoin SV.',
      instructor: 'Satoshi AI + Code Assistant',
      duration: '8 hours',
      students: '634',
      rating: 4.9,
      price: '£4.00',
      level: 'Intermediate',
      lessons: [
        'Setting Up Development Environment',
        'Understanding Bitcoin Transactions',
        'Building Payment Flows',
        'Testing and Deployment'
      ]
    }
  ]

  return (
    <section id="courses" className="section-padding bg-slate-900/50">
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
            Popular Courses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn Bitcoin from the ground up with structured courses designed by AI that understands 
            the original vision. Pay only for the time you spend learning.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-glass overflow-hidden hover:scale-105 transition-all duration-300"
            >
              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-bitcoin-orange font-bold text-xl">{course.price}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {course.students}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" />
                    {course.rating}
                  </span>
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  <span className="text-bitcoin-orange font-semibold">Instructor:</span> {course.instructor}
                </div>
              </div>

              {/* Lessons List */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-white mb-3">Course Contents:</h4>
                <ul className="space-y-2 mb-6">
                  {course.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Course
                </motion.button>
                
                <button className="w-full text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Preview Lessons
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Master Bitcoin?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students learning the original Bitcoin vision. 
            Connect your wallet and start with any course that interests you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Browse All Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Try Free Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection 