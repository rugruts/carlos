import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Download } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found - DumpSack';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container-custom max-w-2xl text-center">
        <div className="card p-12 md:p-16">
          {/* 404 Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 mb-8">
            <span className="text-4xl font-black text-toxic">404</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 text-white">
            Nothing but trash here.
          </h1>

          {/* Subcopy */}
          <p className="text-lg text-muted mb-10 max-w-md mx-auto">
            This page doesn't exist in the dumpster. Head back to safety or grab
            the wallet.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              to="/download"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
