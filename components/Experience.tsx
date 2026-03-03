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
        "Selected for an intensive cybersecurity internship trainee program with a focus on both offensive and defensive security practices.",
        "Worked on a real-time penetration testing project, contributing to security assessments and professional reporting.",
        "Trained in SOC operations with practical exposure to tools including SIEM, EDR, XDR, and SOAR.",
        "Gained basic hands-on experience with the Wazuh platform in setting up endpoints, Monitoring, log collection and basic threat analysis."
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
        "Actively engaged in individual vulnerability disclosure programs on platforms such as Open Bug Bounty, Hacker One, and the Bug crowd.",
        "Successfully identified and responsibly disclosed security vulnerabilities to various organizations, contributing to the improvement of their overall cybersecurity posture."
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
        "Conducted comprehensive security assessments and vulnerability scans on network infrastructure using tools such as [Burp, Nessus, etc.].",
        "Assisted in developing and implementing security policies and procedures aimed at enhancing the organization's cybersecurity posture.",
        "Contributed to incident response activities, including finding Vulnerability, and documented security findings to assist in post incident analysis."
      ],
      icon: Cpu,
      side: 'left'
    }
  ];

  return (
    <div id="journey" className="py-20">
      <div className="flex flex-col items-center gap-6 mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-orbitron font-[800] text-text-primary uppercase tracking-tighter leading-none italic">
          PROFESSIONAL <span className="text-accent-cyan text-glow-cyan">JOURNEY</span>
        </h2>
        <div className="w-1/4 h-px bg-border" />
      </div>

      <div className="container-progressive relative px-0">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent-violet/20 -translate-x-1/2 hidden lg:block" />
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-accent-violet/20 lg:hidden" />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`relative flex flex-col ${exp.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-12 group`}>
              {/* Timeline Dot */}
              <div className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 w-4 h-4 bg-accent-cyan rounded-full -translate-x-1/2 lg:-translate-y-1/2 shadow-[0_0_8px_var(--color-accent-cyan)] z-20 group-hover:scale-125 transition-transform opacity-80" />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: exp.side === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full lg:w-[45%] glass-card p-8 border-border relative overflow-hidden bg-card-bg transition-all hover:border-accent-cyan/20 group/card`}
              >
                <div className="space-y-6">
                  <span className="block text-[10px] font-mono text-accent-cyan uppercase tracking-[0.4em] font-black">{exp.title}</span>
                  <ul className="space-y-4">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 text-text-secondary text-sm leading-relaxed font-medium">
                        <span className="text-accent-cyan">▹</span>
                        <span className="group-hover/card:text-text-primary transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Info Block (Date & Org) */}
              <div className={`w-full lg:w-[45%] flex flex-col ${exp.side === 'left' ? 'lg:items-start pl-16 lg:pl-0' : 'lg:items-end pr-0 lg:pr-0 pl-16 lg:pl-0'} space-y-4`}>
                <span className="text-base font-mono text-accent-violet uppercase tracking-[0.4em] font-black italic">{exp.period}</span>
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
