import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Shield, Lock, Cpu, Globe, FileText, ArrowRight, Linkedin, Github } from 'lucide-react';
import { FestivalEngine } from './FestivalEngine';
import { blogPosts } from '../data/blogPosts';

interface LayoutProps {
  children: React.ReactNode;
  activeSection?: string;
  theme: 'dark' | 'light';
  themeMode: 'dark' | 'light' | 'auto';
  toggleTheme: (mode?: 'dark' | 'light' | 'auto') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection = 'home', theme, themeMode, toggleTheme }) => {
  const latestPost = blogPosts[0];

  return (
    <div className="relative min-h-screen text-text-primary selection:bg-accent-primary selection:text-white transition-colors duration-400"
      style={{ background: 'var(--bg-primary)' }}>
      {/* Wayland Transition Overlay */}
      <div className="wayland-transition-overlay" aria-hidden="true" />

      {/* Wallpaper crossfade layer (light/dark) */}
      <div className="fixed inset-0 wallpaper-layer pointer-events-none z-[-1]" aria-hidden="true">
        <div className="wp-light" />
        <div className="wp-dark" />
      </div>

      {/* Fixed Background — circuit + blueprint ambient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Circuit line pattern */}
        <div className="absolute inset-0 circuit-bg opacity-[0.05]" />

        {/* Cinematic ambient lights — Cyber Purple */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.15 }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1), transparent 70%)', opacity: 0.1 }} />

        {/* Subtle cyber graphics: Vertical glowing lines */}
        <div className="absolute left-[10%] top-0 bottom-0 w-px opacity-20"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--accent-primary), transparent)' }} />
        <div className="absolute right-[10%] top-0 bottom-0 w-px opacity-15"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--accent-secondary), transparent)' }} />
      </div>

      <Navigation activeSection={activeSection} theme={theme} themeMode={themeMode} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-32 border-t border-border-color py-20 overflow-hidden"
        style={{ borderColor: 'var(--border-color)', background: 'var(--bg-nav)' }}>

        <div className="container-progressive relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
            <div className="space-y-6 md:space-y-8 col-span-1 md:col-span-1">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-all group-hover:scale-110"
                  style={{ background: 'var(--accent-glow-subtle)', border: '1px solid var(--border-color)' }}>
                  <img src="/shield.svg" alt="Mani Varma Logo" className="w-full h-full object-contain"
                    style={{ filter: 'drop-shadow(0 0 8px var(--accent-glow))' }} />
                </div>
                <div>
                  <div className="text-xl font-orbitron font-black tracking-tight text-text-primary uppercase italic leading-none">V A R M A</div>
                  <div className="text-[8px] font-mono tracking-[0.4em] text-text-muted uppercase mt-1">SECURITY_ARCHITECT</div>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                Securing digital frontiers through advanced research and tactical operation.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="font-orbitron font-black text-[11px] uppercase tracking-[0.3em]"
                style={{ color: 'var(--accent-primary)' }}>Quick Links</h4>
              <ul className="space-y-4 text-sm text-text-muted">
                <li><Link to="/#experience" className="hover:text-accent-primary transition-colors">Experience</Link></li>
                <li><Link to="/#skills" className="hover:text-accent-primary transition-colors">Skills</Link></li>
                <li><Link to="/blog" className="hover:text-accent-primary transition-colors">Research</Link></li>
                <li><Link to="/#contact" className="hover:text-accent-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-orbitron font-black text-[11px] uppercase tracking-[0.3em]"
                style={{ color: 'var(--accent-primary)' }}>Legal</h4>
              <ul className="space-y-4 text-sm text-text-muted">
                <li><Link to="/privacy" className="hover:text-accent-primary transition-colors">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-accent-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent-primary transition-colors">Disclosure</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-orbitron font-black text-[11px] uppercase tracking-[0.3em]"
                style={{ color: 'var(--accent-primary)' }}>Latest Research</h4>
              {latestPost && (
                <Link to={`/blog/${latestPost.slug}`} className="block group">
                  <div className="p-5 rounded-2xl transition-all border group-hover:border-accent-primary"
                    style={{
                      background: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-accent-primary uppercase tracking-[0.2em]">New Whitepaper</span>
                    </div>
                    <div className="text-xs font-orbitron font-black text-text-primary uppercase group-hover:text-accent-primary transition-colors line-clamp-2 leading-relaxed">
                      {latestPost.title}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
            style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-text-muted text-center md:text-left">
              © {new Date().getFullYear()} G. MANIKANTA VARMA • ELITE SECURITY RESEARCHER
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/manikantavarmag" target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
                <Github size={18} />
              </a>
              <div className="h-4 w-px bg-border-color mx-2" />
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-text-muted opacity-40">
                <Globe size={12} />
                <span>HYD_IN // CLASSIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FestivalEngine />
    </div>
  );
};
