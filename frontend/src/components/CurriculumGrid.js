"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const modules = [
    {
        id: "m1",
        num: "01",
        title: "LangGraph Academy",
        tag: "Orchestration",
        desc: "Deep dive into stateful multi-agent graphs. Learn persistence, cyclicity, and human-in-the-loop patterns."
    },
    {
        id: "m2",
        num: "02",
        title: "CrewAI Swarms",
        tag: "Role-Playing Agents",
        desc: "Production patterns for role-based agent teams. Hierarchical vs Sequential processes."
    },
    {
        id: "m3",
        num: "03",
        title: "Vector Memories",
        tag: "Pinecone / Weaviate",
        desc: "Architecturing long-term memory. HNSW indexes, hybrid search, and semantic re-ranking strategies."
    },
    {
        id: "m4",
        num: "04",
        title: "Self-RAG Systems",
        tag: "Retrieval Strategies",
        desc: "Implementing CRAG (Corrective RAG) and self-reflective retrieval loops to eliminate hallucinations."
    },
    {
        id: "m5",
        num: "05",
        title: "Groq LPU Cookbook",
        tag: "Inference Speed",
        desc: "Maximizing tokens/sec on Groq LPUs. JSON mode optimization, function calling, and batching."
    },
    {
        id: "m6",
        num: "06",
        title: "Agent Evaluation",
        tag: "Ragas Framework",
        desc: "Quantitative testing pipelines. Measuring Faithfulness, Answer Relevance, and Context Precision."
    },
];

export default function CurriculumGrid() {
    return (
        <section className="py-60 bg-[#2A2A2A]/2 overflow-hidden border-y border-[#7B1123]/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <header className="mb-40">
                    <span className="text-[0.7rem] uppercase tracking-[1em] text-[#7B1123] mb-8 block font-bold">CURRICULUM ACCESS</span>
                    <h2 className="text-6xl md:text-8xl font-serif italic text-[#2A2A2A] tracking-tighter">Master Agentic <br /> Architecture</h2>
                    <p className="mt-8 text-lg text-[#2A2A2A]/40 font-light italic max-w-xl">Access official "Analytics Vidhya Pioneer" modules. Authorized for Cohort 2026 only.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[0.5px] border-[#7B1123]/10">
                    {modules.map((m, i) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-16 border-[0.5px] border-[#7B1123]/10 hover:bg-white transition-all duration-700 group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-20">
                                <span className="text-4xl font-serif italic text-[#2A2A2A]/5 group-hover:text-[#7B1123]/10 transition-colors uppercase">{m.num}</span>
                                <span className="text-[0.5rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-all">{m.tag}</span>
                            </div>
                            <h3 className="text-3xl font-serif text-[#2A2A2A] mb-8 group-hover:italic transition-all">{m.title}</h3>
                            <p className="text-sm text-[#2A2A2A]/40 font-light italic italic leading-relaxed mb-12 h-20 opacity-0 group-hover:opacity-100 transition-all duration-1000">{m.desc}</p>
                            <div className="pt-8 border-t border-[#7B1123]/5 flex items-center justify-between">
                                <span className="text-[0.55rem] font-bold text-[#2A2A2A]/20 tracking-[0.3em] uppercase group-hover:text-[#7B1123] transition-all">Initialize Module</span>
                                <div className="w-6 h-6 border border-[#2A2A2A]/5 rounded-full flex items-center justify-center group-hover:border-[#7B1123]/40">
                                    <div className="w-1 h-1 bg-[#2A2A2A]/10 rounded-full group-hover:bg-[#7B1123]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
