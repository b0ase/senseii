'use client'

import { motion } from 'framer-motion'
import { Bitcoin, Mail, Twitter, Github, Linkedin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const platformFeatures = [
    { name: 'Satoshi AI Teacher', href: '#satoshi-agent' },
    { name: 'Wallet Login', href: '#wallet' },
    { name: 'Micropayment Lessons', href: '#courses' },
    { name: 'Bitcoin SV Courses', href: '#education' },
    { name: 'Community Learning', href: '#community' },
    { name: 'Developer Tools', href: '#tools' }
  ]

  const learningTools = [
    { name: 'Bitcoin Fundamentals', href: '#basics' },
    { name: 'Development Courses', href: '#development' },
    { name: 'Business Applications', href: '#business' },
    { name: 'Study Groups', href: '#groups' },
    { name: 'Progress Tracking', href: '#progress' },
    { name: 'Certification', href: '#certificates' }
  ]

  const learningPaths = [
    { name: 'Bitcoin SV Fundamentals', href: '#fundamentals' },
    { name: 'Smart Contract Development', href: '#smart-contracts' },
    { name: 'IP Tokenization', href: '#ip-tokenization' },
    { name: 'Business Incubation', href: '#incubation' },
    { name: 'MetaNet Architecture', href: '#metanet' },
    { name: 'Teacher Certification', href: '#certification' }
  ]

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Bitcoin className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold gradient-text">Senseii</span>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The AI-first platform revolutionizing intellectual property, education, and business formation on Bitcoin SV. 
              Building the future of economically weighted search and the MetaNet.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:rboase2020@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Platform Features</h3>
            <ul className="space-y-3">
              {platformFeatures.map((feature) => (
                <li key={feature.name}>
                  <a
                    href={feature.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{feature.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Tools */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Learning Tools</h3>
            <ul className="space-y-3">
              {learningTools.map((tool) => (
                <li key={tool.name}>
                  <a
                    href={tool.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{tool.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Paths */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Learning Paths</h3>
            <ul className="space-y-3">
              {learningPaths.map((path) => (
                <li key={path.name}>
                  <a
                    href={path.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{path.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Our Vision: True Bitcoin Education
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Senseii provides authentic Bitcoin education focused on the original vision of a peer-to-peer electronic cash system. 
            Learn from Satoshi AI, pay with micropayments, and master Bitcoin SV development in a supportive community environment.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Senseii LTD. Building the future on Bitcoin SV.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/whitepaper" className="hover:text-white transition-colors duration-300">
                Whitepaper
              </a>
                              <div className="flex items-center space-x-1">
                <span>Powered by</span>
                <Bitcoin className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">Bitcoin SV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 