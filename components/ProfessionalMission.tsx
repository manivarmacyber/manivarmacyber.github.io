import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';
import { CyberSphereAnimation } from './CyberSphere';

const BackgroundEffects = () => {
    const [elements, setElements] = useState<{ id: number; x: number; y: number; text?: string; type: 'particle' | 'text' }[]>([]);

    useEffect(() => {
        const keywords = ["SCAN", "AUTH", "443", "PORT", "READY", "SYS_ON"];
        const initialElements = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            type: Math.random() > 0.8 ? 'text' : 'particle',
            text: keywords[Math.floor(Math.random() * keywords.length)]
        }));
        setElements(initialElements as any);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {/* Scanning Lines */}
            <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent blur-sm"
            />
            <motion.div 
                animate={{ x: ['200%', '-100%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-3/4 w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-sm"
            />

            {/* Floating Elements */}
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: [0, 0.5, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ 
                        duration: 5 + Math.random() * 5, 
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                    style={{ left: `${el.x}%`, top: `${el.y}%` }}
                    className="absolute"
                >
                    {el.type === 'particle' ? (
                        <div className="w-1 h-1 bg-accent-primary rounded-full blur-[1px]" />
                    ) : (
                        <span className="font-mono text-[8px] text-accent-primary/60 tracking-widest font-black uppercase">
                            {el.text}
                        </span>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export const ProfessionalMission: React.FC = () => {
    return (
        <div id="mission" className="py-20 relative overflow-hidden">
            <div className="container-progressive">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 lg:p-16 border border-border-color relative overflow-hidden group rounded-[3rem]"
                    style={{ background: 'var(--bg-card)' }}
                >
                    {/* Futuristic Background Effects */}
                    <BackgroundEffects />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text Column */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[1em] font-black">WEB APPLICATION SECURITY</span>
                                <h2 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter leading-[1.1] italic">
                                    WEB APPLICATION SECURITY & <span className="text-text-primary underline decoration-accent-primary underline-offset-8">VAPT</span>
                                </h2>
                            </div>

                            <div className="space-y-6 max-w-2xl">
                                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium">
                                    Cybersecurity professional with hands-on experience in <span className="font-black text-text-primary">Vulnerability Assessment and Penetration Testing (VAPT)</span>, Web Application Security, and security research through vulnerability disclosure programs.
                                </p>

                                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium">
                                    Experienced in identifying and responsibly disclosing security vulnerabilities in real-world applications. Skilled in performing security assessments using tools such as <span className="font-black text-text-primary">Burp Suite, Nmap, Nessus, Metasploit, SQLMap, Nikto, Gobuster, and Wireshark.</span>
                                </p>

                                <div className="p-4 bg-background-light/30 border-l-2 border-accent-primary rounded-r-xl">
                                    <p className="text-sm sm:text-base text-text-muted italic leading-relaxed">
                                        "My mission is to harden digital assets and ensure the integrity of web ecosystems through rigorous testing and ethical disclosure."
                                    </p>
                                </div>
                            </div>

                            {/* Technical Status Footer */}
                            <div className="pt-12 flex flex-wrap gap-8 sm:gap-12 border-t border-border-color/50">
                                <div className="flex items-center gap-4">
                                    <div className="font-mono text-[9px] text-text-muted/40 font-black">01 // 10</div>
                                    <div>
                                        <span className="block text-[10px] font-mono text-text-muted/60 uppercase tracking-[0.4em] font-black mb-1">OPERATIVE_STATE</span>
                                        <span className="block text-xs font-orbitron font-black text-text-primary tracking-widest">ACTIVE_UPGRADING</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Shield size={16} className="text-accent-primary animate-pulse" />
                                    <div>
                                        <span className="block text-[10px] font-mono text-text-muted/60 uppercase tracking-[0.4em] font-black mb-1">PRIMARY_FOCUS</span>
                                        <span className="block text-xs font-orbitron font-black text-text-primary tracking-widest">GOVT_ASSET_HARDENING</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enlarged Terminal Column */}
                        <div className="w-full flex justify-center items-center">
                             <CyberSphereAnimation />
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};
