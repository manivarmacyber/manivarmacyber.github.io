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
                <div className="px-6 py-2 rounded-full font-mono text-[9px] tracking-[0.4em] font-black italic"
                    style={{
                        background: 'rgba(204,34,0,0.06)',
                        border: '1px solid rgba(204,34,0,0.25)',
                        color: '#cc2200',
                    }}>
                    // WHY CHOOSE ME
                </div>
                <h2 className="text-3xl md:text-5xl font-orbitron font-[800] text-text-primary uppercase tracking-tighter italic">
                    WHY CHOOSE ME FOR YOUR{' '}
                    <span className="text-glow-red" style={{ color: '#cc2200' }}>CYBERSECURITY PROJECTS?</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-6">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="cyber-card p-8 text-center group cursor-default"
                        style={{ background: 'linear-gradient(135deg, rgba(22,5,5,0.85) 0%, rgba(12,2,2,0.92) 100%)' }}
                    >
                        <div
                            className="mx-auto w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                            style={{
                                background: 'rgba(204,34,0,0.10)',
                                border: '1px solid rgba(204,34,0,0.25)',
                                color: 'rgba(204,34,0,0.7)',
                            }}
                        >
                            <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-orbitron font-bold text-text-primary mb-4 uppercase tracking-tighter">
                            {card.title}
                        </h3>
                        <p className="text-text-secondary text-xs leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
