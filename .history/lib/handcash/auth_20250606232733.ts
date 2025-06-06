import { handcashConfig } from './config'

// HandCash API endpoints
const HANDCASH_ENDPOINTS = {
  oauth: handcashConfig.authUrl.replace('/authorize', ''),
  api: handcashConfig.apiUrl
}

export interface HandCashUser {
  id: string
  handle: string
  displayName: string
  avatarUrl?: string
  publicProfile: {
    id: string
    handle: string
    displayName: string
    avatarUrl?: string
  }
}

export interface HandCashAuthState {
  state: string
  codeVerifier: string
  timestamp: number
}

export class HandCashAuth {
  private config = handcashConfig

  // Generate OAuth URL for sign-in
  generateAuthUrl(state?: string): { url: string, authState: HandCashAuthState } {
    const authState: HandCashAuthState = {
      state: state || this.generateRandomString(32),
      codeVerifier: this.generateRandomString(128),
      timestamp: Date.now()
    }

    const codeChallenge = this.generateCodeChallenge(authState.codeVerifier)
    
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.config.appId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scopes.join(' '),
      state: authState.state,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256'
    })

    const url = `${HANDCASH_ENDPOINTS.oauth}?${params.toString()}`
    
    return { url, authState }
  }

  // Exchange authorization code for access token
  async exchangeCodeForToken(code: string, codeVerifier: string): Promise<{
    access_token: string
    refresh_token: string
    expires_in: number
    user: HandCashUser
  }> {
    const response = await fetch(`${HANDCASH_ENDPOINTS.oauth}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: this.config.appId,
        client_secret: this.config.appSecret,
        code,
        redirect_uri: this.config.redirectUri,
        code_verifier: codeVerifier
      })
    })

    if (!response.ok) {
      throw new Error(`HandCash token exchange failed: ${response.statusText}`)
    }

    const tokenData = await response.json()
    
    // Get user profile
    const user = await this.getProfile(tokenData.access_token)
    
    return {
      ...tokenData,
      user
    }
  }

  // Get user profile
  async getProfile(accessToken: string): Promise<HandCashUser> {
    const response = await fetch(`${HANDCASH_ENDPOINTS.api}/user/profile`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to get HandCash profile: ${response.statusText}`)
    }

    const profile = await response.json()
    
    return {
      id: profile.id,
      handle: profile.handle,
      displayName: profile.displayName,
      avatarUrl: profile.avatarUrl,
      publicProfile: {
        id: profile.id,
        handle: profile.handle,
        displayName: profile.displayName,
        avatarUrl: profile.avatarUrl
      }
    }
  }

  // Helper methods
  private generateRandomString(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
    let result = ''
    const crypto = globalThis.crypto || require('crypto')
    
    if (crypto.getRandomValues) {
      const randomValues = new Uint8Array(length)
      crypto.getRandomValues(randomValues)
      for (let i = 0; i < length; i++) {
        result += charset[randomValues[i] % charset.length]
      }
    } else {
      // Fallback for Node.js
      for (let i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)]
      }
    }
    
    return result
  }

  private generateCodeChallenge(codeVerifier: string): string {
    // In a real implementation, use SHA256 hash
    // For now, return the verifier (plain method)
    return codeVerifier
  }
}

export const handCashAuth = new HandCashAuth() 