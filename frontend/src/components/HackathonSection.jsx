import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HackathonCard from "./HackathonCard";

const SF = ["All", "live", "upcoming"];
const DF = ["All", "Intermediate", "Advanced", "Expert", "God-Tier"];

export default function HackathonSection({ hackathons }) {
    const [sf, setSf] = useState("All"), [df, setDf] = useState("All"), [q, setQ] = useState("");
    const list = hackathons.filter(h => (sf === "All" || h.status === sf) && (df === "All" || h.difficulty === df) && (!q || (h.title + h.category + h.tags.join()).toLowerCase().includes(q.toLowerCase())));

    return (
        <section id="hackathons" className="relative py-28 px-6">
            <div className="max-w-7xl mx-auto">

                {/* ── Section header ── */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[2px]" style={{ background: "var(--mint)" }} />
                            <span className="font-mono text-[9px] tracking-[.3em]" style={{ color: "var(--mint)" }}>ACTIVE CHALLENGES</span>
                        </div>
                        <h2 className="font-display font-black leading-none">
                            <span className="block text-[clamp(2.5rem,6vw,5rem)] text-white">ELITE</span>
                            <span className="block text-[clamp(2.5rem,6vw,5rem)] g-aurora">HACKATHONS</span>
                        </h2>
                    </div>
                    {/* Search */}
                    <div className="relative flex-shrink-0">
                        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search..."
                            className="font-mono text-xs tracking-wide px-4 py-3 rounded-xl w-56 outline-none"
                            style={{ background: "rgba(240,244,255,.04)", border: "1px solid rgba(240,244,255,.07)", color: "rgba(168,178,216,.8)" }} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs" style={{ color: "rgba(0,229,204,.5)" }}>→</span>
                    </div>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {SF.map(f => (
                        <button key={f} onClick={() => setSf(f)} className="font-mono text-[10px] tracking-widest px-4 py-2 rounded-xl transition-all duration-200"
                            style={{
                                background: sf === f ? "linear-gradient(135deg,var(--mint),var(--cobalt))" : "rgba(240,244,255,.04)",
                                color: sf === f ? "var(--ink)" : "rgba(168,178,216,.5)", border: sf === f ? "none" : "1px solid rgba(240,244,255,.07)"
                            }}>
                            {f.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-12">
                    {DF.map(d => (
                        <button key={d} onClick={() => setDf(d)} className="font-mono text-[9px] tracking-widest px-3 py-1.5 rounded-lg transition-all duration-200"
                            style={{
                                background: df === d ? "rgba(0,229,204,.12)" : "rgba(240,244,255,.03)",
                                color: df === d ? "var(--mint)" : "rgba(168,178,216,.4)", border: df === d ? "1px solid rgba(0,229,204,.3)" : "1px solid rgba(240,244,255,.06)"
                            }}>
                            {d}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {list.length === 0
                            ? <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-3 text-center py-24 font-mono text-sm tracking-widest" style={{ color: "rgba(168,178,216,.25)" }}>
                                NO MATCHES — TRY DIFFERENT FILTERS
                            </motion.p>
                            : list.map((h, i) => (
                                <motion.div key={h.id} layout initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .35 }}>
                                    <HackathonCard hack={h} index={i} />
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
