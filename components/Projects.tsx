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
    <div id="academic" className="space-y-16 py-20">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-orbitron font-black text-text-primary uppercase tracking-tighter">
          ACADEMIC <span className="text-accent-primary opacity-60">FOUNDATION</span>
        </h2>
        <div className="flex items-center gap-2 text-text-muted font-mono text-[8px] tracking-[0.4em] uppercase font-black">
          <BookOpen size={10} />
          <span>Theoretical Security Frameworks</span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 container-progressive text-left px-0">
        {researchCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 0.3, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1, opacity: 1, borderColor: 'var(--accent-primary)' }}
            transition={{ duration: 1.2 }}
            className="p-8 border border-border-color flex flex-col justify-between group transition-all min-h-[320px] rounded-3xl"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-accent-primary/5 border border-accent-primary/10 rounded-xl flex items-center justify-center text-accent-primary/50 group-hover:text-accent-primary transition-colors">
                <card.icon size={24} />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-orbitron font-black text-text-primary/40 uppercase tracking-tight leading-tight transition-colors group-hover:text-text-primary">
                  {card.title}
                </h3>
                <p className="text-text-muted/40 text-xs leading-relaxed transition-colors group-hover:text-text-muted">
                  {card.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-border-color">
              <div className="flex items-center gap-2 text-text-muted font-mono text-[8px] uppercase font-black tracking-widest group-hover:text-accent-primary transition-colors">
                <FileText size={10} />
                <span>ACADEMIC_ARCHIVE</span>
              </div>
              <div className="px-2 py-0.5 bg-accent-primary/10 border border-accent-primary/20 rounded text-[8px] font-mono text-accent-primary uppercase tracking-[0.1em]">
                {card.tag}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
