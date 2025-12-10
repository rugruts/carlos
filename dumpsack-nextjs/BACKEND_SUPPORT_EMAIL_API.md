# Backend API: Support Reply Email System

## Overview
When an admin replies to a support message, the backend needs to send an email to the user with the reply.

**Status:** ⚠️ BACKEND IMPLEMENTATION REQUIRED

The frontend is ready and will call these endpoints. The backend needs to implement them.

## Required API Endpoints

### 1. POST `/api/support/reply`

**Purpose:** Send a reply email to a user who submitted a support message

**Request Body:**
```json
{
  "messageId": "uuid-of-support-message",
  "reply": "The admin's reply text"
}
```

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "emailSent": true,
    "message": "Reply sent successfully"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": {
    "code": "EMAIL_SEND_FAILED",
    "message": "Failed to send email"
  }
}
```

## Backend Implementation Steps

### 1. Database Update
Update the `support_messages` table with:
- `reply` (text) - The admin's reply
- `status` (text) - Set to 'replied'
- `replied_at` (timestamp) - Current timestamp

### 2. Email Sending
Send an email to the user's email address with:

**From:** support@dumpsack.xyz (or noreply@dumpsack.xyz)

**To:** {user_email_from_support_message}

**Subject:** Re: {original_subject}

**Email Template (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #e5e5e5; background: #0a0a0a; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #111111; border: 1px solid #1a1a1a; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #00ff88 0%, #ff8800 100%); padding: 30px; text-align: center; }
    .header h1 { margin: 0; color: #000; font-size: 24px; font-weight: 700; }
    .content { padding: 40px 30px; }
    .message-box { background: #1a1a1a; border-left: 3px solid #00ff88; padding: 20px; margin: 20px 0; border-radius: 8px; }
    .original-message { background: #151515; border-left: 3px solid #666; padding: 15px; margin: 20px 0; border-radius: 8px; }
    .footer { background: #0a0a0a; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #1a1a1a; }
    .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #00ff88 0%, #ff8800 100%); color: #000; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>DumpSack Support</h1>
    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>We've received your support message and here's our response:</p>
      
      <div class="message-box">
        <strong style="color: #00ff88;">Our Reply:</strong>
        <p style="margin-top: 10px; white-space: pre-wrap;">{REPLY_TEXT}</p>
      </div>

      <div class="original-message">
        <strong style="color: #999;">Your Original Message:</strong>
        <p style="margin-top: 10px; color: #999; white-space: pre-wrap;">{ORIGINAL_MESSAGE}</p>
      </div>

      <p>If you have any further questions, feel free to reply to this email or submit a new support request.</p>
      
      <a href="https://dumpsack.xyz/support" class="button">Visit Support Center</a>
    </div>
    <div class="footer">
      <p>© 2025 DumpSack. All rights reserved.</p>
      <p>This email was sent in response to your support request.</p>
    </div>
  </div>
</body>
</html>
```

### 3. Email Service Setup (Recommended: Resend)

**Install Resend:**
```bash
npm install resend
```

**Environment Variable:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Example Implementation:**
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendSupportReply(messageId, replyText) {
  // 1. Get support message from database
  const message = await db.getSupportMessage(messageId);
  
  // 2. Update database
  await db.updateSupportMessage(messageId, {
    reply: replyText,
    status: 'replied',
    replied_at: new Date()
  });
  
  // 3. Send email
  const emailHtml = generateEmailTemplate(replyText, message.message);
  
  await resend.emails.send({
    from: 'DumpSack Support <support@dumpsack.xyz>',
    to: message.email,
    subject: `Re: ${message.subject}`,
    html: emailHtml
  });
  
  return { success: true };
}
```

### 2. POST `/api/support/{messageId}/resolve`

**Purpose:** Mark a support message as resolved without sending an email

**Request Body:** None (empty)

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "message": "Message marked as resolved"
  }
}
```

**Backend Implementation:**
- Update `support_messages` table:
  - `status` = 'resolved'
  - `resolved_at` = current timestamp

## Frontend Integration

✅ **ALREADY IMPLEMENTED** - The frontend is ready and will call these endpoints:

**Send Reply:**
```typescript
const response = await fetch('https://api.dumpsack.xyz/api/support/reply', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    messageId: selectedMessageId,
    reply: replyText
  })
});
```

**Mark as Resolved:**
```typescript
const response = await fetch(`https://api.dumpsack.xyz/api/support/${messageId}/resolve`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include'
});
```

## Testing Checklist

- [ ] Email is sent to the correct user email
- [ ] Reply is saved to database
- [ ] Status is updated to 'replied'
- [ ] replied_at timestamp is set
- [ ] Email template displays correctly
- [ ] Original message is included in email
- [ ] Links in email work correctly
- [ ] Email works with different email providers (Gmail, Outlook, etc.)

## Notes

- Use `support@dumpsack.xyz` as the sender email (requires DNS setup)
- Make sure to escape HTML in user-generated content
- Consider rate limiting to prevent abuse
- Log all email sends for debugging

