import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Shield, Target, Cpu, Lock, ArrowRight, BookOpen } from 'lucide-react';

import { Link } from 'react-router-dom';

export const About: React.FC = () => {


  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/ManikantaVarmaResume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'G_Manikanta_Varma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.location.href = '/ManikantaVarmaResume.pdf';
    }
  };

  return (
    <div className="pt-24 pb-12 notranslate">
      <div className="container-progressive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-text-primary">
            ABOUT THE <span className="text-accent-primary">OPERATIVE</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p className="font-medium text-text-primary">
                I am G. Manikanta Varma, a cybersecurity analyst with basic experience in SOC operations and a strong specialization in web application security and vulnerability assessment.
              </p>
              <p>
                This website is dedicated to sharing in-depth cybersecurity research, including OWASP Top 10 vulnerabilities, real-world exploitation techniques, and secure coding practices.
              </p>
              <p>
                My goal is to educate developers, security professionals, and learners by providing practical and detailed security insights.
              </p>

              <div className="pt-8 border-t border-border-color mt-8">
                <h3 className="font-orbitron font-black text-xl text-accent-primary mb-4 uppercase italic tracking-tighter">What You Will Find Here</h3>
                <ul className="tactical-list space-y-2 text-sm font-medium">
                  <li>Web Application Security Testing</li>
                  <li>Vulnerability analysis (OWASP Top 10)</li>
                  <li>Basic SIEM monitoring & Log analysis</li>
                  <li>Security research & Bug bounties</li>
                </ul>
              </div>

              {/* Resume Buttons */}
              <div className="pt-6 border-t border-border-color mt-2 flex flex-col sm:flex-row flex-wrap gap-3">
                {/* VIEW: Direct PDF Access */}
                <a
                  href="/ManikantaVarmaResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-orbitron font-black text-[10px] uppercase tracking-widest text-accent-primary border border-accent-primary/30 bg-accent-primary/5 hover:bg-accent-primary/10 hover:border-accent-primary/60 transition-all"
                  onClick={() => {
                    if ((window as any).gtag) (window as any).gtag('event', 'resume_view', { event_category: 'portfolio' });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  View Resume
                </a>
                {/* DOWNLOAD: Fallback/Forced Download Attribute */}
                <a
                  href="/ManikantaVarmaResume.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-orbitron font-black text-[10px] uppercase tracking-widest text-black bg-accent-primary hover:opacity-90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  onClick={(e) => {
                    handleDownload(e);
                    if ((window as any).gtag) (window as any).gtag('event', 'resume_download', { event_category: 'portfolio' });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>
            <div className="p-8 space-y-8 border border-border-color rounded-3xl"
              style={{ background: 'var(--bg-card)' }}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-xl mb-2 text-text-primary">Mission Statement</h4>
                  <p className="text-base text-text-muted/80 leading-relaxed">
                    To build a reliable knowledge platform for cybersecurity learning and awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
