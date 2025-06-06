'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Bitcoin, Cpu, BookOpen, Users, Rocket, FileText, Coins } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: 'Learn', href: '/#courses', icon: BookOpen },
    { name: 'Satoshi AI', href: '/#satoshi-agent', icon: Cpu },
    { name: 'Whitepaper', href: '/whitepaper', icon: FileText },
    { name: '$SENSEII', href: '/token', icon: Coins },
    { name: 'Incubator', href: '/incubator', icon: Rocket },
    { name: 'Community', href: '/community', icon: Users },
  ]

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're navigating to a section on the home page
      if (pathname === '/') {
        // We're on home page, just scroll to section
        const sectionId = href.substring(2) // Remove '/#'
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // We're on a different page, navigate to home then scroll
        router.push(href)
      }
    } else {
      // Regular page navigation
      router.push(href)
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to home page
      router.push('/')
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Bitcoin className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold gradient-text">Senseii</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Learning
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2 text-left"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
              <button className="btn-primary text-center mt-4">
                Start Learning
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header 