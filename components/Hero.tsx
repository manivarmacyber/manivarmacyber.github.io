import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, MessageSquare, Terminal } from 'lucide-react';

/* ── Animated hero profile photo — full blend ── */
const CyberShieldGraphic: React.FC = () => (
  <motion.div
    className="relative flex items-center justify-center"
    style={{ width: 520, height: 580 }}
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
  >
    {/* Ambient glow behind subject */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 60%, var(--accent-glow-subtle) 0%, transparent 70%)',
        filter: 'blur(30px)',
        zIndex: 0,
      }}
    />
    {/* Profile image — adaptive blend mode per theme */}
    <img
      src="/profile-refined.png"
      alt="G. Manikanta Varma"
      loading="eager"
      className="profile-blend-img"
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center bottom',
        /* Soft bottom fade so portrait dissolves into page */
        maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
        filter: 'drop-shadow(0 8px 32px rgba(139, 92, 246, 0.35)) brightness(1.02)',
      }}
    />
  </motion.div>
);

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "ELITE PENTESTING & VULNERABILITY RESEARCH";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[88vh] flex flex-col items-center justify-center
      pt-[48px] md:pt-[48px] sm:pt-[32px] pb-16 overflow-hidden">

      {/* Subtle purple radial background */}
      <div
        className="absolute inset-0 hero-gradient pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Horizontal accent lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px pointer-events-none z-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-glow-subtle), transparent)' }} />
      <div className="absolute top-2/3 left-0 right-0 h-px pointer-events-none z-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-glow-subtle), transparent)', opacity: 0.3 }} />

      {/* Hero content container */}
      <div className="container-progressive relative z-10 w-full">
        <div className="grid grid-cols-1 items-center">
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8 pr-4 lg:pr-8 max-w-4xl relative z-20"
          >
            {/* Name block */}
            <div className="space-y-5">
              <div className="relative inline-block w-full">
                <h1 className="font-orbitron font-[800] tracking-[0.5px] leading-[1.2] uppercase
                  text-[clamp(1.6rem,5vw,4.0rem)]">
                  <span className="text-text-primary">G. MANIKANTA </span>
                  <span className="text-accent-primary">VARMA</span>
                </h1>
                {/* Accent underline */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0
                  w-3/4 md:w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-glow))', opacity: 0.8 }} />
              </div>

              {/* Credential tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-8">
                {['CEH MASTER V12', 'NCIIPC CONTRIBUTOR', 'IBR ACHIEVER'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[8px] md:text-[9px] font-mono font-bold
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
            <p className="text-text-muted text-base md:text-lg leading-[1.7]
              max-w-[55ch] font-medium text-center md:text-left mx-auto md:mx-0">
              Elite Cyber Security Professional specializing in{' '}
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                offensive operations, vulnerability research, and critical infrastructure defense.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/uc?export=download&id=1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ"
                className="px-7 py-3.5 font-orbitron font-bold text-[0.65rem]
                  uppercase tracking-[0.18em] transition-all rounded-xl flex items-center
                  justify-center gap-2.5 w-full sm:w-auto"
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
                href="https://drive.google.com/file/d/1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 font-orbitron font-bold text-[0.65rem] uppercase tracking-[0.18em]
                  transition-all rounded-xl flex items-center justify-center gap-2.5 w-full sm:w-auto"
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
                className="px-7 py-3.5 font-orbitron font-bold text-[0.65rem] uppercase tracking-[0.18em]
                  transition-all rounded-xl flex items-center justify-center gap-2.5 w-full sm:w-auto"
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
          className="md:hidden mt-12 flex justify-center"
        >
          <CyberShieldGraphic />
        </motion.div>
      </div>

      {/* Desktop Background Profile Graphic (STAYS IN BACKGROUND) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        className="hidden md:flex absolute right-[2%] lg:right-[8%] top-[42%] -translate-y-1/2 
          justify-center pointer-events-none"
        style={{ zIndex: -1, opacity: 0.85 }}
      >
        <CyberShieldGraphic />
      </motion.div>
    </div>
  );
};
