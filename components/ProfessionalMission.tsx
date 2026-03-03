import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Cpu, Zap } from 'lucide-react';

export const ProfessionalMission: React.FC = () => {
    return (
        <div id="mission" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-16 border-border relative overflow-hidden group bg-card-bg"
                >
                    {/* Target Watermark Decoration */}
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
                        <div className="relative w-96 h-96 border-4 border-text-primary rounded-full flex items-center justify-center">
                            <div className="w-64 h-64 border-4 border-text-primary rounded-full flex items-center justify-center" />
                            <div className="absolute w-full h-[2px] bg-text-primary top-1/2 left-0" />
                            <div className="absolute h-full w-[2px] bg-text-primary left-1/2 top-0" />
                        </div>
                    </div>

                    <div className="relative z-10 space-y-12">
                        <div className="space-y-4">
                            <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[1em] font-black">SELF-DRIVEN MISSION</span>
                            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter leading-[1.1] italic">
                                SELF-DRIVEN CYBERSECURITY <span className="text-accent-cyan text-glow-cyan">PROFESSIONAL</span> WITH A STRONG FOCUS ON <span className="text-text-primary underline decoration-accent-cyan underline-offset-8">PENETRATION TESTING</span> AND BUG HUNTING.
                            </h2>
                        </div>

                        <div className="space-y-8 max-w-3xl">
                            <p className="text-lg text-text-secondary leading-relaxed font-medium">
                                Experienced in identifying and reporting real-time security issues through freelance projects and government programs. Skilled in VAPT, Web application security, and using tools like <span className="font-black text-text-primary">Burp-Suite, Nmap, Nessus, and Metasploit.</span>
                            </p>

                            <p className="text-lg text-text-secondary leading-relaxed font-medium">
                                Holds <span className="font-black text-text-primary underline decoration-accent-cyan underline-offset-8">CEH Master v12 certification</span> and currently upgrading skills while freelancing to help secure government assets. Basic knowledge of SOC concepts and tools like SIEM, EDR, XDR, SOAR, and Wazuh, gained through internship programs.
                            </p>
                        </div>

                        {/* Technical Status Footer */}
                        <div className="pt-16 flex flex-wrap gap-12 border-t border-border">
                            <div className="flex items-center gap-4">
                                <div className="font-mono text-[9px] text-text-secondary/40 font-black">01 // 10</div>
                                <div>
                                    <span className="block text-[10px] font-mono text-text-secondary/60 uppercase tracking-[0.4em] font-black mb-1">OPERATIVE_STATE</span>
                                    <span className="block text-xs font-orbitron font-black text-text-primary tracking-widest">ACTIVE_UPGRADING</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Shield size={16} className="text-accent-cyan animate-pulse" />
                                <div>
                                    <span className="block text-[10px] font-mono text-text-secondary/60 uppercase tracking-[0.4em] font-black mb-1">PRIMARY_FOCUS</span>
                                    <span className="block text-xs font-orbitron font-black text-text-primary tracking-widest">GOVT_ASSET_HARDENING</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
