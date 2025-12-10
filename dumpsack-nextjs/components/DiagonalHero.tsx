'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface DiagonalHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  mockupSrc?: string;
  mockupAlt?: string;
}

export default function DiagonalHero({
  kicker,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  mockupSrc,
  mockupAlt = 'DumpSack Wallet',
}: DiagonalHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-void pt-[120px] pb-[120px]">
      {/* BASE LAYER: Void Black (#040604) */}
      
      {/* LAYER 1: Primary Neon Sweep */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { x: '-12%', opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg,
            rgba(142, 255, 96, 0.18) 0%,
            rgba(80, 200, 60, 0.12) 45%,
            rgba(0, 0, 0, 0) 100%
          )`,
        }}
      />

      {/* LAYER 2: Secondary Diffused Sweep */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { x: '-12%', opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg,
            rgba(142, 255, 96, 0.10) 0%,
            rgba(60, 255, 118, 0.05) 60%,
            transparent 100%
          )`,
        }}
      />

      {/* LAYER 3: Dark Counter-Slice */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { x: '-12%', opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0) 100%
          )`,
        }}
      />

      {/* LAYER 4: Plasma Glow Orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 30%, rgba(142, 255, 96, 0.25), transparent 60%),
            radial-gradient(circle at 80% 90%, rgba(142, 255, 96, 0.12), transparent 75%)
          `,
        }}
      />

      {/* Content Container */}
      <div className="container-custom relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left Side: Text + CTAs */}
        <div className="max-w-2xl">
          {kicker && (
            <motion.span
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="kicker mb-4 block"
            >
              {kicker}
            </motion.span>
          )}

          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mb-6"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="mb-8 max-w-[560px]"
              style={{
                fontSize: '1.25rem',
                opacity: 0.85,
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryAction || secondaryAction) && (
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {primaryAction}
              {secondaryAction}
            </motion.div>
          )}
        </div>

        {/* Right Side: Premium Angled Mockup */}
        {mockupSrc && (
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 60 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full h-auto"
              style={{
                transform: 'rotate(-8deg)',
                maxWidth: '100%',
                filter: 'drop-shadow(0 0 40px rgba(142, 255, 96, 0.45)) drop-shadow(0 0 120px rgba(142, 255, 96, 0.20))',
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [-3, 3, -3],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }
              }
            >
              <Image
                src={mockupSrc || '/mockups/wallet-hero.svg'}
                alt={mockupAlt}
                width={600}
                height={700}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Premium Diagonal Separator */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
          style={{ opacity: 0.05 }}
        >
          <polygon
            points="0,0 1200,80 1200,0"
            fill="rgba(255, 255, 255, 0.03)"
          />
        </svg>
      </div>
    </section>
  );
}

