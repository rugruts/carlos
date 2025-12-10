# Backend Quick Start - 3 Endpoints to Implement

## 🎯 Goal
Implement 3 simple endpoints to enable newsletter subscription (+ Android waitlist), support messages, and admin analytics.

---

## 1️⃣ Newsletter Subscription (includes Android Waitlist)

```javascript
POST /api/newsletter/subscribe

// Request
{
  "email": "user@example.com",
  "tags": ["website"]  // optional, defaults to ["website"]
  // Common tags: ["website", "android_waitlist", "ios_waitlist"]
}

// Success Response
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}

// Error Response (if duplicate, UPDATE tags instead of error)
{
  "success": false,
  "error": {
    "code": "ALREADY_SUBSCRIBED",
    "message": "This email is already subscribed"
  }
}

// Database: Insert into Supabase `subscribers` table
// Table already exists with columns: id, email, tags, status, subscribed_at
// If email exists, MERGE tags (add new tags to existing array)

// IMPORTANT: This endpoint handles BOTH newsletter AND Android waitlist
// - Newsletter: tags: ["website"]
// - Android waitlist: tags: ["android_waitlist"]
// - Both: tags: ["website", "android_waitlist"]
```

---

## 2️⃣ Android Waitlist (Optional - can use Newsletter API)

```javascript
POST /api/waitlist/android

// Request
{
  "email": "user@example.com"
}

// Success Response
{
  "success": true,
  "message": "You're on the Android waitlist!"
}

// Implementation: Just call newsletter API with tags: ["android_waitlist"]
// This is OPTIONAL - frontend already uses newsletter API with tags
```

---

## 3️⃣ Support Messages

```javascript
POST /api/support/message

// Request
{
  "email": "user@example.com",
  "subject": "Question about Android app",
  "message": "When will it be available?"
}

// Success Response
{
  "success": true,
  "message": "Message sent successfully. We'll respond within 24-48 hours."
}

// Error Response
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMS",
    "message": "Email, subject, and message are required"
  }
}

// Database: Insert into Supabase `support_messages` table
// Table already exists with columns: id, email, subject, message, status, created_at
```

---

## 4️⃣ Admin Analytics

```javascript
GET /api/admin/analytics

// Success Response
{
  "success": true,
  "data": {
    "apiHealth": {
      "status": "healthy",  // "healthy" | "degraded" | "down"
      "uptime": 99.9,
      "responseTime": 45
    },
    "rpcHealth": {
      "status": "healthy",
      "uptime": 99.5,
      "responseTime": 120
    },
    "requests24h": 15000,
    "errors24h": 12
  }
}

// Implementation:
// - Track request count (Redis or in-memory)
// - Track error count
// - Ping RPC nodes to check health
// - Calculate average response times
```

---

## 🗄️ Database Tables (Already Created in Supabase)

### `subscribers`
```sql
id              UUID PRIMARY KEY
email           TEXT UNIQUE NOT NULL
tags            TEXT[]
status          TEXT ('active' | 'unsubscribed')
subscribed_at   TIMESTAMPTZ
unsubscribed_at TIMESTAMPTZ
```

### `support_messages`
```sql
id          UUID PRIMARY KEY
email       TEXT NOT NULL
subject     TEXT NOT NULL
message     TEXT NOT NULL
status      TEXT ('pending' | 'replied' | 'resolved')
reply       TEXT
replied_at  TIMESTAMPTZ
created_at  TIMESTAMPTZ
```

---

## 🔧 Supabase Connection

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xfspvrmwvzjsqcopkwci.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);
```

---

## ✅ Testing Checklist

```bash
# Test Newsletter
curl -X POST https://api.dumpsack.xyz/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","tags":["website"]}'

# Test Support
curl -X POST https://api.dumpsack.xyz/api/support/message \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","subject":"Test","message":"Hello"}'

# Test Analytics
curl https://api.dumpsack.xyz/api/admin/analytics
```

---

## 🚀 Priority

1. **Newsletter (+ Android Waitlist)** - HIGH (users can't subscribe or join waitlist)
2. **Support** - HIGH (users can't contact you)
3. **Android Waitlist Endpoint** - LOW (optional, newsletter API handles it)
4. **Analytics** - MEDIUM (dashboard has fallback)

---

## 📧 Optional: Email Notifications

Consider sending emails for:
- Newsletter confirmation (double opt-in)
- Support message received (auto-reply to user)
- Support message notification (to contact@dumpsack.xyz)

Use Resend, SendGrid, or AWS SES.

---

## 🔐 CORS Configuration

Allow these origins:
```javascript
const allowedOrigins = [
  'https://dumpsack.xyz',
  'https://www.dumpsack.xyz',
  'http://localhost:3000'  // for development
];
```

---

## 📝 Error Codes

Use consistent error codes:
- `INVALID_EMAIL` - Email format invalid
- `INVALID_PARAMS` - Missing required fields
- `ALREADY_SUBSCRIBED` - Email already in database
- `INTERNAL_ERROR` - Server/database error

---

## 🎉 That's It!

Implement these 3 endpoints and the frontend will work perfectly.

See `BACKEND_REQUIREMENTS.md` for detailed specs.

