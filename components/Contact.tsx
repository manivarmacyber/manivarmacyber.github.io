import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Send, Shield, Terminal, User, AtSign, FileCode, CheckCircle2, Phone, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';

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
    { icon: Mail, label: 'EMAIL PROTOCOL', value: 'mani.varma.3243@gmail.com', iconColor: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', hoverBorder: 'hover:border-accent-cyan/40' },
    { icon: Phone, label: 'DIRECT LINE', value: '+91 93461 59671', iconColor: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', hoverBorder: 'hover:border-accent-cyan/40' },
    { icon: MessageCircle, label: 'WHATSAPP SECURE', value: '+91 93461 59671', iconColor: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', hoverBorder: 'hover:border-accent-cyan/40' },
    { icon: Linkedin, label: 'LINKEDIN NETWORK', value: 'manikantavarmag', iconColor: 'text-accent-violet', bg: 'bg-accent-violet/10', border: 'border-accent-violet/20', hoverBorder: 'hover:border-accent-violet/40' },
  ];

  return (
    <div id="contact" className="py-16 bg-bg relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container-progressive relative z-10 px-0">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.4em] font-black">DIRECT COMMS INTERFACE</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── LEFT: Direct Uplink (40%) ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6, boxShadow: '0 0 40px rgba(0, 230, 255, 0.1)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-[40%] w-full glass-card p-8 border border-white/5 hover:border-accent-cyan/20 rounded-[20px] space-y-6 relative overflow-hidden bg-white/[0.01] transition-colors duration-300"
          >
            {/* Cyan edge glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

            {/* Card header */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Terminal size={22} className="text-white/50" />
                <h2 className="text-xl md:text-2xl font-orbitron font-black text-white uppercase tracking-tighter leading-none">
                  DIRECT <span className="text-accent-cyan">UPLINK</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/5 border border-white/10 rounded-full font-mono text-[8px] text-white/40 tracking-widest uppercase">
                <Shield size={12} className={`text-accent-cyan ${verified ? '' : 'animate-pulse'}`} />
                <span>{verified ? 'VERIFIED' : 'COMMS_ON'}</span>
              </div>
            </div>

            {/* Form fields */}
            <div className="space-y-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] uppercase tracking-[0.4em] font-black">
                    <User size={12} />
                    <span>IDENTITY</span>
                  </div>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-xs font-mono text-white focus:border-accent-cyan/30 outline-none transition-all placeholder:text-white/10 shadow-inner"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] uppercase tracking-[0.4em] font-black">
                    <AtSign size={12} />
                    <span>RETURN PATH</span>
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-xs font-mono text-white focus:border-accent-cyan/30 outline-none transition-all placeholder:text-white/10 shadow-inner"
                    placeholder="identity@domain.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] uppercase tracking-[0.4em] font-black">
                  <FileCode size={12} />
                  <span>MESSAGE PAYLOAD</span>
                </div>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 px-4 py-3 rounded-xl text-xs font-mono text-white focus:border-accent-cyan/30 outline-none transition-all placeholder:text-white/10 resize-y shadow-inner"
                  style={{ minHeight: '110px', maxHeight: '180px' }}
                  placeholder="Describe your project, inquiry, or security requirements..."
                />
              </div>

              {/* Verify */}
              <div
                onClick={() => setVerified(!verified)}
                className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-xl cursor-pointer hover:bg-white/[0.08] transition-all"
              >
                <div className={`w-4 h-4 border ${verified ? 'border-accent-cyan bg-accent-cyan/20' : 'border-white/20'} rounded flex items-center justify-center transition-colors flex-shrink-0`}>
                  <CheckCircle2 size={11} className={`text-accent-cyan transition-opacity ${verified ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <span className={`text-[9px] font-mono uppercase tracking-[0.4em] font-black ${verified ? 'text-accent-cyan' : 'text-white/40'}`}>
                  OPERATIVE IDENTITY VERIFIED
                </span>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'submitting'}
                className={`w-full py-4 bg-white/[0.03] border rounded-2xl relative overflow-hidden group/btn transition-all active:scale-[0.99] flex items-center justify-center gap-3 shadow-xl ${!verified ? 'border-accent-violet/30 cursor-not-allowed opacity-80' : 'border-white/10 hover:border-accent-cyan/30 hover:bg-accent-cyan/5'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="text-accent-cyan animate-spin" />
                    <span className="text-sm font-orbitron font-black text-white uppercase tracking-widest">TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className={`transition-all ${!verified ? 'text-accent-violet/50' : 'text-white/30 group-hover/btn:text-accent-cyan group-hover/btn:translate-x-1'}`} />
                    <span className={`text-sm font-orbitron font-black text-white uppercase tracking-widest transition-opacity ${!verified ? 'opacity-30' : 'opacity-50 group-hover/btn:opacity-100'}`}>
                      {verified ? 'AUTHORIZE LINK' : 'VERIFY IDENTITY'}
                    </span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-accent-cyan font-mono text-[10px] uppercase tracking-widest font-black justify-center"
                  >
                    <CheckCircle2 size={13} />
                    <span>HANDSHAKE_ESTABLISHED: TRANSMITTED</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-accent-violet font-mono text-[10px] uppercase tracking-widest font-black justify-center"
                  >
                    <AlertCircle size={13} />
                    <span>UPLINK_DENIED: RESUBMIT_REQUIRED</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── RIGHT: Communication Channels (60%) ─────────────── */}
          <div className="lg:w-[60%] w-full space-y-6">

            {/* Right header */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white/40">
                <Send size={18} className="rotate-[-15deg]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-orbitron font-black text-white uppercase tracking-tighter leading-none">
                  COMMUNICATION <span className="text-white">CHANNELS</span>
                </h2>
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] mt-1">SECURE UPLINK PROTOCOLS</p>
              </div>
            </div>

            {/* 2×2 channel card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {channels.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className={`glass-card p-6 border ${item.border} ${item.hoverBorder} bg-white/[0.01] hover:bg-white/[0.03] flex items-center gap-5 group transition-all duration-300 rounded-2xl`}
                >
                  <div className={`p-3 ${item.bg} rounded-xl border ${item.border} ${item.iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-mono text-white/40 uppercase tracking-[0.35em] font-black mb-1.5">{item.label}</span>
                    <span className={`block text-sm font-orbitron font-black text-white uppercase tracking-tight group-hover:${item.iconColor} transition-colors duration-300 truncate`}>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Initiate Secure Consultation CTA */}
            <motion.button
              onClick={() => document.querySelector<HTMLInputElement>('#contact input')?.focus()}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: '0 0 28px rgba(0,255,255,0.12)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent-cyan/5 border border-accent-cyan/30 rounded-2xl text-accent-cyan font-orbitron font-black text-xs uppercase tracking-[0.35em] hover:bg-accent-cyan/10 hover:border-accent-cyan/60 transition-all duration-300 relative overflow-hidden group/cta"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/[0.06] to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
              <Shield size={14} className="text-accent-cyan group-hover/cta:scale-110 transition-transform duration-300" />
              <span>Initiate Secure Consultation</span>
            </motion.button>

            {/* Bottom footer tag */}
            <div className="text-center">
              <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.8em] font-bold">SECURE_HANDSHAKE_V4.2_ENCRYPTED</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
