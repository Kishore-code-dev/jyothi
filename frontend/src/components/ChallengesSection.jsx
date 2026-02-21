import { useState } from "react";
import { motion } from "framer-motion";

const DIFF_COLOR = {
    "Intermediate": "text-blue-400 border-blue-400/30 bg-blue-400/10",
    "Advanced": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    "Expert": "text-orange-400 border-orange-400/30 bg-orange-400/10",
    "God-Tier": "text-red-400 border-red-400/30 bg-red-400/10",
};

export default function ChallengesSection({ hackathons }) {
    const [filter, setFilter] = useState("All");
    const filtered = filter === "All" ? hackathons : hackathons.filter(h => h.status === filter);

    return (
        <section id="challenges" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Section header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        The <span className="text-red-600">Challenge</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Six elite AI hackathons. Compete, collaborate, and win — against the world's best.
                    </p>
                </motion.div>

                {/* Filter pills */}
                <div className="flex gap-2 justify-center mb-10">
                    {["All", "live", "upcoming"].map(f => (
                        <button key={f} onClick={() => setFilter(f)}
                            className={`font-mono text-xs tracking-widest px-5 py-2 rounded-full border transition-all duration-200 uppercase ${filter === f ? "bg-red-600 border-red-600 text-white" : "border-white/10 text-gray-400 hover:border-red-600/40 hover:text-white bg-transparent"}`}>
                            {f === "live" ? "● LIVE" : f === "upcoming" ? "○ UPCOMING" : "ALL"}
                        </button>
                    ))}
                </div>

                {/* Challenge cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((h, i) => (
                        <motion.div key={h.id}
                            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6, delay: i * .08, ease: [.22, 1, .36, 1] }} viewport={{ once: true }}
                            className="glass-card card-hover overflow-hidden">

                            {/* Top red accent line */}
                            <div className="h-[2px] w-full bg-red-600" />

                            <div className="p-6">
                                {/* Status + difficulty */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border ${h.status === "live" ? "text-red-400 bg-red-400/10 border-red-400/30" : "text-gray-500 bg-white/5 border-white/10"}`}>
                                        {h.status === "live" ? "● LIVE" : "○ UPCOMING"}
                                    </span>
                                    <span className={`text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border ${DIFF_COLOR[h.difficulty] || "text-gray-400 border-white/10 bg-white/5"}`}>
                                        {h.difficulty}
                                    </span>
                                </div>

                                <h3 className="font-black text-lg text-white mb-1 leading-tight">{h.title}</h3>
                                <p className="text-red-500 font-mono text-[10px] tracking-widest mb-3">{h.subtitle}</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{h.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {h.tags.map(t => (
                                        <span key={t} className="text-[10px] font-mono text-gray-600 border border-white/8 bg-white/3 px-2 py-0.5 rounded-full tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Prize + participants */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/7">
                                    <div>
                                        <div className="text-xl font-black text-red-500">{h.prize}</div>
                                        <div className="text-[9px] text-gray-600 font-mono tracking-wider uppercase">Prize Pool</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-gray-300">{(h.participants / 1000).toFixed(1)}K</div>
                                        <div className="text-[9px] text-gray-600 font-mono tracking-wider uppercase">Teams</div>
                                    </div>
                                </div>

                                <button className="w-full mt-5 py-2.5 rounded-lg text-xs font-bold font-mono tracking-widest transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(220,38,38,0.3)] bg-red-600 text-white hover:bg-red-700">
                                    REGISTER NOW →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
