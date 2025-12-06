import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trash2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModernNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/gorbagana', label: 'Gorbagana' },
    { href: '/developers', label: 'Developers' },
    { href: '/brand-assets', label: 'Brand' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-void/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Trash2 className="w-8 h-8 text-toxic group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight">DumpSack</span>
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1 px-3 py-2"
              >
                {link.label}
                {['Features', 'Learn', 'Company'].includes(link.label) && (
                  <ChevronDown className="w-3 h-3 opacity-50" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-white/70"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>

            <Link
              to="/download"
              className="inline-flex bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Download
            </Link>

            {/* Mobile Menu Toggle - Hidden for now */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hidden p-2 text-white/80 hover:text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Hidden for now */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="hidden fixed inset-0 z-40 bg-void pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-2xl font-bold text-white/90 hover:text-toxic transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <Link
                to="/download"
                className="btn-primary w-full justify-center py-4 text-lg"
              >
                Download DumpSack
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}