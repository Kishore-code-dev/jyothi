import { motion } from "framer-motion";

const COLS = ["var(--mint)", "var(--cobalt)", "var(--gold)", "var(--coral)"];

export default function Timeline({ events }) {
    return (
        <section id="timeline" className="relative py-28 px-6">
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%,rgba(79,70,229,.05),transparent)" }} />
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} viewport={{ once: true }}
                    className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[2px]" style={{ background: "var(--gold)" }} />
                            <span className="font-mono text-[9px] tracking-[.3em]" style={{ color: "var(--gold)" }}>OUR JOURNEY</span>
                        </div>
                        <h2 className="font-display font-black leading-none text-[clamp(2.5rem,6vw,5rem)]">
                            <span className="block text-white">FOUR</span>
                            <span className="block g-gold">YEARS OF</span>
                            <span className="block text-white">IMPACT</span>
                        </h2>
                    </div>
                    <p className="text-base leading-relaxed self-end" style={{ color: "rgba(168,178,216,.6)" }}>
                        From a small cohort of 5,000 to 100K+ elite data scientists across 87 countries — redefining what a hackathon can be.
                    </p>
                </motion.div>

                {/* Timeline rows — full-width horizontal bands */}
                <div className="space-y-4">
                    {events.map((ev, i) => {
                        const col = COLS[i % COLS.length];
                        const colRgb = col === "var(--mint)" ? "0,229,204" : col === "var(--gold)" ? "245,166,35" : col === "var(--coral)" ? "255,78,140" : "79,70,229";
                        return (
                            <motion.div key={ev.year}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: .8, delay: i * .12, ease: [.22, 1, .36, 1] }}
                                viewport={{ once: true, margin: "-60px" }}
                                className="card p-6 md:p-8 group hover:border-opacity-30 relative overflow-hidden"
                                style={{ cursor: "default" }}>

                                {/* Coloured left bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[20px]"
                                    style={{ background: `linear-gradient(180deg,${col},transparent)` }} />

                                {/* Number watermark */}
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none"
                                    style={{ fontSize: "5rem", lineHeight: 1, color: `rgba(${colRgb},.04)` }}>
                                    {ev.year}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-center">
                                    {/* Year */}
                                    <div className="font-display text-4xl font-black" style={{ color: col }}>{ev.year}</div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="font-display text-lg font-black text-white mb-2">{ev.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "rgba(168,178,216,.6)" }}>{ev.description}</p>
                                    </div>

                                    {/* Milestone badge */}
                                    <div className="text-center md:text-right flex-shrink-0">
                                        <span className="font-mono text-[9px] tracking-widest px-4 py-2 rounded-lg inline-block"
                                            style={{ background: `rgba(${colRgb},.1)`, color: col, border: `1px solid rgba(${colRgb},.25)` }}>
                                            {ev.icon} {ev.milestone}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
