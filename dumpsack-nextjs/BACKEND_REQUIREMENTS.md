# Backend API Requirements for DumpSack Frontend

## 🚨 Missing Endpoints (MUST IMPLEMENT)

The following endpoints are required by the frontend but are **NOT YET IMPLEMENTED** in the backend:

---

## 1. Newsletter Subscription API (includes Android Waitlist)

### POST `/api/newsletter/subscribe`

**Purpose:** Allow users to subscribe to the DumpSack newsletter from the website.

**Request Body:**
```json
{
  "email": "user@example.com",
  "tags": ["website"]  // optional, defaults to ["website"]
  // Common tags: ["website", "android_waitlist", "ios_waitlist"]
}
```

**Note:** This endpoint handles both newsletter subscriptions AND Android waitlist signups.
- Newsletter signup: `tags: ["website"]`
- Android waitlist: `tags: ["android_waitlist"]`
- Both: `tags: ["website", "android_waitlist"]`

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

**Response (Error - Already Subscribed):**
```json
{
  "success": false,
  "error": {
    "code": "ALREADY_SUBSCRIBED",
    "message": "This email is already subscribed"
  }
}
```

**Response (Error - Invalid Email):**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Please provide a valid email address"
  }
}
```

**Implementation Notes:**
- Store in Supabase `subscribers` table
- Set `status` to `'active'`
- Set `subscribed_at` to current timestamp
- Validate email format
- Check for duplicates before inserting
- If duplicate exists, UPDATE tags (merge new tags with existing)
- Optional: Send confirmation email
- **Android Waitlist:** When `tags` includes `"android_waitlist"`, user is on Android waitlist
- **Newsletter:** When `tags` includes `"website"`, user gets newsletter updates

**Database Schema (Already exists in Supabase):**
```sql
-- subscribers table
id (UUID, primary key)
email (TEXT, unique)
tags (TEXT[])
status (TEXT: 'active' | 'unsubscribed')
subscribed_at (TIMESTAMPTZ)
unsubscribed_at (TIMESTAMPTZ)
```

---

## 2. Android Waitlist API (Optional - Can use Newsletter API)

### POST `/api/waitlist/android`

**Purpose:** Dedicated endpoint for Android waitlist signups (alternative to using newsletter API with tags).

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "You're on the Android waitlist! We'll notify you when it launches."
}
```

**Implementation Notes:**
- This is OPTIONAL - you can use the newsletter API with `tags: ["android_waitlist"]` instead
- If implemented, internally call newsletter API with `tags: ["android_waitlist"]`
- Simpler for frontend to have dedicated endpoint
- Frontend already has `joinAndroidWaitlist()` function ready

**Current Frontend Implementation:**
- Download page uses `NewsletterInline` component with `tags={['android_waitlist']}`
- This works perfectly with the newsletter API
- Dedicated endpoint is optional but cleaner

---

## 3. Support/Contact Form API

### POST `/api/support/message`

**Purpose:** Allow users to send support messages from the website contact form.

**Request Body:**
```json
{
  "email": "user@example.com",
  "subject": "Question about Android app",
  "message": "When will the Android app be available?"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully. We'll respond within 24-48 hours."
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMS",
    "message": "Email, subject, and message are required"
  }
}
```

**Implementation Notes:**
- Store in Supabase `support_messages` table
- Set `status` to `'pending'`
- Set `created_at` to current timestamp
- Validate all required fields
- Optional: Send email notification to contact@dumpsack.xyz
- Optional: Send auto-reply to user confirming receipt

**Database Schema (Already exists in Supabase):**
```sql
-- support_messages table
id (UUID, primary key)
email (TEXT)
subject (TEXT)
message (TEXT)
status (TEXT: 'pending' | 'replied' | 'resolved')
reply (TEXT)
replied_at (TIMESTAMPTZ)
created_at (TIMESTAMPTZ)
```

---

## 4. Admin Analytics API

### GET `/api/admin/analytics`

**Purpose:** Provide real-time backend health and analytics data for the admin dashboard.

**Headers:**
```
Authorization: Bearer <admin_jwt_token>  // Optional for now
```

**Response:**
```json
{
  "success": true,
  "data": {
    "apiHealth": {
      "status": "healthy",  // "healthy" | "degraded" | "down"
      "uptime": 99.9,       // percentage
      "responseTime": 45    // milliseconds (average)
    },
    "rpcHealth": {
      "status": "healthy",
      "uptime": 99.5,
      "responseTime": 120
    },
    "requests24h": 15000,   // total API requests in last 24h
    "errors24h": 12         // total errors in last 24h
  }
}
```

**Implementation Notes:**
- Track API request count (use Redis or in-memory counter)
- Track error count (log errors to database or monitoring service)
- Calculate uptime based on health checks
- Measure average response time
- Check RPC node connectivity and response time
- Cache this data for 30 seconds to reduce load

---

## 📊 Frontend Integration Status

### ✅ Already Integrated (Frontend Ready)

1. **Newsletter Component** (`components/NewsletterInline.tsx`)
   - Calls `POST /api/newsletter/subscribe`
   - Shows success/error states
   - Tracks analytics events

2. **Support Form** (`app/(main)/support/page.tsx`)
   - Calls `POST /api/support/message`
   - Shows success/error states
   - Tracks analytics events

3. **Admin Dashboard** (`app/admin/dashboard/page.tsx`)
   - Calls `GET /api/admin/analytics`
   - Falls back to local mock data if API unavailable
   - Refreshes every 30 seconds

### 🔄 API Client (`lib/api-client.ts`)

All API calls are centralized in this file:
- `subscribeNewsletter(email, tags)`
- `sendSupportMessage(email, subject, message)`
- `getAdminAnalytics(token?)`

---

## 🛠️ Implementation Priority

1. **HIGH PRIORITY** - Newsletter Subscription
   - Users can't subscribe without this
   - Simple implementation (just insert to database)

2. **HIGH PRIORITY** - Support Messages
   - Users can't contact support without this
   - Simple implementation (just insert to database)

3. **MEDIUM PRIORITY** - Admin Analytics
   - Admin dashboard will work with fallback data
   - More complex (requires tracking/monitoring)

---

## 📧 Email Integration (Optional but Recommended)

Consider integrating an email service (Resend, SendGrid, AWS SES) for:

1. **Newsletter Confirmation Emails**
   - Send double opt-in confirmation link
   - Improves deliverability and compliance

2. **Support Message Notifications**
   - Notify team at contact@dumpsack.xyz when new message arrives
   - Send auto-reply to user confirming receipt

3. **Support Reply Emails**
   - When admin replies in dashboard, send email to user

---

## 🔐 Security Considerations

1. **Rate Limiting**
   - Limit newsletter subscriptions to 5 per IP per hour
   - Limit support messages to 3 per IP per hour

2. **Email Validation**
   - Validate email format
   - Check for disposable email domains (optional)

3. **Spam Protection**
   - Add honeypot field to forms (frontend already has this capability)
   - Consider adding reCAPTCHA for production

4. **Admin Authentication**
   - Admin analytics endpoint should require JWT token
   - Validate token before returning sensitive data

---

## 📝 Testing Checklist

Once implemented, test these scenarios:

- [ ] Subscribe with valid email → Success
- [ ] Subscribe with same email twice → Error (already subscribed)
- [ ] Subscribe with invalid email → Error (invalid format)
- [ ] Send support message with all fields → Success
- [ ] Send support message with missing fields → Error
- [ ] Call admin analytics without auth → Should work (or return 401 if auth required)
- [ ] Call admin analytics with valid auth → Returns real data
- [ ] Verify data is stored correctly in Supabase tables

---

## 🚀 Deployment Notes

**Environment Variables Needed:**
```env
# Supabase (already configured)
SUPABASE_URL=https://xfspvrmwvzjsqcopkwci.supabase.co
SUPABASE_SERVICE_KEY=<service_role_key>

# Email Service (if implementing email notifications)
RESEND_API_KEY=<your_key>
SUPPORT_EMAIL=contact@dumpsack.xyz

# Rate Limiting (if using Redis)
REDIS_URL=<redis_connection_string>
```

**CORS Configuration:**
Allow requests from:
- `https://dumpsack.xyz`
- `https://www.dumpsack.xyz`
- `http://localhost:3000` (for development)

