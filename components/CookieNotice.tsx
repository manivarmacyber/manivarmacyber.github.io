import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 z-[100]"
        >
          <div className="glass-card p-6 border-accent-cyan/20 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                <Cookie size={20} />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-orbitron font-bold text-sm mb-1 uppercase tracking-widest">Cookie Protocol</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    We use cookies to optimize system performance and analyze traffic patterns. By continuing, you authorize these protocols.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={accept}
                    className="flex-grow bg-accent-cyan text-black font-orbitron font-bold text-[10px] py-2 rounded uppercase tracking-widest hover:bg-accent-cyan/90 hover:shadow-[0_0_15px_rgba(0,230,255,0.4)] transition-all"
                  >
                    Authorize
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="px-4 border border-white/10 text-white/40 hover:text-white transition-colors rounded"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
