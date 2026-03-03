import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, MessageSquare, Briefcase, ShieldAlert, Globe, BookOpen, Fingerprint, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={`flex flex-col items-center gap-1 transition-all duration-200 group relative
        ${isActive ? 'text-accent-cyan' : 'text-text-secondary hover:text-accent-cyan'}`}
    >
      <item.icon
        size={14}
        aria-hidden="true"
        className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
      />
      <span className="text-[7.5px] font-orbitron font-black tracking-[0.18em] uppercase hidden sm:block">
        {item.label}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-2 w-1 h-1 bg-accent-cyan rounded-full"
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
        className={`bg-nav-bg backdrop-blur-[14px] px-5 sm:px-7 py-3 flex items-center gap-5 sm:gap-8
          border border-border rounded-2xl transition-all duration-300
          ${isScrolled
            ? 'shadow-[0_2px_24px_rgba(0,0,0,0.18)] border-border'
            : 'shadow-[0_1px_12px_rgba(0,0,0,0.08)]'
          }`}
      >
        <div className="flex items-center gap-5 sm:gap-7">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} item={item} isActive={activeSection === item.id} />
          ))}
        </div>

        <div className="h-3.5 w-px bg-border" aria-hidden="true" />

        <div className="flex items-center gap-5 sm:gap-7">
          {secondaryNavItems.map((item) => {
            const isActive = item.id === 'blog' ? isBlogPage : activeSection === item.id;
            return <NavItem key={item.id} item={item} isActive={isActive} />;
          })}
        </div>

        <div className="h-3.5 w-px bg-border" aria-hidden="true" />

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg bg-card-bg border border-border hover:bg-accent-cyan/10 text-text-secondary hover:text-accent-cyan
            transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-cyan"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
        </button>
      </div>
    </motion.nav>
  );
};
