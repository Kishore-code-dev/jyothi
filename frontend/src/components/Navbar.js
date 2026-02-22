"use client";
import { motion } from "framer-motion";

export default function Navbar() {
    const links = [
        { name: "PIONEER PROGRAM", href: "#mission" },
        { name: "ARCHITECTURES", href: "#architecture" },
        { name: "CURRICULUM", href: "#curriculum" },
        { name: "TIMELINE", href: "#timeline" },
        { name: "GRANTS", href: "#prizes" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[500] px-10 py-10 flex justify-between items-center pointer-events-none">

            {/* Brand area */}
            <div className="flex items-center gap-6 pointer-events-auto cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-[#7B1123]/20 flex items-center justify-center bg-white/40 backdrop-blur-md group-hover:border-[#7B1123] transition-all duration-700">
                    <div className="w-6 h-6 border-2 border-[#7B1123] rounded-full flex items-center justify-center animate-[spin_5s_linear_infinite]">
                        <div className="w-1.5 h-1.5 bg-[#7B1123] rounded-full" />
                    </div>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-xl font-serif text-[#2A2A2A] italic tracking-tighter group-hover:text-[#7B1123] transition-all">AV X GROQ</span>
                    <span className="text-[0.6rem] font-bold text-[#7B1123]/40 tracking-[0.5em] uppercase">COHORT 2026</span>
                </div>
            </div>

            {/* Luxury Link System */}
            <div className="hidden md:flex items-center gap-12 pointer-events-auto border border-[#7B1123]/5 bg-white/20 backdrop-blur-xl px-12 py-4 rounded-full">
                {links.map((l) => (
                    <a
                        key={l.name}
                        href={l.href}
                        className="text-[0.6rem] font-bold text-[#2A2A2A]/40 hover:text-[#7B1123] tracking-[0.4em] uppercase transition-all duration-700"
                    >
                        {l.name}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <div className="pointer-events-auto">
                <a href="#apply" className="px-10 py-4 bg-[#7B1123] text-[#F8F6F4] text-[0.65rem] font-bold uppercase tracking-[0.4em] hover:bg-black transition-all duration-700 shadow-xl shadow-[#7B1123]/10">
                    Register
                </a>
            </div>
        </nav>
    );
}
