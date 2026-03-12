import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Cpu, Brain, Zap, Terminal, Search, Lock, Activity } from 'lucide-react';

export const Skills: React.FC = () => {
  const securityTools = [
    "BURP SUITE", "NMAP", "METASPLOIT", "WIRESHARK",
    "GOBUSTER", "SQLMAP", "NESSUS", "NIKTO", "WAZUH"
  ];

  const networkingSkills = [
    "TCP/IP", "HTTP / HTTPS", "SSL / TLS", "DNS"
  ];

  const networkSecurity = [
    "NETWORK SECURITY FUNDAMENTALS", "FIREWALL BASICS"
  ];

  const frameworks = [
    "OWASP TOP 10", "RESPONSIBLE DISCLOSURE"
  ];

  const platforms = [
    "LINUX", "WINDOWS"
  ];

  const skillBadgeStyle = {
    background: 'var(--accent-glow-subtle)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
  };

  return (
    <div id="skills" className="py-20 space-y-24 container-progressive px-0">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <div className="w-8 h-[1px]" style={{ background: 'var(--accent-primary)' }} />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-70">SYSTEM_CAPABILITIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-orbitron font-black tracking-tight text-text-primary uppercase italic">
            SKILLS
          </h2>
        </div>
      </div>

      {/* Tools & Networking Column */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
        {/* Tools Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-6 relative">
            <div className="absolute left-0 w-[3px] h-10 opacity-80" style={{ background: 'var(--accent-primary)' }} />
            <div className="ml-6 p-3 rounded-2xl"
              style={{ background: 'var(--accent-glow-subtle)', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary tracking-widest uppercase">SECURITY TOOLS</h3>
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-text-muted">Analysis & Exploitation</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ml-6 md:ml-12">
            {securityTools.map((skill, i) => (
              <span key={i}
                className="px-5 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase flex items-center gap-2 transition-all duration-200 cursor-default"
                style={skillBadgeStyle}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }} />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Networking Column */}
        <div className="space-y-10">
          <div className="flex items-center gap-6 relative">
            <div className="absolute left-0 w-[3px] h-10 opacity-80" style={{ background: 'var(--accent-primary)' }} />
            <div className="ml-6 p-3 rounded-xl"
              style={{ background: 'var(--accent-glow-subtle)', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
              <Activity size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary tracking-widest uppercase">NETWORKING & PROTOCOLS</h3>
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-text-muted">Infrastructure Fundamentals</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ml-6 md:ml-12">
            {networkingSkills.map((skill, i) => (
              <span key={i}
                className="px-5 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase flex items-center gap-2 transition-all duration-200 cursor-default"
                style={skillBadgeStyle}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Network Security, Frameworks & Platforms */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
        <div className="cyber-card p-8 group transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 rounded-2xl group-hover:scale-110 transition-transform"
              style={{ background: 'var(--accent-glow-subtle)', border: '1px solid var(--border-color)', color: 'var(--accent-secondary)' }}>
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">NETWORK <span className="text-accent-primary">SECURITY</span></h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {networkSecurity.map((p, i) => (
              <span key={i} className="px-6 py-3 rounded-2xl text-[10px] font-mono font-black tracking-widest border border-border-color flex items-center gap-2 group-hover:border-accent-secondary/30 transition-all duration-300"
                style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: 'var(--accent-secondary)' }} />
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="cyber-card p-8 group transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 rounded-2xl group-hover:scale-110 transition-transform"
              style={{ background: 'var(--accent-glow-subtle)', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
              <Search size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">SECURITY <span className="text-accent-primary">FRAMEWORKS</span></h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {frameworks.map((s, i) => (
              <span key={i} className="px-6 py-3 rounded-xl text-[10px] font-mono font-black tracking-widest border border-border-color flex items-center gap-2 group-hover:border-accent-primary/30 transition-all duration-300"
                style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <div className="w-1 h-1 rounded-full" style={{ background: 'var(--accent-primary)' }} />
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="cyber-card p-8 group transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 rounded-2xl group-hover:scale-110 transition-transform"
              style={{ background: 'var(--accent-glow-subtle)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase tracking-tight italic">OPERATING <span className="text-accent-primary">SYSTEMS</span></h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {platforms.map((s, i) => (
              <span key={i} className="px-6 py-3 rounded-xl text-[10px] font-mono font-black tracking-widest border border-border-color flex items-center gap-2 transition-all duration-300"
                style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <div className="w-1 h-1 rounded-full" style={{ background: 'var(--accent-primary)' }} />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
