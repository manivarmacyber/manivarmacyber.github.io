import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Shield, Target, Zap, Search, Lock, Activity, ChevronRight, Layout, Globe, Cpu } from 'lucide-react';

export const LiveProjects: React.FC = () => {
    const projects = [
        {
            title: "LIVE REAL TIME PENTES REPORT",
            desc: "Security assessments and vulnerability reporting for critical infrastructure under NCIIPC guidelines.",
            tech: "VAPT // NCIIPC // GOVT_UPLINK",
            icon: Target,
            link: "https://drive.google.com/file/d/1gardG7JF5KeqUdVfPlgaUfpXpRp9rXjj/view?usp=drivesdk"
        },
        {
            title: "VULNERABILITY OF POC OF GOVERNMENT ASSETS TO NCIIPC AND VULNERABILITY DISCLOSURE PROGRAMS",
            desc: "Active contributor to global VDPs (HackerOne, Bugcrowd). Successfully identified and resolved complex logic flaws.",
            tech: "POC // EXPLOIT_DEV // RESPONSIBLE_DISCLOSURE",
            icon: Shield,
            link: "https://drive.google.com/drive/folders/1UpjXoo77MpWRArg4UCLb5JMnd6eJDe_F"
        }
    ];

    return (
        <div id="operational-outputs" className="py-20 space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent-primary/10 rounded-xl border border-accent-primary/20 text-accent-primary">
                    <Activity size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter italic">
                    PROJECTS
                </h2>
                <div className="flex items-center gap-2 text-text-muted font-mono text-[9px] tracking-[0.4em] uppercase font-black">
                    <Globe size={10} className="text-accent-primary" />
                    <span>Live Intelligence & Security Operations</span>
                </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 container-progressive text-left">
                {projects.map((item, i) => (
                    <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-8 border border-border-color space-y-8 group transition-all hover:border-accent-primary/20 block cursor-pointer rounded-3xl"
                        style={{ background: 'var(--bg-card)' }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="p-5 bg-accent-primary/10 rounded-2xl border border-accent-primary/20 text-accent-primary group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--accent-glow-subtle)]">
                                <item.icon size={28} />
                            </div>
                            <div className="px-4 py-1.5 bg-accent-primary/10 border border-border-color rounded-full font-mono text-[8px] text-text-muted tracking-[0.2em]">
                                STATUS: OPERATIONAL
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-orbitron font-black text-text-primary uppercase tracking-tight italic group-hover:text-accent-primary transition-colors">{item.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed font-medium">{item.desc}</p>
                        </div>
                        <div className="pt-8 flex items-center justify-between border-t border-border-color">
                            <span className="text-[10px] font-mono text-accent-primary font-black tracking-widest uppercase">{item.tech}</span>
                            <ChevronRight size={14} className="text-accent-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};
