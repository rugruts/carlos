# DumpSack Website - Production Build

This folder contains the production build of the DumpSack marketing website.

## Contents

- `.next/` - Next.js production build output
- `public/` - Static assets (images, icons, favicons)
- `package.json` - Dependencies list
- `package-lock.json` - Locked dependency versions
- `next.config.ts` - Next.js configuration

## Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to this deployment folder:
   ```bash
   cd deployment
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Follow the prompts to link to your Vercel project

### Option 2: Deploy to Any Node.js Hosting

1. Upload this entire `deployment` folder to your server

2. Install dependencies:
   ```bash
   npm install --production
   ```

3. Start the production server:
   ```bash
   npm start
   ```

4. The website will be available on port 3000 by default

### Option 3: Deploy with PM2 (for VPS/dedicated servers)

1. Install PM2:
   ```bash
   npm install -g pm2
   ```

2. Navigate to deployment folder and install dependencies:
   ```bash
   cd deployment
   npm install --production
   ```

3. Start with PM2:
   ```bash
   pm2 start npm --name "dumpsack-website" -- start
   pm2 save
   pm2 startup
   ```

## Environment Variables

Create a `.env.local` file in the deployment folder with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Admin JWT Secret
JWT_SECRET=your_jwt_secret_key

# Backend API
NEXT_PUBLIC_API_URL=https://api.dumpsack.xyz
```

## Important Notes

1. **Environment Variables**: Make sure to set all required environment variables before starting the server

2. **Port Configuration**: The default port is 3000. To change it:
   ```bash
   PORT=8080 npm start
   ```

3. **Domain Configuration**: Update your domain's DNS to point to your server's IP address

4. **SSL/HTTPS**: Use a reverse proxy like Nginx or Caddy to handle SSL certificates

5. **Static Assets**: The `public` folder contains all static assets including:
   - Favicons (favicon.svg, favicon-16.png, favicon-32.png, apple-touch-icon.png)
   - Logo files (logo.png, logo.svg)
   - Platform icons (playstore.png, appstore.png, etc.)

## Build Information

- **Next.js Version**: 16.0.7
- **Build Date**: December 8, 2025
- **Node Version Required**: 18.x or higher
- **Build Type**: Production (optimized)

## Features Included

- ✅ Multi-chain wallet marketing pages
- ✅ Blog system with image support
- ✅ Admin control panel
- ✅ Newsletter integration
- ✅ Support form
- ✅ Legal pages (Privacy, Terms)
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Social media integration (X, Instagram)

## Support

For deployment issues or questions, contact the development team.

## Changes in This Build

### Fixed Issues:
1. ✅ Removed Discord social link
2. ✅ Updated X (Twitter) handle to @DumpSackWallet
3. ✅ Updated Instagram handle to @DumpSackWallet
4. ✅ Fixed favicon display issues with proper PNG favicons
5. ✅ Fixed TypeScript build errors in blog image upload
6. ✅ Updated platform icons (Play Store, App Store)

### New Features:
- Blog post featured images
- Inline image support in blog content
- Image upload API with validation
- Optimized favicons for all platforms

