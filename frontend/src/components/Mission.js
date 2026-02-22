"use client";
import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="py-40 bg-transparent relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <span className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold">
                            THE MISSION
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif italic text-[#2A2A2A] tracking-tighter mb-12">
                            The Agentic AI <br /> Pioneer Program
                        </h2>
                        <div className="space-y-8 text-lg font-light text-[#2A2A2A]/60 italic leading-relaxed">
                            <p>
                                This is not just a hackathon. It is the culmination of the Analytics Vidhya Agentic AI Pioneer Program—a rigorous curriculum designed to forge the next generation of AI architects.
                            </p>
                            <p>
                                Participants have spent weeks mastering LangGraph, CrewAI, and AutoGen. Now, they apply these skills to solve real-world problems with autonomous swarms that plan, reason, and execute.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Deep Curriculum", desc: "150+ hours of intelligent agent training." },
                            { title: "Community", desc: "Join 1000+ builders in a collaborative ecosystem." },
                            { title: "Certification", desc: "Earn the prestigious Pioneer Program credential." },
                            { title: "Launchpad", desc: "Direct path from prototype to production deployment." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 velvet-card"
                            >
                                <h4 className="text-xl font-serif italic text-[#7B1123] mb-4">{item.title}</h4>
                                <p className="text-sm text-[#2A2A2A]/40 font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-40 pt-20 border-t border-[#7B1123]/5">
                    <header className="mb-20">
                        <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase">PROGRAM HIGHLIGHTS</span>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            "Mastering Agentic Reasoning (ReAct)",
                            "Building Multi-Agent Swarms",
                            "RAG with Vector Databases",
                            "Human-in-the-Loop Workflows"
                        ].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7B1123] group-hover:scale-150 transition-all" />
                                <span className="text-sm font-bold text-[#2A2A2A]/50 tracking-wide">{h}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
