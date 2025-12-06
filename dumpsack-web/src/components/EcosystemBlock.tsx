import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EcosystemBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
  accentColor?: 'toxic' | 'orange';
  delay?: number;
}

export default function EcosystemBlock({
  icon: Icon,
  title,
  description,
  link,
  accentColor = 'toxic',
  delay = 0,
}: EcosystemBlockProps) {
  const iconColor = accentColor === 'toxic' ? 'text-toxic' : 'text-orange';
  const linkColor = accentColor === 'toxic' ? 'text-toxic' : 'text-orange';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="card h-full p-8 hover:scale-105 transition-transform duration-300">
        {/* Icon */}
        <div className="mb-6">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-${accentColor}/20 to-${accentColor}/5 border border-${accentColor}/30`}
          >
            <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black uppercase mb-3 text-white tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-dsMuted leading-relaxed mb-4 text-sm">
          {description}
        </p>

        {/* Optional Link */}
        {link && (
          <Link
            to={link.href}
            className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide ${linkColor} hover:underline transition-colors`}
          >
            {link.label}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
