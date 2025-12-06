import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/Section';
import { Download, Image, Package, Type, Check, X } from 'lucide-react';

export default function BrandAssets() {
  useEffect(() => {
    document.title = 'Brand Assets - DumpSack';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <Section spacing="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="mb-6">Brand Assets</h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            Use these assets to represent DumpSack consistently.
          </p>
        </motion.div>
      </Section>

      {/* Downloads */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Downloads"
          title="LOGOS & ASSETS"
          description="High-quality assets for print, web, and digital use."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Logo SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-hover p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 mb-6">
              <Image className="w-10 h-10 text-toxic" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3">Logo (SVG)</h3>
            <p className="text-sm text-dsMuted mb-6">
              Vector logo in SVG format. Scalable for any size.
            </p>
            <a
              href="/assets/logo.svg"
              download
              className="btn-primary w-full"
              aria-label="Download DumpSack logo SVG"
            >
              <Download className="w-5 h-5" />
              Download
            </a>
          </motion.div>

          {/* App Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-hover p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/30 mb-6">
              <Package className="w-10 h-10 text-orange" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3">App Icons</h3>
            <p className="text-sm text-dsMuted mb-6">
              iOS, Android, and web app icons in all sizes.
            </p>
            <button
              disabled
              className="btn-secondary w-full opacity-50 cursor-not-allowed"
              aria-label="App icons coming soon"
            >
              Coming Soon
            </button>
          </motion.div>

          {/* Mascot Pack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-hover p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 mb-6">
              <Image className="w-10 h-10 text-toxic" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3">Mascot Pack</h3>
            <p className="text-sm text-dsMuted mb-6">
              Character illustrations and stickers.
            </p>
            <button
              disabled
              className="btn-secondary w-full opacity-50 cursor-not-allowed"
              aria-label="Mascot pack coming soon"
            >
              Coming Soon
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Color Swatches */}
      <Section spacing="large">
        <SectionHeader
          subtitle="Colors"
          title="BRAND PALETTE"
          description="Official DumpSack colors for consistent branding."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Toxic Green */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div
              className="w-full h-24 rounded-lg mb-4"
              style={{ backgroundColor: '#8EFF60' }}
            />
            <h3 className="text-lg font-bold mb-1">Toxic Green</h3>
            <p className="text-sm text-dsMuted font-mono">#8EFF60</p>
            <p className="text-xs text-dsMuted mt-2">Primary brand color</p>
          </motion.div>

          {/* Orange */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card p-6"
          >
            <div
              className="w-full h-24 rounded-lg mb-4"
              style={{ backgroundColor: '#FF7A1A' }}
            />
            <h3 className="text-lg font-bold mb-1">Degen Orange</h3>
            <p className="text-sm text-dsMuted font-mono">#FF7A1A</p>
            <p className="text-xs text-dsMuted mt-2">Secondary accent</p>
          </motion.div>

          {/* Base */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div
              className="w-full h-24 rounded-lg mb-4 border border-stroke"
              style={{ backgroundColor: '#081008' }}
            />
            <h3 className="text-lg font-bold mb-1">Base</h3>
            <p className="text-sm text-dsMuted font-mono">#081008</p>
            <p className="text-xs text-dsMuted mt-2">Background</p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card p-6"
          >
            <div
              className="w-full h-24 rounded-lg mb-4 border border-stroke"
              style={{ backgroundColor: '#0A120A' }}
            />
            <h3 className="text-lg font-bold mb-1">Card</h3>
            <p className="text-sm text-dsMuted font-mono">#0A120A</p>
            <p className="text-xs text-dsMuted mt-2">Surface</p>
          </motion.div>

          {/* Stroke */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6"
          >
            <div
              className="w-full h-24 rounded-lg mb-4 border border-stroke"
              style={{ backgroundColor: '#142014' }}
            />
            <h3 className="text-lg font-bold mb-1">Stroke</h3>
            <p className="text-sm text-dsMuted font-mono">#142014</p>
            <p className="text-xs text-dsMuted mt-2">Borders</p>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card p-6"
          >
            <div
              className="w-full h-24 rounded-lg mb-4 border border-stroke"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <h3 className="text-lg font-bold mb-1">Text</h3>
            <p className="text-sm text-dsMuted font-mono">#FFFFFF</p>
            <p className="text-xs text-dsMuted mt-2">Primary text</p>
          </motion.div>
        </div>
      </Section>

      {/* Typography */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Typography"
          title="FONT FAMILIES"
          description="Official typefaces used in DumpSack branding."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <Type className="w-8 h-8 text-toxic mb-4" strokeWidth={2} />
            <h3 className="text-xl font-black uppercase mb-2">Inter</h3>
            <p className="text-sm text-dsMuted mb-4">
              Primary typeface for headings and body text.
            </p>
            <p className="text-2xl font-black">ABCDEFGHIJKLM</p>
            <p className="text-lg">abcdefghijklm</p>
            <p className="text-sm text-dsMuted mt-2">0123456789</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8"
          >
            <Type className="w-8 h-8 text-orange mb-4" strokeWidth={2} />
            <h3 className="text-xl font-black uppercase mb-2">
              JetBrains Mono
            </h3>
            <p className="text-sm text-dsMuted mb-4">
              Monospace font for code and technical content.
            </p>
            <p className="text-2xl font-mono font-bold">ABCDEFGHIJKLM</p>
            <p className="text-lg font-mono">abcdefghijklm</p>
            <p className="text-sm text-dsMuted font-mono mt-2">0123456789</p>
          </motion.div>
        </div>
      </Section>

      {/* Usage Rules */}
      <Section spacing="large">
        <SectionHeader
          subtitle="Guidelines"
          title="USAGE RULES"
          description="Keep the brand consistent with these simple do's and don'ts."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-toxic/20 border-2 border-toxic flex items-center justify-center">
                <Check className="w-6 h-6 text-toxic" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black uppercase">Do</h3>
            </div>
            <ul className="space-y-3 text-sm text-dsMuted">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-toxic flex-shrink-0 mt-0.5" />
                <span>Use the official logo files provided</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-toxic flex-shrink-0 mt-0.5" />
                <span>Maintain clear space around the logo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-toxic flex-shrink-0 mt-0.5" />
                <span>Use brand colors from the official palette</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-toxic flex-shrink-0 mt-0.5" />
                <span>Keep glow effects subtle and tasteful</span>
              </li>
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange/20 border-2 border-orange flex items-center justify-center">
                <X className="w-6 h-6 text-orange" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black uppercase">Don't</h3>
            </div>
            <ul className="space-y-3 text-sm text-dsMuted">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>Warp, stretch, or distort the logo</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>Change the logo colors or add gradients</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>Place the logo on busy backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>Use unofficial fonts or color variations</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
