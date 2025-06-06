'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, MessageCircle, Calendar, Award, TrendingUp, BookOpen,
  Globe, Heart, Star, Zap, Target, Code, Bitcoin, Brain,
  Trophy, Medal, ChevronRight, Clock, MapPin, User
} from 'lucide-react'
import Header from '../components/Header'

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const communityStats = [
    { label: 'Active Members', value: '12,847', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries', value: '84', icon: <Globe className="w-6 h-6" /> },
    { label: 'Weekly Events', value: '25+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Courses Completed', value: '45,923', icon: <BookOpen className="w-6 h-6" /> }
  ]

  const upcomingEvents = [
    {
      title: 'Bitcoin SV Developer Meetup',
      date: 'December 15, 2024',
      time: '7:00 PM UTC',
      type: 'Online',
      attendees: 156,
      description: 'Join fellow developers to discuss the latest BSV infrastructure developments and share project updates.',
      tags: ['Development', 'BSV', 'Networking']
    },
    {
      title: 'AI in Education Workshop',
      date: 'December 18, 2024',
      time: '2:00 PM UTC',
      type: 'Hybrid',
      attendees: 89,
      description: 'Learn how AI is transforming educational content creation and personalized learning experiences.',
      tags: ['AI', 'Education', 'Workshop']
    },
    {
      title: 'Economically Weighted Search Demo',
      date: 'December 22, 2024',
      time: '6:00 PM UTC',
      type: 'Online',
      attendees: 203,
      description: 'Live demonstration of our economically weighted search prototype with Q&A session.',
      tags: ['Search', 'Economics', 'Demo']
    },
    {
      title: 'Satoshi AI Beta Testing',
      date: 'January 5, 2025',
      time: '4:00 PM UTC',
      type: 'Online',
      attendees: 342,
      description: 'Exclusive beta testing session for our AI tutoring system with community feedback collection.',
      tags: ['AI', 'Beta', 'Testing']
    }
  ]

  const communityLeaders = [
    {
      name: 'Alexandra Thompson',
      role: 'Community Lead',
      contributions: 'Organized 50+ events, mentored 200+ members',
      achievements: ['Community Builder', 'Mentor of the Year', 'Event Organizer'],
      joinDate: 'January 2023'
    },
    {
      name: 'David Kim',
      role: 'Technical Moderator',
      contributions: 'Answered 1,000+ questions, created 25+ tutorials',
      achievements: ['Technical Expert', 'Content Creator', 'Helper of the Month'],
      joinDate: 'March 2023'
    },
    {
      name: 'Maria Santos',
      role: 'Education Coordinator',
      contributions: 'Curated learning paths, reviewed 100+ courses',
      achievements: ['Education Pioneer', 'Course Creator', 'Quality Reviewer'],
      joinDate: 'May 2023'
    },
    {
      name: 'James Chen',
      role: 'BSV Specialist',
      contributions: 'Led BSV workshops, created developer resources',
      achievements: ['BSV Expert', 'Workshop Leader', 'Resource Creator'],
      joinDate: 'February 2023'
    }
  ]

  const achievements = [
    {
      title: 'First Steps',
      description: 'Complete your first course',
      progress: 100,
      unlocked: true,
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Bitcoin Scholar',
      description: 'Master 10 Bitcoin concepts',
      progress: 75,
      unlocked: false,
      icon: <Bitcoin className="w-6 h-6" />
    },
    {
      title: 'AI Pioneer',
      description: 'Complete AI tutoring beta program',
      progress: 45,
      unlocked: false,
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Community Helper',
      description: 'Help 50 community members',
      progress: 60,
      unlocked: false,
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Search Expert',
      description: 'Master economically weighted search',
      progress: 20,
      unlocked: false,
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Code Master',
      description: 'Build 5 Bitcoin applications',
      progress: 80,
      unlocked: false,
      icon: <Code className="w-6 h-6" />
    }
  ]

  const discussions = [
    {
      title: 'How to implement micropayments in React apps?',
      author: 'Sarah_Dev',
      replies: 23,
      lastActive: '2 hours ago',
      tags: ['Development', 'React', 'Micropayments'],
      solved: true
    },
    {
      title: 'Understanding Bitcoin SV scaling solutions',
      author: 'BlockchainNewbie',
      replies: 31,
      lastActive: '4 hours ago',
      tags: ['BSV', 'Scaling', 'Discussion'],
      solved: false
    },
    {
      title: 'AI tutoring system feedback and suggestions',
      author: 'EduTechFan',
      replies: 18,
      lastActive: '6 hours ago',
      tags: ['AI', 'Feedback', 'Education'],
      solved: false
    },
    {
      title: 'Best practices for economic search algorithms',
      author: 'SearchExpert',
      replies: 45,
      lastActive: '8 hours ago',
      tags: ['Search', 'Algorithms', 'Economics'],
      solved: true
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
                <Users className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">Community</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join a Global Network of Bitcoin & AI Learners
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card-glass p-6"
                >
                  <div className="text-white mb-4 mx-auto flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => setActiveTab('events')}
              >
                Join Events
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => setActiveTab('discussions')}
              >
                Start Learning
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
              { id: 'overview', label: 'Overview', icon: <Globe className="w-4 h-4" /> },
              { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
              { id: 'discussions', label: 'Discussions', icon: <MessageCircle className="w-4 h-4" /> },
              { id: 'achievements', label: 'Achievements', icon: <Award className="w-4 h-4" /> }
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

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Community Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {communityLeaders.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-8"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                        <p className="text-gray-400 mb-2">{leader.role}</p>
                        <p className="text-gray-500 text-sm">Member since {leader.joinDate}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{leader.contributions}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <span
                            key={achievementIndex}
                            className="px-3 py-1 bg-gradient-to-r from-white to-gray-300 text-black rounded-full text-sm font-medium"
                          >
                            {achievement}
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

      {/* Events Tab */}
      {activeTab === 'events' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Upcoming Events
              </h2>

              <div className="space-y-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-8"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <Calendar className="w-6 h-6 text-white" />
                          <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.date} at {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{event.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary px-6 py-3"
                        >
                          Join Event
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary px-6 py-3"
                        >
                          Add to Calendar
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Discussions Tab */}
      {activeTab === 'discussions' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Community Discussions
              </h2>

              <div className="space-y-6">
                {discussions.map((discussion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-6 hover:bg-gray-800/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageCircle className="w-5 h-5 text-white" />
                          <h3 className="text-xl font-semibold text-white">{discussion.title}</h3>
                          {discussion.solved && (
                            <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">
                              Solved
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                          <span>by {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.replies} replies</span>
                          <span>•</span>
                          <span>Last active {discussion.lastActive}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Start New Discussion
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
                Your Learning Journey
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`card-glass p-6 ${
                      achievement.unlocked ? 'border border-white/20' : 'opacity-75'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-br from-white to-gray-300' 
                          : 'bg-gray-700'
                      }`}>
                        <div className={achievement.unlocked ? 'text-black' : 'text-gray-400'}>
                          {achievement.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                        {achievement.unlocked && (
                          <span className="text-green-400 text-sm">Unlocked!</span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{achievement.description}</p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            achievement.unlocked 
                              ? 'bg-gradient-to-r from-white to-gray-300' 
                              : 'bg-gray-500'
                          }`}
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with thousands of learners, participate in events, and unlock achievements 
              as you master Bitcoin and AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Join Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.location.href = '/#courses'}
              >
                Start Learning
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CommunityPage 