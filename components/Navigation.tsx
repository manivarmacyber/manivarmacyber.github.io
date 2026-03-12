import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, MessageSquare, Briefcase, ShieldAlert, Globe, BookOpen, Fingerprint, Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
  theme: 'dark' | 'light';
  themeMode: 'dark' | 'light' | 'auto';
  toggleTheme: (mode?: 'dark' | 'light' | 'auto') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, theme, themeMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { id: 'home', label: 'HOME', icon: Terminal, path: '/' },
    { id: 'experience', label: 'EXPERIENCE', icon: ShieldAlert, path: '/#experience' },
    { id: 'skills', label: 'SKILLS', icon: Cpu, path: '/#skills' },
    { id: 'operational-outputs', label: 'PROJECTS', icon: Briefcase, path: '/#operational-outputs' },
    { id: 'certifications', label: 'CREDENTIALS', icon: Shield, path: '/#certifications' },
  ];

  const secondaryNavItems = [
    { id: 'blog', label: 'BLOG', icon: Globe, path: '/blog' },
    { id: 'feedback', label: 'FEEDBACK', icon: MessageSquare, path: '/#feedback' },
    { id: 'contact', label: 'CONTACT', icon: Fingerprint, path: '/#contact' },
  ];

  const handleNavClick = (id: string, path: string) => {
    if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavItem = ({ item, isActive }: { item: any; isActive: boolean }) => (
    <Link
      key={item.id}
      to={item.path}
      onClick={() => handleNavClick(item.id, item.path)}
      aria-current={isActive ? 'page' : undefined}
      className={`flex flex-col items-center gap-1 transition-all duration-200 group relative`}
      style={{
        color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
      }}
    >
      <item.icon
        size={14}
        aria-hidden="true"
        style={{
          transition: 'transform 0.2s, filter 0.2s',
          filter: isActive ? 'drop-shadow(0 0 4px var(--accent-glow))' : 'none',
        }}
      />
      <span className="text-[7.5px] font-orbitron font-black tracking-[0.18em] uppercase hidden sm:block">
        {item.label}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-2 w-1 h-1 rounded-full"
          style={{ background: 'var(--accent-primary)', boxShadow: '0 0 6px var(--accent-glow)' }}
          initial={false}
          transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        />
      )}
    </Link>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300
        ${isScrolled ? 'pt-3 pb-0' : 'pt-5 pb-0'}`}
    >
      <div
        className={`px-5 sm:px-7 py-3 flex items-center gap-5 sm:gap-8 rounded-2xl transition-all duration-300`}
        style={{
          background: 'var(--bg-nav)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          boxShadow: isScrolled
            ? '0 2px 24px rgba(0,0,0,0.5), 0 0 30px var(--accent-glow-subtle)'
            : '0 1px 12px rgba(0,0,0,0.3)',
        }}
      >
        <div className="flex items-center gap-5 sm:gap-7">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} item={item} isActive={activeSection === item.id} />
          ))}
        </div>

        <div className="h-3.5 w-px" style={{ background: 'var(--border-color)' }} aria-hidden="true" />

        <div className="flex items-center gap-5 sm:gap-7">
          {secondaryNavItems.map((item) => {
            const isActive = item.id === 'blog' ? isBlogPage : activeSection === item.id;
            return <NavItem key={item.id} item={item} isActive={isActive} />;
          })}
        </div>

        <div className="h-3.5 w-px" style={{ background: 'var(--border-color)' }} aria-hidden="true" />

        {/* Unified Theme Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border-color bg-bg-card hover:border-accent-primary transition-all duration-300 group"
            aria-label="Toggle Theme Menu"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            {theme === 'dark' ? (
              <Moon size={14} className="text-accent-primary" />
            ) : (
              <Sun size={14} className="text-accent-primary" />
            )}
            <span className="text-[9px] font-orbitron font-black tracking-widest text-text-primary hidden lg:block uppercase">Theme</span>
            <motion.div
              animate={{ rotate: isThemeOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ChevronDown size={12} className="text-text-muted group-hover:text-accent-primary transition-colors" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isThemeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full right-0 mt-3 w-40 rounded-2xl border border-border-color shadow-2xl overflow-hidden z-50 py-1.5"
                style={{ background: 'var(--bg-nav)', backdropFilter: 'blur(20px)' }}
              >
                {[
                  { mode: 'light' as const, label: 'Light Mode', icon: Sun },
                  { mode: 'dark' as const, icon: Moon, label: 'Dark Mode' },
                  { mode: 'auto' as const, icon: Monitor, label: 'Auto (System)' }
                ].map(({ mode, icon: Icon, label }) => (
                  <button
                    key={mode}
                    onClick={() => {
                      toggleTheme(mode);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200 group
                      ${themeMode === mode ? 'bg-accent-primary/10 text-accent-primary' : 'text-text-muted hover:text-text-primary hover:bg-white/5'}`}
                  >
                    <Icon size={14} className={themeMode === mode ? 'text-accent-primary' : 'text-text-muted group-hover:text-text-primary'} />
                    <span className="text-[10px] font-orbitron font-bold uppercase tracking-wider">{label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.nav>
  );
};
