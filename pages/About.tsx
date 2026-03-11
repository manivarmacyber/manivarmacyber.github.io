import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Shield, Target, Cpu, Lock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="pt-24 pb-12">
      <div className="container-progressive px-0">
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
              <p>
                G. Manikanta Varma is a self-driven cybersecurity professional with a strong focus on penetration testing and bug hunting. Experienced in identifying and reporting real-time security issues through freelance projects and government programs.
              </p>
              <p>
                He is skilled in VAPT, Web application security, and using tools like Burp-Suite, Nmap, Nessus, and Metasploit. He holds a CEH Master v12 certification and is currently upgrading his skills while freelancing to help secure government assets.
              </p>

              <div className="pt-8 border-t border-border-color mt-8">
                <h3 className="font-orbitron font-black text-xl text-accent-primary mb-4 uppercase italic tracking-tighter">The Research Platform</h3>
                <p className="text-sm font-medium leading-relaxed">
                  This website serves as a dedicated knowledge repository for advanced cybersecurity research. My mission is to publish in-depth vulnerability analysis, architectural risk models (like BAC and IDOR), and educational security learning content to help the global developer community build more resilient software ecosystems.
                </p>
              </div>
            </div>
            <div className="p-8 space-y-8 border border-border-color rounded-3xl"
              style={{ background: 'var(--bg-card)' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold">Mission</h4>
                  <p className="text-sm text-text-muted/40">Securing the digital frontier through proactive defense.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-text-primary">Vision</h4>
                  <p className="text-sm text-text-muted/40">Setting the standard for elite penetration testing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Highlights - SEO Internal Linking */}
          <div className="mt-20 pt-20 border-t border-border-color">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-4">
                <span className="text-accent-primary font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">Operative Intelligence</span>
                <h2 className="text-3xl md:text-4xl font-orbitron font-black text-text-primary uppercase italic tracking-tighter">
                  RESEARCH <span className="text-accent-primary">HIGHLIGHTS</span>
                </h2>
              </div>
              <Link
                to="/blog"
                className="group flex items-center gap-3 text-text-muted hover:text-accent-primary transition-colors font-orbitron font-bold text-xs tracking-[0.3em] uppercase"
              >
                View Repository <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block p-8 rounded-3xl border border-border-color hover:border-accent-primary/20 transition-all duration-500"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-[9px] font-mono text-text-muted uppercase tracking-widest font-black">
                      <span className="flex items-center gap-1.5"><BookOpen size={10} className="text-accent-primary" /> {post.readingTime}</span>
                      <span>{post.publishDate}</span>
                    </div>
                    <h4 className="text-xl font-orbitron font-black text-text-primary group-hover:text-accent-primary transition-colors uppercase italic leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-sm text-text-muted line-clamp-2 font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
