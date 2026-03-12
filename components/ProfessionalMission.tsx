import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { CyberSphereAnimation } from './CyberSphere';

export const ProfessionalMission: React.FC = () => {
    return (
        <div id="mission" className="py-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 lg:p-16 border border-border-color relative overflow-hidden group rounded-[3rem]"
                    style={{ background: 'var(--bg-card)' }}
                >
                    {/* Target Watermark Decoration */}
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none z-0 hidden lg:block">
                        <div className="relative w-96 h-96 border-4 border-text-primary rounded-full flex items-center justify-center">
                            <div className="w-64 h-64 border-4 border-text-primary rounded-full flex items-center justify-center" />
                            <div className="absolute w-full h-[2px] bg-text-primary top-1/2 left-0" />
                            <div className="absolute h-full w-[2px] bg-text-primary left-1/2 top-0" />
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Text Column */}
                        <div className="lg:col-span-7 space-y-12">
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

                                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium">
                                    Strong understanding of <span className="font-black text-text-primary">OWASP Top 10 vulnerabilities</span>, HTTP/HTTPS protocols, and practical web application security testing methodologies.
                                </p>

                                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium">
                                    Certified Ethical Hacker (<span className="font-black text-text-primary underline decoration-accent-primary underline-offset-8">CEH Master v12</span>) with basic exposure to SOC concepts including SIEM monitoring and security event analysis using the Wazuh platform during cybersecurity internship training.
                                </p>
                            </div>

                            {/* Technical Status Footer */}
                            <div className="pt-12 flex flex-wrap gap-8 sm:gap-12 border-t border-border-color">
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

                        {/* 3D Animation Column */}
                        <div className="lg:col-span-5 w-full flex justify-center items-center lg:h-full min-h-[400px]">
                             <CyberSphereAnimation />
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};
