"use client";
import { motion } from "framer-motion";

const workflows = [
    {
        id: 1,
        group: "Deep Searcher",
        label: "CASE LAW INGESTION",
        tech: "Tavily + LangGraph",
        role: "Intelligent Information Retrieval"
    },
    {
        id: 2,
        group: "Vector Nexus",
        label: "SEMANTIC RETRIEVAL",
        tech: "Qdrant / Pinecone",
        role: "Context-Aware Retrieval"
    },
    {
        id: 3,
        group: "Analyst Core",
        label: "SYNTHESIS ENGINE",
        tech: "Llama-3-70B (Groq)",
        role: "Systemic Reasoning"
    },
    {
        id: 4,
        group: "Legal Drafter",
        label: "BRIEF GENERATION",
        tech: "Fine-tuned Mistral",
        role: "Structured Document Creation"
    },
    {
        id: 5,
        group: "Human Review",
        label: "FINAL VALIDATION",
        tech: "Expert Loop",
        role: "The Human-in-the-Loop Loop"
    },
];

export default function Workflows() {
    return (
        <section className="py-60 bg-transparent flex flex-col items-center">
            <div className="container mx-auto px-6 max-w-7xl">
                <header className="mb-40 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold"
                    >
                        ARCHITECTURE REFERENCE
                    </motion.span>
                    <h2 className="text-5xl md:text-8xl font-serif italic text-[#2A2A2A] tracking-tighter mb-8">Intelligent Workflows</h2>
                    <p className="text-lg md:text-2xl font-light text-[#2A2A2A]/40 italic max-w-3xl mx-auto italic">
                        Experience the future of automation. From unstructured data ingestion to reasoning and final execution—powered by Groq's lightning-fast inference.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 relative">
                    {workflows.map((w, i) => (
                        <motion.div
                            key={w.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-1 min-w-[240px] p-12 velvet-card group cursor-pointer border border-[#7B1123]/5 hover:border-[#7B1123]/20 transition-all duration-1000"
                        >
                            <span className="text-[0.55rem] font-bold text-[#7B1123]/40 tracking-[0.4em] uppercase mb-12 block">{w.group}</span>
                            <h4 className="text-xl font-serif text-[#2A2A2A] italic mb-4 group-hover:text-[#7B1123] transition-colors">{w.label}</h4>
                            <p className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.3em] mb-12 opacity-40 uppercase">{w.tech}</p>
                            <div className="w-full h-px bg-[#7B1123]/10 mb-12 group-hover:bg-[#7B1123]/40 transition-all" />
                            <p className="text-xs text-[#2A2A2A]/40 italic leading-relaxed">{w.role}</p>
                        </motion.div>
                    ))}

                    {/* Connecting Line (Simulated) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B1123]/10 to-transparent pointer-events-none -translate-y-1/2 z-[-1]" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-32 px-16 py-6 border border-[#7B1123] text-[#7B1123] uppercase tracking-[0.5em] font-bold text-[0.7rem] hover:bg-[#7B1123] hover:text-white transition-all duration-700 mx-auto"
                >
                    Enter Agent Workspace
                </motion.button>
            </div>
        </section>
    );
}
