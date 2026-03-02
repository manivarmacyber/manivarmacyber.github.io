import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Zap, Search, Lock, Activity } from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
    const cards = [
        { title: "Tactical Precision", desc: "Exhaustive analysis with zero footprint methodology.", icon: Target },
        { title: "Rapid Response", desc: "4.2H average detection-to-report turnaround.", icon: Zap },
        { title: "Full Confidentiality", desc: "Strict NDA compliance and data isolation protocols.", icon: Lock },
        { title: "Exfiltration Prevention", desc: "Hardening perimeters against advanced threat actors.", icon: Shield },
        { title: "Code Excellence", desc: "Clean, documented, and reproducible exploit POCs.", icon: Search },
        { title: "Global Operability", desc: "24/7 remote deployment for critical incidents.", icon: Activity }
    ];

    return (
        <div id="why" className="py-20 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="px-6 py-2 bg-accent-cyan/5 border border-accent-cyan/20 rounded-full font-mono text-[9px] text-accent-cyan tracking-[0.4em] font-black italic">
                    // WHY CHOOSE ME
                </div>
                <h2 className="text-3xl md:text-5xl font-orbitron font-[800] text-white uppercase tracking-tighter italic">
                    WHY CHOOSE ME FOR YOUR <span className="text-accent-cyan text-glow-cyan">CYBERSECURITY PROJECTS?</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-6">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-10 border-white/5 hover:border-accent-cyan/20 transition-all group text-center"
                    >
                        <div className="mx-auto w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-accent-cyan transition-colors mb-6">
                            <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-4 uppercase tracking-tighter">{card.title}</h3>
                        <p className="text-white/40 text-xs leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
