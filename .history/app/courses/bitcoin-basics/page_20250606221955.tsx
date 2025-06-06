'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Play, Clock, Users, Star, CheckCircle, 
  Bitcoin, FileText, Lightbulb, Target, ChevronRight,
  Download, Share2, Heart
} from 'lucide-react'
import Header from '../../components/Header'

const BitcoinBasicsPage = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [activeLesson, setActiveLesson] = useState(0)

  const courseInfo = {
    title: "Bitcoin Basics: The Original Vision",
    instructor: "Satoshi AI",
    duration: "2 hours",
    students: "1,247",
    rating: 4.9,
    price: "£1.00",
    level: "Beginner",
    description: "Start with Satoshi's whitepaper and understand what Bitcoin was truly designed to be."
  }

  const lessons = [
    {
      id: 1,
      title: "Reading the Original Whitepaper",
      duration: "30 min",
      type: "Theory",
      content: {
        overview: "Dive deep into Satoshi Nakamoto's original Bitcoin whitepaper to understand the foundational concepts that started the cryptocurrency revolution.",
        keyPoints: [
          "Understanding the double-spending problem",
          "How digital signatures work in Bitcoin",
          "The role of timestamp servers",
          "Proof-of-work as a consensus mechanism",
          "The longest chain rule",
          "Network incentive structure"
        ],
        practicalExercise: "Analyze specific sections of the whitepaper and identify key technical innovations",
        resources: [
          "Original Bitcoin Whitepaper PDF",
          "Annotated version with explanations",
          "Historical context documents"
        ]
      }
    },
    {
      id: 2,
      title: "Why Bitcoin Needs to Scale",
      duration: "25 min",
      type: "Theory",
      content: {
        overview: "Explore why Satoshi designed Bitcoin to scale and handle increasing transaction volumes without compromising decentralization.",
        keyPoints: [
          "Satoshi's vision for scaling Bitcoin",
          "The importance of low transaction fees",
          "Why bigger blocks were always the plan",
          "Economic incentives for miners",
          "Network effects and adoption",
          "Enterprise use cases requiring scale"
        ],
        practicalExercise: "Calculate transaction throughput under different block size scenarios",
        resources: [
          "Satoshi's original posts about scaling",
          "Economic analysis of transaction fees",
          "Scaling timeline projections"
        ]
      }
    },
    {
      id: 3,
      title: "Understanding Proof of Work",
      duration: "35 min",
      type: "Technical",
      content: {
        overview: "Master the cryptographic and economic principles behind Bitcoin's proof-of-work consensus mechanism.",
        keyPoints: [
          "SHA-256 hashing and mining process",
          "Difficulty adjustment algorithm",
          "Economic security model",
          "Energy and mining economics",
          "Preventing double-spending attacks",
          "Network security assumptions"
        ],
        practicalExercise: "Simulate proof-of-work mining and difficulty adjustments",
        resources: [
          "Mining simulation tools",
          "Hash rate analysis charts",
          "Economic security calculations"
        ]
      }
    },
    {
      id: 4,
      title: "The Peer-to-Peer Vision",
      duration: "30 min",
      type: "Philosophy",
      content: {
        overview: "Understand Bitcoin's original peer-to-peer electronic cash vision and how it enables direct financial interactions.",
        keyPoints: [
          "Elimination of trusted third parties",
          "Direct peer-to-peer transactions",
          "Self-sovereign money concepts",
          "Programmable money possibilities",
          "Global financial inclusion",
          "Micropayment enablement"
        ],
        practicalExercise: "Design a peer-to-peer payment scenario without intermediaries",
        resources: [
          "P2P network architecture diagrams",
          "Case studies of direct payments",
          "Financial inclusion research"
        ]
      }
    }
  ]

  const toggleLessonComplete = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId))
    } else {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const progress = (completedLessons.length / lessons.length) * 100

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Course Header */}
      <section className="section-padding bg-black pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Course Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                    {courseInfo.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white font-medium">{courseInfo.rating}</span>
                    <span className="text-gray-400 ml-2">({courseInfo.students} students)</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  {courseInfo.title}
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {courseInfo.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-white" />
                    {courseInfo.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-white" />
                    {courseInfo.students} students
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BookOpen className="w-5 h-5 mr-2 text-white" />
                    {lessons.length} lessons
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Course
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg px-8 py-4 flex items-center justify-center"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Preview Lessons
                  </motion.button>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="lg:col-span-1">
                <div className="card-glass p-6 sticky top-32">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{courseInfo.price}</div>
                    <div className="text-gray-400">One-time payment</div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary mb-4"
                  >
                    Enroll Now
                  </motion.button>
                  
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Lifetime access
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      AI instructor support
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Certificate of completion
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Mobile & desktop access
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-sm text-gray-400 mb-2">Course Progress</div>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-400">{completedLessons.length} of {lessons.length} lessons completed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-8">Course Contents</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lesson List */}
              <div className="lg:col-span-1">
                <div className="card-glass p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Lessons</h3>
                  <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                      <motion.div
                        key={lesson.id}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeLesson === index 
                            ? 'bg-white text-black' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        onClick={() => setActiveLesson(index)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium ${
                            activeLesson === index ? 'text-black' : 'text-gray-400'
                          }`}>
                            Lesson {lesson.id}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLessonComplete(lesson.id)
                            }}
                            className={`w-5 h-5 ${
                              completedLessons.includes(lesson.id)
                                ? 'text-green-500'
                                : activeLesson === index ? 'text-gray-600' : 'text-gray-400'
                            }`}
                          >
                            <CheckCircle className="w-full h-full" />
                          </button>
                        </div>
                        <h4 className={`font-semibold mb-1 ${
                          activeLesson === index ? 'text-black' : 'text-white'
                        }`}>
                          {lesson.title}
                        </h4>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${
                            activeLesson === index ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {lesson.duration}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            activeLesson === index 
                              ? 'bg-gray-200 text-gray-800' 
                              : 'bg-white/10 text-gray-400'
                          }`}>
                            {lesson.type}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="lg:col-span-2">
                <motion.div
                  key={activeLesson}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="card-glass p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {lessons[activeLesson].title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Heart className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {lessons[activeLesson].content.overview}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Key Learning Points
                    </h4>
                    <ul className="space-y-3">
                      {lessons[activeLesson].content.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 text-white flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Bitcoin className="w-5 h-5 mr-2" />
                      Practical Exercise
                    </h4>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-gray-300">
                        {lessons[activeLesson].content.practicalExercise}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Resources
                    </h4>
                    <ul className="space-y-2">
                      {lessons[activeLesson].content.resources.map((resource, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <FileText className="w-4 h-4 mr-2 text-white" />
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary"
                      disabled={activeLesson === 0}
                      onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                    >
                      Previous Lesson
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                      onClick={() => {
                        toggleLessonComplete(lessons[activeLesson].id)
                        if (activeLesson < lessons.length - 1) {
                          setActiveLesson(activeLesson + 1)
                        }
                      }}
                    >
                      {completedLessons.includes(lessons[activeLesson].id) 
                        ? 'Mark Incomplete' 
                        : 'Complete Lesson'
                      }
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary"
                      disabled={activeLesson === lessons.length - 1}
                      onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))}
                    >
                      Next Lesson
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-glass p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center mx-auto mb-6">
                <Bitcoin className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Your Instructor: Satoshi AI</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Satoshi AI is an advanced artificial intelligence trained specifically on Bitcoin's original vision. 
                Drawing from the complete works of Satoshi Nakamoto, early Bitcoin development discussions, 
                and years of Bitcoin SV innovation, Satoshi AI provides the most accurate and comprehensive 
                Bitcoin education available.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15,000+</div>
                  <div className="text-gray-400">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-400">Courses Created</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BitcoinBasicsPage 