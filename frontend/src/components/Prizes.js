"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const grants = [
    { rank: "2", label: "Research Grant", val: "$10,000", perks: ["$5,000 Seed Funding", "$5,000 Cloud Credits", "Accelerator Interview"] },
    { rank: "1", label: "Grand Prize", val: "$50,000", perks: ["Total Value", "$20,000 Cash Grant", "$30,000 Compute", "VP-Level Mentorship"], highlighted: true },
    { rank: "3", label: "Builder Grant", val: "$5,000", perks: ["$2,000 Cash", "$3,000 Credits", "Certification"] }
];

export default function Prizes() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0; const end = 50000; const duration = 3000;
            const timer = setInterval(() => {
                start += end / (duration / 16);
                if (start >= end) { setCount(end); clearInterval(timer); }
                else { setCount(Math.floor(start)); }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView]);

    return (
        <section ref={ref} id="prizes" className="py-40 bg-transparent relative text-center">
            <div className="container mx-auto px-6 max-w-7xl">
                <header className="mb-40">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold">FELLOWSHIP GRANTS</motion.span>
                    <h2 className="text-[10vw] font-serif italic tracking-tighter leading-none mb-8 text-[#2A2A2A]">
                        ${count.toLocaleString()}
                    </h2>
                    <p className="text-xl md:text-3xl font-light italic text-[#2A2A2A]/20 tracking-tight max-w-3xl mx-auto italic">
                        Beyond cash prizes. Secure funding, mentorship, and cloud resources to launch your agentic startup.
                    </p>
                </header>

                <div className="flex flex-col md:flex-row items-end justify-center gap-8">
                    {grants.map((g, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`w-full md:w-80 p-12 velvet-card border flex flex-col items-center ${g.highlighted ? 'border-[#7B1123] bg-white h-[600px] shadow-2xl' : 'border-[#7B1123]/5 bg-transparent h-[500px]'}`}
                        >
                            <div className="w-12 h-12 rounded-full border border-[#7B1123]/20 flex items-center justify-center mb-10 text-[0.6rem] font-bold text-[#7B1123]">0{g.rank}</div>
                            <h4 className="text-xl font-serif text-[#2A2A2A] italic mb-2">{g.label}</h4>
                            <span className="text-4xl font-serif text-[#7B1123] mb-8">{g.val}</span>

                            <div className="w-full space-y-4 mb-20 overflow-hidden">
                                {g.perks.map((p, pi) => (
                                    <div key={pi} className="flex flex-col items-center gap-2">
                                        <span className="text-[0.55rem] font-bold text-[#2A2A2A]/30 tracking-[0.3em] uppercase">{p}</span>
                                        {pi < g.perks.length - 1 && <div className="w-2 h-[1px] bg-[#7B1123]/10" />}
                                    </div>
                                ))}
                            </div>

                            {g.highlighted && (
                                <button className="px-10 py-4 bg-[#7B1123] text-white text-[0.6rem] font-bold uppercase tracking-[0.4em] hover:bg-[#5A0D18] transition-all duration-700 mt-auto">
                                    Grand Entry
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Code Grant Reveal */}
                <div className="mt-40 p-20 border border-[#7B1123]/20 bg-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <span className="text-8xl font-serif italic text-[#7B1123]">GROQ</span>
                    </div>
                    <div className="relative z-10 text-center">
                        <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.5em] mb-4 block">ACTIVE FELLOWSHIP CODE</span>
                        <p className="text-4xl md:text-6xl font-serif text-[#2A2A2A] italic tracking-tighter mb-8 group-hover:tracking-widest transition-all duration-1000">GROQ-AGENTIC-2026</p>
                        <p className="text-xs text-[#2A2A2A]/40 max-w-md mx-auto italic font-light">Use your unique fellowship code to unlock $50 in GroqCloud credits. Build the Impossible.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
