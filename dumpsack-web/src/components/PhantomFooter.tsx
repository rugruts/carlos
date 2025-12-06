import { Link } from 'react-router-dom';
import { Trash2, Twitter, Github, Send } from 'lucide-react';

export default function PhantomFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, Array<{ label: string; href: string; icon?: any }>> = {
    Product: [
      { label: 'Download', href: '/download' },
      { label: 'Security', href: '/security' },
      { label: 'Support', href: '/support' },
      { label: 'Feature Requests', href: '/features' },
    ],
    Resources: [
      { label: 'Explore', href: '/explore' },
      { label: 'Learn', href: '/learn' },
      { label: 'Blog', href: '/blog' },
      { label: 'Docs', href: '/docs' },
      { label: 'Taxes', href: '/taxes' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
    ],
    Socials: [
      { label: 'X.com', href: 'https://x.com', icon: Twitter },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'YouTube', href: 'https://youtube.com' },
      { label: 'Reddit', href: 'https://reddit.com' },
      { label: 'Podcast', href: '/podcast' },
    ],
  };

  return (
    <footer className="bg-void pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        
        {/* Newsletter Section */}
        <div className="bg-card/30 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-black" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Enter your email</h3>
            <p className="text-dsMuted text-sm">Sign up for our newsletter and join the growing Phantom community.</p>
          </div>

          <div className="w-full md:w-auto">
             <button className="btn-primary w-full md:w-auto px-8 py-3 rounded-full text-sm font-bold">
               Sign up
             </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-dsMuted uppercase tracking-wider mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-white/70 hover:text-toxic transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-dsMuted" />
             <span className="text-xs font-bold text-dsMuted uppercase tracking-wider">Operational</span>
          </div>
          
          <div className="text-xs text-dsMuted">
            © Phantom {currentYear}
          </div>

          <div className="flex gap-6">
            <Link to="/terms" className="text-xs text-dsMuted hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-dsMuted hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}