# Tag Standardization Fix

## Problem
The Marketing Hub was showing 0 subscribers even though there was 1 subscriber in the database. This was caused by inconsistent tag naming between the frontend and database.

## Root Cause
- **Frontend/Analytics** was looking for tags with hyphens: `android-waitlist`, `ios-waitlist`, `newsletter`
- **Database** had tags with spaces/underscores: `android waitlist`, `website`
- **Code** was using mixed formats: `android_waitlist`, `android-waitlist`, `website`, `newsletter`

## What Was Fixed

### 1. Standardized Tag Format
All tags now use **hyphens** consistently:
- `newsletter` - Newsletter subscribers
- `android-waitlist` - Android app waitlist
- `ios-waitlist` - iOS app waitlist  
- `discover-waitlist` - Discover feature waitlist

### 2. Updated Components
- ✅ `NewsletterInline.tsx` - Now accepts `tags` prop (defaults to `['newsletter']`)
- ✅ `lib/api-client.ts` - `subscribeNewsletter()` now accepts tags parameter
- ✅ `app/(main)/page.tsx` - Android section uses `tags={['android-waitlist']}`
- ✅ `app/(main)/discover/page.tsx` - Uses `tags={['discover-waitlist']}`
- ✅ `app/admin/subscribers/page.tsx` - Filter dropdown uses hyphenated tags
- ✅ `app/api/admin/analytics/route.ts` - Already using hyphenated tags

### 3. Analytics Queries
The analytics endpoint (`/api/admin/analytics`) queries for:
```typescript
.contains('tags', ['newsletter'])        // Newsletter subscribers
.contains('tags', ['android-waitlist'])  // Android waitlist
.contains('tags', ['ios-waitlist'])      // iOS waitlist
```

## Database Migration Needed

Your existing subscriber has old tags that need to be updated:

**Current tags in database:**
```
['android waitlist', 'website']
```

**Should be:**
```
['android-waitlist', 'newsletter']
```

### Option 1: Manual Update (Quick Fix)
Go to Supabase dashboard and update the subscriber's tags:
1. Open Supabase → Table Editor → `subscribers`
2. Find the subscriber with email `theo.matrapilias@outlook.com`
3. Update the `tags` column from `['android waitlist', 'website']` to `['android-waitlist', 'newsletter']`

### Option 2: SQL Migration (Recommended for Production)
Run this SQL in Supabase SQL Editor to fix all existing subscribers:

```sql
-- Update old tag formats to new standardized format
UPDATE subscribers
SET tags = ARRAY(
  SELECT CASE 
    WHEN tag = 'website' THEN 'newsletter'
    WHEN tag = 'android waitlist' THEN 'android-waitlist'
    WHEN tag = 'android_waitlist' THEN 'android-waitlist'
    WHEN tag = 'ios waitlist' THEN 'ios-waitlist'
    WHEN tag = 'ios_waitlist' THEN 'ios-waitlist'
    WHEN tag = 'discover waitlist' THEN 'discover-waitlist'
    WHEN tag = 'discover_waitlist' THEN 'discover-waitlist'
    ELSE tag
  END
  FROM unnest(tags) AS tag
)
WHERE 
  'website' = ANY(tags) OR
  'android waitlist' = ANY(tags) OR
  'android_waitlist' = ANY(tags) OR
  'ios waitlist' = ANY(tags) OR
  'ios_waitlist' = ANY(tags) OR
  'discover waitlist' = ANY(tags) OR
  'discover_waitlist' = ANY(tags);
```

## Backend API Update Needed

The backend API (`https://api.dumpsack.xyz/api/newsletter/subscribe`) needs to:

1. **Accept tags parameter:**
```json
{
  "email": "user@example.com",
  "tags": ["newsletter"]
}
```

2. **Use standardized tag names:**
- `newsletter` (not `website`)
- `android-waitlist` (not `android_waitlist` or `android waitlist`)
- `ios-waitlist` (not `ios_waitlist` or `ios waitlist`)

3. **Merge tags on duplicate emails:**
If a user subscribes to newsletter, then later joins Android waitlist, their tags should be:
```json
["newsletter", "android-waitlist"]
```

## Testing Checklist

After fixing the database tags:

- [ ] Marketing Hub shows correct subscriber counts
  - [ ] Newsletter count = 1
  - [ ] Android Waitlist count = 1
  - [ ] iOS Waitlist count = 0

- [ ] Subscribers page shows correct data
  - [ ] Total Subscribers = 1
  - [ ] Android Waitlist filter shows 1 subscriber
  - [ ] Newsletter filter shows 1 subscriber

- [ ] New subscriptions work correctly
  - [ ] Newsletter signup adds `newsletter` tag
  - [ ] Android waitlist adds `android-waitlist` tag
  - [ ] Tags are merged for duplicate emails

## Summary

The frontend is now fully standardized to use hyphenated tags. Once you:
1. Update the existing subscriber's tags in the database
2. Ensure the backend API uses the same tag format

Everything will work correctly and the Marketing Hub will show the right counts!

