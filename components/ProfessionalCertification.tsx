import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ExternalLink, Award, FileCheck, CheckCircle2, Shield, Trophy } from 'lucide-react';

export const ProfessionalCertification: React.FC = () => {
  return (
    <div id="certifications" className="py-20">
      <div className="flex flex-col items-center gap-6 mb-16 text-center">
        <div className="flex items-center gap-3 text-accent-cyan mb-2">
          <div className="w-8 h-[1px] bg-accent-cyan" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">PROFESSIONAL CREDENTIALS</span>
          <div className="w-8 h-[1px] bg-accent-cyan" />
        </div>
        <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter leading-none italic">
          CORE <span className="text-accent-cyan text-glow-cyan">VERIFICATION</span>
        </h2>
      </div>

      <div className="container-progressive space-y-20 px-0">
        {/* CEH Master Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border-white/5 relative overflow-hidden group text-center space-y-6 bg-white/[0.01]"
        >
          {/* Large Shield Watermark */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none scale-125">
            <Shield size={240} className="text-white" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent-cyan/20" />
              <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.6em] font-black">REGULATED LICENSE_001</span>
              <div className="h-px w-12 bg-accent-cyan/20" />
            </div>

            <h3 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter leading-none italic">
              CEH MASTER <span className="text-accent-cyan text-glow-cyan">V12</span>
            </h3>

            <p className="text-sm md:text-base text-white/60 font-medium max-w-3xl mx-auto">
              Certified Ethical Hacker (Theory & Practical) — Validating advanced penetration testing and security assessment capabilities.
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <div className="px-8 py-3 bg-black/40 border border-white/10 rounded-full font-mono text-[10px] text-white/40 tracking-[0.4em] font-black shadow-inner">
              EC-COUNCIL_VERIFIED
            </div>
          </div>

          <div className="pt-6 relative z-10 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1gmcFKsNRS-cTQx5SYgpeBpp_orv0renT?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 px-10 py-4 border border-accent-cyan/20 bg-accent-cyan/5 text-white font-orbitron font-bold text-xs uppercase tracking-[0.4em] rounded-2xl transition-all hover:bg-accent-cyan/10 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,219,233,0.15)] shadow-xl relative overflow-hidden active:scale-[0.98] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-[-20deg]" />
              <span>VERIFY LICENSE DATA (SECURE)</span>
              <Shield size={18} className="text-accent-cyan group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Other Certifications */}
        <div className="space-y-12">
          <div className="flex items-center gap-6 group">
            <div className="p-3 bg-accent-violet/10 border border-accent-violet/20 rounded-xl text-accent-violet">
              <FileCheck size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-orbitron font-black text-white uppercase tracking-tight italic">
              OTHER <span className="text-accent-violet">CERTIFICATIONS</span>
            </h3>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            <motion.a
              key="ibr-achiever"
              href="https://drive.google.com/drive/folders/1cRa45evMgzgvIcLzlyLbZTBtUBBI2B0K"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-accent-cyan/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all flex items-center gap-8 group block cursor-pointer"
            >
              <div className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl text-accent-cyan group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <div className="space-y-2 flex-grow">
                <h4 className="text-sm md:text-base font-orbitron font-black text-white uppercase leading-tight">
                  OTHER <span className="text-accent-cyan">CERTIFICATIONS</span>
                </h4>
                <p className="text-xs text-white/30 font-medium">Verified record of cybersecurity excellence and institutional recognition.</p>
              </div>
              <div className="text-white/10 group-hover:text-accent-cyan transition-colors">
                <ExternalLink size={16} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
