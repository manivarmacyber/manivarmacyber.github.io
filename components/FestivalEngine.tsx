import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, Moon, Sun, Snowflake, Zap } from 'lucide-react';
import { fetchLocationData, getCurrentFestival, Festival, LocationData } from '../utils/festivalUtils';

export const FestivalEngine: React.FC = () => {
    const [festival, setFestival] = useState<Festival | null>(null);
    const [location, setLocation] = useState<LocationData | null>(null);
    const [isActive, setIsActive] = useState(true);
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        const initEngine = async () => {
            const loc = await fetchLocationData();
            setLocation(loc);
            const fest = getCurrentFestival(loc);
            setFestival(fest);
        };

        // Load after main content
        const timer = setTimeout(initEngine, 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleMode = () => {
        setIsActive(!isActive);
        setShowStatus(true);
        setTimeout(() => setShowStatus(false), 3000);
    };

    const renderIcon = () => {
        if (!festival) return null;
        switch (festival.effect) {
            case 'snow-drift': return <Snowflake size={14} />;
            case 'moon-pulse': return <Moon size={14} />;
            case 'golden-dust': return <Sparkles size={14} />;
            case 'shield-glow': return <ShieldCheck size={14} />;
            case 'tricolor-glow': return <Sun size={14} />;
            default: return <Zap size={14} />;
        }
    };

    if (!festival || !isActive) {
        if (!festival) return null;
        // Show only toggle if festival exists but inactive
        return (
            <div className="fixed bottom-6 right-6 z-[100]">
                <button
                    onClick={toggleMode}
                    className="w-8 h-8 rounded-full border border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/10 hover:text-white/40 transition-all"
                >
                    <Sparkles size={12} />
                </button>
            </div>
        );
    }

    return (
        <>
            {/* AMBIENT EFFECTS LAYER */}
            <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden opacity-[0.05]">
                {/* Background Particle Shift */}
                <AnimatePresence>
                    {(festival.effect === 'snow-drift' || festival.effect === 'golden-dust') && (
                        <div className="absolute inset-0">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: -20, x: Math.random() * 100 + 'vw', opacity: 0 }}
                                    animate={{
                                        y: '110vh',
                                        opacity: [0, 1, 0],
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: 10 + Math.random() * 10,
                                        repeat: Infinity,
                                        delay: Math.random() * 10,
                                        ease: "linear"
                                    }}
                                    className={`absolute w-1 h-1 rounded-full ${festival.effect === 'snow-drift' ? 'bg-white' : 'bg-amber-400'}`}
                                />
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                {/* Ambient Shimmer / Glow Border */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-0 pointer-events-none border-[1px] ${festival.effect === 'tricolor-glow' ? 'border-orange-500/20 shadow-[inset_0_0_50px_rgba(34,197,94,0.1)]' :
                            festival.effect === 'golden-dust' ? 'border-amber-500/10 shadow-[inset_0_0_50px_rgba(245,158,11,0.05)]' :
                                festival.effect === 'moon-pulse' ? 'border-blue-500/10 shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]' :
                                    'border-accent-cyan/5'
                        }`}
                />
            </div>

            {/* HIDDEN FOOTER CONTROL */}
            <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
                <AnimatePresence>
                    {showStatus && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-black/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-2xl"
                        >
                            <span className="font-orbitron text-[9px] font-black tracking-widest text-white/60 uppercase">
                                Festival Mode: {isActive ? 'Active' : 'Offline'}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    className="relative group"
                >
                    <button
                        onClick={toggleMode}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all bg-black/40 backdrop-blur-md shadow-2xl ${festival.effect === 'tricolor-glow' ? 'border-orange-500/30 text-orange-400' :
                                festival.effect === 'golden-dust' ? 'border-amber-500/30 text-amber-400' :
                                    festival.effect === 'moon-pulse' ? 'border-blue-400/30 text-blue-400' :
                                        'border-accent-cyan/30 text-accent-cyan'
                            }`}
                    >
                        {renderIcon()}

                        {/* Hidden Tooltip */}
                        <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-black/90 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex flex-col items-end">
                                <span className="font-mono text-[8px] text-white/30 uppercase tracking-tighter mb-1">
                                    {location?.country} {location?.state ? `// ${location.state}` : ''}
                                </span>
                                <span className="font-orbitron text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                                    {festival.message}
                                    - [CLICK TO TOGGLE]</span>
                            </div>
                        </div>
                    </button>

                    {/* Subtle Pulse */}
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${festival.effect === 'tricolor-glow' ? 'bg-orange-500' :
                            festival.effect === 'golden-dust' ? 'bg-amber-500' :
                                'bg-accent-cyan'
                        }`} style={{ animationDuration: '3s' }} />
                </motion.div>
            </div>
        </>
    );
};
