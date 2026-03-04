import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, XCircle } from 'lucide-react';
import { useFestival } from '../src/hooks/useFestival';

export const FestivalEngine: React.FC = () => {
    const { festival, isDisabled, toggleFestival, loading, isFirstLoad } = useFestival();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update theme variables globally for the festival accent
    useEffect(() => {
        if (!festival || isDisabled) {
            document.documentElement.style.removeProperty('--festival-accent');
            document.documentElement.style.removeProperty('--color-accent-cyan');
            return;
        }

        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const activeAccent = isLight ? festival.darkAccent : festival.accent;
        const activePastel = isLight ? festival.pastelAccent : festival.accent + '22';

        // Set festival accent and override primary cyan for theme unification
        document.documentElement.style.setProperty('--festival-accent', activeAccent);
        document.documentElement.style.setProperty('--festival-accent-soft', activePastel);

        // Use higher contrast accent for primary cyan to ensure text legibility
        document.documentElement.style.setProperty('--color-accent-cyan', activeAccent);

        return () => {
            document.documentElement.style.removeProperty('--festival-accent');
            document.documentElement.style.removeProperty('--color-accent-cyan');
        };
    }, [festival, isDisabled]);

    if (!mounted || loading) return null;

    return (
        <>
            {/* THEME OVERLAY LAYER */}
            <AnimatePresence>
                {festival && !isDisabled && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`fixed inset-0 pointer-events-none z-[1] overflow-hidden ${isFirstLoad ? 'festival-bloom' : ''}`}
                        style={{
                            background: festival.isHoli ? 'transparent' : festival.backgroundOverlay,
                        }}
                    >
                        {/* Holi Special: Multi-color premium aura */}
                        {festival.isHoli && (
                            <div className="absolute inset-0 holi-aura opacity-[0.08]" />
                        )}

                        {/* Soft decorative elements - example: subtle floating particles */}
                        {!festival.isHoli && (
                            <div className="absolute inset-0 opacity-20">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, 10, 0],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 5 + i,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute w-1 h-1 rounded-full bg-white"
                                        style={{
                                            left: `${15 + i * 15}%`,
                                            top: `${20 + (i % 3) * 25}%`,
                                            backgroundColor: festival.accent,
                                            boxShadow: `0 0 10px ${festival.accent}`,
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ENTERPRISE TOGGLE SYSTEM */}
            <div className="fixed bottom-6 right-6 z-[100]">
                <AnimatePresence mode="wait">
                    {festival ? (
                        <motion.div
                            key="festival-toggle"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="flex items-center gap-3"
                        >
                            <button
                                onClick={toggleFestival}
                                aria-label={isDisabled ? `Enable ${festival.name} overlay` : `Disable ${festival.name} overlay`}
                                className={`group relative flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-xl transition-all duration-400 shadow-2xl ${isDisabled
                                    ? 'bg-card-bg/20 border-border text-text-secondary hover:text-text-primary'
                                    : 'bg-card-bg/80 border-accent-cyan/30 text-text-primary hover:border-accent-cyan'
                                    }`}
                                style={{
                                    borderColor: !isDisabled ? festival.accent + '44' : undefined,
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles
                                        size={16}
                                        className={!isDisabled ? 'animate-pulse' : ''}
                                        style={{ color: !isDisabled ? festival.accent : undefined }}
                                    />
                                    <span className="font-orbitron text-[10px] font-black tracking-[0.2em] uppercase">
                                        {!isDisabled
                                            ? `🎉 ${festival.message}`
                                            : `${festival.name} Mode Offline`}
                                    </span>
                                </div>
                                {!isDisabled && (
                                    <XCircle size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                                )}
                            </button>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </>
    );
};
