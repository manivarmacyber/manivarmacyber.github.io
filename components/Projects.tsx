import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FlaskConical, Microscope, FileText, Bookmark, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const researchCards = [
    {
      title: "Advanced Malware Obfuscation Analysis",
      desc: "Experimental research on polymorphic malware detection avoidance using dynamic byte-code mutation on Linux environments.",
      tag: "V1.0.4",
      icon: Microscope
    },
    {
      title: "Zero-Trust Infrastructure Protocol",
      desc: "Designing and simulating a localized zero-trust security model for distributed microservices using eBPF and kernel-level tracing.",
      tag: "V2.2.0",
      icon: FlaskConical
    }
  ];

  return (
    <div id="academic" className="space-y-16 py-20 opacity-80">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-orbitron font-black text-white/40 uppercase tracking-tighter">
          ACADEMIC <span className="text-white/20">FOUNDATION</span>
        </h2>
        <div className="flex items-center gap-2 text-white/10 font-mono text-[8px] tracking-[0.4em] uppercase font-black">
          <BookOpen size={10} />
          <span>Theoretical Security Frameworks</span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 container-progressive text-left px-0">
        {researchCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.4, scale: 0.95 }}
            whileHover={{ opacity: 1, scale: 1, borderColor: 'rgba(0, 242, 255, 0.2)' }}
            transition={{ duration: 0.4 }}
            className="glass-card p-10 border-white/5 flex flex-col justify-between group grayscale hover:grayscale-0 transition-all min-h-[320px]"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/20 group-hover:text-accent-cyan transition-colors">
                <card.icon size={24} />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-orbitron font-black text-white/60 uppercase tracking-tight leading-tight group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/30 text-xs leading-relaxed group-hover:text-white/50 transition-colors">
                  {card.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-white/10 font-mono text-[8px] uppercase font-black tracking-widest group-hover:text-accent-cyan transition-colors">
                <FileText size={10} />
                <span>ACADEMIC_ARCHIVE</span>
              </div>
              <div className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-mono text-white/10 uppercase tracking-[0.1em]">
                {card.tag}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
