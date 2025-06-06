import { supabase, UserProfile, UserSession, TokenizedAsset } from './client'

// User Profile Management
export class DatabaseService {
  
  // Create or update user profile
  static async upsertUserProfile(profile: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert({
          ...profile,
          updated_at: new Date().toISOString(),
          last_login: new Date().toISOString()
        }, {
          onConflict: 'handcash_user_id'
        })
        .select()
        .single()

      if (error) {
        console.error('Error upserting user profile:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Get user profile by HandCash user ID
  static async getUserProfileByHandCashId(handcashUserId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('handcash_user_id', handcashUserId)
        .single()

      if (error) {
        console.error('Error fetching user profile:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Get user profile by handle (for public profiles)
  static async getUserProfileByHandle(handle: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('handcash_handle', handle)
        .eq('profile_visibility', 'public')
        .single()

      if (error) {
        console.error('Error fetching user profile by handle:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Update user profile
  static async updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single()

      if (error) {
        console.error('Error updating user profile:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Session Management
  static async createUserSession(session: Omit<UserSession, 'id' | 'created_at'>): Promise<UserSession | null> {
    try {
      const { data, error } = await supabase
        .from('user_sessions')
        .insert({
          ...session,
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating user session:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Get active session by access token
  static async getSessionByToken(accessToken: string): Promise<UserSession | null> {
    try {
      const { data, error } = await supabase
        .from('user_sessions')
        .select('*')
        .eq('handcash_access_token', accessToken)
        .gt('expires_at', new Date().toISOString())
        .single()

      if (error) {
        console.error('Error fetching session:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Clean up expired sessions
  static async cleanupExpiredSessions(): Promise<void> {
    try {
      const { error } = await supabase
        .from('user_sessions')
        .delete()
        .lt('expires_at', new Date().toISOString())

      if (error) {
        console.error('Error cleaning up sessions:', error)
      }
    } catch (error) {
      console.error('Database error:', error)
    }
  }

  // Tokenized Assets Management
  static async createTokenizedAsset(asset: Omit<TokenizedAsset, 'id' | 'created_at'>): Promise<TokenizedAsset | null> {
    try {
      const { data, error } = await supabase
        .from('tokenized_assets')
        .insert({
          ...asset,
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating tokenized asset:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      return null
    }
  }

  // Get user's tokenized assets
  static async getUserAssets(userId: string, limit: number = 10, offset: number = 0): Promise<TokenizedAsset[]> {
    try {
      const { data, error } = await supabase
        .from('tokenized_assets')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) {
        console.error('Error fetching user assets:', error)
        return []
      }

      return data || []
    } catch (error) {
      console.error('Database error:', error)
      return []
    }
  }

  // Update asset status
  static async updateAssetStatus(assetId: string, status: TokenizedAsset['status'], blockchainTxId?: string): Promise<boolean> {
    try {
      const updates: any = { status }
      if (blockchainTxId) {
        updates.blockchain_tx_id = blockchainTxId
      }

      const { error } = await supabase
        .from('tokenized_assets')
        .update(updates)
        .eq('id', assetId)

      if (error) {
        console.error('Error updating asset status:', error)
        return false
      }

      return true
    } catch (error) {
      console.error('Database error:', error)
      return false
    }
  }

  // Statistics
  static async getUserStats(userId: string): Promise<{
    tokensCreated: number
    totalValue: number
    coursesCompleted: number
  }> {
    try {
      const [assetsResult, profileResult] = await Promise.all([
        supabase
          .from('tokenized_assets')
          .select('value_usd')
          .eq('user_id', userId)
          .eq('status', 'confirmed'),
        supabase
          .from('user_profiles')
          .select('courses_completed')
          .eq('id', userId)
          .single()
      ])

      const tokensCreated = assetsResult.data?.length || 0
      const totalValue = assetsResult.data?.reduce((sum, asset) => sum + (asset.value_usd || 0), 0) || 0
      const coursesCompleted = profileResult.data?.courses_completed || 0

      return {
        tokensCreated,
        totalValue,
        coursesCompleted
      }
    } catch (error) {
      console.error('Error fetching user stats:', error)
      return {
        tokensCreated: 0,
        totalValue: 0,
        coursesCompleted: 0
      }
    }
  }
}

export default DatabaseService 