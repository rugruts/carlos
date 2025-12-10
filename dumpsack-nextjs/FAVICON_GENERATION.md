# Favicon Generation Guide

## Current Status

✅ **favicon.svg** - Created in `/public/favicon.svg` (simplified version of logo)
✅ **logo.svg** - Available at `/public/logo.svg` (accessible at https://dumpsack.xyz/logo.svg for email templates)
✅ **Metadata** - Updated in `app/layout.tsx` to use favicon.svg

## Generate Additional Favicon Formats

To generate all required favicon formats (ICO, PNG, etc.), use one of these methods:

### Method 1: Online Generator (Recommended)

1. Go to https://realfavicongenerator.net/
2. Upload `/public/favicon.svg`
3. Configure settings:
   - iOS: 180x180
   - Android: 192x192, 512x512
   - Windows: 32x32, 16x16
4. Download the generated package
5. Extract files to `/public/`

### Method 2: Using Sharp (Node.js)

```bash
npm install sharp
node scripts/convert-favicon.js
```

### Method 3: Using ImageMagick

```bash
# Install ImageMagick first
# Then run:
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png
convert public/favicon.svg -resize 192x192 public/android-chrome-192x192.png
convert public/favicon.svg -resize 512x512 public/android-chrome-512x512.png

# Create ICO file
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico
```

## Required Files

After generation, you should have these files in `/public/`:

- ✅ `favicon.svg` (already created)
- ⏳ `favicon.ico` (16x16, 32x32, 48x48 combined)
- ⏳ `apple-touch-icon.png` (180x180)
- ⏳ `favicon-16x16.png`
- ⏳ `favicon-32x32.png`
- ⏳ `android-chrome-192x192.png`
- ⏳ `android-chrome-512x512.png`

## Email Template Logo

✅ **Logo is ready!** The logo is available at:
- Local: `/public/logo.svg`
- Production: `https://dumpsack.xyz/logo.svg`

All email templates can use `https://dumpsack.xyz/logo.svg` to display the DumpSack logo.

## Notes

- The favicon.svg is a simplified version of the logo optimized for small sizes
- The logo.svg is the full logo used for email templates and other purposes
- Both use the toxic green (#8EFF60) gradient and trash can icon design
- The metadata in `app/layout.tsx` is already configured to use these files

