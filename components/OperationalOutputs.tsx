import React from 'react';
import { motion } from 'motion/react';
import { Terminal, ExternalLink, Globe, FileCheck, Shield, ChevronRight } from 'lucide-react';

export const OperationalOutputs: React.FC = () => {
    const outputs = [
        {
            title: "Secured NCIIPC Critical Access Gateway",
            desc: "Deployment of custom security filters and ingress hardening for national CII segments.",
            footer: "SECURE_BY_DESIGN // STABLE_ENVIRONMENT",
            link: "#"
        },
        {
            title: "Vulnerability Disclosure POC Pack 042",
            desc: "Comprehensive proof-of-concept repository for verified flaws in private enterprise networks.",
            footer: "PAYLOAD_VERIFIED // CLEAN_EXIT",
            link: "#"
        }
    ];

    return (
        <div id="operational-outputs" className="space-y-16 py-20">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center gap-4 text-accent-cyan/60 font-mono text-[9px] tracking-[0.5em] uppercase px-4 py-1.5 border border-accent-cyan/20 rounded-full bg-accent-cyan/5">
                    <Shield size={12} className="animate-pulse" />
                    <span>Real-Time Deliverables</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-orbitron font-[800] text-white uppercase tracking-tighter">
                    MISSION <span className="text-accent-cyan text-glow-cyan">OPERATIONAL</span> OUTPUTS
                </h2>
                <div className="w-12 h-[1px] bg-accent-cyan/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-6 max-w-7xl">
                {outputs.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-1 border border-white/5 rounded-2xl bg-white/[0.01] hover:border-accent-cyan/20 transition-all group"
                    >
                        <div className="bg-[#0B101B] rounded-2xl p-12 space-y-8 relative overflow-hidden h-full flex flex-col justify-between border border-white/5">
                            {/* link icon top-right */}
                            <a href={item.link} className="absolute top-8 right-8 text-white/10 group-hover:text-accent-cyan transition-colors">
                                <ExternalLink size={20} />
                            </a>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-accent-violet font-mono text-[9px] font-black tracking-[0.4em] uppercase">
                                    <div className="w-4 h-[1px] bg-accent-violet/40" />
                                    <span>OPERATIONAL_POC</span>
                                </div>
                                <h3 className="text-2xl font-orbitron font-black text-white uppercase tracking-tight leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
                                <div className="text-white/10 font-mono text-[9px] uppercase tracking-widest group-hover:text-accent-cyan/40 transition-colors">
                                    {item.footer}
                                </div>
                                <ChevronRight size={14} className="text-white/10 group-hover:text-accent-cyan transition-transform group-hover:translate-x-2" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
