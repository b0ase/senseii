import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the webhook event for debugging
    console.log('HandCash webhook received:', {
      headers: Object.fromEntries(request.headers.entries()),
      body
    })

    // Verify webhook signature if needed
    const signature = request.headers.get('x-handcash-signature')
    
    // Handle different event types
    switch (body.type) {
      case 'payment_received':
        await handlePaymentReceived(body.data)
        break
      
      case 'payment_sent':
        await handlePaymentSent(body.data)
        break
      
      case 'user_updated':
        await handleUserUpdated(body.data)
        break
        
      default:
        console.log('Unknown webhook event type:', body.type)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handlePaymentReceived(data: any) {
  console.log('Payment received:', data)
  // Handle course payments, subscription payments, etc.
  // You can integrate with your payment processing logic here
}

async function handlePaymentSent(data: any) {
  console.log('Payment sent:', data)
  // Handle outgoing payments if needed
}

async function handleUserUpdated(data: any) {
  console.log('User updated:', data)
  // Update user profile information in your database
} 