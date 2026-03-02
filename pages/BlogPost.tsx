import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import {
  Calendar, Clock, User, Share2, Linkedin, Twitter,
  MessageCircle, ArrowLeft, Tag, Shield, Target,
  Zap, AlertTriangle, Search, CheckCircle2, Info,
  TrendingDown, FileText, Database, ShieldAlert, Cpu
} from 'lucide-react';

const AdBlock: React.FC = () => {
  React.useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) { }
  }, []);

  return (
    <div className="my-16 py-8 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col items-center justify-center min-h-[100px] overflow-hidden">
      <span className="text-[10px] font-mono text-white/10 uppercase tracking-[0.4em] mb-4">ADVERTISEMENT</span>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7367345153052165"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const [likes, setLikes] = React.useState<number>(0);
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [subscribed, setSubscribed] = React.useState<boolean>(false);

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
  }, []);

  React.useEffect(() => {
    if (post) {
      const storedLikes = localStorage.getItem(`blog-likes-${post.id}`);
      const userLiked = localStorage.getItem(`blog-liked-${post.id}`);
      const userSubscribed = localStorage.getItem(`blog-subscribed`);
      if (storedLikes) setLikes(parseInt(storedLikes));
      if (userLiked) setIsLiked(true);
      if (userSubscribed) setSubscribed(true);
    }
  }, [post]);

  const handleLike = () => {
    if (!post || isLiked) return;
    const newLikes = likes + 1;
    setLikes(newLikes);
    setIsLiked(true);
    localStorage.setItem(`blog-likes-${post.id}`, newLikes.toString());
    localStorage.setItem(`blog-liked-${post.id}`, 'true');
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    localStorage.setItem(`blog-subscribed`, 'true');
    // Subtle alert for feedback
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 px-8 py-4 bg-accent-cyan text-black font-orbitron font-bold text-xs uppercase tracking-[0.4em] rounded-2xl shadow-[0_0_30px_rgba(0,219,233,0.4)] z-[100] animate-bounce';
    toast.innerText = 'RESEARCH ALERTS ENABLED';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };

  if (!post) return <Navigate to="/blog" />;

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  // Split content by ad placeholders
  const contentParts = post.content.split(/<!-- AD_PLACEHOLDER_\d+ -->/);

  const components = {
    h2: ({ ...props }) => (
      <div className="flex items-center gap-6 mt-16 mb-8 group/h2">
        <div className="p-3 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan group-hover/h2:scale-110 transition-transform">
          {props.children?.toString().includes('EXECUTIVE') ? <Shield size={24} /> :
            props.children?.toString().includes('WHAT IS') ? <Search size={24} /> :
              props.children?.toString().includes('WHY') ? <ShieldAlert size={24} className="text-accent-cyan" /> :
                props.children?.toString().includes('TYPES') ? <Database size={24} /> :
                  props.children?.toString().includes('CVSS') ? <ShieldAlert size={24} className="text-accent-cyan" /> :
                    props.children?.toString().includes('METHODOLOGY') ? <Target size={24} className="text-accent-cyan" /> :
                      props.children?.toString().includes('HOW TO FIX') ? <CheckCircle2 size={24} className="text-accent-cyan" /> :
                        <Zap size={24} />}
        </div>
        <h2 {...props} className="text-2xl md:text-3xl font-orbitron font-[800] tracking-[0.3px] leading-none text-white flex flex-wrap gap-2">
          {props.children}
        </h2>
      </div>
    ),
    h3: ({ ...props }) => (
      <h3 {...props} className="text-lg font-orbitron font-bold text-white uppercase tracking-wider mt-10 mb-4" />
    ),
    p: ({ children, ...props }: any) => {
      const isFirstParagraph = children?.[0]?.props?.node?.position?.start?.line === 2 || children?.toString().startsWith('Access control');
      return (
        <p className={`text-[rgba(230,250,255,0.85)] leading-[1.8] mb-[1.2rem] text-lg font-medium ${isFirstParagraph ? 'blog-drop-cap' : ''}`}>
          {children}
        </p>
      );
    },
    ul: ({ ...props }) => <ul {...props} className="tactical-list space-y-4 mb-10" />,
    li: ({ ...props }) => <li {...props} className="text-white/60 font-medium text-sm" />,
    blockquote: ({ ...props }) => (
      <div className="my-12 p-8 bg-accent-cyan/[0.02] border-l-4 border-accent-cyan rounded-r-2xl italic text-xl text-white/80 font-medium leading-relaxed">
        {props.children}
      </div>
    ),
    img: ({ ...props }) => (
      <div className="my-16 flex flex-col items-center group">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative max-w-[900px] w-full rounded-2xl overflow-hidden border border-accent-cyan/20 shadow-[0_0_30px_rgba(0,230,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,230,255,0.2)] transition-all duration-700"
        >
          <img {...props} className="w-full h-auto block" />
        </motion.div>
        <p className="mt-6 font-mono text-[10px] text-white/40 uppercase tracking-[0.4em] font-black italic">
          {props.alt || "Tactical security visualization"}
        </p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6 overflow-hidden relative z-10">
        <div className="max-w-[900px] mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-accent-cyan transition-colors mb-16 font-orbitron font-bold text-xs tracking-[0.4em] uppercase">
            <ArrowLeft size={16} /> BACK TO BLOG REPOSITORY
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Meta Header */}
            <div className="flex flex-wrap items-center gap-8 text-[10px] font-mono text-white/40 mb-10 uppercase tracking-[0.4em] font-black">
              <div className="px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-accent-cyan">
                {post.tags[0]}
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-accent-cyan" />
                {post.publishDate}
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-accent-cyan" />
                {post.readingTime}
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl font-[800] tracking-tighter mb-8 leading-[1.1] text-white uppercase italic">
              {post.title}
            </h1>

            {/* Like & Share Header */}
            <div className="flex items-center gap-6 mb-16">
              <button
                onClick={handleLike}
                disabled={isLiked}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all ${isLiked
                  ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan'
                  : 'bg-white/5 border-white/10 text-white/40 hover:border-accent-cyan/50 hover:text-accent-cyan'
                  }`}
              >
                <motion.div
                  animate={isLiked ? { scale: [1, 1.5, 1], rotate: [0, 20, 0] } : {}}
                >
                  <TrendingDown size={20} className={isLiked ? 'fill-accent-cyan' : ''} />
                </motion.div>
                <span className="font-mono text-xs font-black tracking-widest">{likes} LIKES</span>
              </button>

              <div className="h-4 w-px bg-white/10" />

              <div className="flex gap-4">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,219,233,0.15)] transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,219,233,0.15)] transition-all"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-24 grayscale-[50%] hover:grayscale-0 transition-all duration-1000 border border-white/5 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="flex flex-col lg:flex-row gap-20">
              <div className="flex-grow">
                <div className="blog-content">
                  {contentParts.map((part, index) => (
                    <React.Fragment key={index}>
                      <ReactMarkdown components={components as any}>{part}</ReactMarkdown>
                      {index < contentParts.length - 1 && <AdBlock />}
                    </React.Fragment>
                  ))}
                </div>

                {/* News Subscription - Moved & Resized */}
                <div className="mt-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 border-accent-cyan/20 bg-accent-cyan/[0.01] relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl text-accent-cyan shrink-0">
                        <Search size={32} />
                      </div>
                      <div className="flex-grow text-center md:text-left space-y-2">
                        <h3 className="text-xl md:text-2xl font-orbitron font-black text-white uppercase tracking-tighter leading-none italic">
                          SUBSCRIBE TO <span className="text-accent-cyan">RESEARCH ALERTS</span>
                        </h3>
                        <p className="text-white/40 text-sm font-medium">
                          encrypted push notifications for zero-day research.
                        </p>
                      </div>
                      <button
                        onClick={handleSubscribe}
                        disabled={subscribed}
                        className={`px-8 py-4 rounded-2xl font-orbitron font-bold text-[10px] uppercase tracking-[0.3em] transition-all flex items-center gap-3 shrink-0 ${subscribed
                          ? 'bg-accent-cyan/20 border border-accent-cyan text-accent-cyan cursor-default'
                          : 'bg-white/5 border border-white/10 text-white hover:bg-accent-cyan hover:border-accent-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,219,233,0.3)] active:scale-95'
                          }`}
                      >
                        {subscribed ? (
                          <>
                            <CheckCircle2 size={14} />
                            <span>ACTIVE</span>
                          </>
                        ) : (
                          <>
                            <Zap size={14} />
                            <span>SUBSCRIBE</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Share Section - Relocated below Subscribe */}
                <div className="mt-16 p-12 glass-card border-white/5 bg-white/[0.01]">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                      <h4 className="font-orbitron font-black text-xl mb-3 text-white">REINFORCE SECURITY</h4>
                      <p className="text-white/40 text-sm font-medium tracking-wide">Distribute this technical intelligence to your operations center.</p>

                      <div className="flex gap-4 mt-6">
                        <a
                          href="https://www.linkedin.com/in/manikantavarmag"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-accent-cyan hover:text-white transition-colors tracking-widest uppercase font-black"
                        >
                          View Operative Profile
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      {[
                        { icon: Linkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
                        { icon: MessageCircle, url: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}` },
                        {
                          icon: FileText,
                          url: '#',
                          onClick: (e: any) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(shareUrl);
                            alert("LINK COPIED TO CLIPBOARD");
                          }
                        }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.url}
                          onClick={item.onClick}
                          target={item.onClick ? undefined : "_blank"}
                          rel={item.onClick ? undefined : "noopener noreferrer"}
                          className="w-16 h-16 rounded-2xl glass-card border-white/10 flex items-center justify-center text-white/40 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,230,255,0.2)]"
                        >
                          <item.icon size={24} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Severity Indicators - Content context */}
                {post.content.includes('SEVERITY & RISK CLASSIFICATION') && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                    {[
                      { label: '9.8', sub: 'TYPICAL HIGH CVSS', color: 'text-accent-cyan', icon: TrendingDown },
                      { label: 'CVE', sub: 'DOCUMENTATION BASIS', color: 'text-white', icon: FileText },
                      { label: 'Impact', sub: 'DATA INTEGRITY LOSS', color: 'text-accent-cyan', icon: ShieldAlert }
                    ].map((item, i) => (
                      <div key={i} className="glass-card p-10 border-white/5 bg-white/[0.01] text-center space-y-4 group hover:bg-white/[0.03] transition-all">
                        <div className={`text-4xl md:text-5xl font-orbitron font-black ${item.color} group-hover:scale-110 transition-transform`}>
                          {item.label}
                        </div>
                        <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] font-black">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Need Assessment CTA - Final Position */}
                <div className="mt-32">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="glass-card p-16 md:p-24 border-accent-cyan/20 bg-accent-cyan/[0.01] text-center space-y-12 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <h3 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter italic">
                      NEED A SECURITY <span className="text-white">ASSESSMENT?</span>
                    </h3>

                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">
                      I specialize in hardening infrastructure and identifying complex vulnerabilities before they can be exploited.
                    </p>

                    <div className="flex justify-center pt-8">
                      <Link
                        to="/#contact"
                        className="px-12 py-5 border border-accent-cyan/30 text-white font-orbitron font-bold text-xs uppercase tracking-[0.4em] hover:bg-accent-cyan hover:shadow-[0_0_30px_rgba(0,219,233,0.3)] transition-all rounded-2xl relative z-20"
                      >
                        CONTACT ME
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
