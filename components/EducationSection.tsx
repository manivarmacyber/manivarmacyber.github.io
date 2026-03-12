import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
    const education = [
        {
            year: "2023",
            college: "SIDDHARTHA DEGREE COLLEGE",
            degree: "BCA",
            location: "Andhra Pradesh, India"
        },
        {
            year: "2020",
            college: "MADHURI JUNIOR COLLEGE",
            degree: "INTERMEDIATE",
            location: "Andhra Pradesh, India"
        },
        {
            year: "2018",
            college: "MADHURI VIDYALAYA E.M. HIGH SCHOOL",
            degree: "SSC",
            location: "Andhra Pradesh, India"
        }
    ];

    return (
        <div id="education" className="space-y-16 py-20">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent-primary/10 rounded-xl border border-accent-primary/20 text-accent-primary">
                    <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-orbitron font-black text-text-primary uppercase tracking-tighter">
                    ACADEMIC <span className="text-accent-primary">HISTORY</span>
                </h2>
                <div className="w-12 h-[1px] bg-accent-primary/30" />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 container-progressive px-0">
                {education.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.1, y: 20 }}
                        whileInView={{ opacity: 0.3, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.1 }}
                        className="p-8 border border-border-color space-y-6 relative overflow-hidden group rounded-[2rem]"
                        style={{ background: 'var(--bg-card)' }}
                    >
                        {/* Cyan accent line top */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-primary/20 group-hover:bg-accent-primary transition-all" />

                        <div className="flex items-center gap-2 text-accent-primary/60 font-mono text-[9px] tracking-widest uppercase">
                            <Calendar size={10} />
                            <span>{item.year}</span>
                        </div>

                        <div className="space-y-2">
                             <h3 className="text-lg font-orbitron font-black text-text-primary/40 uppercase tracking-tight leading-tight group-hover:text-accent-primary transition-colors">
                                {item.college}
                            </h3>
                            <p className="text-[10px] font-mono text-accent-secondary/40 font-black uppercase tracking-[0.2em] group-hover:text-accent-secondary">
                                {item.degree}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-text-muted font-mono text-[9px] tracking-widest pt-4 border-t border-border-color">
                            <MapPin size={10} />
                            <span>{item.location}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
