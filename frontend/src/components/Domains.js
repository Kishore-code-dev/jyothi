"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Database, Cpu, Gavel, UserCheck } from "lucide-react";

const workflows = [
    {
        title: "Deep Searcher",
        subtitle: "CASE LAW INGESTION",
        tools: "Tavily + LangGraph",
        icon: <Search className="w-6 h-6" />,
        id: "ds"
    },
    {
        title: "Vector Nexus",
        subtitle: "SEMANTIC RETRIEVAL",
        tools: "Qdrant / Pinecone",
        icon: <Database className="w-6 h-6" />,
        id: "vn"
    },
    {
        title: "Analyst Core",
        subtitle: "SYNTHESIS ENGINE",
        tools: "Llama-3-70B (Groq)",
        icon: <Cpu className="w-6 h-6" />,
        id: "ac",
        active: true
    },
    {
        title: "Legal Drafter",
        subtitle: "BRIEF GENERATION",
        tools: "Fine-tuned Mistral",
        icon: <Gavel className="w-6 h-6" />,
        id: "ld"
    },
    {
        title: "Human Review",
        subtitle: "FINAL VALIDATION",
        tools: "Expert Loop",
        icon: <UserCheck className="w-6 h-6" />,
        id: "hr"
    }
];

export default function Domains() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">

                <header className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight"
                    >
                        Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#7B1123]">Workflows</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-2xl mx-auto text-sm md:text-md leading-relaxed"
                    >
                        Experience the future of automation. From unstructured data ingestion to reasoning and final execution—powered by Groq's lightning-fast inference.
                    </motion.p>
                </header>

                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 relative">
                    {workflows.map((item, i) => (
                        <div key={item.id} className="flex items-center group">
                            <motion.div
                                onHoverStart={() => setHovered(item.id)}
                                onHoverEnd={() => setHovered(null)}
                                className={`w-64 p-8 rounded-xl border transition-all duration-500 relative bg-black/40 backdrop-blur-xl flex flex-col items-center text-center
                  ${item.active || hovered === item.id
                                        ? "border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/20"
                                        : "border-white/5 hover:border-white/20"}`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500
                  ${item.active || hovered === item.id ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "bg-white/5 text-white/40"}`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-[0.6rem] tracking-[0.2em] text-[#D4AF37]/60 mb-2 font-bold uppercase">{item.subtitle}</p>
                                <p className="text-[0.55rem] text-white/20 font-mono italic">{item.tools}</p>

                                {item.active && (
                                    <div className="mt-6 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                                        <span className="text-[0.5rem] font-bold text-[#D4AF37] uppercase tracking-widest">Live View</span>
                                    </div>
                                )}
                            </motion.div>

                            {i < workflows.length - 1 && (
                                <div className="hidden lg:block w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 rounded-full bg-black border border-[#D4AF37]/30 text-white text-[0.7rem] font-bold uppercase tracking-[0.3em] flex items-center gap-4 mx-auto group hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
                    >
                        <Cpu className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                        Enter Agent Workspace
                        <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                    </motion.button>
                </div>

            </div>
        </section>
    );
}
