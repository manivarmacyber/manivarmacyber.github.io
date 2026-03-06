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

  const skillBadgeStyle = {
    background: 'rgba(204,34,0,0.06)',
    border: '1px solid rgba(204,34,0,0.18)',
    color: '#ffffff',
  };

  return (
    <div id="skills" className="py-20 space-y-24 container-progressive px-0">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3" style={{ color: '#ffffff' }}>
            <div className="w-8 h-[1px]" style={{ background: '#cc2200' }} />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">SYSTEM_CAPABILITIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-orbitron font-black tracking-tight text-text-primary uppercase italic">
            SKILLS
          </h2>
        </div>
      </div>

      {/* Offensive vs Defensive */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
        {/* Offensive Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-6 relative">
            <div className="absolute left-0 w-[3px] h-10 opacity-80" style={{ background: '#cc2200' }} />
            <div className="ml-6 p-3 rounded-2xl"
              style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#ffffff' }}>
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary tracking-widest uppercase">OFFENSIVE SECURITY</h3>
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold" style={{ color: '#ffffff' }}>Infiltration & Research</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ml-6 md:ml-12">
            {offensiveSkills.map((skill, i) => (
              <span key={i}
                className="px-5 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase flex items-center gap-2 transition-all duration-200 cursor-default"
                style={skillBadgeStyle}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#cc2200' }} />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Defensive Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-6 relative">
            <div className="absolute left-0 w-[3px] h-10 opacity-80" style={{ background: '#cc2200' }} />
            <div className="ml-6 p-3 rounded-xl"
              style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#ffffff' }}>
              <Shield size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary tracking-widest uppercase">DEFENSIVE SECURITY</h3>
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold" style={{ color: '#ffffff' }}>Mitigation & Strategy</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ml-6 md:ml-12">
            {defensiveSkills.map((skill, i) => (
              <span key={i}
                className="px-5 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase flex items-center gap-2 transition-all duration-200 cursor-default"
                style={skillBadgeStyle}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#cc2200' }} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms vs Soft Skills */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
        <div className="cyber-card p-8 group transition-all">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 rounded-2xl group-hover:scale-110 transition-transform"
              style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#ffffff' }}>
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">TECHNICAL PLATFORMS</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {platforms.map((p, i) => (
              <span key={i} className="px-6 py-3 rounded-2xl text-[10px] font-mono font-black tracking-widest"
                style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#ffffff' }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="cyber-card p-8 group transition-all">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 rounded-2xl group-hover:scale-110 transition-transform"
              style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#ffffff' }}>
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">PROFESSIONAL SOFT SKILLS</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((s, i) => (
              <span key={i} className="px-6 py-3 rounded-xl text-[10px] font-mono font-black tracking-widest"
                style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#ffffff' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
