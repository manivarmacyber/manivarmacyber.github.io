import React from 'react';
import { motion } from 'motion/react';
import { Database, FolderOpen, ExternalLink, Lock } from 'lucide-react';

export const CredentialsDatabase: React.FC = () => {
    return (
        <div id="credentials" className="py-12">
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-10 border-white/5 flex items-center gap-8 group bg-white/[0.01] hover:bg-white/[0.03] transition-all cursor-pointer relative overflow-hidden"
                >
                    {/* Subtle Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="p-5 bg-accent-violet/10 border border-accent-violet/20 rounded-2xl text-accent-violet group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(124,58,237,0.1)]">
                        <FolderOpen size={32} />
                    </div>

                    <div className="space-y-2">
                        <span className="block text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] font-black">CREDENTIALS_DATABASE</span>
                        <h3 className="text-lg md:text-xl font-orbitron font-black text-white uppercase tracking-widest group-hover:text-accent-violet transition-colors">
                            ACCESS SKILL CERTIFICATIONS ARCHIVE
                        </h3>
                    </div>

                    <div className="ml-auto opacity-20 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={20} className="text-white" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
