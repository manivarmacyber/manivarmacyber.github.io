import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, MapPin } from 'lucide-react';
import { getCurrentFestival, getRegionData } from '../utils/festivalUtils';
import { Festival } from '../data/festivals';

export const FestivalEngine: React.FC = () => {
    const [festival, setFestival] = useState<Festival | null>(null);
    const [showIcon, setShowIcon] = useState(false);
    const [isEnhanced, setIsEnhanced] = useState(false);
    const [showStateSelector, setShowStateSelector] = useState(false);
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

    const { country, state } = getRegionData();

    useEffect(() => {
        // 3s Delay appearance
        const timer = setTimeout(() => {
            const current = getCurrentFestival();
            if (current) {
                setFestival(current);
                setShowIcon(true);
                // Auto-run subtle effect for 12s
                triggerSubtleEffect();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const triggerSubtleEffect = () => {
        const count = window.innerWidth < 768 ? 4 : 8;
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);

        setTimeout(() => {
            setParticles([]);
        }, 12000);
    };

    const handleEnhancedMode = () => {
        setIsEnhanced(true);
        triggerSubtleEffect();
        setTimeout(() => {
            setIsEnhanced(false);
        }, 15000);
    };

    const selectState = (stateCode: string) => {
        localStorage.setItem('user_region_state', stateCode);
        setShowStateSelector(false);
        // Refresh festival after state change
        const current = getCurrentFestival();
        setFestival(current);
        if (current) triggerSubtleEffect();
    };

    if (!festival) return null;

    return (
        <>
            {/* Visual Effects Layer */}
            <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
                <AnimatePresence>
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: festival.effect === 'snow-drift' ? -20 : 20 }}
                            animate={{
                                opacity: [0, 0.15, 0],
                                y: festival.effect === 'snow-drift' ? '120vh' : '-20vh',
                                x: `${p.x + (Math.random() * 10 - 5)}vw`
                            }}
                            transition={{
                                duration: festival.effect === 'snow-drift' ? 10 : 12,
                                delay: p.delay,
                                ease: "linear"
                            }}
                            className={`absolute w-1 h-1 rounded-full blur-[1px] ${festival.effect === 'snow-drift' ? 'bg-white' :
                                    festival.effect === 'tricolor-glow' ? 'bg-accent-cyan shadow-[0_0_10px_rgba(34,197,94,0.5)]' :
                                        'bg-amber-400'
                                }`}
                            style={{ left: `${p.x}vw`, top: festival.effect === 'snow-drift' ? '-5vh' : '105vh' }}
                        />
                    ))}
                </AnimatePresence>

                {/* Subtle Ambient Glow for Independence Day */}
                {festival.effect === 'tricolor-glow' && particles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.1, 0] }}
                        transition={{ duration: 8 }}
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500"
                    />
                )}
            </div>

            {/* Hidden Icon Control */}
            <AnimatePresence>
                {showIcon && (
                    <div className="fixed bottom-8 right-8 z-[70]">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.5 }}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                            className="relative"
                        >
                            <button
                                onClick={() => country === 'INDIA' && !state ? setShowStateSelector(true) : handleEnhancedMode()}
                                className="w-10 h-10 rounded-full border border-accent-cyan/30 flex items-center justify-center bg-black/40 backdrop-blur-md text-accent-cyan shadow-[0_0_15px_rgba(0,219,233,0.2)] group"
                            >
                                <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />

                                {/* Tooltip */}
                                <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-black/80 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                    <span className="font-orbitron text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                                        {festival.message}
                                    </span>
                                </div>
                            </button>

                            {/* State Selector for India (Minimalist) */}
                            <AnimatePresence>
                                {showStateSelector && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        className="absolute bottom-full right-0 mb-16 w-48 bg-black/90 border border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-2xl"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-black flex items-center gap-2">
                                                <MapPin size={10} /> Select Region
                                            </span>
                                            <button onClick={() => setShowStateSelector(false)} className="text-white/20 hover:text-white">
                                                <X size={12} />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['TN', 'KL', 'KA', 'AP', 'TS', 'WB', 'MH', 'PB', 'GJ'].map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => selectState(s)}
                                                    className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] text-white/60 hover:bg-accent-cyan/10 hover:border-accent-cyan/30 transition-all font-orbitron font-bold"
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
