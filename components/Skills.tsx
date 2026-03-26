import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Cpu, Brain, Zap, Terminal, Search, Lock, Activity } from 'lucide-react';

export const Skills: React.FC = () => {
  const socSkills = [
    "WAZUH", "LOG ANALYSIS", "SIEM CONCEPTS", "BASIC SOC OPS"
  ];

  const offensiveSkills = [
    "BURP SUITE", "NMAP", "SQLMAP", "GOBUSTER", "NIKTO", "VAPT", "OWASP TOP 10"
  ];

  const networkingSkills = [
    "TCP/IP", "HTTP / HTTPS", "DNS", "SSL / TLS", "WIRESHARK"
  ];

  const skillBadgeStyle = {
    background: 'var(--accent-glow-subtle)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
  };

  return (
    <div id="skills" className="py-20 space-y-24 container-progressive">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* SOC (Basic) */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl" style={{ background: 'var(--accent-glow-subtle)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase italic">SOC (BASIC)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {socSkills.map((skill, i) => (
              <span key={i} className="px-4 py-2 rounded-lg text-[10px] font-mono font-bold uppercase transition-all" style={skillBadgeStyle}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* OFFENSIVE */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl" style={{ background: 'var(--accent-glow-subtle)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
              <Target size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase italic">OFFENSIVE</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {offensiveSkills.map((skill, i) => (
              <span key={i} className="px-4 py-2 rounded-lg text-[10px] font-mono font-bold uppercase transition-all" style={skillBadgeStyle}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* NETWORK */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl" style={{ background: 'var(--accent-glow-subtle)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-orbitron font-black text-text-primary uppercase italic">NETWORK</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {networkingSkills.map((skill, i) => (
              <span key={i} className="px-4 py-2 rounded-lg text-[10px] font-mono font-bold uppercase transition-all" style={skillBadgeStyle}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
