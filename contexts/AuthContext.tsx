'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { HandCashUser } from '../lib/handcash/auth'

interface AuthContextType {
  user: HandCashUser | null
  isLoading: boolean
  isAuthenticated: boolean
  signIn: () => void
  signOut: () => void
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<HandCashUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  // Check for existing session on mount
  useEffect(() => {
    checkSession()
  }, [])

  const checkSession = async () => {
    try {
      const token = localStorage.getItem('handcash_token')
      if (token) {
        const userData = localStorage.getItem('handcash_user')
        if (userData) {
          setUser(JSON.parse(userData))
        }
      }
    } catch (error) {
      console.error('Session check failed:', error)
      // Clear invalid session
      localStorage.removeItem('handcash_token')
      localStorage.removeItem('handcash_user')
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = () => {
    // Store auth state for the callback
    const authState = {
      state: generateRandomString(32),
      codeVerifier: generateRandomString(128),
      timestamp: Date.now()
    }
    
    localStorage.setItem('handcash_auth_state', JSON.stringify(authState))
    
    // Redirect to HandCash OAuth
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_HANDCASH_APP_ID || '',
      redirect_uri: `${window.location.origin}/auth/handcash/callback`,
      scope: 'public_profile pay receive',
      state: authState.state,
      code_challenge: authState.codeVerifier,
      code_challenge_method: 'plain'
    })

    window.location.href = `https://app.handcash.io/oauth?${params.toString()}`
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('handcash_token')
    localStorage.removeItem('handcash_user')
    localStorage.removeItem('handcash_auth_state')
  }

  const refreshUser = async () => {
    // Implementation for refreshing user data
    await checkSession()
  }

  const generateRandomString = (length: number): string => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += charset[Math.floor(Math.random() * charset.length)]
    }
    return result
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
    refreshUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 