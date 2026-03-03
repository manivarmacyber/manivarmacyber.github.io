import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Shield, Target, Cpu, Lock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container-progressive px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-text-primary">
            ABOUT THE <span className="text-accent-cyan text-glow-cyan">OPERATIVE</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-text-primary/60 text-lg leading-relaxed">
              <p>
                G. Manikanta Varma is a self-driven cybersecurity professional with a strong focus on penetration testing and bug hunting. Experienced in identifying and reporting real-time security issues through freelance projects and government programs.
              </p>
              <p>
                He is skilled in VAPT, Web application security, and using tools like Burp-Suite, Nmap, Nessus, and Metasploit. He holds a CEH Master v12 certification and is currently upgrading his skills while freelancing to help secure government assets.
              </p>
              <p>
                He has basic knowledge of SOC concepts and tools like SIEM, EDR, XDR, SOAR, and Wazuh, gained through his internship program.
              </p>
            </div>
            <div className="glass-card p-8 space-y-8 border-accent-cyan/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold">Mission</h4>
                  <p className="text-sm text-text-primary/40">Securing the digital frontier through proactive defense.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-text-primary">Vision</h4>
                  <p className="text-sm text-text-primary/40">Setting the standard for elite penetration testing.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
