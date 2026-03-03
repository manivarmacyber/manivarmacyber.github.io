import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, MessageSquare, Terminal } from 'lucide-react';

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

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 hero-grid opacity-100 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="container-progressive grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16
        items-center relative z-10 w-full">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Name block */}
          <div className="space-y-5">
            <div className="relative inline-block w-full">
              <h1 className="font-orbitron font-[800] tracking-[0.5px] leading-[1.2] uppercase
                text-[clamp(1.6rem,5vw,4.0rem)] whitespace-nowrap">
                <span className="text-text-primary">G. MANIKANTA </span>
                <span className="text-accent-cyan">VARMA</span>
              </h1>
              {/* Accent underline — no glow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0
                w-3/4 md:w-full h-[2px] bg-accent-cyan opacity-70" />
            </div>

            {/* Credential tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-8">
              {['CEH MASTER V12', 'NCIIPC CONTRIBUTOR', 'IBR ACHIEVER'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-accent-cyan/25 rounded-full
                    bg-accent-cyan/[0.04] text-[8px] md:text-[9px] font-mono font-bold
                    text-accent-cyan tracking-[0.18em] uppercase
                    hover:border-accent-cyan/50 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Subtext */}
          <p className="text-text-secondary text-base md:text-lg leading-[1.7]
            max-w-[65ch] font-medium text-center md:text-left mx-auto md:mx-0">
            Elite Cyber Security Professional specializing in{' '}
            <span className="text-text-primary font-semibold">
              offensive operations, vulnerability research, and critical infrastructure defense.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/uc?export=download&id=1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ"
              className="px-7 py-3.5 bg-accent-cyan text-black font-orbitron font-bold text-[0.65rem]
                uppercase tracking-[0.18em] transition-all rounded-xl flex items-center
                justify-center gap-2.5 w-full sm:w-auto hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
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
              className="px-7 py-3.5 border border-accent-cyan/25 bg-transparent text-accent-cyan
                font-orbitron font-bold text-[0.65rem] uppercase tracking-[0.18em] transition-all
                rounded-xl flex items-center justify-center gap-2.5
                hover:bg-accent-cyan/[0.06] hover:border-accent-cyan/50 w-full sm:w-auto"
              aria-label="View resume in new tab"
            >
              <Terminal size={16} aria-hidden="true" />
              <span>VIEW RESUME</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 border border-accent-cyan/25 bg-transparent text-accent-cyan
                font-orbitron font-bold text-[0.65rem] uppercase tracking-[0.18em] transition-all
                rounded-xl flex items-center justify-center gap-2.5
                hover:bg-accent-cyan/[0.06] hover:border-accent-cyan/50 w-full sm:w-auto"
              aria-label="Scroll to contact section"
            >
              <MessageSquare size={16} aria-hidden="true" />
              <span>CONTACT ME</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative p-1 bg-accent-cyan/[0.05] border border-accent-cyan/10
            rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="relative w-[clamp(130px,20vw,280px)] h-[clamp(130px,20vw,280px)]
              rounded-xl overflow-hidden bg-card-bg border border-border">
              <img
                src="/profile.jpg"
                alt="G. Manikanta Varma — Elite Cybersecurity Professional"
                loading="eager"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
