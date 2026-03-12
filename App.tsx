import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProfessionalCertification } from './components/ProfessionalCertification';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { CookieNotice } from './components/CookieNotice';
import { motion, AnimatePresence } from 'motion/react';
import { ProfessionalFeedback } from './components/ProfessionalFeedback';

import { ProfessionalMission } from './components/ProfessionalMission';
import { OperationalAchievements } from './components/OperationalAchievements';
import { LiveProjects } from './components/LiveProjects';
import { EducationSection } from './components/EducationSection';
import { TacticalProjects } from './components/TacticalProjects';

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
  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-PPFJ77F37G', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
  return null;
};

const HomePage = () => (
  <div className="pb-32">
    {/* 1. Hero Section */}
    <section id="home">
      <Hero />
    </section>

    <div className="container-progressive space-y-0">
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

      {/* 12. System Evaluation */}
      <section id="feedback">
        <ProfessionalFeedback />
      </section>

      {/* 13. Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    emailjs.init("yaUVsV7Lc0lVhiMGS");
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageTracker />
      <div className="min-h-screen selection:bg-accent-primary selection:text-white overflow-x-hidden">
        <AppContent />
        <CookieNotice />
      </div>
    </Router>
  );
};

/* ── Hyprland swww — butter-smooth circle reveal on content ── */
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{
      clipPath: 'circle(0% at 50% 44%)',
      opacity: 0.6,
    }}
    animate={{
      clipPath: 'circle(150% at 50% 44%)',
      opacity: 1,
    }}
    exit={{
      opacity: 0,
      scale: 0.97,
      filter: 'blur(5px)',
    }}
    transition={{
      clipPath: { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.68, ease: 'easeOut' },
      scale: { duration: 0.18, ease: 'easeIn' },
      filter: { duration: 0.18, ease: 'easeIn' },
    }}
    style={{ willChange: 'clip-path, opacity' }}
  >
    {children}
  </motion.div>
);

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
    // Prioritize hash-based anchors on the home page
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      // Map known section ids to activeSection
      const validSections = ['home', 'mission', 'experience', 'skills', 'certifications', 'achievements', 'operational-outputs', 'academic', 'education', 'why', 'tactical', 'feedback', 'contact'];
      if (validSections.includes(id)) {
        setActiveSection(id === 'home' ? 'home' : id);
        return;
      }
    }

    if (location.pathname === '/') {
      setActiveSection('home');
    } else if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
    } else if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
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
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
