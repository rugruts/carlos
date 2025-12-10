# Backend Email Confirmation Requirements

## Overview

The newsletter system uses **double opt-in** (confirmation email required). The waitlist system sends instant confirmation with position number.

### Newsletter Flow:
1. User enters email on website
2. API creates `pending` subscriber record
3. Confirmation email sent with verify link
4. User clicks link to confirm
5. Status changes to `subscribed`, welcome email sent

### Waitlist Flow:
1. User enters email on download page
2. API creates waitlist entry with auto-assigned position
3. Confirmation email sent immediately with position number

## Email Service Setup

You'll need an email service provider. Recommended options:
- **Resend** (https://resend.com) - Modern, developer-friendly, generous free tier
- **SendGrid** - Popular, reliable
- **Amazon SES** - Cost-effective for high volume
- **Mailgun** - Good deliverability

## Required Email Confirmations

### 1. Newsletter Subscription Confirmation

**Endpoint:** `POST /api/newsletter/subscribe`

**Request Body:**
```json
{
  "email": "user@example.com",
  "tags": ["website"]
}
```

**Email to Send:**
```
From: DumpSack <noreply@dumpsack.xyz>
To: user@example.com
Subject: Welcome to DumpSack Newsletter! 🎉

Hi there!

Thanks for subscribing to the DumpSack newsletter!

You'll be the first to know about:
- New features and updates
- Gorbagana and Solana ecosystem news
- Exclusive tips and tricks
- Early access to new releases

Stay tuned for exciting updates!

Best regards,
The DumpSack Team

---
If you didn't subscribe, you can safely ignore this email.
Unsubscribe: https://dumpsack.xyz/unsubscribe?email=user@example.com
```

### 2. Android Waitlist Confirmation

**Endpoint:** `POST /api/waitlist/android`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Email to Send:**
```
From: DumpSack <noreply@dumpsack.xyz>
To: user@example.com
Subject: You're on the Android Waitlist! 📱

Hi there!

Thanks for joining the DumpSack Android waitlist!

We're working hard to bring DumpSack to Android. You'll be among the first to know when:
- Beta testing begins
- The app launches on Google Play Store
- New Android-specific features are available

We'll keep you updated on our progress!

Best regards,
The DumpSack Team

---
If you didn't join the waitlist, you can safely ignore this email.
Remove me from waitlist: https://dumpsack.xyz/unsubscribe?email=user@example.com
```

## Implementation Example (Node.js with Resend)

### Install Resend
```bash
npm install resend
```

### Environment Variables
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=noreply@dumpsack.xyz
```

### Newsletter Subscription Handler
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleNewsletterSubscribe(email, tags) {
  try {
    // 1. Save to database
    await saveSubscriberToDatabase(email, tags);
    
    // 2. Send confirmation email
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@dumpsack.xyz',
      to: email,
      subject: 'Welcome to DumpSack Newsletter! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8EFF60;">Welcome to DumpSack!</h1>
          <p>Thanks for subscribing to the DumpSack newsletter!</p>
          
          <p>You'll be the first to know about:</p>
          <ul>
            <li>New features and updates</li>
            <li>Gorbagana and Solana ecosystem news</li>
            <li>Exclusive tips and tricks</li>
            <li>Early access to new releases</li>
          </ul>
          
          <p>Stay tuned for exciting updates!</p>
          
          <p>Best regards,<br>The DumpSack Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            If you didn't subscribe, you can safely ignore this email.<br>
            <a href="https://dumpsack.xyz/unsubscribe?email=${encodeURIComponent(email)}">Unsubscribe</a>
          </p>
        </div>
      `,
    });
    
    return { success: true, message: 'Subscribed successfully' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, message: 'Failed to subscribe' };
  }
}
```

### Android Waitlist Handler
```javascript
export async function handleAndroidWaitlist(email) {
  try {
    // 1. Save to database
    await saveToAndroidWaitlist(email);
    
    // 2. Send confirmation email
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@dumpsack.xyz',
      to: email,
      subject: "You're on the Android Waitlist! 📱",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8EFF60;">You're on the Waitlist!</h1>
          <p>Thanks for joining the DumpSack Android waitlist!</p>
          
          <p>We're working hard to bring DumpSack to Android. You'll be among the first to know when:</p>
          <ul>
            <li>Beta testing begins</li>
            <li>The app launches on Google Play Store</li>
            <li>New Android-specific features are available</li>
          </ul>
          
          <p>We'll keep you updated on our progress!</p>
          
          <p>Best regards,<br>The DumpSack Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            If you didn't join the waitlist, you can safely ignore this email.<br>
            <a href="https://dumpsack.xyz/unsubscribe?email=${encodeURIComponent(email)}">Remove me from waitlist</a>
          </p>
        </div>
      `,
    });
    
    return { success: true, message: 'Added to waitlist successfully' };
  } catch (error) {
    console.error('Waitlist error:', error);
    return { success: false, message: 'Failed to join waitlist' };
  }
}
```

## Email Design Guidelines

- Use DumpSack brand colors (toxic green #8EFF60)
- Keep it simple and mobile-friendly
- Include clear call-to-action if needed
- Always include unsubscribe link (required by law)
- Use plain text fallback for email clients that don't support HTML

## Testing

Test emails with:
- Gmail
- Outlook
- Apple Mail
- Mobile devices

Check spam score: https://www.mail-tester.com/

## Priority

🟡 **MEDIUM** - Nice to have for better user experience. The subscription still works without confirmation emails, but users won't know if they successfully subscribed.

## Notes

- Make sure your domain (dumpsack.xyz) is verified with your email provider
- Set up SPF, DKIM, and DMARC records for better deliverability
- Consider double opt-in for newsletter (send confirmation link before adding to list)
- Store email preferences in database (subscribed, unsubscribed, bounced)

