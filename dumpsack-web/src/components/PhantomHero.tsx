import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhantomHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dsMuted text-lg md:text-xl mb-8 font-medium tracking-wide"
          >
            The crypto wallet that'll take you places
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]"
          >
            Your <span className="text-toxic inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default">trusted</span><br />
            companion
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <Link
              to="/download"
              className="btn-primary text-lg px-8 py-4 rounded-full shadow-[0_0_40px_rgba(142,255,96,0.3)] hover:shadow-[0_0_60px_rgba(142,255,96,0.5)] transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download DumpSack
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Placeholder for the main hero image/mockup */}
            <div className="aspect-[16/9] bg-card/50 backdrop-blur-xl rounded-t-3xl border-t border-x border-glass-border shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-[url('/mockups/wallet-hero.svg')] bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105" />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
               
               {/* Floating Elements Animation */}
               <div className="absolute top-1/4 left-10 w-16 h-16 bg-toxic/20 rounded-full blur-xl animate-pulse-slow" />
               <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow delay-700" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-toxic/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000" />
      </div>
    </section>
  );
}