import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Cpu, Brain, Zap, Terminal, Search, Lock, Activity } from 'lucide-react';

export const Skills: React.FC = () => {
  const offensiveSkills = [
    "PENETRATION TESTING", "BUG HUNTING", "VAPT ASSESSMENT",
    "WEB APP SECURITY", "LINUX OPERATIONS", "BURP-SUITE",
    "NMAP", "NESSUS", "METASPLOIT",
    "WIRESHARK", "SQLMAP", "NIKTO"
  ];

  const defensiveSkills = [
    "SOC CONCEPTS", "THREAT ANALYSIS", "LOG COLLECTION", "WAZUH"
  ];

  const platforms = ["LINUX", "WINDOWS", "WEB APPLICATIONS"];
  const softSkills = ["LOGICAL THINKING", "PROBLEM SOLVING", "COMMUNICATION"];

  return (
    <div id="skills" className="py-20 space-y-24 container-progressive px-0">
      {/* Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-accent-cyan">
            <div className="w-8 h-[1px] bg-accent-cyan" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">SYSTEM_CAPABILITIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-orbitron font-black tracking-tight text-text-primary uppercase italic">
            SKILLS
          </h2>
        </div>
      </div>

      {/* Top Split: Offensive vs Defensive */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
        {/* Offensive Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-6 relative">
            <div className="absolute left-0 w-[3px] h-10 bg-accent-cyan opacity-80" />
            <div className="ml-6 p-3 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan">
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary tracking-widest uppercase">OFFENSIVE SECURITY</h3>
              <p className="text-[10px] font-mono text-accent-cyan tracking-[0.4em] uppercase font-bold">Infiltration & Research</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ml-6 md:ml-12">
            {offensiveSkills.map((skill, i) => (
              <span key={i} className="px-5 py-2.5 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg text-[10px] font-mono text-accent-cyan/80 font-bold hover:bg-accent-cyan/10 transition-colors uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Defensive Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-6 relative">
            <div className="absolute left-0 w-[3px] h-10 bg-accent-cyan opacity-80" />
            <div className="ml-6 p-3 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl text-accent-cyan">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary tracking-widest uppercase">DEFENSIVE SECURITY</h3>
              <p className="text-[10px] font-mono text-accent-cyan tracking-[0.4em] uppercase font-bold">Mitigation & Strategy</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ml-6 md:ml-12">
            {defensiveSkills.map((skill, i) => (
              <span key={i} className="px-5 py-2.5 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg text-[10px] font-mono text-accent-cyan/80 font-bold hover:bg-accent-cyan/10 transition-colors uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Split: Platforms vs Soft Skills */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
        <div className="glass-card p-8 border-border bg-card-bg transition-all group">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">TECHNICAL PLATFORMS</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {platforms.map((p, i) => (
              <span key={i} className="px-6 py-3 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-[10px] font-mono font-black text-accent-cyan tracking-widest">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 border-border bg-card-bg transition-all group">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan group-hover:scale-110 transition-transform">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">PROFESSIONAL SOFT SKILLS</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((s, i) => (
              <span key={i} className="px-6 py-3 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl text-[10px] font-mono font-black text-accent-cyan tracking-widest">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
