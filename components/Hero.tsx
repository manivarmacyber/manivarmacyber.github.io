import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, MessageSquare, Terminal, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';


/* ── Animated hero profile photo — full blend ── */
const CyberShieldGraphic: React.FC = () => (
  <motion.div
    className="relative flex items-center justify-center w-[400px] h-[440px] sm:w-[480px] sm:h-[520px] md:w-[500px] md:h-[560px] lg:w-[580px] lg:h-[650px] xl:w-[640px] xl:h-[720px] max-w-full transform md:-translate-y-12 lg:-translate-y-20 xl:-translate-y-28"

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
      <div className="container mx-auto max-w-7xl px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          {/* Main Content Area (left) */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8 relative z-20 md:col-span-7 pr-0 md:pr-6 lg:pr-12 md:pl-8 lg:pl-12 xl:pl-16"

          >
            {/* Name block */}
            <div className="space-y-5">
              <div className="relative inline-block w-full">
                <h1 className="font-orbitron font-[800] tracking-[0.5px] leading-[1.2] uppercase
                  text-[clamp(2rem,4vw,6rem)] lg:whitespace-nowrap">

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
                className="px-6 py-3.5 sm:px-7 sm:py-4 font-orbitron font-bold text-[0.65rem] sm:text-[0.7rem] md:text-xs
                  uppercase tracking-[0.18em] transition-all rounded-xl flex items-center
                  justify-center gap-2 w-full sm:w-auto"
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
                className="px-6 py-3.5 sm:px-7 sm:py-4 font-orbitron font-bold text-[0.65rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.18em]
                  transition-all rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
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
                  transition-all rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
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

              {/* Blog CTA */}
              {(() => {
                const MotionLink = motion(Link as any);
                return (
                  <MotionLink
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    to="/blog"
                    className="px-6 py-3.5 sm:px-7 sm:py-4 font-orbitron font-bold text-[0.65rem] sm:text-[0.7rem] md:text-xs uppercase tracking-[0.18em]
                      transition-all rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
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
                    aria-label="Open blog"
                  >
                    <BookOpen size={16} aria-hidden="true" />
                    <span>BLOG</span>
                  </MotionLink>
                );
              })()}
            </div>
          </motion.div>

          {/* Right Content (profile image) */}
          <div className="hidden md:flex items-center md:col-span-5 justify-end">
            <div className="transform md:translate-x-8 lg:translate-x-12 xl:translate-x-20">
              <CyberShieldGraphic />
            </div>
          </div>

          {/* Mobile Profile Display (Inline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:hidden mt-4 sm:mt-8 flex justify-center w-full"
          >
            <CyberShieldGraphic />
          </motion.div>
        </div>
      </div>

      {/* Desktop background graphic removed to avoid duplicate profile image; ambient glow remains above. */}

    </div>
  );
};
