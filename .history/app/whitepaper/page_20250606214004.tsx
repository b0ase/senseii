'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Search, ArrowUp, Bitcoin, Brain, Users, Shield, Zap, Globe, Code, DollarSign } from 'lucide-react'

const WhitepaperPage = () => {
  const [activeSection, setActiveSection] = useState('')

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      const scrollY = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('data-section') || ''

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    {
      id: 'overview',
      title: 'Platform Overview',
      icon: Globe,
      concepts: [
        {
          id: 'vision',
          title: 'The Senseii Vision',
          content: 'Create an AI-first education platform that teaches the original Bitcoin vision while building tools for the future internet economy.'
        },
        {
          id: 'mission',
          title: 'Core Mission',
          content: 'Replace Google\'s monopolistic search infrastructure with economically weighted, community-driven alternatives.'
        },
        {
          id: 'foundation',
          title: 'Bitcoin SV Foundation',
          content: 'Built exclusively on Bitcoin SV - the original Bitcoin protocol that scales without limits and maintains protocol stability.'
        },
        {
          id: 'ai-first',
          title: 'AI-First Approach',
          content: 'Every interaction is powered by AI that understands Bitcoin\'s true potential, not corrupted by BTC limitations.'
        }
      ]
    },
    {
      id: 'education',
      title: 'Educational Framework',
      icon: BookOpen,
      concepts: [
        {
          id: 'satoshi-ai',
          title: 'Satoshi AI Teacher',
          content: 'An AI trained on the complete Bitcoin knowledge base, original whitepaper, and scaling solutions.'
        },
        {
          id: 'curriculum',
          title: 'Structured Learning',
          content: 'Progressive curriculum from Bitcoin basics to advanced development, all focused on the original vision.'
        },
        {
          id: 'micropayments',
          title: 'Micropayment Education',
          content: 'Pay-as-you-learn model: £0.50-£1.00 per hour makes quality education accessible to everyone globally.'
        },
        {
          id: 'wallet-auth',
          title: 'Wallet Authentication',
          content: 'Login with your Bitcoin SV wallet. Progress and payments tracked immutably on the blockchain.'
        },
        {
          id: 'practical-learning',
          title: 'Hands-On Development',
          content: 'Build real applications while learning. Every project teaches practical Bitcoin SV implementation.'
        },
        {
          id: 'community-driven',
          title: 'Community Learning',
          content: 'Study groups, peer reviews, and collaborative projects within the Bitcoin SV ecosystem.'
        }
      ]
    },
    {
      id: 'ip-tokenization',
      title: 'Intellectual Property Revolution',
      icon: Shield,
      concepts: [
        {
          id: 'everything-tokenized',
          title: 'Universal IP Tokenization',
          content: 'Every digital asset becomes a tokenized asset: photos, emails, texts, code, videos, audio files.'
        },
        {
          id: 'automatic-capture',
          title: 'Automatic IP Capture',
          content: 'System automatically captures and timestamps all user-created content across any application or device.'
        },
        {
          id: 'ownership-proof',
          title: 'Immutable Ownership',
          content: 'Blockchain timestamps provide legal proof of creation and ownership for any intellectual property.'
        },
        {
          id: 'revenue-sharing',
          title: '99/1 Revenue Model',
          content: 'Creators keep 99% of all revenue generated from their tokenized IP. Platform takes 1% for infrastructure.'
        },
        {
          id: 'cross-platform',
          title: 'Cross-Platform Integration',
          content: 'IP capture works across all applications and devices, creating comprehensive intellectual property portfolios.'
        },
        {
          id: 'legal-compliance',
          title: 'Legal Framework',
          content: 'Full compliance with international IP law, tax requirements, and regulatory frameworks.'
        }
      ]
    },
    {
      id: 'search-revolution',
      title: 'Search Infrastructure Revolution',
      icon: Search,
      concepts: [
        {
          id: 'ews-concept',
          title: 'Economically Weighted Search',
          content: 'Replace Google\'s PageRank with economic value-based ranking that rewards genuine content creation.'
        },
        {
          id: 'anti-manipulation',
          title: 'Anti-Manipulation Design',
          content: 'Economic weight prevents bot manipulation and ensures authentic content rises to the top.'
        },
        {
          id: 'peer-validation',
          title: 'Peer Validation System',
          content: 'Content quality determined by peer reviews and economic interactions, not algorithmic black boxes.'
        },
        {
          id: 'distributed-search',
          title: 'Distributed Search Engines',
          content: 'Create hundreds of competing search engines, each with different specializations and economic models.'
        },
        {
          id: 'creator-economy',
          title: 'Creator-Centric Results',
          content: 'Search results prioritize content creators over aggregators, ensuring value flows to original sources.'
        },
        {
          id: 'transparency',
          title: 'Complete Transparency',
          content: 'All ranking factors and economic weights are public and auditable on the blockchain.'
        }
      ]
    },
    {
      id: 'metanet',
      title: 'MetaNet Infrastructure',
      icon: Globe,
      concepts: [
        {
          id: 'metagraph-social',
          title: 'MetaGraph Social Networks',
          content: 'Twitter/Facebook alternatives where every interaction includes micropayments and economic value.'
        },
        {
          id: 'value-creation',
          title: 'Universal Value Creation',
          content: 'Every comment, like, share, and interaction creates measurable economic value for participants.'
        },
        {
          id: 'ip-hodling',
          title: 'Intellectual Capital HODLing',
          content: 'Users hold their intellectual property until it reaches desired value, like HODLing Bitcoin.'
        },
        {
          id: 'streaming-payments',
          title: 'Real-Time Revenue Streams',
          content: 'Content creators receive instant micropayments as their work gains attention and interaction.'
        },
        {
          id: 'network-effects',
          title: 'Economic Network Effects',
          content: 'The more valuable content you create, the more your network grows, creating exponential value.'
        },
        {
          id: 'reputation-tokens',
          title: 'Reputation as Currency',
          content: 'User reputation becomes tradeable currency based on the quality and value of their contributions.'
        }
      ]
    },
    {
      id: 'bitcoin-focus',
      title: 'Bitcoin SV Focus',
      icon: Bitcoin,
      concepts: [
        {
          id: 'original-vision',
          title: 'Original Bitcoin Protocol',
          content: 'Bitcoin SV maintains the original Bitcoin protocol without consensus changes or artificial limitations.'
        },
        {
          id: 'unlimited-scaling',
          title: 'Unlimited Scaling',
          content: 'No block size limits means Bitcoin SV can handle global transaction volume and data storage.'
        },
        {
          id: 'stable-protocol',
          title: 'Protocol Stability',
          content: 'Set-in-stone protocol ensures enterprise adoption and long-term business planning reliability.'
        },
        {
          id: 'data-storage',
          title: 'On-Chain Data Storage',
          content: 'Store any type of data directly on the blockchain: documents, images, videos, applications.'
        },
        {
          id: 'enterprise-ready',
          title: 'Enterprise Applications',
          content: 'Real businesses can build production applications on Bitcoin SV\'s reliable, scalable infrastructure.'
        },
        {
          id: 'micropayment-native',
          title: 'Native Micropayments',
          content: 'Bitcoin SV\'s low fees enable micropayments as small as fractions of a penny for any digital interaction.'
        }
      ]
    },
    {
      id: 'business-applications',
      title: 'Business Applications',
      icon: DollarSign,
      concepts: [
        {
          id: 'smart-contracts',
          title: 'Visual Smart Contracts',
          content: 'Drag-and-drop interface for creating complex business logic without programming knowledge.'
        },
        {
          id: 'company-tokens',
          title: 'Tokenized Companies',
          content: 'Entire companies can be tokenized as single NFTs representing all stock, labor, and revenue.'
        },
        {
          id: 'transparent-business',
          title: 'Radical Transparency',
          content: 'Real-time tracking of company revenues, expenses, and operations for complete stakeholder visibility.'
        },
        {
          id: 'instant-settlement',
          title: 'Instant Financial Settlement',
          content: 'All business transactions settle instantly on Bitcoin SV without traditional banking delays.'
        },
        {
          id: 'global-workforce',
          title: 'Global Workforce Management',
          content: 'Hire and pay workers globally with instant micropayments and automated contract execution.'
        },
        {
          id: 'startup-incubation',
          title: 'Startup Incubation Platform',
          content: 'Complete ecosystem for launching and funding Bitcoin SV-based businesses and applications.'
        }
      ]
    },
    {
      id: 'content-creation',
      title: 'Content Creation Economy',
      icon: Zap,
      concepts: [
        {
          id: 'instant-nfts',
          title: 'Instant NFT Creation',
          content: 'Convert any photo, video, or audio into tradeable NFTs with a single click using phone camera.'
        },
        {
          id: 'frame-tokenization',
          title: 'Video Frame Tokenization',
          content: 'Break videos into millions of individual frames, each tokenizable and sellable separately.'
        },
        {
          id: 'distributed-storage',
          title: 'Distributed Content Storage',
          content: 'Content distributed across millions of nodes, creating robust CDN replacement infrastructure.'
        },
        {
          id: 'selective-access',
          title: 'Granular Access Control',
          content: 'Sell access to specific scenes, frames, or portions of content with cryptographic precision.'
        },
        {
          id: 'revenue-automation',
          title: 'Automated Revenue Distribution',
          content: 'Revenue automatically splits among all contributors: creators, editors, platforms, distributors.'
        },
        {
          id: 'anti-piracy',
          title: 'Cryptographic Anti-Piracy',
          content: 'Each access key is traceable to the buyer, making unauthorized sharing detectable and actionable.'
        }
      ]
    },
    {
      id: 'developer-tools',
      title: 'Developer Infrastructure',
      icon: Code,
      concepts: [
        {
          id: 'bitcoin-script',
          title: 'Bitcoin Script Development',
          content: 'Learn and implement complex business logic using Bitcoin\'s native scripting language.'
        },
        {
          id: 'api-integration',
          title: 'Comprehensive APIs',
          content: 'Full suite of APIs for integrating Bitcoin SV functionality into any application or service.'
        },
        {
          id: 'development-environment',
          title: 'Integrated Development Environment',
          content: 'Complete IDE for Bitcoin SV development with testing, debugging, and deployment tools.'
        },
        {
          id: 'library-ecosystem',
          title: 'Open Source Libraries',
          content: 'Extensive collection of open-source libraries and tools for rapid Bitcoin SV development.'
        },
        {
          id: 'enterprise-sdk',
          title: 'Enterprise SDK',
          content: 'Production-ready software development kit for enterprise Bitcoin SV application development.'
        },
        {
          id: 'testing-framework',
          title: 'Testing Infrastructure',
          content: 'Comprehensive testing framework for ensuring Bitcoin SV applications work reliably at scale.'
        }
      ]
    },
    {
      id: 'legal-compliance',
      title: 'Legal & Compliance Framework',
      icon: Shield,
      concepts: [
        {
          id: 'regulatory-compliance',
          title: 'Global Regulatory Compliance',
          content: 'Full compliance with international financial regulations, tax laws, and intellectual property rights.'
        },
        {
          id: 'identity-verification',
          title: 'Identity Verification System',
          content: 'Secure identity verification linked to legal identity for tax reporting and legal compliance.'
        },
        {
          id: 'tax-integration',
          title: 'Automated Tax Reporting',
          content: 'Automatic generation of tax reports for all capital gains, income, and business transactions.'
        },
        {
          id: 'legal-contracts',
          title: 'Legally Binding Smart Contracts',
          content: 'Smart contracts that are enforceable in courts of law with proper legal documentation.'
        },
        {
          id: 'dispute-resolution',
          title: 'Blockchain Dispute Resolution',
          content: 'Immutable record-keeping enables fair and transparent dispute resolution for all transactions.'
        },
        {
          id: 'privacy-protection',
          title: 'Privacy Rights Protection',
          content: 'GDPR compliance and user privacy rights while maintaining blockchain transparency benefits.'
        }
      ]
    },
    {
      id: 'future-vision',
      title: 'Future Internet Vision',
      icon: Brain,
      concepts: [
        {
          id: 'internet-replacement',
          title: 'Internet Infrastructure Replacement',
          content: 'Complete replacement of current internet infrastructure with Bitcoin SV-based alternatives.'
        },
        {
          id: 'economic-internet',
          title: 'Economically Native Internet',
          content: 'Every digital interaction includes native economic value exchange without third-party payment processors.'
        },
        {
          id: 'ai-integration',
          title: 'AI-First Everything',
          content: 'All platform interactions enhanced by AI that understands Bitcoin economics and user intent.'
        },
        {
          id: 'global-adoption',
          title: 'Global Mass Adoption',
          content: 'Platform designed to onboard billions of users to Bitcoin SV through educational pathways.'
        },
        {
          id: 'economic-freedom',
          title: 'Economic Freedom Platform',
          content: 'Enable global economic freedom through permissionless, censorship-resistant value exchange.'
        },
        {
          id: 'knowledge-monetization',
          title: 'Knowledge as Currency',
          content: 'Transform human knowledge and creativity into tradeable, valuable digital assets.'
        }
      ]
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bitcoin className="w-8 h-8 text-white" />
              <h1 className="text-2xl font-bold gradient-text">Senseii Whitepaper</h1>
            </div>
            <div className="text-sm text-gray-400">
              {sections.reduce((total, section) => total + section.concepts.length, 0)} concepts
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="card-glass p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-bitcoin-orange" />
                Navigation Index
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center ${
                          activeSection === section.id
                            ? 'bg-bitcoin-orange text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{section.title}</span>
                        <span className="ml-auto text-xs">
                          {section.concepts.length}
                        </span>
                      </button>
                      
                      {activeSection === section.id && (
                        <div className="ml-6 mt-2 space-y-1">
                          {section.concepts.map((concept) => (
                            <button
                              key={concept.id}
                              onClick={() => scrollToSection(concept.id)}
                              className="block w-full text-left text-xs text-gray-500 hover:text-bitcoin-orange transition-colors duration-200 py-1"
                            >
                              {concept.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </nav>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full btn-secondary flex items-center justify-center"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-glass p-8 mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              The Senseii Whitepaper
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              A comprehensive guide to the AI-first Bitcoin SV education platform that will transform 
              how we learn, create, and exchange value in the digital economy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-bitcoin-orange">
                  {sections.reduce((total, section) => total + section.concepts.length, 0)}
                </div>
                <div className="text-sm text-gray-400">Core Concepts</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-bitcoin-orange">{sections.length}</div>
                <div className="text-sm text-gray-400">Major Themes</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-bitcoin-orange">100%</div>
                <div className="text-sm text-gray-400">Bitcoin SV</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-bitcoin-orange">∞</div>
                <div className="text-sm text-gray-400">Potential</div>
              </div>
            </div>
          </motion.div>

          {/* Sections */}
          {sections.map((section, sectionIndex) => {
            const SectionIcon = section.icon
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                data-section={section.id}
                className="mb-12"
              >
                <div className="card-glass p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-bitcoin-orange to-bitcoin-dark flex items-center justify-center mr-4">
                      <SectionIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                      <p className="text-gray-400">{section.concepts.length} core concepts</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.concepts.map((concept, conceptIndex) => (
                      <motion.div
                        key={concept.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: conceptIndex * 0.1 }}
                        viewport={{ once: true }}
                        data-section={concept.id}
                        className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {concept.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {concept.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glass p-8 text-center"
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">
              The Future Starts Now
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Senseii represents more than an education platform—it's the foundation for a new internet economy 
              where knowledge, creativity, and value exchange happen seamlessly on the original Bitcoin protocol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.location.href = '/'}
              >
                Experience the Platform
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
                onClick={scrollToTop}
              >
                Read Again
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WhitepaperPage 