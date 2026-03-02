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
                <div className="p-3 bg-accent-cyan/10 rounded-xl border border-accent-cyan/20 text-accent-cyan">
                    <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter">
                    ACADEMIC <span className="text-accent-cyan">HISTORY</span>
                </h2>
                <div className="w-12 h-[1px] bg-accent-cyan/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-6">
                {education.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-10 border-white/5 space-y-6 relative overflow-hidden group"
                    >
                        {/* Cyan accent line top */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-cyan/20 group-hover:bg-accent-cyan transition-all" />

                        <div className="flex items-center gap-2 text-accent-cyan/60 font-mono text-[9px] tracking-widest uppercase">
                            <Calendar size={10} />
                            <span>{item.year}</span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-orbitron font-black text-white uppercase tracking-tight leading-tight group-hover:text-accent-cyan transition-colors">
                                {item.college}
                            </h3>
                            <p className="text-[10px] font-mono text-accent-violet font-black uppercase tracking-[0.2em]">
                                {item.degree}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] tracking-widest pt-4 border-t border-white/5">
                            <MapPin size={10} />
                            <span>{item.location}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
