"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamRoles = [
    { id: 1, role: "The Visionary Architect", focus: "Logic & Flow", desc: "Overseeing the grand engineering blueprint and systemic integration." },
    { id: 2, role: "The Neural Craftsman", focus: "Intelligence", desc: "Forging the AI core and cognitive processing layers." },
    { id: 3, role: "The Kinetic Engineer", focus: "Mechanics", desc: "Developing the physical/robotic execution and kinetic responses." },
    { id: 4, role: "The Protocol Guard", focus: "Security", desc: "Securing the perimeter of the innovation through advanced encryption." },
];

export default function TeamFormation() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="teams" className="py-60 bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl">

                <header className="mb-40 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold"
                        >
                            TEAM FORMATION™
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif italic text-[#2A2A2A] tracking-tighter"
                        >
                            The Union of Minds
                        </motion.h2>
                    </div>
                    <div className="mt-8 md:mt-0 opacity-40 text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#7B1123]">
                        4-MEMBER MAXIMUM PER ENTOURAGE
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
                    {teamRoles.map((role, i) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.2, 0, 0, 1] }}
                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={`relative overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] 
                ${hoveredIndex === i ? "md:flex-[3]" : "md:flex-1"} border border-[#7B1123]/5 shadow-2xl shadow-[#7B1123]/[0.02] bg-white group`}
                        >
                            {/* Background Reveal Text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000">
                                <span className="text-8xl font-serif italic -rotate-90 md:rotate-0 tracking-tighter">0{i + 1}</span>
                            </div>

                            <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                                <div>
                                    <span className="text-[0.55rem] font-bold text-[#7B1123]/40 tracking-[0.4em] uppercase mb-12 block group-hover:text-[#7B1123] transition-colors">ROLE IDENTIFIER 0{i + 1}</span>
                                    <h3 className="text-3xl md:text-4xl font-serif text-[#2A2A2A] mb-4 tracking-tight group-hover:italic transition-all duration-700">{role.role}</h3>
                                    <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.3em] uppercase">{role.focus}</span>
                                </div>

                                <AnimatePresence>
                                    {(hoveredIndex === i || window?.innerWidth < 768) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="max-w-xs"
                                        >
                                            <p className="text-[#2A2A2A]/50 text-sm italic font-light leading-relaxed mb-8">
                                                {role.desc}
                                            </p>
                                            <button className="text-[0.6rem] font-bold text-[#7B1123] uppercase tracking-[0.3em] border-b border-[#7B1123] pb-2">Assign Role</button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Edge Accent */}
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7B1123] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
