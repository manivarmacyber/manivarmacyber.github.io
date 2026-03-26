import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ExternalLink, Award, FileCheck, CheckCircle2, Shield, Trophy } from 'lucide-react';

export const ProfessionalCertification: React.FC = () => {
  return (
    <div id="certifications" className="py-20">
      <div className="flex flex-col items-center gap-6 mb-16 text-center">
        <div className="flex items-center gap-3 text-accent-primary mb-2">
          <div className="w-8 h-[1px] bg-accent-primary" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">PROFESSIONAL CREDENTIALS</span>
          <div className="w-8 h-[1px] bg-accent-primary" />
        </div>
        <h2 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter leading-none italic">
          CORE <span className="text-accent-primary opacity-80">VERIFICATION</span>
        </h2>
      </div>

      <div className="container-progressive space-y-20">
        {/* CEH Master Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 border border-border-color relative overflow-hidden group text-center space-y-6 rounded-[2rem]"
          style={{ background: 'var(--bg-card)' }}
        >
          {/* Large Shield Watermark */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none scale-125">
            <Shield size={240} className="text-text-primary" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent-primary/20" />
              <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.6em] font-black">REGULATED LICENSE_001</span>
              <div className="h-px w-12 bg-accent-primary/20" />
            </div>

            <h3 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter leading-none italic">
              CEH MASTER <span className="text-accent-primary" style={{ textShadow: '0 0 10px var(--accent-glow)' }}>V12</span>
            </h3>

            <p className="text-sm md:text-base text-text-muted font-medium max-w-3xl mx-auto">
              Certified Ethical Hacker (Theory & Practical) — Validating advanced penetration testing and security assessment capabilities.
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <div className="px-8 py-3 bg-accent-primary/10 border border-border-color rounded-full font-mono text-[10px] text-text-muted tracking-[0.4em] font-black">
              EC-COUNCIL_VERIFIED
            </div>
          </div>

          <div className="pt-6 relative z-10 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1gmcFKsNRS-cTQx5SYgpeBpp_orv0renT?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 px-10 py-4 border border-accent-primary/20 bg-accent-primary/5 text-text-primary font-orbitron font-bold text-xs uppercase tracking-[0.4em] rounded-2xl transition-all hover:bg-accent-primary/10 hover:border-accent-primary/50 hover:shadow-[0_0_20px_var(--accent-glow-subtle)] shadow-xl relative overflow-hidden active:scale-[0.98] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-text-primary/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-[-20deg]" />
              <span>VERIFY LICENSE DATA (SECURE)</span>
              <Shield size={18} className="text-accent-primary group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Other Certifications */}
        <div className="space-y-12">
          <div className="flex items-center gap-6 group">
            <div className="p-3 bg-accent-secondary/10 border border-accent-secondary/20 rounded-xl text-accent-secondary">
              <FileCheck size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">
              OTHER <span className="text-accent-secondary">CERTIFICATIONS</span>
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
              className="p-8 border border-border-color transition-all flex items-center gap-8 group block cursor-pointer rounded-3xl"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="p-4 bg-accent-primary/10 border border-accent-primary/20 rounded-xl text-accent-primary group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <div className="space-y-2 flex-grow">
                <h4 className="text-sm md:text-base font-orbitron font-black text-text-primary uppercase leading-tight">
                  OTHER <span className="text-accent-primary">CERTIFICATIONS</span>
                </h4>
                <p className="text-xs text-text-muted font-medium">Verified record of cybersecurity excellence and institutional recognition.</p>
              </div>
              <div className="text-text-muted/40 group-hover:text-accent-primary transition-colors">
                <ExternalLink size={16} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div >
  );
};
