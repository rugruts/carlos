import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/Section';
import {
  Smartphone,
  Chrome,
  Apple,
  Download as DownloadIcon,
  QrCode,
  Shield,
  HardDrive,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Download() {
  useEffect(() => {
    document.title = 'Download - DumpSack';
  }, []);

  const iosUrl = import.meta.env.VITE_IOS_URL;
  const androidUrl = import.meta.env.VITE_ANDROID_URL;
  const chromeUrl = import.meta.env.VITE_CHROME_URL;

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
          <h1 className="mb-6">Download DumpSack</h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            Pick your platform and get moving.
          </p>
        </motion.div>
      </Section>

      {/* Platform Cards */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Get Started"
          title="CHOOSE YOUR PLATFORM"
          description="DumpSack is available on all major platforms. Download now and start managing your portfolio."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* iOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-hover p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 mb-6">
              <Apple className="w-10 h-10 text-toxic" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3">iOS</h3>
            <p className="text-sm text-dsMuted mb-6">
              Download from the App Store for iPhone and iPad.
            </p>
            {iosUrl ? (
              <a
                href={iosUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full"
                aria-label="Download DumpSack for iOS"
              >
                <DownloadIcon className="w-5 h-5" />
                Download
              </a>
            ) : (
              <button
                disabled
                className="btn-secondary w-full opacity-50 cursor-not-allowed"
                aria-label="iOS version coming soon"
              >
                Coming Soon
              </button>
            )}
          </motion.div>

          {/* Android */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-hover p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange/20 to-orange/5 border border-orange/30 mb-6">
              <Smartphone className="w-10 h-10 text-orange" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3">Android</h3>
            <p className="text-sm text-dsMuted mb-6">
              Get it on Google Play for Android devices.
            </p>
            {androidUrl ? (
              <a
                href={androidUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full"
                aria-label="Download DumpSack for Android"
              >
                <DownloadIcon className="w-5 h-5" />
                Download
              </a>
            ) : (
              <button
                disabled
                className="btn-secondary w-full opacity-50 cursor-not-allowed"
                aria-label="Android version coming soon"
              >
                Coming Soon
              </button>
            )}
          </motion.div>

          {/* Chrome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-hover p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 mb-6">
              <Chrome className="w-10 h-10 text-toxic" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3">Chrome</h3>
            <p className="text-sm text-dsMuted mb-6">
              Install the browser extension for desktop.
            </p>
            {chromeUrl ? (
              <a
                href={chromeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full"
                aria-label="Download DumpSack Chrome Extension"
              >
                <DownloadIcon className="w-5 h-5" />
                Add to Chrome
              </a>
            ) : (
              <button
                disabled
                className="btn-secondary w-full opacity-50 cursor-not-allowed"
                aria-label="Chrome extension coming soon"
              >
                Coming Soon
              </button>
            )}
          </motion.div>
        </div>
      </Section>

      {/* QR Block */}
      <Section spacing="large">
        <div className="card p-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 mb-6">
            <QrCode className="w-8 h-8 text-toxic" strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-black uppercase mb-4">
            Scan to Download
          </h2>
          <p className="text-dsMuted mb-8 max-w-xl mx-auto">
            Scan the QR code with your mobile device to quickly download
            DumpSack from your device's app store.
          </p>
          <div className="inline-block p-8 bg-white rounded-xl">
            <div className="w-48 h-48 bg-stroke flex items-center justify-center text-dsMuted text-sm">
              QR Code Placeholder
            </div>
          </div>
        </div>
      </Section>

      {/* Install Tips */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Getting Started"
          title="INSTALLATION TIPS"
          description="Quick tips to get you up and running smoothly."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <Shield className="w-8 h-8 text-toxic mb-4" strokeWidth={2} />
            <h3 className="text-lg font-bold mb-2">Grant Permissions</h3>
            <p className="text-sm text-dsMuted">
              Allow DumpSack to access your device's secure storage for wallet
              management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <HardDrive className="w-8 h-8 text-orange mb-4" strokeWidth={2} />
            <h3 className="text-lg font-bold mb-2">Backup Your Seed</h3>
            <p className="text-sm text-dsMuted">
              Write down your recovery phrase and store it securely offline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6"
          >
            <DownloadIcon className="w-8 h-8 text-toxic mb-4" strokeWidth={2} />
            <h3 className="text-lg font-bold mb-2">Keep Updated</h3>
            <p className="text-sm text-dsMuted">
              Enable auto-updates to get the latest features and security
              patches.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-dsMuted mb-4">Need help getting started?</p>
          <Link to="/support" className="btn-secondary">
            Visit Support Center
          </Link>
        </div>
      </Section>
    </>
  );
}
