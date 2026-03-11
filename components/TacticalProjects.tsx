import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Send, CheckCircle2, Zap } from 'lucide-react';

export const TacticalProjects: React.FC = () => {
    return (
        <div id="tactical-projects" className="py-20 space-y-16">
            {/* Top Cards: Response & Confidentiality */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 container-progressive px-0">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 border border-border-color transition-all group rounded-[2rem] sm:rounded-3xl"
                    style={{ background: 'var(--bg-card)' }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-10">
                        <div className="p-4 sm:p-5 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl text-accent-primary group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--accent-glow-subtle)]">
                            <Clock size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">QUICK RESPONSE TIME</h3>
                            <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] font-black italic">Professional Communication Guaranteed</p>
                        </div>
                    </div>
                    <ul className="space-y-4 ml-2">
                        {[
                            "2-4 hours during business hours",
                            "Within 24 hours on weekends",
                            "Emergency consultations available"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-text-muted text-sm font-medium">
                                <CheckCircle2 size={16} className="text-accent-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 border border-border-color transition-all group rounded-[2rem] sm:rounded-3xl"
                    style={{ background: 'var(--bg-card)' }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-10">
                        <div className="p-4 sm:p-5 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl text-accent-primary group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--accent-glow-subtle)]">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">SECURITY & CONFIDENTIALITY</h3>
                            <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] font-black italic">Your Data and Communications are Secure</p>
                        </div>
                    </div>
                    <ul className="space-y-4 ml-2">
                        {[
                            "NDA agreements available",
                            "Secure communication channels",
                            "Professional data handling"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-text-muted text-sm font-medium">
                                <CheckCircle2 size={16} className="text-accent-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Available for Work Banner */}
            <div className="container-progressive px-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-6 sm:p-8 md:p-12 border border-border-color relative overflow-hidden group rounded-[2rem] sm:rounded-[2.5rem]"
                    style={{ background: 'var(--bg-card)' }}
                >
                    {/* Decorative cyan dot indicator */}
                    <div className="absolute top-12 left-12 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shadow-[0_0_10px_var(--accent-glow)]" />
                        <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.4em] font-black">AVAILABLE FOR WORK</span>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pt-12">
                        <div className="max-w-2xl space-y-6">
                            <p className="text-lg text-text-muted leading-relaxed font-medium">
                                I'm currently available for cybersecurity projects including penetration testing, vulnerability assessments, and security consulting opportunities.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 border border-border-color text-text-primary font-orbitron font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-all flex items-center justify-center gap-3 active:scale-[0.98] w-full sm:w-auto"
                            >
                                <span>ENGAGE NOW</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Tactical Bottom Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-border-color">
                        {[
                            "FREELANCE, FULL-TIME & CONTRACT BASE",
                            "CAN TRAVEL ANYWHERE IN INDIA",
                            "AVAILABLE FOR REMOTE AND ON-SITE"
                        ].map((tag, i) => (
                            <div key={i} className="flex items-center gap-4 group/tag">
                                <CheckCircle2 size={14} className="text-accent-primary" />
                                <span className="text-[9px] font-mono text-text-muted group-hover/tag:text-text-primary transition-colors uppercase tracking-[0.2em] font-black">
                                    {tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div >
        </div >
    );
};
