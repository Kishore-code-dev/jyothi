"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const events = [
    { date: "AUG 26", status: "completed", label: "Registration Opens", desc: "Registration begins for all participants worldwide." },
    { date: "SEP 1", status: "active", label: "Hackathon Begins", desc: "Development phase starts, access to Groq API and resources." },
    { date: "SEP 1 - OCT 6", status: "upcoming", label: "Judging Period", desc: "Expert panel reviews and evaluates all submissions." },
    { date: "OCT 6", status: "upcoming", label: "Submission Deadline", desc: "Final submissions must be completed by this deadline." },
    { date: "OCT 6", status: "upcoming", label: "Results Announced", desc: "Winners announced and prizes distributed." }
];

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} id="timeline" className="py-60 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative">
                <header className="mb-40 text-center">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold">EVENT TIMELINE</motion.span>
                    <h2 className="text-5xl md:text-8xl font-serif italic text-[#2A2A2A] tracking-tighter">Chronology</h2>
                </header>

                <div className="relative pt-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#7B1123]/10" />
                    <motion.div style={{ scaleY, originY: 0 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#7B1123] h-full z-10" />

                    <div className="space-y-40">
                        {events.map((e, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                className={`flex items-center w-full ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div className={`w-1/2 ${i % 2 === 0 ? "text-right pr-20" : "text-left pl-20"}`}>
                                    <span className={`text-[0.6rem] font-bold tracking-[0.4em] uppercase mb-4 block ${e.status === 'active' ? 'text-[#7B1123] animate-pulse' : 'text-[#2A2A2A]/30'}`}>{e.status}</span>
                                    <span className="text-[0.7rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase mb-2 block">{e.date}</span>
                                    <h4 className="text-3xl font-serif italic text-[#2A2A2A] mb-4">{e.label}</h4>
                                    <p className="text-sm text-[#2A2A2A]/40 font-light italic leading-relaxed max-w-xs ml-auto mr-0 i%2==0? '':'auto'">{e.desc}</p>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-[#7B1123] z-20" />
                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
