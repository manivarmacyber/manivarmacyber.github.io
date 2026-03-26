import React, { useState, useEffect, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ErrorBoundary } from './components/ErrorBoundary';

import { CookieNotice } from './components/CookieNotice';
import { motion, AnimatePresence } from 'motion/react';

// Standard dynamic imports (Lazy Loading)
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const WhyChooseMe = React.lazy(() => import('./components/WhyChooseMe').then(m => ({ default: m.WhyChooseMe })));
const Skills = React.lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Projects = React.lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const ProfessionalCertification = React.lazy(() => import('./components/ProfessionalCertification').then(m => ({ default: m.ProfessionalCertification })));
const Experience = React.lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const ProfessionalMission = React.lazy(() => import('./components/ProfessionalMission').then(m => ({ default: m.ProfessionalMission })));
const OperationalAchievements = React.lazy(() => import('./components/OperationalAchievements').then(m => ({ default: m.OperationalAchievements })));
const LiveProjects = React.lazy(() => import('./components/LiveProjects').then(m => ({ default: m.LiveProjects })));
const EducationSection = React.lazy(() => import('./components/EducationSection').then(m => ({ default: m.EducationSection })));
const TacticalProjects = React.lazy(() => import('./components/TacticalProjects').then(m => ({ default: m.TacticalProjects })));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);
  return null;
};

const PageTracker = () => {
  const location = useLocation();

  // Page view tracking on every route change
  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-PPFJ77F37G', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  // Scroll depth tracking — fires at 25, 50, 75, 100%
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const fired = new Set<number>();

    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);

      milestones.forEach(m => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${m}%`,
              depth_percent: m,
              page_path: location.pathname
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return null;
};

const HomePage = () => (
  <div className="pb-32 notranslate">
    {/* 1. Hero Section */}
    <section id="home">
      <Hero />
    </section>

    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-accent-primary font-mono tracking-widest text-sm">INITIALIZING_MODULES...</div>}>
      {/* 2. Self Driven */}
      <section id="mission">
        <ProfessionalMission />
      </section>

      {/* 3. Professional Journey */}
      <section id="experience">
        <Experience />
      </section>

      {/* 4. Skills (Tech Armory) */}
      <section id="skills">
        <Skills />
      </section>

      {/* 5. Certifications (CEH Master Focus) */}
      <section id="certifications">
        <ProfessionalCertification />
      </section>

      {/* 6. Achievements */}
      <section id="achievements">
        <OperationalAchievements />
      </section>

      {/* 7. Mission Operational Outputs */}
      <section id="operational-outputs">
        <LiveProjects />
      </section>

      {/* 8. Academic Projects - Faded Styling */}
      <section id="academic">
        <Projects />
      </section>

      {/* 9. Academic Foundation */}
      <section id="education">
        <EducationSection />
      </section>

      {/* 10. Why Choose Me */}
      <section id="why">
        <WhyChooseMe />
      </section>

      {/* 11. Tactical Response */}
      <section id="tactical">
        <TacticalProjects />
      </section>

      {/* 12. Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </Suspense>
  </div>
);

import { LanguageProvider } from './src/context/LanguageContext';

const App: React.FC = () => {
  useEffect(() => {
    emailjs.init("yaUVsV7Lc0lVhiMGS");
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <PageTracker />
        <div className="min-h-screen selection:bg-accent-primary selection:text-white overflow-x-hidden">
          <ErrorBoundary feature="Application Router">
            <AppContent />
          </ErrorBoundary>
          <CookieNotice />
        </div>
      </Router>
    </LanguageProvider>
  );
};

import { PageTransition } from './components/PageTransition';

/* ── Hyprland swww — butter-smooth circle reveal on content ── */
// Removed local PageTransition definition in favor of shared component

const AppContent = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [themeMode, setThemeMode] = useState<'dark' | 'light' | 'auto'>(() => {
    const saved = localStorage.getItem('site-theme');
    if (saved === 'dark' || saved === 'light' || saved === 'auto') return saved;
    return 'auto';
  });

  const getEffectiveTheme = () => {
    if (themeMode === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themeMode;
  };

  const theme = getEffectiveTheme();

  useEffect(() => {
    const effectiveTheme = getEffectiveTheme();
    document.documentElement.className = effectiveTheme;
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  }, [themeMode]);

  useEffect(() => {
    if (themeMode === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const effectiveTheme = mediaQuery.matches ? 'dark' : 'light';
        document.documentElement.className = effectiveTheme;
        document.documentElement.setAttribute('data-theme', effectiveTheme);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeMode]);

  useEffect(() => {
    // 1. Route-based top-level state syncing
    if (location.pathname === '/about') {
      setActiveSection('about');
      return;
    }

    // 2. Scroll Spy for Home Page sections
    if (location.pathname === '/') {
      const navSections = [
        'home', 'mission', 'experience', 'skills',
        'certifications', 'achievements', 'operational-outputs',
        'academic', 'education', 'why', 'tactical', 'contact'
      ];

      // Initial quick snap if navigated via hash click
      if (location.hash) {
        const id = location.hash.replace('#', '');
        if (navSections.includes(id)) {
          setActiveSection(id);
        }
      } else {
        setActiveSection('home');
      }

      // IntersectionObserver for scroll spy
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-30% 0px -60% 0px'
        }
      );

      // Slightly delay observing to allow DOM routing transitions if any
      const timeoutId = setTimeout(() => {
        navSections.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
      }, 300);

      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
  }, [location.pathname, location.hash]);


  const toggleTheme = (newMode?: 'dark' | 'light' | 'auto') => {
    let mode: 'dark' | 'light' | 'auto';

    if (newMode) {
      mode = newMode;
    } else {
      if (themeMode === 'dark') mode = 'light';
      else if (themeMode === 'light') mode = 'auto';
      else mode = 'dark';
    }

    setThemeMode(mode);
    localStorage.setItem('site-theme', mode);
  };

  return (
    <Layout activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} themeMode={themeMode}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
