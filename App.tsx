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
import { FeaturedResearch } from './components/FeaturedResearch';

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

      {/* 10.5 Latest Research - SEO Internal Linking Hub */}
      <section id="featured-research">
        <FeaturedResearch />
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
      <div className="min-h-screen selection:bg-accent-cyan selection:text-black">
        <AppContent />
        <CookieNotice />
      </div>
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('home');
    } else if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
    } else if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
    }
  }, [location.pathname]);

  return (
    <Layout activeSection={activeSection}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
