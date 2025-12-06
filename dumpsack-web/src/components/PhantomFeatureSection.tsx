import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PhantomFeatureSectionProps {
  title: ReactNode;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'center';
  backgroundColor?: string;
  textColor?: string;
  children?: ReactNode;
}

export default function PhantomFeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'center',
  backgroundColor = 'transparent',
  textColor = 'text-white',
  children
}: PhantomFeatureSectionProps) {
  
  const isCenter = imagePosition === 'center';
  const isRight = imagePosition === 'right';

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden ${backgroundColor}`}>
      <div className="container-custom">
        
        {/* Center Layout (like "Keep everything in one place") */}
        {isCenter && (
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <h2 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${textColor}`}>
                {title}
              </h2>
              {description && (
                <p className="text-xl text-dsMuted max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </motion.div>

            {imageSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-md md:max-w-lg aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-card/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />
                <img 
                  src={imageSrc} 
                  alt={imageAlt || "Feature illustration"} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
            
            {children}
          </div>
        )}

        {/* Side-by-Side Layout (if needed later, though Phantom uses mostly center stacked cards) */}
        {!isCenter && (
          <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isRight ? '' : 'md:flex-row-reverse'}`}>
             {/* Content */}
             <div className="flex-1 text-center md:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}
                >
                  {title}
                </motion.h2>
                {description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-dsMuted"
                  >
                    {description}
                  </motion.p>
                )}
                {children}
             </div>

             {/* Image */}
             <div className="flex-1 w-full">
                {imageSrc && (
                  <motion.div
                    initial={{ opacity: 0, x: isRight ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
                  </motion.div>
                )}
             </div>
          </div>
        )}

      </div>
    </section>
  );
}