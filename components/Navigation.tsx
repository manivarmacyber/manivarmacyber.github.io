import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, MessageSquare, Briefcase, ShieldAlert, Globe, BookOpen, Fingerprint } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
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
      className={`flex flex-col items-center gap-1 transition-all duration-200 group relative`}
      style={{
        color: isActive ? '#cc2200' : 'rgba(168,144,144,0.7)',
      }}
      onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#cc2200'; }}
      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(168,144,144,0.7)'; }}
    >
      <item.icon
        size={14}
        aria-hidden="true"
        style={{
          transition: 'transform 0.2s, filter 0.2s',
          filter: isActive ? 'drop-shadow(0 0 4px rgba(204,34,0,0.7))' : 'none',
        }}
      />
      <span className="text-[7.5px] font-orbitron font-black tracking-[0.18em] uppercase hidden sm:block">
        {item.label}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-2 w-1 h-1 rounded-full"
          style={{ background: '#cc2200', boxShadow: '0 0 6px rgba(204,34,0,0.8)' }}
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
          background: 'rgba(8,0,0,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(180,30,20,0.20)',
          boxShadow: isScrolled
            ? '0 2px 24px rgba(0,0,0,0.5), 0 0 30px rgba(139,0,0,0.08)'
            : '0 1px 12px rgba(0,0,0,0.3)',
        }}
      >
        <div className="flex items-center gap-5 sm:gap-7">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} item={item} isActive={activeSection === item.id} />
          ))}
        </div>

        <div className="h-3.5 w-px" style={{ background: 'rgba(180,30,20,0.25)' }} aria-hidden="true" />

        <div className="flex items-center gap-5 sm:gap-7">
          {secondaryNavItems.map((item) => {
            const isActive = item.id === 'blog' ? isBlogPage : activeSection === item.id;
            return <NavItem key={item.id} item={item} isActive={isActive} />;
          })}
        </div>

        <div className="h-3.5 w-px" style={{ background: 'rgba(180,30,20,0.25)' }} aria-hidden="true" />


      </div>
    </motion.nav>
  );
};
