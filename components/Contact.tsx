import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Send, Shield, Terminal, User, AtSign, FileCode, CheckCircle2, Phone, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';

/* ── Saudi Arabia Polygon Map SVG ── */
const SaudiMapSVG: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 500 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ maxHeight: 360 }}
    >
      {/* Triangulated polygon fill — Saudi Arabia shape */}
      <g opacity="0.85">
        {/* Main body triangles */}
        <polygon points="60,60 140,40 120,110" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.25)" strokeWidth="0.8" />
        <polygon points="140,40 220,30 180,90" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.25)" strokeWidth="0.8" />
        <polygon points="220,30 300,25 260,80" fill="rgba(180,20,0,0.06)" stroke="rgba(204,34,0,0.25)" strokeWidth="0.8" />
        <polygon points="300,25 380,40 340,90" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.25)" strokeWidth="0.8" />
        <polygon points="380,40 440,70 400,120" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.25)" strokeWidth="0.8" />
        <polygon points="60,60 120,110 80,180" fill="rgba(180,20,0,0.06)" stroke="rgba(204,34,0,0.22)" strokeWidth="0.8" />
        <polygon points="120,110 180,90 160,160" fill="rgba(204,34,0,0.06)" stroke="rgba(204,34,0,0.22)" strokeWidth="0.8" />
        <polygon points="180,90 260,80 240,160" fill="rgba(180,20,0,0.07)" stroke="rgba(204,34,0,0.22)" strokeWidth="0.8" />
        <polygon points="260,80 340,90 300,160" fill="rgba(204,34,0,0.06)" stroke="rgba(204,34,0,0.22)" strokeWidth="0.8" />
        <polygon points="340,90 400,120 380,190" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.22)" strokeWidth="0.8" />
        <polygon points="400,120 440,70 450,160" fill="rgba(180,20,0,0.06)" stroke="rgba(204,34,0,0.22)" strokeWidth="0.8" />
        <polygon points="80,180 160,160 130,240" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.20)" strokeWidth="0.8" />
        <polygon points="160,160 240,160 200,240" fill="rgba(180,20,0,0.07)" stroke="rgba(204,34,0,0.20)" strokeWidth="0.8" />
        <polygon points="240,160 300,160 280,240" fill="rgba(204,34,0,0.06)" stroke="rgba(204,34,0,0.20)" strokeWidth="0.8" />
        <polygon points="300,160 380,190 340,260" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.20)" strokeWidth="0.8" />
        <polygon points="380,190 450,160 460,250" fill="rgba(180,20,0,0.06)" stroke="rgba(204,34,0,0.20)" strokeWidth="0.8" />
        {/* Bottom section */}
        <polygon points="130,240 200,240 170,320" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.18)" strokeWidth="0.8" />
        <polygon points="200,240 280,240 250,320" fill="rgba(180,20,0,0.06)" stroke="rgba(204,34,0,0.18)" strokeWidth="0.8" />
        <polygon points="280,240 340,260 320,340" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.18)" strokeWidth="0.8" />
        <polygon points="340,260 460,250 420,340" fill="rgba(204,34,0,0.04)" stroke="rgba(204,34,0,0.18)" strokeWidth="0.8" />
        {/* Southern tip area */}
        <polygon points="170,320 250,320 220,390" fill="rgba(204,34,0,0.05)" stroke="rgba(204,34,0,0.15)" strokeWidth="0.8" />
        <polygon points="250,320 320,340 290,400" fill="rgba(180,20,0,0.05)" stroke="rgba(204,34,0,0.15)" strokeWidth="0.8" />
        <polygon points="320,340 420,340 380,400" fill="rgba(204,34,0,0.04)" stroke="rgba(204,34,0,0.15)" strokeWidth="0.8" />
        {/* Network connection lines */}
        <line x1="140" y1="40" x2="300" y2="25" stroke="rgba(204,34,0,0.15)" strokeWidth="0.5" />
        <line x1="120" y1="110" x2="340" y2="90" stroke="rgba(204,34,0,0.12)" strokeWidth="0.5" />
        <line x1="160" y1="160" x2="380" y2="190" stroke="rgba(204,34,0,0.10)" strokeWidth="0.5" />
        <line x1="200" y1="240" x2="340" y2="260" stroke="rgba(204,34,0,0.08)" strokeWidth="0.5" />
        <line x1="60" y1="60" x2="80" y2="180" stroke="rgba(204,34,0,0.12)" strokeWidth="0.5" />
        <line x1="440" y1="70" x2="440" y2="160" stroke="rgba(204,34,0,0.12)" strokeWidth="0.5" />
        {/* Node dots at intersections */}
        {[
          [140, 40], [220, 30], [300, 25], [380, 40],
          [120, 110], [180, 90], [260, 80], [340, 90], [400, 120],
          [160, 160], [240, 160], [300, 160], [380, 190],
          [200, 240], [280, 240], [340, 260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5"
            fill="rgba(204,34,0,0.5)"
            stroke="rgba(204,34,0,0.8)"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Location Pin 1 — Riyadh (approximately center-top) */}
      <g style={{ animation: 'pin-bounce 2.5s ease-in-out infinite' }}>
        <circle cx="260" cy="120" r="8" fill="rgba(204,34,0,0.25)" stroke="rgba(204,34,0,0.6)" strokeWidth="1.5" />
        <circle cx="260" cy="120" r="4" fill="#cc2200" />
        <circle cx="260" cy="120" r="12" fill="none" stroke="rgba(204,34,0,0.3)" strokeWidth="1"
          style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
        {/* Pin drop shape */}
        <path d="M260 108 C254 108 249 113 249 119 C249 127 260 138 260 138 C260 138 271 127 271 119 C271 113 266 108 260 108Z"
          fill="#cc2200" opacity="0.9" />
        <circle cx="260" cy="119" r="3.5" fill="rgba(255,200,200,0.9)" />
      </g>

      {/* Location Pin 2 — Dammam / Eastern province */}
      <g style={{ animation: 'pin-bounce 2.5s ease-in-out infinite', animationDelay: '1s' }}>
        <circle cx="410" cy="175" r="8" fill="rgba(204,34,0,0.25)" stroke="rgba(204,34,0,0.6)" strokeWidth="1.5" />
        <circle cx="410" cy="175" r="4" fill="#cc2200" />
        <circle cx="410" cy="175" r="12" fill="none" stroke="rgba(204,34,0,0.3)" strokeWidth="1"
          style={{ animation: 'pulse-ring 2s ease-out infinite', animationDelay: '0.5s' }} />
        {/* Pin drop shape */}
        <path d="M410 163 C404 163 399 168 399 174 C399 182 410 193 410 193 C410 193 421 182 421 174 C421 168 416 163 410 163Z"
          fill="#cc2200" opacity="0.9" />
        <circle cx="410" cy="174" r="3.5" fill="rgba(255,200,200,0.9)" />
      </g>

      {/* Connection line between locations */}
      <line x1="260" y1="120" x2="410" y2="175" stroke="rgba(204,34,0,0.35)" strokeWidth="1"
        strokeDasharray="4 3" />
    </svg>
  </div>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ full_name: '', email: '', message: '' });
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!formData.full_name || !formData.email || !formData.message) {
      alert('Please fill in all identity and payload fields.');
      return;
    }
    if (!verified) {
      alert('Please verify human operative identity before authorization.');
      return;
    }
    setStatus('submitting');
    try {
      await emailjs.send('service_3bka2wm', 'template_7r0rkeg', {
        full_name: formData.full_name,
        email: formData.email,
        message: formData.message,
        to_email: 'mani.varma.3243@gmail.com',
      });
      setStatus('success');
      setFormData({ full_name: '', email: '', message: '' });
      setVerified(false);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact submission failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const channels = [
    { icon: Mail, label: 'EMAIL PROTOCOL', value: 'mani.varma.3243@gmail.com', href: 'mailto:mani.varma.3243@gmail.com?subject=Security%20Consultation' },
    { icon: Phone, label: 'DIRECT LINE', value: '+91 93461 59671', href: 'tel:+91-9346159671' },
    { icon: MessageCircle, label: 'WHATSAPP SECURE', value: '+91 93461 59671', href: 'https://wa.me/91-9346159671?text=Hello%20Security%20Consultation' },
    { icon: Linkedin, label: 'LINKEDIN NETWORK', value: 'manikantavarmag', href: 'https://www.linkedin.com/in/manikantavarmag' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(10,0,0,0.8)',
    border: '1px solid rgba(180,30,20,0.25)',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: '0.75rem',
    fontFamily: 'JetBrains Mono, monospace',
    color: '#f1e8e8',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div id="contact" className="py-16 relative overflow-hidden"
      style={{ background: 'rgba(8,0,0,0.5)' }}>
      {/* Red grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(204,34,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,34,0,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-progressive relative z-10 px-0">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: 'rgba(180,30,20,0.25)' }} />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-black"
            style={{ color: '#cc2200' }}>DIRECT COMMS INTERFACE</span>
          <div className="h-px flex-1" style={{ background: 'rgba(180,30,20,0.25)' }} />
        </div>

        {/* The reference layout: Contact form (left) + Saudi Map (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">

          {/* ── LEFT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 p-8 rounded-2xl"
            style={{
              background: 'rgba(15,3,3,0.85)',
              border: '1px solid rgba(180,30,20,0.22)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield size={22} style={{ color: '#cc2200', filter: 'drop-shadow(0 0 6px rgba(204,34,0,0.6))' }} />
              <h2 className="text-xl md:text-2xl font-orbitron font-black text-text-primary uppercase tracking-tighter">
                Contact Us
              </h2>
            </div>

            {/* Email field */}
            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(10,0,0,0.7)', border: '1px solid rgba(180,30,20,0.20)' }}>
              <Mail size={16} style={{ color: 'rgba(204,34,0,0.6)', flexShrink: 0 }} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                style={{ ...inputStyle, background: 'transparent', border: 'none', padding: 0 }}
                onFocus={e => (e.currentTarget.parentElement!.style.borderColor = 'rgba(204,34,0,0.55)')}
                onBlur={e => (e.currentTarget.parentElement!.style.borderColor = 'rgba(180,30,20,0.20)')}
              />
            </div>

            {/* Phone field */}
            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(10,0,0,0.7)', border: '1px solid rgba(180,30,20,0.20)' }}>
              <Phone size={16} style={{ color: 'rgba(204,34,0,0.6)', flexShrink: 0 }} />
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                placeholder="Phone Number"
                style={{ ...inputStyle, background: 'transparent', border: 'none', padding: 0 }}
                onFocus={e => (e.currentTarget.parentElement!.style.borderColor = 'rgba(204,34,0,0.55)')}
                onBlur={e => (e.currentTarget.parentElement!.style.borderColor = 'rgba(180,30,20,0.20)')}
              />
            </div>

            {/* Message field */}
            <div className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(10,0,0,0.7)', border: '1px solid rgba(180,30,20,0.20)' }}>
              <MessageCircle size={16} style={{ color: 'rgba(204,34,0,0.6)', flexShrink: 0, marginTop: 2 }} />
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Message"
                style={{ ...inputStyle, background: 'transparent', border: 'none', padding: 0, resize: 'vertical', minHeight: 100 }}
                onFocus={e => (e.currentTarget.parentElement!.style.borderColor = 'rgba(204,34,0,0.55)')}
                onBlur={e => (e.currentTarget.parentElement!.style.borderColor = 'rgba(180,30,20,0.20)')}
              />
            </div>

            {/* Verify */}
            <div
              onClick={() => setVerified(!verified)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all"
              style={{
                background: 'rgba(204,34,0,0.05)',
                border: `1px solid ${verified ? 'rgba(204,34,0,0.4)' : 'rgba(180,30,20,0.20)'}`,
              }}
            >
              <div className="w-4 h-4 border rounded flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ borderColor: verified ? '#cc2200' : 'rgba(180,30,20,0.35)', background: verified ? 'rgba(204,34,0,0.2)' : 'transparent' }}>
                <CheckCircle2 size={11} style={{ color: '#cc2200', opacity: verified ? 1 : 0, transition: 'opacity 0.2s' }} />
              </div>
              <span className="text-[9px] font-mono uppercase tracking-[0.4em] font-black"
                style={{ color: verified ? '#cc2200' : 'rgba(168,144,144,0.7)' }}>
                OPERATIVE IDENTITY VERIFIED
              </span>
            </div>

            {/* Send button */}
            <button
              onClick={handleSubmit}
              disabled={status === 'submitting'}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-orbitron font-bold text-sm uppercase tracking-widest transition-all"
              style={{
                background: '#cc2200',
                color: '#fff',
                opacity: !verified ? 0.6 : 1,
                cursor: !verified ? 'not-allowed' : 'pointer',
                boxShadow: verified ? '0 0 20px rgba(204,34,0,0.4)' : 'none',
              }}
            >
              {status === 'submitting' ? (
                <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> TRANSMITTING...</>
              ) : (
                <><Send size={16} /> Send &rsaquo;</>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-black justify-center"
                  style={{ color: '#cc2200' }}
                >
                  <CheckCircle2 size={13} />
                  <span>HANDSHAKE_ESTABLISHED: TRANSMITTED</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-black justify-center"
                  style={{ color: '#8B0000' }}
                >
                  <AlertCircle size={13} />
                  <span>UPLINK_DENIED: RESUBMIT_REQUIRED</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── RIGHT: Saudi Arabia Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative h-[380px]"
          >
            <SaudiMapSVG />
          </motion.div>
        </div>

        {/* ── Communication Channels ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1" style={{ background: 'rgba(180,30,20,0.18)' }} />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-black"
              style={{ color: 'rgba(204,34,0,0.7)' }}>COMMUNICATION CHANNELS</span>
            <div className="h-px flex-1" style={{ background: 'rgba(180,30,20,0.18)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="cyber-card p-5 flex flex-col gap-3 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl w-fit transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(204,34,0,0.10)', border: '1px solid rgba(204,34,0,0.22)', color: '#cc2200' }}>
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] font-mono uppercase tracking-[0.35em] font-black mb-1"
                    style={{ color: 'rgba(168,144,144,0.7)' }}>{item.label}</span>
                  <span className="block text-xs font-orbitron font-black text-text-primary uppercase tracking-tight truncate
                    group-hover:text-accent-cyan transition-colors duration-300" style={{ color: '#f1e8e8' }}>
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
