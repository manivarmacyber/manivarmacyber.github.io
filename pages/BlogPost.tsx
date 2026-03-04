import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import {
  Calendar, Clock, User, Share2, Linkedin, Twitter,
  MessageCircle, ArrowLeft, ArrowRight, Tag, Shield, Target,
  Zap, AlertTriangle, Search, CheckCircle2, Info,
  TrendingDown, FileText, Database, ShieldAlert, Cpu
} from 'lucide-react';
import { db, app } from '../src/firebase';
import { getMessaging, getToken } from 'firebase/messaging';
import { doc, setDoc, getDoc, onSnapshot, updateDoc, increment, serverTimestamp } from 'firebase/firestore';

const AdBlock: React.FC = () => {
  React.useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) { }
  }, []);

  return (
    <div className="my-16 py-8 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col items-center justify-center min-h-[100px] overflow-hidden">
      <span className="text-[10px] font-mono text-text-primary/10 uppercase tracking-[0.4em] mb-4">ADVERTISEMENT</span>
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
  const [isLikeLoading, setIsLikeLoading] = React.useState<boolean>(false);
  const [isShareLoading, setIsShareLoading] = React.useState<boolean>(false);
  const [subscribed, setSubscribed] = React.useState<boolean>(false);
  const [isSubscribing, setIsSubscribing] = React.useState<boolean>(false);
  const [subscriptionError, setSubscriptionError] = React.useState<string | null>(null);
  const [shares, setShares] = React.useState<{ total: number; whatsapp: number; linkedin: number; twitter: number }>({ total: 0, whatsapp: 0, linkedin: 0, twitter: 0 });
  const messaging = getMessaging(app);

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
      // SEO Logic: Update Document Title
      const originalTitle = document.title;
      document.title = `${post.title} | Mani Varma`;

      // SEO Logic: Update Meta Description
      const metaDescription = document.querySelector('meta[name="description"]');
      const originalDescription = metaDescription?.getAttribute('content');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }

      // SEO Logic: Update Meta Keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const originalKeywords = metaKeywords?.getAttribute('content');
      if (metaKeywords) {
        const postKeywords = [...post.tags, "Cybersecurity Research", "Vulnerability Analysis"].join(', ');
        metaKeywords.setAttribute('content', postKeywords);
      }

      // SEO Logic: Update Canonical Link
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      const originalCanonical = canonicalLink?.getAttribute('href');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://manivarmacyber.pages.dev/blog/${post.slug}`);
      }

      // SEO Logic: Update Open Graph Metadata
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const ogType = document.querySelector('meta[property="og:type"]');
      const ogImg = document.querySelector('meta[property="og:image"]');
      const artTime = document.querySelector('meta[property="article:published_time"]');
      const artModTime = document.querySelector('meta[property="article:modified_time"]');
      const artAuthor = document.querySelector('meta[property="article:author"]');
      const standardAuthor = document.querySelector('meta[name="author"]');

      const originalOgTitle = ogTitle?.getAttribute('content');
      const originalOgDesc = ogDesc?.getAttribute('content');
      const originalOgUrl = ogUrl?.getAttribute('content');
      const originalOgType = ogType?.getAttribute('content');
      const originalOgImg = ogImg?.getAttribute('content');
      const originalArtTime = artTime?.getAttribute('content');
      const originalArtModTime = artModTime?.getAttribute('content');
      const originalArtAuthor = artAuthor?.getAttribute('content');
      const originalStandardAuthor = standardAuthor?.getAttribute('content');

      if (ogTitle) ogTitle.setAttribute('content', `${post.title} | Mani Varma`);
      if (ogDesc) ogDesc.setAttribute('content', post.excerpt);
      if (ogUrl) ogUrl.setAttribute('content', `https://manivarmacyber.pages.dev/blog/${post.slug}`);
      if (ogType) ogType.setAttribute('content', 'article');
      const coverImg = post.coverImage || '/images/blog-default-cover.jpg';
      if (ogImg) ogImg.setAttribute('content', `https://manivarmacyber.pages.dev${coverImg}`);

      // Article specific metadata
      if (artTime) {
        // Convert MARCH 03, 2026 to 2026-03-03
        try {
          const isoDate = new Date(post.publishDate).toISOString().split('T')[0];
          artTime.setAttribute('content', isoDate);
        } catch (e) {
          artTime.setAttribute('content', post.publishDate);
        }
      }
      if (artModTime) {
        try {
          const modDate = post.updatedDate || post.publishDate || new Date().toISOString();
          const isoModDate = new Date(modDate).toISOString().split('T')[0];
          artModTime.setAttribute('content', isoModDate);
        } catch (e) {
          artModTime.setAttribute('content', post.updatedDate || post.publishDate || '');
        }
      }
      if (artAuthor) artAuthor.setAttribute('content', `G Manikanta Varma`);
      if (standardAuthor) standardAuthor.setAttribute('content', `G Manikanta Varma`);

      // SEO Logic: Update Twitter Metadata
      const twCard = document.querySelector('meta[name="twitter:card"]');
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      const twUrl = document.querySelector('meta[name="twitter:url"]');
      const twImg = document.querySelector('meta[name="twitter:image"]');

      const originalTwCard = twCard?.getAttribute('content');
      const originalTwTitle = twTitle?.getAttribute('content');
      const originalTwDesc = twDesc?.getAttribute('content');
      const originalTwUrl = twUrl?.getAttribute('content');
      const originalTwImg = twImg?.getAttribute('content');

      if (twTitle) twTitle.setAttribute('content', `${post.title} | Mani Varma`);
      if (twDesc) twDesc.setAttribute('content', post.excerpt);
      if (twUrl) twUrl.setAttribute('content', `https://manivarmacyber.pages.dev/blog/${post.slug}`);
      if (twImg) twImg.setAttribute('content', `https://manivarmacyber.pages.dev${coverImg}`);

      // SEO Logic: Update Structured Data (JSON-LD)
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = `schema-${post.slug}`;
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Person",
          "name": "Manikanta Varma",
          "url": "https://manivarmacyber.pages.dev/"
        },
        "datePublished": post.publishDate,
        "image": `https://manivarmacyber.pages.dev${post.image}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://manivarmacyber.pages.dev/blog/${post.slug}`
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mani Varma Cybersecurity Research",
          "logo": {
            "@type": "ImageObject",
            "url": "https://manivarmacyber.pages.dev/logo.png"
          }
        }
      };
      schemaScript.text = JSON.stringify(schemaData);
      document.head.appendChild(schemaScript);

      const storedLikes = localStorage.getItem(`blog-likes-${post.id}`);
      const userLiked = localStorage.getItem(`blog-liked-${post.id}`);
      const userSubscribed = localStorage.getItem(`blog-subscribed`);

      if (storedLikes) setLikes(parseInt(storedLikes));
      if (userLiked) setIsLiked(true);
      if (userSubscribed === 'true') setSubscribed(true);

      // Check if user has already liked via the new slug-based key
      const alreadyLiked = localStorage.getItem(`liked_${post.slug}`);
      if (alreadyLiked) {
        setIsLiked(true);
      }

      // 1. Initial Data Fetch (Likes & Shares)
      const likesDocRef = doc(db, 'blogLikes', post.slug);
      const sharesDocRef = doc(db, 'blogShares', post.slug);

      const fetchBlogData = async () => {
        try {
          // Fetch Likes
          const likesSnap = await getDoc(likesDocRef);
          if (likesSnap.exists()) {
            setLikes(likesSnap.data().likes || 0);
          } else {
            setDoc(likesDocRef, { likes: 0 }, { merge: true });
          }

          // Fetch Shares
          const sharesSnap = await getDoc(sharesDocRef);
          if (sharesSnap.exists()) {
            setShares(sharesSnap.data() as any);
          } else {
            setDoc(sharesDocRef, { total: 0, whatsapp: 0, linkedin: 0, twitter: 0 }, { merge: true });
          }
        } catch (error) {
          console.warn('Failed to fetch initial blog data:', error);
        }
      };

      fetchBlogData();

      // checkSubscription(); // Removed for privacy and cost optimization

      return () => {
        // Restore original SEO on unmount
        document.title = originalTitle;
        if (metaDescription && originalDescription) {
          metaDescription.setAttribute('content', originalDescription);
        }
        if (metaKeywords && originalKeywords) {
          metaKeywords.setAttribute('content', originalKeywords);
        }
        if (canonicalLink && originalCanonical) {
          canonicalLink.setAttribute('href', originalCanonical);
        }

        // Restore OG metadata
        if (ogTitle && originalOgTitle) ogTitle.setAttribute('content', originalOgTitle);
        if (ogDesc && originalOgDesc) ogDesc.setAttribute('content', originalOgDesc);
        if (ogUrl && originalOgUrl) ogUrl.setAttribute('content', originalOgUrl);
        if (ogType && originalOgType) ogType.setAttribute('content', originalOgType);
        if (ogImg && originalOgImg) ogImg.setAttribute('content', originalOgImg);
        if (artTime) artTime.setAttribute('content', originalArtTime || '');
        if (artModTime) artModTime.setAttribute('content', originalArtModTime || '');
        if (artAuthor) artAuthor.setAttribute('content', originalArtAuthor || '');
        if (standardAuthor) standardAuthor.setAttribute('content', originalStandardAuthor || '');

        // Restore Twitter metadata
        if (twCard && originalTwCard) twCard.setAttribute('content', originalTwCard);
        if (twTitle && originalTwTitle) twTitle.setAttribute('content', originalTwTitle);
        if (twDesc && originalTwDesc) twDesc.setAttribute('content', originalTwDesc);
        if (twUrl && originalTwUrl) twUrl.setAttribute('content', originalTwUrl);
        if (twImg && originalTwImg) twImg.setAttribute('content', originalTwImg);

        // Remove dynamic structured data
        const dynamicSchema = document.getElementById(`schema-${post.slug}`);
        if (dynamicSchema) {
          dynamicSchema.remove();
        }
      };
    }
  }, [post]);

  const handleLike = async () => {
    if (!post || isLiked || isLikeLoading) return;

    // Check localStorage again right before action
    if (localStorage.getItem(`liked_${post.slug}`)) {
      setIsLiked(true);
      return;
    }

    setIsLikeLoading(true);

    // Visual tactile feedback immediately
    setLikes(prev => prev + 1);

    try {
      const likesDocRef = doc(db, 'blogLikes', post.slug);
      const docSnap = await getDoc(likesDocRef);

      if (docSnap.exists()) {
        // Increment existing document
        await updateDoc(likesDocRef, {
          likes: increment(1)
        });
      } else {
        // Initialize new document (compatible with 'allow create: if likes == 1' rule)
        await setDoc(likesDocRef, {
          likes: 1
        });
      }

      setIsLiked(true);
      localStorage.setItem(`liked_${post.slug}`, 'true');
    } catch (error) {
      console.error('CRITICAL: Failed to synchronize blog like with Firestore:', error);
      // Revert if failed
      setLikes(prev => prev - 1);
    } finally {
      // 5 second cooldown to prevent rapid clicking even if like fails
      setTimeout(() => {
        setIsLikeLoading(false);
      }, 5000);
    }
  };

  const handleShare = async (platform: 'whatsapp' | 'linkedin' | 'twitter') => {
    if (!post || isShareLoading) return;

    setIsShareLoading(true);

    try {
      const sharesDocRef = doc(db, 'blogShares', post.slug);
      const docSnap = await getDoc(sharesDocRef);

      if (docSnap.exists()) {
        // Increment existing document
        await updateDoc(sharesDocRef, {
          [platform]: increment(1),
          total: increment(1)
        });
      } else {
        // Initialize new document
        await setDoc(sharesDocRef, {
          whatsapp: platform === 'whatsapp' ? 1 : 0,
          linkedin: platform === 'linkedin' ? 1 : 0,
          twitter: platform === 'twitter' ? 1 : 0,
          total: 1
        });
      }
    } catch (error) {
      console.error(`CRITICAL: Failed to synchronize ${platform} share with Firestore:`, error);
    } finally {
      // 3 second cooldown for shares
      setTimeout(() => {
        setIsShareLoading(false);
      }, 3000);
    }
  };

  const handleSubscribe = async () => {
    if (subscribed || isSubscribing) return;

    // Check if permission is already denied
    if (Notification.permission === 'denied') {
      setSubscriptionError("Notification permission denied. Please reset permissions in your browser.");
      return;
    }

    setIsSubscribing(true);
    setSubscriptionError(null);

    // Faster timeout for connection - increased slightly to 12s
    const timeoutId = setTimeout(() => {
      setIsSubscribing(false);
      setSubscriptionError("Connection timed out. Please check your internet or retry.");
    }, 12000);

    try {
      // 1. Request Permission (Fast path if already granted)
      const permission = await Notification.requestPermission();

      if (permission !== 'granted') {
        throw new Error("PERMISSION_DENIED");
      }

      // 2. Register Service Worker explicitly to ensure getToken works reliably
      let registration;
      if ('serviceWorker' in navigator) {
        registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      }

      // 3. Get Token (FCM)
      const token = await getToken(messaging, {
        vapidKey: 'BFCsPxD2__lGdwnA5cozBc9CGhUQhdCxnoq6TsepwT3-xqvo3mR6zQyZDfVs3E8xLdaHSnIg73F1gLSH0mt29eY',
        serviceWorkerRegistration: registration
      });

      if (!token) {
        throw new Error("TOKEN_GENERATION_FAILED");
      }

      // 4. OPTIMISTIC UI: Assume success once token is acquired
      setSubscribed(true);
      localStorage.setItem(`blog-subscribed`, 'true');
      setIsSubscribing(false);
      clearTimeout(timeoutId);

      // 5. BACKGROUND SYNC: Update FireStore without blocking the UI
      setDoc(doc(db, 'subscribers', token), {
        token: token,
        subscribed: true,
        createdAt: serverTimestamp()
      }).catch(err => {
        console.error('Firestore sync failed in background:', err);
      });

      // 6. Tactical feedback
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 px-8 py-4 bg-accent-cyan text-black font-orbitron font-bold text-xs uppercase tracking-[0.4em] rounded-2xl shadow-[0_0_30px_rgba(0,219,233,0.4)] z-[100] animate-bounce';
      toast.innerText = 'RESEARCH ALERTS ENABLED';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => document.body.removeChild(toast), 500);
      }, 3000);

    } catch (error: any) {
      console.error('Error during FCM subscription:', error);
      setIsSubscribing(false);
      clearTimeout(timeoutId);

      if (error.message === "PERMISSION_DENIED") {
        setSubscriptionError("Notification permission denied.");
      } else if (error.message === "TOKEN_GENERATION_FAILED") {
        setSubscriptionError("Failed to generate secure token.");
      } else {
        setSubscriptionError("System error. Ensure you are on HTTPS or localhost.");
      }
    }
  };


  if (!post) return <Navigate to="/blog" />;

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  // Keyword Auto-Linking: Automatically link related technical terms only on first occurrence
  const processedContent = React.useMemo(() => {
    if (!post) return '';
    let c = post.content;
    const AUTO_LINKS = [
      { phrase: 'Insecure Direct Object Reference', slug: 'idor-security-analysis' },
      { phrase: 'Broken Access Control', slug: 'broken-access-control-owasp-a01-analysis' },
      { phrase: 'IDOR', slug: 'idor-security-analysis' },
      { phrase: 'BAC', slug: 'broken-access-control-owasp-a01-analysis' },
      { phrase: 'OWASP Top 10', slug: 'broken-access-control-owasp-a01-analysis' }
    ];
    AUTO_LINKS.forEach(({ phrase, slug }) => {
      if (slug === post.slug) return;
      // Match whole phrase, case-insensitive, skip if it's already inside a link
      // Use a simple first-occurrence replacement for safety
      const regex = new RegExp(`(?<!\\[)\\b${phrase}\\b(?!\\]\\()`, 'i');
      c = c.replace(regex, (match) => `[${match}](/blog/${slug})`);
    });
    return c;
  }, [post]);

  // Split content by ad placeholders using the auto-linked content
  const contentParts = processedContent.split(/<!-- AD_PLACEHOLDER_\d+ -->/);

  // BAC Infographic Component
  const BACInfographic: React.FC = () => {
    return (
      <div className="my-12 flex flex-col items-center gap-3">
        <motion.img
          src="/bac-types.png"
          alt="Types of Broken Access Control"
          loading="lazy"
          className="max-w-3xl w-full rounded-2xl border border-border shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        />
        <p className="font-mono text-[10px] text-text-secondary opacity-40 uppercase tracking-[0.4em] font-black italic text-center">
          VULNERABILITY TAXONOMY: KEY CATEGORIES IN BAC
        </p>
      </div>
    );
  };

  // CVSS Evolution Component
  const CVSSComparison: React.FC = () => {
    return (
      <div className="my-20 space-y-12">
        <h3 className="text-3xl md:text-4xl font-orbitron font-black text-text-primary uppercase tracking-tighter italic border-l-8 border-accent-cyan pl-6 mb-12">
          CVSS Score Evolution – v2 vs v3.1 vs v4.0
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              version: 'CVSS v2.0',
              year: '2007',
              focus: 'The Foundation',
              explanation: 'The first major standard. Focused on basic base metrics but often lacked precision in diverse environmental contexts.',
              improvement: 'Introduced the core logic of Attack Vector and Complexity.',
              status: 'Legacy / Informational'
            },
            {
              version: 'CVSS v3.1',
              year: '2019',
              focus: 'The Refinement',
              explanation: 'Added the "Scope" (S) metric to account for vulnerabilities that affect systems beyond the initial vulnerable component.',
              improvement: 'Improved precision in scoring and User Interaction requirements.',
              status: 'Standard Production'
            },
            {
              version: 'CVSS v4.0',
              year: '2023',
              focus: 'Latest FIRST Standard',
              explanation: 'A significant leap. Focuses on real-world impact with supplemental metrics and refined severity levels.',
              improvement: 'Enhanced assessment of logical failures like Authorization (BAC).',
              status: 'LATEST STANDARD'
            }
          ].map((v, i) => (
            <div key={i} className="p-8 border border-border bg-card-bg rounded-[2rem] relative overflow-hidden group hover:border-accent-cyan/40 transition-all shadow-sm">
              <div className="absolute top-0 right-0 p-4 font-mono text-5xl font-black text-text-primary/5 group-hover:text-accent-cyan/10 transition-colors uppercase leading-none select-none">
                {v.version.split(' ')[1]}
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-accent-cyan font-black tracking-[0.3em] uppercase">{v.year} // {v.status}</span>
                <h4 className="text-2xl font-orbitron font-black text-text-primary mt-2 mb-6">{v.version}</h4>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-accent-cyan font-black uppercase tracking-widest block mb-2 font-mono opacity-90 dark:opacity-60">Core Focus</span>
                    <p className="text-lg text-text-primary font-bold leading-tight">{v.focus}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent-cyan font-black uppercase tracking-widest block mb-1 font-mono opacity-90 dark:opacity-60">Architectural Shift</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{v.explanation}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-[10px] font-bold text-accent-cyan font-black uppercase tracking-widest block mb-1 font-mono opacity-90 dark:opacity-60">Security Impact</span>
                    <p className="text-sm text-text-primary italic font-medium">"{v.improvement}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BAC Comparison Scenario */}
        <div className="mt-16 bg-card-bg p-10 md:p-14 border border-border rounded-[2.5rem] relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <h4 className="font-orbitron font-black text-2xl md:text-3xl text-text-primary mb-8 flex items-center gap-4 italic relative z-10">
            <ShieldAlert size={32} className="text-accent-cyan" />
            VULNERABILITY COMPARISON: BROKEN ACCESS CONTROL
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { label: 'CVSS v2', score: '7.5', severity: 'HIGH', badgeColor: 'bg-orange-500/10 text-orange-600 dark:text-[#f97316] border-orange-500/30' },
              { label: 'CVSS v3.1', score: '8.8', severity: 'HIGH', badgeColor: 'bg-orange-500/10 text-orange-600 dark:text-[#f97316] border-orange-500/30' },
              { label: 'CVSS v4.0', score: '9.3', severity: 'CRITICAL', badgeColor: 'bg-red-500/10 text-red-600 dark:text-[#ef4444] border-red-500/30' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-bg border border-border text-center group hover:bg-card-bg transition-all hover:scale-105 shadow-sm">
                <span className="text-[12px] font-mono font-black text-text-secondary uppercase tracking-[0.3em]">{item.label}</span>
                <div className={`text-6xl font-orbitron font-black my-4 tabular-nums ${item.severity === 'CRITICAL' ? 'text-red-600 dark:text-[#ef4444]' : 'text-orange-600 dark:text-[#f97316]'}`}>{item.score}</div>
                <div className={`inline-block px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-widest border ${item.badgeColor}`}>
                  {item.severity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-accent-cyan/5 rounded-2xl border border-border relative z-10">
            <p className="text-lg text-text-secondary font-medium leading-relaxed">
              <span className="text-text-primary font-bold">Analysis:</span> The evolution to <span className="text-accent-cyan font-bold">CVSS v4.0</span> reflects a fundamental shift in how we score logical vulnerabilities. By introducing mandatory scope assessment and supplemental metrics for authorization bypasses, BAC is now correctly classified as <span className="text-red-600 dark:text-[#ef4444] font-black underline decoration-2 underline-offset-4">CRITICAL</span>. This ensures that security teams prioritize authorization logic just as highly as traditional memory corruption bugs.
            </p>
          </div>
        </div>

        {/* Severity Scale Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 bg-black/10 p-6 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-[0_0_10px_#ef4444]" />
            <span className="text-[10px] font-mono font-black text-text-primary uppercase tracking-widest">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f97316] shadow-[0_0_10px_#f97316]" />
            <span className="text-[10px] font-mono font-black text-text-primary uppercase tracking-widest">High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#eab308] shadow-[0_0_10px_#eab308]" />
            <span className="text-[10px] font-mono font-black text-text-primary uppercase tracking-widest">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
            <span className="text-[10px] font-mono font-black text-text-primary uppercase tracking-widest">Low</span>
          </div>
        </div>
      </div>
    );
  };

  // IDOR specific components
  const IDORFlowDiagram: React.FC = () => (
    <div className="my-10 flex flex-col items-center gap-3">
      <motion.img
        src="/idor-diagram.png"
        alt="Insecure Direct Object Reference Vulnerability Flow"
        loading="lazy"
        className="max-w-2xl w-full rounded-2xl border border-border shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />
      <p className="font-mono text-[10px] text-text-secondary opacity-40 uppercase tracking-[0.4em] font-black italic text-center">
        TECHNICAL ARCHITECTURE: IDOR MANIPULATION & DATA EXPOSURE
      </p>
    </div>
  );

  const IDORCVSSAnalysis: React.FC = () => (
    <div className="my-20 space-y-12">
      <h3 className="text-3xl md:text-4xl font-orbitron font-black text-text-primary uppercase tracking-tighter italic border-l-8 border-accent-cyan pl-6 mb-12">
        IDOR Severity Landscape: CVSS Evolution
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'CVSS v2.0', score: '5.0', severity: 'MEDIUM', focus: 'Partial Confidentiality Impact' },
          { label: 'CVSS v3.1', score: '7.5', severity: 'HIGH', focus: 'High Impact on Confidentiality' },
          { label: 'CVSS v4.0', score: '8.7', severity: 'HIGH', focus: 'Logical Authentication Failure' }
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-card-bg border border-border text-center group hover:border-accent-cyan/40 transition-all shadow-sm">
            <span className="text-[12px] font-mono font-black text-accent-cyan uppercase tracking-[0.3em]">{item.label}</span>
            <div className="text-6xl font-orbitron font-black my-4 tabular-nums text-text-primary">{item.score}</div>
            <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-4 font-mono">{item.severity}</div>
            <p className="text-xs text-text-secondary italic">"{item.focus}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  const PTESOSSTMMComparison: React.FC = () => (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-accent-cyan/30 transition-all">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <Target size={80} className="text-accent-cyan" />
        </div>
        <h4 className="text-2xl font-orbitron font-black text-text-primary mb-6 flex items-center gap-3">
          <div className="w-2 h-8 bg-accent-cyan" />
          PTES FRAMEWORK
        </h4>
        <ul className="space-y-4 text-sm text-text-secondary font-medium">
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Intelligence gathering for object discovery</li>
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Threat modeling against resource ownership</li>
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Exploitation of numeric/patterned IDs</li>
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Post-exploitation data exfiltration mapping</li>
        </ul>
      </div>
      <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-accent-cyan/30 transition-all">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <Shield size={80} className="text-accent-cyan" />
        </div>
        <h4 className="text-2xl font-orbitron font-black text-text-primary mb-6 flex items-center gap-3">
          <div className="w-2 h-8 bg-accent-cyan" />
          OSSTMM METHOD
        </h4>
        <ul className="space-y-4 text-sm text-text-secondary font-medium">
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Operational security metric validation</li>
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Trust metric concept for user relationships</li>
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Attack surface mapping of direct references</li>
          <li className="flex gap-3"><span className="text-accent-cyan font-bold">•</span> Quantifiable risk measurement of AuthZ</li>
        </ul>
      </div>
    </div>
  );

  const IDORvsBACComparison: React.FC = () => (
    <div className="my-20 p-10 md:p-14 border border-border bg-card-bg rounded-[3rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <h3 className="text-3xl font-orbitron font-black text-text-primary mb-12 uppercase italic relative z-10 flex items-center gap-4">
        <AlertTriangle className="text-accent-cyan" />
        IDOR vs. Broken Access Control
      </h3>
      <div className="overflow-x-auto relative z-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-6 px-4 font-mono text-[10px] text-accent-cyan uppercase tracking-[0.3em]">Feature</th>
              <th className="py-6 px-4 font-mono text-[10px] text-accent-cyan uppercase tracking-[0.3em]">IDOR (Specific)</th>
              <th className="py-6 px-4 font-mono text-[10px] text-accent-cyan uppercase tracking-[0.3em]">BAC (General)</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary text-sm">
            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <td className="py-6 px-4 font-bold text-text-primary">Classification</td>
              <td className="py-6 px-4 italic">Subset of Broken Access Control</td>
              <td className="py-6 px-4 italic">Broad security category</td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <td className="py-6 px-4 font-bold text-text-primary">Primary Fail</td>
              <td className="py-6 px-4">Object-Level Ownership</td>
              <td className="py-6 px-4">Function or Object Level</td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <td className="py-6 px-4 font-bold text-text-primary">Exploit Path</td>
              <td className="py-6 px-4 opacity-80">Manipulating identifiers (IDs, slugs, keys)</td>
              <td className="py-6 px-4 opacity-80">Bypassing checks, URL hijacking, Role elevation</td>
            </tr>
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-6 px-4 font-bold text-text-primary">Best Fix</td>
              <td className="py-6 px-4 text-accent-cyan font-bold">Ownership-based database filtering</td>
              <td className="py-6 px-4 text-accent-cyan font-bold">Comprehensive RBAC/ABAC enforcement</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const components = {
    // Override default rendering for specific placeholders
    h1: ({ ...props }) => (
      <h1 {...props} className="font-orbitron text-4xl md:text-5xl font-[800] tracking-tighter mb-8 leading-[1.1] text-text-primary uppercase italic" />
    ),
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
        <h2 {...props} className="text-2xl md:text-3xl font-orbitron font-[800] tracking-[0.3px] leading-none text-text-primary flex flex-wrap gap-2">
          {props.children}
        </h2>
      </div>
    ),
    h3: ({ ...props }) => (
      <h3 {...props} className="text-lg font-orbitron font-bold text-text-primary uppercase tracking-wider mt-10 mb-4" />
    ),
    p: ({ children, node, ...props }: any) => {
      // Logic for plain-text markers (HTML comments are stripped by ReactMarkdown)
      const content = children?.toString()?.trim();
      if (content === 'MARKER_BAC_INFOGRAPHIC') return <BACInfographic />;
      if (content === 'MARKER_CVSS_EVOLUTION') return <CVSSComparison />;
      if (content === 'MARKER_BAC_FLOW') return (
        <div className="my-10 flex flex-col items-center gap-3">
          <motion.img
            src="/bac-vulnerability-flow.jpg"
            alt="Broken Access Control Vulnerability Flow"
            loading="lazy"
            className="max-w-2xl w-full rounded-2xl border border-border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          <p className="font-mono text-[10px] text-text-secondary opacity-40 uppercase tracking-[0.4em] font-black italic">
            SYSTEM ARCHITECTURE: ATTACKER TO RESOURCE FLOW
          </p>
        </div>
      );
      if (content === 'MARKER_CONCEPTUAL_BAC') return (
        <div className="my-10 flex flex-col items-center gap-3">
          <motion.img
            src="/bac-tactical-mapping.png"
            alt="Broken Access Control Conceptual Model"
            loading="lazy"
            className="max-w-2xl w-full rounded-2xl border border-border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          <p className="font-mono text-[10px] text-text-secondary opacity-40 uppercase tracking-[0.4em] font-black italic text-center">
            LOGICAL BOUNDARY ANALYSIS: EFFECTIVE VS BROKEN CONTROL
          </p>
        </div>
      );
      if (content === 'MARKER_IDOR_FLOW') return <IDORFlowDiagram />;
      if (content === 'MARKER_IDOR_CVSS') return <IDORCVSSAnalysis />;
      if (content === 'MARKER_PTES_OSSTMM') return <PTESOSSTMMComparison />;
      if (content === 'MARKER_IDOR_COMPARISON') return <IDORvsBACComparison />;

      const isFirstParagraph = children?.[0]?.props?.node?.position?.start?.line === 2 || children?.toString().startsWith('Access control');
      return (
        <p className={`text-text-secondary leading-[1.8] mb-[1.2rem] text-lg font-medium ${isFirstParagraph ? 'blog-drop-cap' : ''}`}>
          {children}
        </p>
      );
    },
    ul: ({ ...props }) => <ul {...props} className="tactical-list space-y-4 mb-10" />,
    li: ({ ...props }) => <li {...props} className="text-text-secondary font-medium text-sm" />,
    blockquote: ({ ...props }) => (
      <div className="my-12 p-8 bg-accent-cyan/[0.02] border-l-4 border-accent-cyan rounded-r-2xl italic text-xl text-text-primary/80 font-medium leading-relaxed">
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
        <p className="mt-6 font-mono text-[10px] text-text-secondary opacity-40 uppercase tracking-[0.4em] font-black italic">
          {props.alt || "Tactical security visualization"}
        </p>
      </div>
    ),
    a: ({ href, children }: any) => {
      if (href?.startsWith('/blog/')) {
        return <Link to={href} className="text-accent-cyan hover:underline decoration-accent-cyan/30 underline-offset-4">{children}</Link>;
      }
      return <a href={href} className="text-accent-cyan hover:underline decoration-accent-cyan/30 underline-offset-4" target="_blank" rel="noopener noreferrer">{children}</a>;
    },
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="pt-24 pb-20 px-6 overflow-hidden relative z-10">
        <div className="max-w-[1000px] mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-16 font-orbitron font-bold text-xs tracking-[0.4em] uppercase">
            <ArrowLeft size={16} /> BACK TO BLOG REPOSITORY
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Meta Header */}
            <div className="flex flex-wrap items-center gap-8 text-[10px] font-mono text-text-secondary mb-10 uppercase tracking-[0.4em] font-black">
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

            <h1 className="font-orbitron text-4xl md:text-6xl font-[800] tracking-tighter mb-8 leading-[1.1] text-text-primary uppercase italic">
              {post.title}
            </h1>

            {/* Like & Share Header */}
            <div className="flex items-center gap-6 mb-16">
              <button
                onClick={handleLike}
                disabled={isLiked || isLikeLoading}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all ${isLiked
                  ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan cursor-default'
                  : isLikeLoading
                    ? 'bg-white/5 border-border text-text-secondary cursor-wait animate-pulse'
                    : 'bg-white/5 border-border text-text-secondary hover:border-accent-cyan/50 hover:text-accent-cyan'
                  }`}
              >
                <motion.div
                  animate={isLiked ? { scale: [1, 1.5, 1], rotate: [0, 20, 0] } : {}}
                >
                  <TrendingDown size={20} className={isLiked ? 'fill-accent-cyan' : ''} />
                </motion.div>
                <span className="font-mono text-xs font-black tracking-widest">
                  {isLiked ? 'LIKED ✓' : isLikeLoading ? 'COOLDOWN...' : `${likes} LIKES`}
                </span>
              </button>

              <div className="h-4 w-px bg-border" />

              <div className="flex items-center gap-4">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleShare('linkedin')}
                  className="p-3 bg-white/5 border border-border rounded-2xl text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,219,233,0.15)] transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleShare('whatsapp')}
                  className="p-3 bg-white/5 border border-border rounded-2xl text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,219,233,0.15)] transition-all"
                >
                  <MessageCircle size={18} />
                </a>
                <div className="flex flex-col items-start justify-center ml-2">
                  <span className="text-[10px] font-mono font-black text-accent-cyan tracking-widest leading-none">{shares.total}</span>
                  <span className="text-[8px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">SHARES</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-24 transition-all duration-1000 border border-border shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            </div>

            <div className="flex flex-col lg:flex-row gap-20">
              <div className="flex-grow">
                <div className="blog-content">
                  {contentParts.map((part, index) => (
                    <React.Fragment key={index}>
                      <ReactMarkdown
                        components={components as any}
                      >
                        {part}
                      </ReactMarkdown>
                      {index < contentParts.length - 1 && <AdBlock />}
                    </React.Fragment>
                  ))}
                </div>

                {/* Related Articles Module - SEO Internal Linking */}
                <div className="mt-24 pt-24 border-t border-white/5">
                  <div className="flex items-center gap-3 text-accent-cyan font-mono text-[10px] uppercase tracking-[0.4em] font-black mb-8">
                    <Shield size={14} />
                    <span>Technical Intelligence: Related Research</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts
                      .filter(p => p.slug !== post.slug && p.tags.some(tag => post.tags.includes(tag)))
                      .slice(0, 2)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="group block p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-accent-cyan/20 hover:bg-white/[0.03] transition-all duration-500"
                        >
                          <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">{relatedPost.publishDate}</span>
                            <h4 className="text-xl font-orbitron font-black text-text-primary group-hover:text-accent-cyan transition-colors uppercase italic leading-tight">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-accent-cyan font-mono text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                              DECRYPT RESEARCH <ArrowRight size={12} />
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
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
                        <h3 className="text-xl md:text-2xl font-orbitron font-black text-text-primary uppercase tracking-tighter leading-none italic">
                          SUBSCRIBE TO <span className="text-accent-cyan">RESEARCH ALERTS</span>
                        </h3>
                        <p className="text-text-secondary text-sm font-medium">
                          encrypted push notifications for zero-day research.
                        </p>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-2">
                        <button
                          onClick={handleSubscribe}
                          disabled={subscribed || isSubscribing}
                          className={`px-8 py-4 rounded-2xl font-orbitron font-bold text-[10px] uppercase tracking-[0.3em] transition-all flex items-center gap-3 shrink-0 ${subscribed
                            ? 'bg-accent-cyan/20 border border-accent-cyan text-accent-cyan cursor-default'
                            : isSubscribing
                              ? 'bg-accent-cyan/10 border border-accent-cyan/30 text-text-secondary cursor-wait animate-pulse'
                              : 'bg-card-bg border border-border text-text-primary hover:bg-accent-cyan hover:border-accent-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,219,233,0.3)] active:scale-95'
                            }`}
                        >
                          {subscribed ? (
                            <>
                              <CheckCircle2 size={14} />
                              <span>Subscribed</span>
                            </>
                          ) : (
                            <>
                              <Zap size={14} />
                              <span>{isSubscribing ? 'CONNECTING...' : 'SUBSCRIBE'}</span>
                            </>
                          )}
                        </button>
                        {subscriptionError && (
                          <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest animate-pulse">
                            {subscriptionError}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Share Section - Relocated below Subscribe */}
                <div className="mt-16 p-12 glass-card border-white/5 bg-white/[0.01]">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                      <h4 className="font-orbitron font-black text-xl mb-3 text-text-primary uppercase italic">REINFORCE SECURITY</h4>
                      <p className="text-text-secondary text-sm font-medium tracking-wide">Distribute this technical intelligence to your operations center.</p>

                      <div className="flex gap-4 mt-6">
                        <a
                          href="https://www.linkedin.com/in/manikantavarmag"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-accent-cyan hover:text-text-primary transition-colors tracking-widest uppercase font-black"
                        >
                          View Operative Profile
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-6 items-center">
                      <div className="flex flex-col items-end mr-4">
                        <span className="text-xl font-orbitron font-black text-accent-cyan leading-none">{shares.total}</span>
                        <span className="text-[8px] font-mono font-bold text-text-secondary uppercase tracking-[0.3em]">TOTAL SHARES</span>
                      </div>
                      {[
                        { icon: Linkedin, platform: 'linkedin' as const, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
                        { icon: MessageCircle, platform: 'whatsapp' as const, url: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}` },
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
                          onClick={(e) => {
                            if (item.onClick) item.onClick(e);
                            if (item.platform) handleShare(item.platform);
                          }}
                          target={item.url === '#' ? undefined : "_blank"}
                          rel={item.url === '#' ? undefined : "noopener noreferrer"}
                          className="w-16 h-16 rounded-2xl glass-card border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,230,255,0.2)]"
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
                      { label: 'CVE', sub: 'DOCUMENTATION BASIS', color: 'text-text-primary', icon: FileText },
                      { label: 'Impact', sub: 'DATA INTEGRITY LOSS', color: 'text-accent-cyan', icon: ShieldAlert }
                    ].map((item, i) => (
                      <div key={i} className="glass-card p-10 border-border bg-card-bg text-center space-y-4 group hover:bg-white/[0.03] transition-all">
                        <div className={`text-4xl md:text-5xl font-orbitron font-black ${item.color} group-hover:scale-110 transition-transform`}>
                          {item.label}
                        </div>
                        <div className="text-[9px] font-mono text-text-secondary opacity-40 uppercase tracking-[0.4em] font-black">
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

                    <h3 className="text-4xl md:text-6xl font-orbitron font-black text-text-primary uppercase tracking-tighter italic">
                      NEED A SECURITY <span className="text-accent-cyan">ASSESSMENT?</span>
                    </h3>

                    <p className="text-text-secondary text-lg max-w-2xl mx-auto font-medium">
                      I specialize in hardening infrastructure and identifying complex vulnerabilities before they can be exploited.
                    </p>

                    <div className="flex justify-center pt-8">
                      <Link
                        to="/#contact"
                        className="px-12 py-5 border border-accent-cyan/30 text-text-primary hover:text-black font-orbitron font-bold text-xs uppercase tracking-[0.4em] hover:bg-accent-cyan hover:shadow-[0_0_30px_rgba(0,219,233,0.3)] transition-all rounded-2xl relative z-20"
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
