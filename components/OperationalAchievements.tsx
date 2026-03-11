import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Shield, Star, ExternalLink, CheckCircle2 } from 'lucide-react';

export const OperationalAchievements: React.FC = () => {
    const achievements = [
        {
            title: "HALL OF FAME – USITC",
            description: "Recognized under the United States International Trade Commission Vulnerability Disclosure Program for responsible vulnerability reporting.",
            link: "https://bugcrowd.com/h/Varma9999",
            isLink: true,
            icon: ExternalLink,
            color: "text-accent-primary",
            bg: "bg-accent-primary/10",
            border: "border-accent-primary/20"
        },
        {
            title: "NCIIPC – NATIONAL PENETRATION TESTING SCHEME (Top 10)",
            description: "Ranked among Top 10 participants in the Government coordinated Critical Information Infrastructure (CII) security testing initiative.",
            link: "https://drive.google.com/file/d/1ITPQ5Cv9vaPWCO23sXfloBG546zOmTgt/view?usp=drivesdk",
            isLink: true,
            icon: Trophy,
            color: "text-accent-secondary",
            bg: "bg-accent-secondary/10",
            border: "border-accent-secondary/20"
        },
        {
            title: "NCIIPC ACKNOWLEDGEMENT",
            description: "Recognized for responsible vulnerability disclosure and contributions towards Government cybersecurity initiatives.",
            link: "",
            isLink: false,
            icon: Award,
            color: "text-accent-primary",
            bg: "bg-accent-primary/10",
            border: "border-accent-primary/20"
        },
        {
            title: "IBR ACHIEVER",
            description: "Recognized for cybersecurity excellence and research contributions.",
            link: "https://drive.google.com/file/d/1DjELps9OQ76aKElT3UeB2w73fy1OIjJj/view?usp=drivesdk",
            isLink: true,
            icon: Star,
            color: "text-accent-secondary",
            bg: "bg-accent-secondary/10",
            border: "border-accent-secondary/20"
        }
    ];

    return (
        <div id="achievements" className="py-20">
            <div className="container-progressive">
                <div className="flex items-center gap-6 mb-16 group">
                    <div className="p-4 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl text-accent-primary group-hover:scale-110 transition-transform shadow-[0_0_15px_var(--accent-glow-subtle)]">
                        <Trophy size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter leading-none italic">
                        OPERATIONAL <span className="text-accent-primary" style={{ textShadow: '0 0 10px var(--accent-glow)' }}>ACHIEVEMENTS</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {achievements.map((item, i) =>
                        item.isLink ? (
                            <motion.a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`p-6 md:p-8 border border-border-color flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group transition-all block cursor-pointer hover:border-accent-primary/20 rounded-3xl`}
                                style={{ background: 'var(--bg-card)' }}
                            >
                                <div className={`p-5 ${item.bg} rounded-2xl border ${item.border} ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon size={32} />
                                </div>
                                <div className="space-y-3 flex-1">
                                    <h3 className="text-lg md:text-xl font-orbitron font-black text-text-primary uppercase tracking-tight leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-muted font-medium">{item.description}</p>
                                </div>
                                <div className="text-text-muted/40 group-hover:text-accent-primary transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                            </motion.a>
                        ) : (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`p-6 md:p-8 border border-border-color flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group transition-all rounded-3xl`}
                                style={{ background: 'var(--bg-card)' }}
                            >
                                <div className={`p-5 ${item.bg} rounded-2xl border ${item.border} ${item.color}`}>
                                    <item.icon size={32} />
                                </div>
                                <div className="space-y-3 flex-1">
                                    <h3 className="text-lg md:text-xl font-orbitron font-black text-text-primary uppercase tracking-tight leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-muted font-medium">{item.description}</p>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
