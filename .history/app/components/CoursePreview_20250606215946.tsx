'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

const CoursePreview = () => {
  const courses = [
    {
      title: 'Bitcoin SV Fundamentals',
      description: 'Master the core concepts of the original Bitcoin protocol and understand why bigger blocks enable global scaling.',
      duration: '6 weeks',
      students: '2,847',
      rating: 4.9,
      level: 'Beginner',
      image: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    {
      title: 'Smart Contracts on Bitcoin',
      description: 'Learn to build complex applications using Bitcoin Script without additional layers or tokens.',
      duration: '8 weeks', 
      students: '1,923',
      rating: 4.8,
      level: 'Intermediate',
      image: 'bg-gradient-to-br from-gray-500 to-gray-700'
    },
    {
      title: 'Enterprise Bitcoin Applications',
      description: 'Build scalable enterprise solutions leveraging Bitcoin SV\'s massive throughput and data capabilities.',
      duration: '10 weeks',
      students: '1,456',
      rating: 4.9,
      level: 'Advanced',
      image: 'bg-gradient-to-br from-gray-700 to-gray-900'
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
                  <span className="bg-bitcoin-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
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