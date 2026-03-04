import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container-progressive px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="markdown-body"
        >
          <h1 className="font-orbitron font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8 italic">Privacy <span className="text-accent-cyan">Policy</span></h1>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-12 opacity-60">Last updated: March 04, 2026</p>

          <div className="space-y-12 text-sm leading-relaxed font-medium">
            <section className="space-y-4">
              <h2 className="font-orbitron text-xl text-text-primary uppercase tracking-widest border-l-4 border-accent-cyan pl-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you contact us through our website. This may include your name, email address, and any other information you choose to provide. We also automatically collect certain information when you visit our site, such as your IP address and browser type, through standard log files.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron text-xl text-text-primary uppercase tracking-widest border-l-4 border-accent-cyan pl-4">2. Cookies and Web Beacons</h2>
              <p>Like any other website, this research portal uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron text-xl text-text-primary uppercase tracking-widest border-l-4 border-accent-cyan pl-4">3. Google DoubleClick DART Cookie</h2>
              <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" className="text-accent-cyan hover:underline">https://policies.google.com/technologies/ads</a></p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron text-xl text-text-primary uppercase tracking-widest border-l-4 border-accent-cyan pl-4">4. Advertising Partners</h2>
              <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include Google AdSense. Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron text-xl text-text-primary uppercase tracking-widest border-l-4 border-accent-cyan pl-4">5. Third Party Privacy Policies</h2>
              <p>This Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-orbitron text-xl text-text-primary uppercase tracking-widest border-l-4 border-accent-cyan pl-4">6. Security Protocol</h2>
              <p>We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure. However, as a security research portal, we remind users that no method of transmission over the internet is 100% secure.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
