import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, MessageSquare, ShieldAlert, Cpu, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "ELITE PENTESTING & VULNERABILITY RESEARCH";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-16 lg:pt-32 lg:pb-0 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-progressive grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="relative inline-block w-full">
              <h1 className="font-orbitron font-[800] tracking-[0.5px] leading-[1.1] uppercase text-[clamp(1.6rem,5vw,4.2rem)] whitespace-nowrap">
                <span className="text-white">G. MANIKANTA </span>
                <span className="text-accent-cyan text-glow-cyan">VARMA</span>
              </h1>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-3/4 lg:w-full h-[2px] bg-accent-cyan shadow-[0_0_12px_rgba(0,219,233,0.3)]" />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-10">
              {['CEH MASTER V12', 'NCIIPC CONTRIBUTOR', 'IBR ACHIEVER'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 border border-accent-cyan/30 rounded-full bg-accent-cyan/5 text-[8px] md:text-[9px] font-mono font-bold text-accent-cyan tracking-[0.2em] uppercase transition-all hover:border-accent-cyan/70 italic">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
            Elite Cyber Security Professional specializing in <span className="text-white">offensive operations, vulnerability research, and critical infrastructure defense.</span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0,219,233,0.3)' }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/uc?export=download&id=1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ"
              className="px-8 py-4 bg-accent-cyan text-black font-orbitron font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-2xl flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Download size={18} />
              <span>DOWNLOAD CV</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1YaNxcLwMoInBADwMBoBE_dquYQqFRuKQ/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-accent-cyan/20 bg-transparent text-accent-cyan font-orbitron font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-2xl flex items-center justify-center gap-3 hover:bg-accent-cyan/5 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,219,233,0.15)] w-full sm:w-auto"
            >
              <Terminal size={18} />
              <span>VIEW RESUME</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-accent-cyan/20 bg-transparent text-accent-cyan font-orbitron font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-2xl flex items-center justify-center gap-3 hover:bg-accent-cyan/5 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,219,233,0.15)] w-full sm:w-auto"
            >
              <MessageSquare size={18} />
              <span>CONTACT ME</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group p-1.5 bg-accent-cyan/5 border border-accent-cyan/10 rounded-2xl shadow-[0_0_30px_rgba(0,219,233,0.05)]">
            <div className="relative w-[clamp(140px,22vw,300px)] h-[clamp(140px,22vw,300px)] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
              <img
                src="/profile.jpg"
                alt="Lead Operative"
                className="w-full h-full object-cover center-aligned transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div >
    </div >
  );
};
