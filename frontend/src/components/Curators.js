"use client";
import { motion } from "framer-motion";

const curators = [
    { name: "Aidar Malik", role: "Expert Judge", org: "Astana IT University" },
    { name: "Maxim Ivanov", role: "AI Researcher", org: "ITMO" },
    { name: "Bauyrzhan K.", role: "Principal Architect", org: "KPMG" },
    { name: "Dina Satpayeva", role: "Neural Scientist", org: "ISSAI" }
];

export default function Curators() {
    return (
        <section className="py-40 bg-transparent relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <header className="mb-32 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-6 block font-bold"
                    >
                        THE INDEPENDENT EXPERTS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-[#2A2A2A] italic"
                    >
                        Distinguished Curators
                    </motion.h2>
                </header>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                    {curators.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="text-center group"
                        >
                            <div className="relative mb-10 inline-block">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/5 p-2 group-hover:border-[#D4AF37]/50 transition-all duration-1000 bg-white/5">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                                        <img
                                            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${c.name}`}
                                            alt={c.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] opacity-40 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                                {/* Orbital Glow */}
                                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 group-hover:scale-125 transition-all duration-1000 pointer-events-none" />
                            </div>

                            <h4 className="text-2xl font-bold text-[#2A2A2A] mb-2">{c.name}</h4>
                            <p className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.3em] uppercase mb-1">{c.role}</p>
                            <p className="text-[0.6rem] text-[#2A2A2A]/40 uppercase tracking-[0.2em]">{c.org}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
