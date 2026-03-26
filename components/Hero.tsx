import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, MessageSquare, Terminal } from 'lucide-react';

import { CyberBackground } from './CyberBackground';


/* ── Animated hero profile photo — CSS float (zero rAF cost) ── */
const CyberShieldGraphic: React.FC = () => (
  <div className="hero-float relative w-full h-full">
    {/* Ambient glow behind subject */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, var(--accent-glow-subtle) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
      }}
    />
    {/* Profile image — spans full hero height, right side */}
    <img
      src="/profile-refined.png"
      alt="G. Manikanta Varma"
      loading="eager"
      className="profile-blend-img"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center top',
        maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
        filter: 'drop-shadow(0 8px 40px rgba(139, 92, 246, 0.45)) brightness(1.04)',
      }}
    />
  </div>
);

export const Hero: React.FC = () => {
  const roles = [
    "Cybersecurity Analyst (SOC Exposure)",
    "Web Application Security Tester",
    "Vulnerability Researcher",
    "VAPT Specialist"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/ManikantaVarmaResume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'G_Manikanta_Varma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.location.href = '/ManikantaVarmaResume.pdf';
    }
  };

  return (
    <div className="relative min-h-[88vh] flex flex-col items-center justify-center
      pt-[48px] md:pt-[48px] sm:pt-[32px] pb-16 overflow-hidden bg-bg-primary">

        {/* Cyberpunk Background Animation */}
        <div className="absolute inset-0 z-0">
          <CyberBackground />
        </div>

        {/* Subtle purple radial background overlay */}
        <div
          className="absolute inset-0 hero-gradient pointer-events-none z-[1] opacity-40"
          aria-hidden="true"
        />

        {/* Horizontal accent lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px pointer-events-none z-[1]"
          style={{ background: 'linear-gradient(90deg, transparent, var(--accent-glow-subtle), transparent)' }} />
        <div className="absolute top-2/3 left-0 right-0 h-px pointer-events-none z-[1]"
          style={{ background: 'linear-gradient(90deg, transparent, var(--accent-glow-subtle), transparent)', opacity: 0.3 }} />

        {/* ── Desktop: profile image absolutely fills right 42% of hero, top to bottom ── */}
        <div
          className="hidden md:block absolute z-[5] pointer-events-none"
          style={{ top: '100px', bottom: 0, right: 0, width: '42%' }}
        >
          <CyberShieldGraphic />
        </div>

        {/* Hero content container — left text content only */}
        <div className="container-progressive relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8 relative z-20 w-full md:w-7/12 md:pl-8 lg:pl-12 xl:pl-16"
          >
            {/* Name block */}
            <div className="space-y-5">
              <div className="relative inline-block w-full">
                <h1 className="font-orbitron font-[800] tracking-[0.5px] leading-[1.2] uppercase
                  text-[clamp(1.2rem,4.5vw,6rem)] whitespace-nowrap">
                  <span className="text-text-primary">G. MANIKANTA </span>
                  <span className="text-accent-primary">VARMA</span>
                </h1>
                {/* Accent underline */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0
                  w-3/4 md:w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-glow))', opacity: 0.8 }} />
              </div>

              {/* Rotating Roles */}
              <div className="h-6 sm:h-8 pt-2 overflow-hidden flex justify-center md:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-text-muted font-mono text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase"
                  >
                    {roles[currentRoleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Credential tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                {['CEH MASTER V12', 'NCIIPC CONTRIBUTOR', 'IBR ACHIEVER'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] md:text-xs font-mono font-bold
                      uppercase tracking-[0.18em] transition-all duration-200"
                    style={{
                      border: '1px solid var(--border-color)',
                      background: 'var(--accent-glow-subtle)',
                      color: 'var(--accent-primary)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtext */}
              Cybersecurity Analyst with SOC exposure and specialization in{' '}
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                Web Application Security and Vulnerability Assessment &amp; Penetration Testing (VAPT).
              </span>
              {' '}Focused on OWASP Top 10 testing and practical security research.

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="/ManikantaVarmaResume.pdf"
                onClick={handleDownload}
                className="px-6 py-3.5 sm:px-7 sm:py-4 font-orbitron font-bold text-[0.65rem] sm:text-[0.7rem] md:text-xs
                  uppercase tracking-[0.18em] transition-all rounded-xl flex items-center
                  justify-center gap-2 flex-1 min-w-[140px] sm:flex-none sm:min-w-0"
                style={{
                  background: 'var(--accent-primary)',
                  color: '#fff',
                  boxShadow: '0 0 20px var(--accent-glow)',
                }}
                aria-label="Download CV"
              >
                <Download size={16} aria-hidden="true" />
                <span>DOWNLOAD CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="/ManikantaVarmaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 sm:px-7 sm:py-4 font-orbitron font-bold text-[0.65rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.18em]
                  transition-all rounded-xl flex items-center justify-center gap-2 flex-1 min-w-[140px] sm:flex-none sm:min-w-0"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-primary)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-glow-subtle)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                }}
                aria-label="View resume in new tab"
              >
                <Terminal size={16} aria-hidden="true" />
                <span>VIEW RESUME</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 sm:px-7 sm:py-4 font-orbitron font-bold text-[0.65rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.18em]
                  transition-all rounded-xl flex items-center justify-center gap-2 flex-1 min-w-[140px] sm:flex-none sm:min-w-0"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-primary)',
                }}
                aria-label="Scroll to contact section"
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>CONTACT ME</span>
              </motion.button>

            </div>
          </motion.div>
        </div>

        {/* Mobile Profile Display (Inline) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:hidden flex justify-center w-full relative z-0 -mt-4"
          style={{ height: '55vw', minHeight: '280px', maxHeight: '480px' }}
        >
          <CyberShieldGraphic />
        </motion.div>

      </div>
  );
};
