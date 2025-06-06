export const handcashConfig = {
  appId: process.env.HANDCASH_APP_ID!,
  appSecret: process.env.HANDCASH_APP_SECRET!,
  
  // Environment-specific settings
  environment: process.env.NODE_ENV === 'production' ? 'prod' : 'beta',
  
  // OAuth endpoints
  authUrl: 'https://app.handcash.io/oauth/authorize',
  tokenUrl: 'https://api.handcash.io/v2/oauth/token',
  
  // API endpoints
  apiUrl: 'https://api.handcash.io/v2',
  
  // Redirect URLs - these need to match what's configured in HandCash dashboard
  redirectUri: process.env.NODE_ENV === 'production' 
    ? 'https://senseii-zeta.vercel.app/auth/handcash/callback'
    : 'http://localhost:3000/auth/handcash/callback',
  
  // Scopes - what permissions we're requesting
  scopes: [
    'read_profile',
    'read_public_profile', 
    'read_balance',
    'send_payment',
    'receive_payment'
  ],
  
  // API rate limits
  rateLimits: {
    perMinute: 60,
    perHour: 1000
  }
}

// Validate required environment variables
if (!handcashConfig.appId) {
  throw new Error('HANDCASH_APP_ID environment variable is required')
}

if (!handcashConfig.appSecret) {
  throw new Error('HANDCASH_APP_SECRET environment variable is required')
}

export default handcashConfig 