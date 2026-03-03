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
  const [theme, setTheme] = React.useState<'dark' | 'light'>(() => {
    const rootTheme = document.documentElement.getAttribute('data-theme');
    if (rootTheme === 'dark' || rootTheme === 'light') return rootTheme;

    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-selection-bg selection:text-selection-text transition-colors duration-400">
      {/* Static Background Elements — no continuous GPU paint */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 grid-bg" />

        {/* Ambient glow blobs — static, no animation */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] bg-accent-violet/[0.03] rounded-full blur-[60px]" />
      </div>

      <Navigation activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        {children}
      </main>

      <footer className="relative z-10 py-20 border-t border-border bg-nav-bg backdrop-blur-3xl">
        <div className="container-progressive grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="text-accent-cyan shadow-[0_0_15px_#00E6FF]" size={24} />
              <span className="font-orbitron font-black tracking-tighter text-xl text-glow-cyan">MANI VARMA</span>
            </div>
            <p className="text-text-secondary/60 text-sm leading-relaxed">
              Elite Cybersecurity Authority specializing in advanced penetration testing and vulnerability research.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest text-text-secondary/80 mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm text-text-secondary/60">
              <li><a href="/#home" className="hover:text-accent-cyan transition-colors">Home</a></li>
              <li><a href="/#skills" className="hover:text-accent-cyan transition-colors">Skills</a></li>
              <li><a href="/#operational-outputs" className="hover:text-accent-cyan transition-colors">Projects</a></li>
              <li><a href="/blog" className="hover:text-accent-cyan transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest text-text-secondary/80 mb-6 uppercase">Legal</h4>
            <ul className="space-y-4 text-sm text-text-secondary/60">
              <li><a href="/privacy" className="hover:text-accent-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="/about" className="hover:text-accent-cyan transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-accent-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest text-text-secondary/80 mb-6 uppercase">System Protocol</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-accent-cyan">
                <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_8px_#00E6FF]" />
                <span className="font-mono tracking-tighter">NODE_ACTIVE // SECURE_LINK_ESTABLISHED</span>
              </div>
              <div className="text-[10px] font-mono text-text-secondary/20 uppercase tracking-widest">
                VER: 4.2.0_LUXURY_CORE
              </div>
            </div>
          </div>
        </div>

        <div className="container-progressive mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-text-secondary uppercase tracking-[0.3em]">
            &copy; 2025 // SECURED OPERATIVE ARCHITECTURE // ALL DATA VERIFIED
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/manikantavarmag" target="_blank" rel="noopener noreferrer" className="text-text-secondary/20 hover:text-accent-cyan transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </footer>
      <FestivalEngine />
    </div>
  );
};
