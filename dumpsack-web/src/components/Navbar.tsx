import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { iconSizes, iconStroke } from '@/lib/iconConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/download', label: 'Download' },
    { href: '/gorbagana', label: 'Gorbagana' },
    { href: '/developers', label: 'Developers' },
    { href: '/brand-assets', label: 'Brand' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
  ];

  const githubUrl = import.meta.env.VITE_GITHUB_URL || '#';
  const twitterUrl = import.meta.env.VITE_TWITTER_URL || '#';

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-custom transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 border-stroke shadow-lg h-16'
          : 'bg-black/50 border-transparent h-20'
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform"
        >
          <span className="text-toxic">DUMP</span>
          <span className="text-white">SACK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-sm font-bold uppercase tracking-wide transition-colors group ${
                  isActive ? 'text-toxic' : 'text-dsMuted hover:text-toxic'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-toxic"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-toxic scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dsMuted hover:text-toxic transition-colors p-2 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={iconSizes.md} strokeWidth={iconStroke.default} />
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dsMuted hover:text-toxic transition-colors p-2 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={iconSizes.md} strokeWidth={iconStroke.default} />
            </a>
          </div>

          {/* CTA Button */}
          <Link
            to="/download"
            className="btn-primary hidden md:inline-flex text-sm"
          >
            Get App
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden text-white p-2 hover:text-toxic transition-colors"
          >
            {mobileMenuOpen ? (
              <X size={iconSizes.lg} strokeWidth={iconStroke.default} />
            ) : (
              <Menu size={iconSizes.lg} strokeWidth={iconStroke.default} />
            )}
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={shouldReduceMotion ? undefined : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'show'}
            exit={shouldReduceMotion ? undefined : 'exit'}
            variants={variants.mobileMenu}
            className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-glass backdrop-blur-xl border-t border-glass-border overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(10, 18, 10, 0.95) 0%, rgba(4, 6, 4, 0.98) 100%)',
              boxShadow: 'inset 0 1px 0 0 rgba(142, 255, 96, 0.1), 0 8px 32px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Subtle Grid Background */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(142, 255, 96, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(142, 255, 96, 0.1) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Content */}
            <div className="relative z-10 container-custom py-8 flex flex-col h-full">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block text-xl font-bold py-3 px-4 rounded-lg transition-all ${
                        isActive
                          ? 'text-toxic bg-toxic-faint'
                          : 'text-white hover:text-toxic hover:bg-toxic-faint/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Large Neon CTA */}
              <div className="pt-6 border-t border-glass-border">
                <Link
                  to="/download"
                  className="btn-primary w-full justify-center text-lg py-4"
                  style={{
                    boxShadow: '0 0 24px rgba(142, 255, 96, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  Get DumpSack
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
