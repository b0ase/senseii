export interface HandCashConfig {
  appId: string
  appSecret: string
  baseUrl: string
  redirectUrl: string
  webhookUrl: string
}

export const getHandCashConfig = (): HandCashConfig => {
  const appId = process.env.HANDCASH_APP_ID || process.env.NEXT_PUBLIC_HANDCASH_APP_ID
  const appSecret = process.env.HANDCASH_APP_SECRET
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_VERCEL_URL || 'https://your-vercel-app.vercel.app'
    : 'http://localhost:3000'
  
  if (!appId) {
    throw new Error('HandCash App ID is required')
  }

  return {
    appId,
    appSecret: appSecret || '',
    baseUrl,
    redirectUrl: `${baseUrl}/auth/handcash/callback`,
    webhookUrl: `${baseUrl}/api/handcash/webhook`
  }
}

export const HANDCASH_ENDPOINTS = {
  oauth: 'https://app.handcash.io/oauth',
  api: 'https://api.handcash.io/v1',
  connect: 'https://connect.handcash.io/v1'
} as const

export const HANDCASH_SCOPES = [
  'public_profile',
  'pay',
  'receive'
] as const 