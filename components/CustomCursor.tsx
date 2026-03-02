import React, { useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';

export const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Slower, smoother spring for premium feel
    const springConfig = { damping: 40, stiffness: 180 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches);
        };
        checkMobile();

        const handleMouseMove = (e: MouseEvent) => {
            let x = e.clientX;
            let y = e.clientY;

            const target = e.target as HTMLElement;
            const interactive = target?.closest('a, button, [role="button"], input, select, textarea');

            if (interactive) {
                setIsHovering(true);
                const bounds = interactive.getBoundingClientRect();
                const centerX = bounds.left + bounds.width / 2;
                const centerY = bounds.top + bounds.height / 2;
                x += (centerX - x) * 0.12;
                y += (centerY - y) * 0.12;
            } else {
                setIsHovering(false);
            }

            mouseX.set(x);
            mouseY.set(y);
        };

        const handleClick = (e: MouseEvent) => {
            const id = Date.now();
            setClicks(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setClicks(prev => prev.filter(c => c.id !== id));
            }, 700);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleClick);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleClick);
            window.removeEventListener('resize', checkMobile);
        };
    }, [mouseX, mouseY]);

    if (isMobile) return null;

    return (
        <>
            {/* Click ripple */}
            <AnimatePresence>
                {clicks.map(click => (
                    <motion.div
                        key={click.id}
                        initial={{ opacity: 0.5, scale: 0 }}
                        animate={{ opacity: 0, scale: 3.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] border border-accent-cyan/40"
                        style={{
                            width: 18,
                            height: 18,
                            left: click.x - 9,
                            top: click.y - 9,
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Follower glow trail */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] bg-accent-cyan/5 blur-md"
                animate={{
                    width: isHovering ? 40 : 20,
                    height: isHovering ? 40 : 20,
                    opacity: isHovering ? 0.3 : 0.1,
                }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 150 }}
            />

            {/* Primary Arc Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    border: '2px solid #00E6FF',
                    borderRightColor: 'transparent',
                    opacity: 0.8,
                    boxShadow: '0 0 10px rgba(0, 230, 255, 0.3)',
                }}
                animate={{
                    scale: isHovering ? 1.2 : 1,
                    rotate: isHovering ? 360 : 0,
                }}
                transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { type: 'spring', damping: 20, stiffness: 200 }
                }}
            />

            <style>{`
                body { cursor: none !important; }
                a, button, [role="button"], input, select, textarea { cursor: none !important; }
            `}</style>
        </>
    );
};
