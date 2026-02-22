"use client";
import { motion } from "framer-motion";

const partners = [
    "Astana IT University", "ITMO", "KPMG", "ABMCO", "Nazarbayev University", "Argin Limited"
];

export default function SponsorPrestige() {
    return (
        <section className="py-40 bg-[#F8F6F4] border-y border-[#7B1123]/5">
            <div className="container mx-auto px-6 text-center">

                <header className="mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[0.6rem] uppercase tracking-[1em] text-[#7B1123] mb-6 block font-bold"
                    >
                        Sponsor Prestige™
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif italic text-[#2A2A2A] tracking-tighter"
                    >
                        The Patrons of Excellence
                    </motion.h2>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 1.5, ease: [0.2, 0, 0, 1] }}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            className="text-center group cursor-pointer"
                        >
                            <div className="h-[1px] w-0 bg-[#7B1123] mb-8 mx-auto group-hover:w-full transition-all duration-1000" />
                            <span className="text-[0.65rem] font-bold text-[#2A2A2A] uppercase tracking-[0.4em] mb-2 block">{partner}</span>
                            <span className="text-[0.5rem] font-bold text-[#7B1123] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-700">PRESTIGE PARTNER</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
