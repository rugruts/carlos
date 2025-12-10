# Deploying DumpSack Website to Hostinger Shared Hosting

## ⚠️ Important Notice

**Next.js requires Node.js to run**, which is typically not available on standard shared hosting plans. Hostinger shared hosting is designed for static HTML/PHP websites, not Node.js applications.

## Your Options

### Option 1: Use Hostinger VPS (Recommended)
Upgrade to Hostinger VPS which supports Node.js applications. This is the proper way to host a Next.js website.

**Steps:**
1. Upgrade to Hostinger VPS plan
2. SSH into your VPS
3. Install Node.js 18+
4. Upload the deployment folder
5. Run `npm install --production`
6. Use PM2 to keep the app running
7. Configure Nginx as reverse proxy

### Option 2: Export as Static Site (Limited Functionality)
If you must use shared hosting, you can export Next.js as static HTML, but you'll lose:
- ❌ Admin panel (requires server-side rendering)
- ❌ API routes (all backend functionality)
- ❌ Dynamic features
- ❌ Image optimization
- ✅ Only static marketing pages will work

**To export static site:**

1. Update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable features that require server
  trailingSlash: true,
};

export default nextConfig;
```

2. Build static export:
```bash
npm run build
```

3. Upload the `out` folder contents to Hostinger's `public_html` directory

**Limitations:**
- No admin panel
- No API routes
- No server-side features
- Newsletter/support forms won't work (need external service)

### Option 3: Use Vercel (Best Free Option)
Deploy to Vercel for free with full Next.js support:

```bash
cd deployment
npm install -g vercel
vercel --prod
```

Then point your Hostinger domain to Vercel:
1. In Hostinger DNS settings, add CNAME record:
   - Name: `www`
   - Value: `cname.vercel-dns.com`
2. Add A record:
   - Name: `@`
   - Value: `76.76.21.21`

### Option 4: Use Netlify (Free Alternative)
Similar to Vercel, Netlify offers free Next.js hosting:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Recommended Solution

**For DumpSack website with admin panel and full features:**

1. **Best:** Hostinger VPS ($4-8/month) - Full control, Node.js support
2. **Free:** Vercel (free tier) - Optimized for Next.js, easy deployment
3. **Alternative:** Netlify (free tier) - Similar to Vercel

**For static marketing site only (no admin):**
- Export to static HTML and use Hostinger shared hosting

## If You Choose Hostinger VPS

### Setup Steps:

1. **SSH into VPS:**
```bash
ssh root@your-vps-ip
```

2. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2:**
```bash
npm install -g pm2
```

4. **Upload deployment folder:**
```bash
# On your local machine
scp -r deployment root@your-vps-ip:/var/www/dumpsack
```

5. **Install dependencies and start:**
```bash
cd /var/www/dumpsack
npm install --production
pm2 start npm --name "dumpsack" -- start
pm2 save
pm2 startup
```

6. **Configure Nginx:**
```nginx
server {
    listen 80;
    server_name dumpsack.xyz www.dumpsack.xyz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Install SSL:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dumpsack.xyz -d www.dumpsack.xyz
```

## Need Help?

If you're unsure which option to choose, I recommend:
- **Vercel** (easiest, free, optimized for Next.js)
- **Hostinger VPS** (if you want to keep everything on Hostinger)

Let me know which option you'd like to proceed with!

