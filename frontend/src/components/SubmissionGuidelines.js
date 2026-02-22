"use client";
import { motion } from "framer-motion";

const guidelines = [
    { id: 1, title: "Executive Summary", list: ["Project Title", "Problem Statement", "Solution Overview", "Key Results"] },
    { id: 2, title: "System Architecture", list: ["Agent Roles", "Model Selection (Groq)", "MCP Integration Diagram", "Communication Flow"] },
    { id: 3, title: "Technical Implementation", list: ["Agent Code Documentation", "MCP Connectors", "Orchestration Logic", "Error Handling"] },
    { id: 4, title: "Live Demonstration", list: ["End-to-End User Journey", "Multi-Modal Inputs", "Real-Time Showcase", "External Integration"] },
    { id: 5, title: "Performance Analysis", list: ["Speed Benchmarks", "User UX Improvement", "Business Impact", "Scalability"] },
    { id: 6, title: "Setup & Deployment", list: ["Environment Setup", "Dependencies List", "MCP Configuration", "Run Locally Guide"] },
];

export default function SubmissionGuidelines() {
    return (
        <section className="py-60 bg-[#F8F6F4] relative border-y border-[#7B1123]/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <header className="mb-40 text-center">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold">SUBMISSION PROTOCOLS</motion.span>
                    <h2 className="text-5xl md:text-8xl font-serif italic text-[#2A2A2A] tracking-tighter">Guidelines</h2>
                    <p className="mt-8 text-lg text-[#2A2A2A]/40 font-light italic max-w-2xl mx-auto">Everything you need to submit your project successfully via GitHub + 3 Min Video + Live Link.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {guidelines.map((g, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 velvet-card border border-[#7B1123]/5 hover:border-[#7B1123]/20 transition-all duration-700 bg-white"
                        >
                            <div className="flex items-center gap-6 mb-10">
                                <span className="text-2xl font-serif text-[#7B1123] italic">0{g.id}</span>
                                <h4 className="text-xl font-serif text-[#2A2A2A] italic">{g.title}</h4>
                            </div>
                            <ul className="space-y-4 border-l border-[#7B1123]/10 pl-8">
                                {g.list.map((item, idx) => (
                                    <li key={idx} className="text-[0.65rem] font-bold text-[#2A2A2A]/40 tracking-widest uppercase hover:text-[#7B1123] transition-colors cursor-default">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <button className="px-24 py-8 bg-[#7B1123] text-white uppercase tracking-[0.8em] font-bold text-[0.7rem] hover:bg-black transition-all duration-1000 shadow-2xl shadow-[#7B1123]/20">
                        Submit Project
                    </button>
                </div>
            </div>
        </section>
    );
}
