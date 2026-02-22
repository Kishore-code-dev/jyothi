"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        gsap.fromTo(".hero-underline",
            { scaleX: 0 },
            { scaleX: 1, duration: 2.5, ease: "power4.inOut", delay: 3.5 }
        );

        const targetDate = new Date("2026-09-01T09:00:00");
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((difference / 1000 / 60) % 60),
                    secs: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden py-32">

            <div className="container mx-auto px-6 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 4 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <span className="text-[0.6rem] tracking-[0.6em] text-[#7B1123] font-bold uppercase">Analytics Vidhya</span>
                    <div className="w-4 h-px bg-[#7B1123]/20" />
                    <span className="text-[0.6rem] tracking-[0.6em] text-[#7B1123] font-bold uppercase">Groq</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 3.5 }}
                    className="relative inline-block mb-12"
                >
                    <span className="text-sm font-bold tracking-[1em] text-[#2A2A2A]/40 mb-6 block uppercase">Pioneer Program</span>
                    <h1 className="text-7xl md:text-[12vw] font-serif text-[#2A2A2A] leading-[0.8] tracking-tighter italic">
                        AGENTIC <br /> <span className="text-[#7B1123]">REVOLUTION</span>
                    </h1>
                    <div className="hero-underline h-[2px] bg-gradient-to-r from-[#7B1123] via-[#5A0D18] to-transparent w-full origin-left mt-12" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 4.5 }}
                    className="text-2xl md:text-4xl font-light text-[#2A2A2A] italic mb-8 tracking-tight"
                >
                    "Precision. Autonomy. Scale."
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 4.8 }}
                    className="text-lg font-light text-[#2A2A2A] italic mb-20 tracking-wide"
                >
                    Master the architecture of self-reasoning AI.
                </motion.p>

                {/* Highlight Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-4xl mx-auto border-y border-[#7B1123]/5 py-12">
                    {[
                        { val: "$50K", label: '"THE FELLOWSHIP"' },
                        { val: "1000+", label: "ELITE BUILDERS" },
                        { val: "08", label: "CORE MODULES" },
                        { val: "100%", label: "PRODUCTION READY" }
                    ].map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 5 + (i * 0.1) }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-2xl font-serif text-[#7B1123] italic">{b.val}</span>
                            <span className="text-[0.5rem] font-bold text-[#2A2A2A]/40 tracking-widest uppercase mt-2">{b.label}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 5.5 }}
                    className="flex flex-wrap items-center justify-center gap-8"
                >
                    <button className="px-16 py-6 bg-[#7B1123] text-[#F8F6F4] uppercase tracking-[0.5em] font-bold text-[0.7rem] hover:bg-[#5A0D18] transition-all duration-700 shadow-2xl shadow-[#7B1123]/20">
                        Initialize
                    </button>
                    <button className="px-16 py-6 border border-[#2A2A2A]/10 text-[#2A2A2A] uppercase tracking-[0.5em] font-bold text-[0.7rem] hover:bg-[#2A2A2A] hover:text-white transition-all duration-700">
                        View Syllabus
                    </button>
                </motion.div>
            </div>

        </section>
    );
}
