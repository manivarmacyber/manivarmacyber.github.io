import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Briefcase, Terminal, Globe, Search, Cpu } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      period: "Jan 2025 to Apr 2025",
      title: "CYBER SECURITY AND RISK (TRAINEE INTERN) - REMOTE",
      organization: "FN-CYBER, HYDERABAD",
      details: [
        "Conducted a Web Application Security Assessment on a Unode web server as part of a cybersecurity internship project.",
        "Performed Vulnerability Assessment and Penetration Testing (VAPT) aligned with OWASP Top 10 risks.",
        "Analyzed application security vulnerabilities and documented findings following professional penetration testing methodologies.",
        "Contributed to the preparation of a professional Web Security Assessment Report under a CERT-In aligned cybersecurity training program.",
        "Gained basic exposure to SOC concepts including SIEM monitoring and log analysis using the Wazuh platform."
      ],
      icon: Shield,
      side: 'left'
    },
    {
      id: 2,
      period: "Jan 2024 to Jan 2025",
      title: "SECURITY RESEARCHER - REMOTE",
      organization: "NCIIPC (NATIONAL CRITICAL INFORMATION INFRASTRUCTURE PROTECTION CENTRE)",
      details: [
        "Participated in vulnerability disclosure and bug bounty programs on Open Bug Bounty, HackerOne, and Bugcrowd.",
        "Conducted independent web application security testing and vulnerability research.",
        "Identified and responsibly disclosed security vulnerabilities contributing to improved security posture."
      ],
      icon: Target,
      side: 'right'
    },
    {
      id: 3,
      period: "July 2023 to Jan 2024",
      title: "SECURITY ANALYST (INTERN) - REMOTE",
      organization: "CHAITANYA CYBER STRIX TECHNOLOGIES (CCST), HYDERABAD",
      details: [
        "Conducted vulnerability assessments and security scans on network and web environments using tools such as Burp Suite and Nmap.",
        "Assisted in implementing basic security hardening practices.",
        "Supported security documentation and gained exposure to log analysis and vulnerability identification."
      ],
      icon: Cpu,
      side: 'left'
    }
  ];

  return (
    <div id="journey" className="py-20">
      <div className="flex flex-col items-center gap-6 mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-orbitron font-[800] text-text-primary uppercase tracking-tighter leading-none italic">
          PROFESSIONAL <span className="text-accent-primary">JOURNEY</span>
        </h2>
        <div className="w-1/4 h-px bg-border-color" />
      </div>

      <div className="container-progressive relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border-color/20 -translate-x-1/2 hidden lg:block" />
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-border-color/20 lg:hidden" />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`relative flex flex-col ${exp.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-12 group`}>
              {/* Timeline Dot */}
              <div className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 w-4 h-4 rounded-full -translate-x-1/2 lg:-translate-y-1/2 z-20 group-hover:scale-125 transition-transform opacity-90"
                style={{ background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-glow), 0 0 20px var(--accent-glow-subtle)' }} />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: exp.side === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full lg:w-[45%] p-8 border border-border-color relative overflow-hidden transition-all hover:border-accent-primary/20 group/card rounded-[2rem]`}
                style={{ background: 'var(--bg-card)' }}
              >
                <div className="space-y-6">
                  <span className="block text-[10px] font-mono text-accent-primary uppercase tracking-[0.4em] font-black">{exp.title}</span>
                  <ul className="space-y-4">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 text-text-muted text-sm leading-relaxed font-medium">
                        <span className="text-accent-primary">▹</span>
                        <span className="group-hover/card:text-text-primary transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Info Block (Date & Org) */}
              <div className={`w-full lg:w-[45%] flex flex-col ${exp.side === 'left' ? 'lg:items-start pl-16 lg:pl-0' : 'lg:items-end pr-0 lg:pr-0 pl-16 lg:pl-0'} space-y-4`}>
                <span className="text-base font-mono text-accent-primary uppercase tracking-[0.4em] font-black italic opacity-70">{exp.period}</span>
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-text-primary uppercase tracking-tighter leading-none italic max-w-sm">
                  {exp.organization}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
