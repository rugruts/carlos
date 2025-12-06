# 🗑️ DumpSack - The Degen Wallet

**The only wallet built for Gorbagana and Solana trashchains.**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

## 📦 Scripts

- `npm run dev` - Start Vite development server with hot reload
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Architecture

### Tech Stack

- **Vite** - Lightning-fast build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router v7** - Client-side routing
- **TailwindCSS 3** - Utility-first styling
- **Framer Motion** - Animations
- **lucide-react** - Icon library

### Project Structure

```
dumpsack-web/
├── public/
│   ├── assets/          # Logo, images
│   ├── icons/           # App icons
│   ├── screens/         # Screenshots
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── DownloadButtons.tsx
│   ├── pages/           # Route pages
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── Download.tsx
│   │   ├── Gorbagana.tsx
│   │   ├── Developers.tsx
│   │   ├── BrandAssets.tsx
│   │   ├── Blog.tsx
│   │   └── Support.tsx
│   ├── App.tsx          # Root layout component
│   ├── router.tsx       # Route configuration
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles + Tailwind
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind theme
├── tsconfig.json        # TypeScript config
└── package.json
```

## 🎨 Design System

### Brand Colors

- **Toxic Green**: `#8EFF60` - Primary brand color
- **Degen Orange**: `#FF7A1A` - Accent color
- **Base**: `#081008` - Background
- **Card**: `#0A120A` - Surface color
- **Stroke**: `#142014` - Border color

### CSS Utilities

- `.container-custom` - Max-width container with padding
- `.section-spacing` - Consistent vertical spacing
- `.card` - Base card style
- `.card-hover` - Card with animated border on hover
- `.toxic-ring` - Neon ring effect
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary outlined button
- `.btn-ghost` - Minimal text button

### Typography

- **Headings**: Uppercase, bold, tight letter-spacing
- **Body**: Zinc-400/500 for muted text
- **Font Scale**: Responsive with `clamp()`

## 🌐 Routes

- `/` - Homepage (hero + features + ecosystem)
- `/features` - Feature showcase
- `/download` - Download page
- `/gorbagana` - Gorbagana integration info
- `/developers` - Developer documentation
- `/brand-assets` - Brand assets & guidelines
- `/blog` - Blog posts
- `/support` - Support & FAQs

## 🔧 Environment Variables

Create a `.env` file (optional):

```env
VITE_IOS_URL=https://apps.apple.com/app/idXXXXXXXXX
VITE_ANDROID_URL=https://play.google.com/store/apps/details?id=xxxx
VITE_CHROME_URL=https://chrome.google.com/webstore/detail/xxxx
VITE_TWITTER_URL=https://twitter.com/dumpsack
VITE_GITHUB_URL=https://github.com/dumpsack
VITE_STATUS_URL=https://status.dumpsack.xyz
```

## 📝 Phase 1 Status

✅ Project scaffolding complete  
✅ Routing configured  
✅ Global theme & design system  
✅ Layout components (Navbar, Footer)  
✅ Page shells created  
✅ Dark mode brutalist aesthetic  

**Next Phase**: Content population, animations, interactions

## 🛠️ Development

This project uses:
- **Path aliases**: `@/*` maps to `./src/*`
- **ESLint**: Code quality
- **Prettier**: Code formatting
- **TypeScript strict mode**: Type safety

## 📄 License

ISC

---

**Built with 🗑️ by the DumpSack team**

