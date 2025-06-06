import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

if (!supabaseUrl) {
  throw new Error('SUPABASE_URL environment variable is required')
}

if (!supabaseAnonKey) {
  throw new Error('SUPABASE_ANON_KEY environment variable is required')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

// Database types for TypeScript
export interface UserProfile {
  id: string
  handcash_handle: string
  handcash_avatar_url?: string
  handcash_display_name?: string
  handcash_user_id: string
  handcash_access_token?: string
  created_at: string
  updated_at: string
  last_login?: string
  
  // Additional profile fields
  bio?: string
  location?: string
  website?: string
  twitter_handle?: string
  
  // Privacy settings
  profile_visibility: 'public' | 'private'
  show_balance: boolean
  show_transactions: boolean
  
  // Platform stats
  tokens_created?: number
  ip_value_usd?: number
  courses_completed?: number
}

export interface UserSession {
  id: string
  user_id: string
  handcash_access_token: string
  handcash_refresh_token?: string
  expires_at: string
  created_at: string
}

export interface TokenizedAsset {
  id: string
  user_id: string
  title: string
  description?: string
  file_hash: string
  file_type: string
  file_size: number
  timestamp: string
  blockchain_tx_id?: string
  token_id?: string
  value_usd?: number
  status: 'pending' | 'confirmed' | 'failed'
  created_at: string
}

export default supabase 