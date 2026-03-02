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
                    className="glass-card p-12 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
                >
                    <div className="flex items-center gap-8 mb-10">
                        <div className="p-5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,219,233,0.15)]">
                            <Clock size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-orbitron font-black text-white uppercase tracking-tight italic">QUICK RESPONSE TIME</h3>
                            <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] font-black italic">Professional Communication Guaranteed</p>
                        </div>
                    </div>
                    <ul className="space-y-4 ml-2">
                        {[
                            "2-4 hours during business hours",
                            "Within 24 hours on weekends",
                            "Emergency consultations available"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white/60 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-accent-cyan" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-12 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
                >
                    <div className="flex items-center gap-8 mb-10">
                        <div className="p-5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,230,255,0.1)]">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-orbitron font-black text-white uppercase tracking-tight italic">SECURITY & CONFIDENTIALITY</h3>
                            <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] font-black italic">Your Data and Communications are Secure</p>
                        </div>
                    </div>
                    <ul className="space-y-4 ml-2">
                        {[
                            "NDA agreements available",
                            "Secure communication channels",
                            "Professional data handling"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white/60 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-accent-cyan" />
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
                    className="glass-card p-12 md:p-16 border-accent-cyan/10 relative overflow-hidden group bg-accent-cyan/[0.01] hover:bg-accent-cyan/[0.02]"
                >
                    {/* Decorative cyan dot indicator */}
                    <div className="absolute top-12 left-12 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(0,230,255,0.8)]" />
                        <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.4em] font-black">AVAILABLE FOR WORK</span>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pt-12">
                        <div className="max-w-2xl space-y-6">
                            <p className="text-lg text-white/60 leading-relaxed font-medium">
                                I'm currently available for cybersecurity projects including penetration testing, vulnerability assessments, and security consulting opportunities.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 border border-white/10 text-white font-orbitron font-bold text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-white/5 hover:border-accent-cyan/50 hover:shadow-[0_0_25px_rgba(0,219,233,0.1)] transition-all flex items-center justify-center gap-3 active:scale-[0.98] w-full sm:w-auto"
                            >
                                <span>ENGAGE NOW</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Tactical Bottom Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-white/5">
                        {[
                            "FREELANCE, FULL-TIME & CONTRACT BASE",
                            "CAN TRAVEL ANYWHERE IN INDIA",
                            "AVAILABLE FOR REMOTE AND ON-SITE"
                        ].map((tag, i) => (
                            <div key={i} className="flex items-center gap-4 group/tag">
                                <CheckCircle2 size={14} className="text-accent-cyan opacity-40 group-hover/tag:opacity-100 transition-opacity" />
                                <span className="text-[9px] font-mono text-white/40 group-hover/tag:text-white/80 transition-colors uppercase tracking-[0.2em] font-black">
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
