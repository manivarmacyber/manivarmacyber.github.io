import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

export const Blog: React.FC = () => {
  React.useEffect(() => {
    const existingScript = document.getElementById('adsense-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7367345153052165";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.id = "adsense-script";
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('adsense-script');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-border-color rounded-full font-mono text-[10px] text-accent-primary tracking-[0.4em] font-black uppercase italic"
              style={{ background: 'var(--accent-primary-faded)' }}>
              Knowledge Repository
            </div>
            <h1 className="font-orbitron text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-none italic text-text-primary flex flex-col items-center">
              SECURITY <span className="text-accent-primary">INSIGHTS</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto text-lg font-medium">
              Technical intelligence and vulnerability research from the front lines of enterprise security.
            </p>
          </motion.div>

          <div className="w-full h-32 border border-border-color bg-accent-primary/5 mb-20 flex items-center justify-center text-text-muted/20 font-mono text-[10px] tracking-[0.6em] font-black italic rounded-2xl"
            style={{ background: 'var(--bg-card)' }}>
            [ SYSTEM_AD_UPLINK_READY ]
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full transition-transform duration-300">
                  <div className="glass-card h-full flex flex-col overflow-hidden rounded-3xl transition-all duration-300"
                    style={{ background: 'var(--bg-card)' }}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{
                          mixBlendMode: 'var(--theme-blend-mode)' as any,
                          borderBottom: '1px solid var(--border-color)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[9px] font-orbitron font-bold text-accent-primary px-3 py-1.5 rounded-2xl border border-border-color backdrop-blur-xl uppercase tracking-widest leading-none"
                            style={{ background: 'var(--accent-primary-faded)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-6 text-[9px] font-mono text-text-muted mb-6 uppercase tracking-[0.3em] font-black italic">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-accent-primary" />
                          {post.publishDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-accent-primary" />
                          {post.readingTime}
                        </div>
                      </div>

                      <h3 className="font-orbitron font-black text-2xl lg:text-3xl mb-4 group-hover:text-accent-primary transition-colors line-clamp-2 uppercase italic leading-tight text-text-primary">
                        {post.title}
                      </h3>

                      <p className="text-text-muted text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-3 text-accent-primary font-orbitron font-black text-[10px] tracking-[0.4em] uppercase italic group-hover:gap-5 transition-all">
                        ACCESS DOSSIER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-32 border border-border-color bg-accent-primary/5 mt-20 flex items-center justify-center text-text-muted/20 font-mono text-[10px] tracking-[0.6em] font-black italic rounded-2xl"
            style={{ background: 'var(--bg-card)' }}>
            [ SYSTEM_AD_UPLINK_READY ]
          </div>
        </div>
      </div>
    </div>
  );
};
