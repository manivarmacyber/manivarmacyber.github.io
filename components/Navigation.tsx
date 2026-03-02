import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, MessageSquare, Briefcase, ShieldAlert, Globe, BookOpen, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const NavItem = ({ item, isActive }: { item: any, isActive: boolean }) => (
    <Link
      key={item.id}
      to={item.path}
      onClick={() => handleNavClick(item.id, item.path)}
      className={`flex flex-col items-center gap-1.5 transition-all duration-250 group relative hover:scale-105 ${isActive
        ? 'text-accent-cyan'
        : 'text-white/40 hover:text-accent-cyan text-glow-cyan'
        }`}
    >
      <item.icon
        size={14}
        className={`${isActive ? 'scale-110 text-glow-cyan' : 'group-hover:scale-110'} transition-all`}
      />
      <span className="text-[8px] font-orbitron font-black tracking-[0.2em] uppercase hidden sm:block">
        {item.label}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-2 w-6 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,219,233,0.6)]"
          initial={false}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'p-4' : 'p-8'
        }`}
    >
      <div className={`bg-[#050505]/80 backdrop-blur-3xl px-8 py-3 flex items-center gap-6 sm:gap-10 border border-white/5 shadow-2xl transition-all duration-500 rounded-2xl`}>
        <div className="flex items-center gap-6 sm:gap-8">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} item={item} isActive={activeSection === item.id} />
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-6 sm:gap-8">
          {secondaryNavItems.map((item) => {
            const isActive = item.id === 'blog' ? isBlogPage : activeSection === 'contact';
            return <NavItem key={item.id} item={item} isActive={isActive} />;
          })}
        </div>
      </div>
    </motion.nav>
  );
};
