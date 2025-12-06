import React from 'react';
import ModernHero from '@/components/ModernHero';
import ModernFeatureGrid from '@/components/ModernFeatureGrid';
import ModernCard from '@/components/ModernCard';
import ModernButton from '@/components/ModernButton';
import ModernGrid from '@/components/ModernGrid';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import { ArrowRight, Zap, Shield, Smartphone, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernShowcase: React.FC = () => {
  const modernFeatures = [
    {
      id: 'modern-design',
      title: 'Modern Design System',
      description: 'Premium neon aesthetic with glassmorphism effects and smooth animations.',
      icon: <Zap className="w-6 h-6" />,
      accentColor: 'toxic' as const,
    },
    {
      id: 'responsive-grid',
      title: 'Responsive Grid System',
      description: 'Intelligent responsive layouts that adapt to all screen sizes seamlessly.',
      icon: <Smartphone className="w-6 h-6" />,
      accentColor: 'blue' as const,
    },
    {
      id: 'accessibility',
      title: 'Enhanced Accessibility',
      description: 'WCAG 2.1 AA compliant with keyboard navigation and screen reader support.',
      icon: <Shield className="w-6 h-6" />,
      accentColor: 'purple' as const,
    },
    {
      id: 'performance',
      title: 'Optimized Performance',
      description: 'Lazy loading, reduced motion support, and efficient animations.',
      icon: <Globe className="w-6 h-6" />,
      accentColor: 'orange' as const,
    },
    {
      id: 'developer-friendly',
      title: 'Developer Friendly',
      description: 'Clean, modular components with TypeScript support and comprehensive documentation.',
      icon: <Code className="w-6 h-6" />,
      accentColor: 'toxic' as const,
    },
    {
      id: 'future-ready',
      title: 'Future Ready',
      description: 'Built with modern web standards and ready for upcoming browser features.',
      icon: <ArrowRight className="w-6 h-6" />,
      accentColor: 'blue' as const,
    },
  ];

  return (
    <div className="bg-void text-white min-h-screen">
      {/* Modern Hero Section */}
      <ModernHero
        title="Modern UI/UX Showcase"
        subtitle="Experience the future of web design with our enhanced components and patterns"
        primaryAction={
          <ModernButton variant="primary" size="lg" href="/download">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </ModernButton>
        }
        secondaryAction={
          <ModernButton variant="outline" size="lg" href="/features">
            Explore Features
          </ModernButton>
        }
        overlayPattern="grid"
        accentColor="toxic"
      />

      {/* Modern Feature Grid */}
      <ModernFeatureGrid
        title="Modern UI Components"
        subtitle="Enhanced Design System"
        features={modernFeatures}
        columns={3}
      />

      {/* Responsive Container Demo */}
      <section className="py-20 bg-gradient-to-b from-void/50 to-void">
        <ResponsiveContainer maxWidth="xl" padding="lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Responsive Container System
            </h2>
            <p className="text-xl text-dsMuted max-w-3xl mx-auto">
              Our responsive container system automatically adapts to different screen sizes,
              providing optimal spacing and layout for all devices.
            </p>
          </div>

          {/* Modern Grid Demo */}
          <ModernGrid columns={3} gap="lg" animate="fade">
            <ModernCard
              title="Glassmorphism"
              description="Premium glass effects with subtle gradients and borders for depth."
              icon={<Zap className="w-6 h-6" />}
              accentColor="toxic"
              hoverEffect="glow"
            >
              <ModernButton variant="secondary" size="sm" className="mt-4">
                Learn More
              </ModernButton>
            </ModernCard>

            <ModernCard
              title="Smooth Animations"
              description="Enhanced motion system with modern easing curves and transitions."
              icon={<ArrowRight className="w-6 h-6" />}
              accentColor="blue"
              hoverEffect="lift"
            >
              <ModernButton variant="secondary" size="sm" className="mt-4">
                View Demo
              </ModernButton>
            </ModernCard>

            <ModernCard
              title="Accessibility First"
              description="Built-in accessibility features and keyboard navigation support."
              icon={<Shield className="w-6 h-6" />}
              accentColor="purple"
              hoverEffect="scale"
            >
              <ModernButton variant="secondary" size="sm" className="mt-4">
                Read Docs
              </ModernButton>
            </ModernCard>
          </ModernGrid>
        </ResponsiveContainer>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20">
        <ResponsiveContainer maxWidth="lg" padding="lg">
          <div className="card toxic-ring p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Ready to Modernize?</h2>
            <p className="text-xl text-dsMuted mb-8 max-w-2xl mx-auto">
              Upgrade your website with our modern UI/UX components and design patterns.
              Experience the difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/download" className="btn-primary">
                Download Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/features" className="btn-secondary">
                See All Features
              </Link>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ModernShowcase;