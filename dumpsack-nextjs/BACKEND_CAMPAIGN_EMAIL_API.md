# Backend Campaign Email Sending API Documentation

## Overview
The frontend admin panel needs the backend to implement email campaign sending functionality. When an admin creates and sends a campaign through the Marketing Hub, the backend should send emails to all subscribers matching the campaign criteria.

## Required API Endpoint

### Send Campaign Emails
**Endpoint:** `POST /api/campaigns/{campaignId}/send`

**Description:** Process and send emails for a queued campaign to all matching subscribers.

**Request Headers:**
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
```

**Path Parameters:**
- `campaignId` (string, required): The UUID of the campaign to send

**Response (Success - 200 OK):**
```json
{
  "success": true,
  "data": {
    "campaignId": "uuid-here",
    "emailsSent": 150,
    "emailsFailed": 2,
    "status": "sent",
    "sentAt": "2025-12-09T00:15:30Z"
  }
}
```

**Response (Error - 400/500):**
```json
{
  "success": false,
  "error": {
    "code": "CAMPAIGN_SEND_FAILED",
    "message": "Failed to send campaign emails"
  }
}
```

## Implementation Requirements

### 1. Campaign Processing Flow

1. **Fetch Campaign Details** from `campaigns` table:
   - Get campaign by ID
   - Verify status is "queued"
   - Extract: `target`, `platform`, `subject`, `html_content`, `preview_text`

2. **Get Recipient List** from `subscribers` table:
   - Filter by campaign target:
     - If `target = 'newsletter'`: Get subscribers with tag `'newsletter'`
     - If `target = 'waitlist'` and `platform = 'android'`: Get subscribers with tag `'android-waitlist'`
     - If `target = 'waitlist'` and `platform = 'ios'`: Get subscribers with tag `'ios-waitlist'`
   - Only include subscribers with `status = 'active'`

3. **Send Emails** to all recipients:
   - Use the email service (SendGrid, AWS SES, etc.)
   - Send HTML email with the campaign content
   - Track success/failure for each email

4. **Update Campaign Status**:
   - Set `status = 'sent'` if all emails sent successfully
   - Set `status = 'failed'` if critical error occurred
   - Set `status = 'partial'` if some emails failed
   - Update `sent_at` timestamp
   - Store any errors in `error` column

### 2. Email Template

The email should use the `html_content` from the campaign. Here's a wrapper template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{subject}}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">DumpSack</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              {{html_content}}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 10px 0; color: #6c757d; font-size: 14px;">
                You're receiving this because you subscribed to DumpSack updates.
              </p>
              <p style="margin: 0; font-size: 12px;">
                <a href="{{unsubscribe_url}}" style="color: #667eea; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

### 3. Database Schema Reference

**campaigns table:**
- `id` (text, primary key, auto-generated UUID)
- `target` (text): "newsletter" or "waitlist"
- `platform` (text, nullable): "android" or "ios" (only for waitlist)
- `subject` (text): Email subject line
- `html_content` (text): HTML content of the email
- `preview_text` (text, nullable): Email preview text
- `recipients_count` (integer): Number of recipients
- `status` (text): "queued", "sent", "failed", "partial"
- `created_at` (timestamp): When campaign was created
- `sent_at` (timestamp, nullable): When campaign was sent
- `error` (text, nullable): Error message if failed

**subscribers table:**
- `id` (uuid, primary key)
- `email` (text, unique)
- `tags` (text[]): Array of tags like ['newsletter', 'android-waitlist']
- `status` (text): "active" or "unsubscribed"
- `subscribed_at` (timestamp)
- `unsubscribed_at` (timestamp, nullable)

### 4. Error Handling

- **Campaign Not Found:** Return 404
- **Campaign Already Sent:** Return 400 with message "Campaign already sent"
- **No Recipients:** Update status to "failed" with error "No recipients found"
- **Email Service Error:** Log errors, update campaign status to "partial" or "failed"
- **Rate Limiting:** Implement rate limiting to avoid overwhelming email service

### 5. Unsubscribe URL

Generate unsubscribe URL for each recipient:
```
https://dumpsack.xyz/unsubscribe?email={email}&token={unsubscribe_token}
```

The `unsubscribe_token` should be a secure token that verifies the email address.

## Frontend Integration

The frontend will:
1. Create campaign record in database with status "queued"
2. Call this backend endpoint to trigger email sending
3. Display success/failure message to admin
4. Refresh campaign list to show updated status

## Testing Checklist

- [ ] Campaign sends to newsletter subscribers
- [ ] Campaign sends to Android waitlist subscribers
- [ ] Campaign sends to iOS waitlist subscribers
- [ ] Only active subscribers receive emails
- [ ] Campaign status updates correctly
- [ ] Sent timestamp is recorded
- [ ] Errors are logged properly
- [ ] Unsubscribe link works
- [ ] Email HTML renders correctly
- [ ] Rate limiting works

