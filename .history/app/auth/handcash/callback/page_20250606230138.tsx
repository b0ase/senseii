'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

const HandCashCallback = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    handleCallback()
  }, [searchParams])

  const handleCallback = async () => {
    try {
      const code = searchParams.get('code')
      const state = searchParams.get('state')
      const error = searchParams.get('error')

      if (error) {
        throw new Error(`HandCash OAuth error: ${error}`)
      }

      if (!code || !state) {
        throw new Error('Missing authorization code or state')
      }

      // Get stored auth state
      const storedAuthState = localStorage.getItem('handcash_auth_state')
      if (!storedAuthState) {
        throw new Error('Missing auth state')
      }

      const authState = JSON.parse(storedAuthState)
      
      // Verify state parameter
      if (state !== authState.state) {
        throw new Error('Invalid state parameter')
      }

      // Exchange code for token
      const response = await fetch('/api/auth/handcash/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code,
          codeVerifier: authState.codeVerifier
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Token exchange failed')
      }

      const tokenData = await response.json()

      // Store tokens and user data
      localStorage.setItem('handcash_token', tokenData.access_token)
      localStorage.setItem('handcash_user', JSON.stringify(tokenData.user))
      localStorage.removeItem('handcash_auth_state')

      setStatus('success')
      setMessage(`Welcome, ${tokenData.user.handle}!`)

      // Redirect to profile or dashboard after a short delay
      setTimeout(() => {
        router.push('/profile')
      }, 2000)

    } catch (error) {
      console.error('HandCash callback error:', error)
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Authentication failed')
      
      // Redirect to home after error
      setTimeout(() => {
        router.push('/')
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass p-8 text-center"
        >
          {status === 'loading' && (
            <>
              <Loader2 className="w-16 h-16 text-white mx-auto mb-6 animate-spin" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Connecting to HandCash...
              </h2>
              <p className="text-gray-300">
                Please wait while we complete your authentication.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Authentication Successful!
              </h2>
              <p className="text-gray-300 mb-4">{message}</p>
              <p className="text-sm text-gray-400">
                Redirecting to your profile...
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Authentication Failed
              </h2>
              <p className="text-gray-300 mb-4">{message}</p>
              <p className="text-sm text-gray-400">
                Redirecting to home page...
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default HandCashCallback 