"use client";
import { motion } from "framer-motion";

const goals = [
    {
        title: "Intelligence & Impact",
        desc: "Build real-world AI agent systems that perceive, reason, and act powered by Groq's ultra-fast inference and optionally integrated with Model Context Protocol (MCP)."
    },
    {
        title: "Multi-Agent Architecture",
        desc: "Deploy at least 2 specialized agents working together to solve complex tasks."
    },
    {
        title: "Real-Time Performance",
        desc: "Leverage Groq's lightning-fast inference for responsive, millisecond-latency experiences."
    },
    {
        title: "MCP Integration",
        desc: "Use Model Context Protocol to seamlessly connect with external databases and tools."
    }
];

export default function TheMission() {
    return (
        <section className="py-40 bg-transparent relative border-y border-[#7B1123]/5">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row gap-20 items-start mb-40">
                    <div className="w-full md:w-1/3">
                        <span className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold">THE MISSION</span>
                        <h2 className="text-6xl font-serif italic text-[#2A2A2A] tracking-tighter">Hackathon <br /> Goal</h2>
                        <button className="mt-12 px-10 py-4 border border-[#7B1123] text-[#7B1123] text-[0.6rem] font-bold uppercase tracking-[0.4em] hover:bg-[#7B1123] hover:text-white transition-all duration-700">
                            View Syllabus →
                        </button>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {goals.map((g, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h4 className="text-xl font-serif italic text-[#7B1123] mb-4">{g.title}</h4>
                                <p className="text-sm text-[#2A2A2A]/40 font-light italic leading-relaxed">{g.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <header className="mb-20">
                        <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase">JUDGING INTELLIGENCE</span>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: "Technical Excellence", val: "35%", desc: "Code quality, architecture." },
                            { label: "Real-World Impact", val: "35%", desc: "Practical value effectiveness." },
                            { label: "Innovation", val: "30%", desc: "Creativity and novelty." }
                        ].map((j, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="p-12 velvet-card text-center"
                            >
                                <span className="text-5xl font-serif italic text-[#7B1123] block mb-4">{j.val}</span>
                                <p className="text-[0.6rem] font-bold text-[#2A2A2A]/60 tracking-[0.3em] uppercase mb-4">{j.label}</p>
                                <p className="text-xs text-[#2A2A2A]/20 italic">{j.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-20 p-20 bg-white border border-[#7B1123]/5 shadow-2xl shadow-[#7B1123]/[0.02]">
                    <div className="md:col-span-3 mb-10">
                        <h3 className="text-3xl font-serif italic text-[#2A2A2A]">Beyond Chatbots</h3>
                        <p className="text-sm text-[#2A2A2A]/40 mt-4 italic font-light">This challenge is about orchestrating intelligent workflows. We want agents that do real work.</p>
                    </div>
                    {[
                        { title: "Intelligent Reasoning", sub: "Decision making vs Q&A." },
                        { title: "Multi-modal Processing", sub: "Text, Voice, Vision." },
                        { title: "Genuine Use Case", sub: "Solve a real problem." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <span className="text-xl font-bold text-[#2A2A2A]/60 italic tracking-tight">{item.title}</span>
                            <p className="text-xs text-[#7B1123]/60 font-bold uppercase tracking-widest">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
