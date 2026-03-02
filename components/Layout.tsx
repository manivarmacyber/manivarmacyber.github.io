import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { Shield, Lock, Cpu, Globe } from 'lucide-react';
import { FestivalEngine } from './FestivalEngine';

interface LayoutProps {
  children: React.ReactNode;
  activeSection?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection = 'home' }) => {
  return (
    <div className="relative min-h-screen bg-bg text-white selection:bg-accent-cyan selection:text-black">
      {/* 3D Background Elements - Cleaner Overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg opacity-5" />

        {/* Floating Luxury Blobs */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px]"
        />
      </div>

      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        {children}
      </main>

      <footer className="relative z-10 py-20 border-t border-white/5 bg-black/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="text-accent-cyan shadow-[0_0_15px_#00E6FF]" size={24} />
              <span className="font-orbitron font-black tracking-tighter text-xl text-glow-cyan">MANI VARMA</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Elite Cybersecurity Authority specializing in advanced penetration testing and vulnerability research.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest text-white/60 mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="/#home" className="hover:text-accent-cyan transition-colors">Home</a></li>
              <li><a href="/#skills" className="hover:text-accent-cyan transition-colors">Skills</a></li>
              <li><a href="/#operational-outputs" className="hover:text-accent-cyan transition-colors">Projects</a></li>
              <li><a href="/blog" className="hover:text-accent-cyan transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest text-white/60 mb-6 uppercase">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="/privacy" className="hover:text-accent-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="/about" className="hover:text-accent-cyan transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-accent-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest text-white/60 mb-6 uppercase">System Protocol</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-accent-cyan">
                <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_8px_#00E6FF]" />
                <span className="font-mono tracking-tighter">NODE_ACTIVE // SECURE_LINK_ESTABLISHED</span>
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                VER: 4.2.0_LUXURY_CORE
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            &copy; 2025 // SECURED OPERATIVE ARCHITECTURE // ALL DATA VERIFIED
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/manikantavarmag" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-accent-cyan transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </footer>
      <FestivalEngine />
    </div>
  );
};
