import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Shield, Lock, Cpu, Globe, FileText, ArrowRight } from 'lucide-react';
import { FestivalEngine } from './FestivalEngine';
import { blogPosts } from '../data/blogPosts';

interface LayoutProps {
  children: React.ReactNode;
  activeSection?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection = 'home' }) => {
  const latestPost = blogPosts[0];

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-selection-bg selection:text-selection-text transition-colors duration-400">
      {/* Fixed Background — circuit + deep red ambient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Circuit line pattern */}
        <div className="absolute inset-0 circuit-bg opacity-100" />
        {/* Grid lines */}
        <div className="absolute inset-0 grid-bg" />

        {/* Deep red radial ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.18) 0%, transparent 70%)' }} />
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(180,20,0,0.08) 0%, transparent 65%)' }} />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.08) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(100,5,5,0.12) 0%, transparent 70%)' }} />

        {/* Vertical red edge accents */}
        <div className="absolute top-0 left-0 w-[2px] h-full"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(204,34,0,0.4), transparent)' }} />
        <div className="absolute top-0 right-0 w-[2px] h-full"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(204,34,0,0.4), transparent)' }} />
      </div>

      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-20 border-t"
        style={{ borderColor: 'rgba(180,30,20,0.2)', background: 'rgba(8,0,0,0.92)' }}>
        <div className="container-progressive grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="text-accent-cyan" size={24}
                style={{ filter: 'drop-shadow(0 0 8px rgba(204,34,0,0.7))' }} />
              <span className="font-orbitron font-black tracking-tighter text-xl text-glow-red"
                style={{ color: '#f1e8e8' }}>MANI VARMA</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed" style={{ maxWidth: '28ch' }}>
              Elite Cybersecurity Authority specializing in advanced penetration testing and vulnerability research.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest mb-6 uppercase"
              style={{ color: 'rgba(204,34,0,0.8)' }}>Quick Links</h4>
            <ul className="space-y-4 text-sm" style={{ color: 'rgba(168,144,144,0.8)' }}>
              <li><Link to="/#home" className="hover:text-accent-cyan transition-colors">Home</Link></li>
              <li><Link to="/#skills" className="hover:text-accent-cyan transition-colors">Skills</Link></li>
              <li><Link to="/#operational-outputs" className="hover:text-accent-cyan transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-accent-cyan transition-colors">Blog Repository</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-xs tracking-widest mb-6 uppercase"
              style={{ color: 'rgba(204,34,0,0.8)' }}>Legal</h4>
            <ul className="space-y-4 text-sm" style={{ color: 'rgba(168,144,144,0.8)' }}>
              <li><Link to="/privacy" className="hover:text-accent-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-accent-cyan transition-colors">About Operative</Link></li>
              <li><Link to="/contact" className="hover:text-accent-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-orbitron font-bold text-xs tracking-widest mb-6 uppercase"
              style={{ color: 'rgba(204,34,0,0.8)' }}>Latest Research</h4>
            <Link
              to={`/blog/${latestPost.slug}`}
              className="group block p-5 rounded-2xl transition-all"
              style={{
                background: 'rgba(25,5,5,0.6)',
                border: '1px solid rgba(180,30,20,0.15)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,34,0,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(180,30,20,0.15)')}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[8px] font-mono uppercase tracking-widest font-black"
                  style={{ color: '#cc2200' }}>
                  <FileText size={12} />
                  <span>New Whitepaper</span>
                </div>
                <h5 className="text-[11px] font-orbitron font-bold text-text-primary group-hover:text-accent-cyan transition-colors leading-tight uppercase line-clamp-2">
                  {latestPost.title}
                </h5>
                <div className="flex items-center gap-2 text-[8px] font-mono text-text-secondary uppercase tracking-[0.2em] group-hover:text-accent-cyan transition-colors">
                  READ ARTICLE <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="container-progressive mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: '1px solid rgba(180,30,20,0.15)' }}>
          <p className="text-[10px] font-mono uppercase tracking-[0.3em]"
            style={{ color: 'rgba(168,144,144,0.6)' }}>
            &copy; 2025 // SECURED OPERATIVE ARCHITECTURE // ALL DATA VERIFIED
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/manikantavarmag" target="_blank" rel="noopener noreferrer"
              className="transition-colors hover:text-accent-cyan"
              style={{ color: 'rgba(168,144,144,0.25)' }}>
              <Globe size={18} />
            </a>
          </div>
        </div>
      </footer>
      <FestivalEngine />
    </div>
  );
};
