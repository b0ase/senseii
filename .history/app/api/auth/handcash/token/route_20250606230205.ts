import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { code, codeVerifier } = await request.json()

    if (!code || !codeVerifier) {
      return NextResponse.json(
        { error: 'Missing code or codeVerifier' },
        { status: 400 }
      )
    }

    const appId = process.env.HANDCASH_APP_ID || process.env.NEXT_PUBLIC_HANDCASH_APP_ID
    const appSecret = process.env.HANDCASH_APP_SECRET
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

    if (!appId || !appSecret) {
      return NextResponse.json(
        { error: 'HandCash credentials not configured' },
        { status: 500 }
      )
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://app.handcash.io/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: appId,
        client_secret: appSecret,
        code,
        redirect_uri: `${baseUrl}/auth/handcash/callback`,
        code_verifier: codeVerifier
      })
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error('HandCash token exchange failed:', errorData)
      return NextResponse.json(
        { error: 'Token exchange failed' },
        { status: 400 }
      )
    }

    const tokenData = await tokenResponse.json()

    // Get user profile
    const profileResponse = await fetch('https://api.handcash.io/v1/user/profile', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json'
      }
    })

    if (!profileResponse.ok) {
      console.error('Failed to get HandCash profile')
      return NextResponse.json(
        { error: 'Failed to get user profile' },
        { status: 400 }
      )
    }

    const profile = await profileResponse.json()

    // Format user data
    const user = {
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

    return NextResponse.json({
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token,
      expires_in: tokenData.expires_in,
      user
    })

  } catch (error) {
    console.error('HandCash auth error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 