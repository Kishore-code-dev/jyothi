"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
    {
        id: "m4",
        title: "AutoGen Multi-Agent",
        subtitle: "Module 4 Focus",
        desc: "Master conversation patterns (GroupChat, 2-Agent) using Microsoft AutoGen. Build swarms that solve tasks collaboratively."
    },
    {
        id: "m5",
        title: "LangGraph Reasoning",
        subtitle: "Module 5 Focus",
        desc: "Implement cyclical graphs, persistence, and human-in-the-loop workflows. Build agents that can reason and self-correct."
    },
    {
        id: "m3",
        title: "Advanced RAG Pipelines",
        subtitle: "Module 3 Focus",
        desc: "Build 'Chat with PDF' systems using Vector DBs (Pinecone/Qdrant) and hybrid search retrieval techniques."
    },
    {
        id: "m6",
        title: "CrewAI Orchestration",
        subtitle: "Module 6 Focus",
        desc: "Assign specific roles (Researcher, Writer, Analyst) to agents. Create structured, predictable enterprise workflows."
    },
    {
        id: "m8",
        title: "AgentOps & Evaluation",
        subtitle: "Module 8 Focus",
        desc: "Learn to measure agent performance (accuracy, latency) and deploy observed systems using AgentOps."
    },
];

export default function InnovationOrbit() {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="domains" className="py-40 bg-transparent text-[#2A2A2A]">
            <div className="container mx-auto px-6 max-w-7xl">

                <header className="mb-32 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold"
                    >
                        PIONEER CURRICULUM
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif italic text-[#2A2A2A] tracking-tighter"
                    >
                        Architectural Focus
                    </motion.h2>
                    <p className="mt-8 text-lg text-[#2A2A2A]/40 font-light italic">Build with the exact stack taught in the program.</p>
                </header>

                <div className="flex flex-wrap justify-center gap-8 relative">
                    {modules.map((m, i) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 1.2, ease: [0.2, 0, 0, 1] }}
                            onHoverStart={() => setHovered(m.id)}
                            onHoverEnd={() => setHovered(null)}
                            className="w-full md:w-80 p-12 velvet-card group cursor-pointer relative overflow-hidden h-[450px] flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7B1123]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#7B1123]/[0.1] transition-all duration-1000" />

                            <div>
                                <span className="text-[0.6rem] font-bold text-[#7B1123]/40 tracking-[0.4em] uppercase mb-10 block">{m.subtitle}</span>
                                <h3 className="text-3xl font-serif text-[#2A2A2A] mb-4 group-hover:text-[#7B1123] transition-colors duration-700">{m.title}</h3>
                            </div>

                            <div className="relative">
                                <p className="text-sm text-[#2A2A2A]/50 font-light italic leading-relaxed group-hover:text-[#2A2A2A]/80 transition-colors duration-700">
                                    {m.desc}
                                </p>
                                <div className="mt-12 w-12 h-[1px] bg-[#7B1123]/20 group-hover:w-full transition-all duration-1000" />
                            </div>

                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-20 transition-all duration-1000">
                                <div className="w-12 h-12 border border-[#7B1123] rounded-full animate-spin-slow flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-[#7B1123] rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>

        </section>
    );
}
