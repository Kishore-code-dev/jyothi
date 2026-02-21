import { motion } from "framer-motion";

const FEATS = [
    { icon: "⚡", title: "Real-Time Leaderboard", desc: "Live updates as teams submit — watch your rank change instantly", col: "var(--mint)" },
    { icon: "🧠", title: "AI-Powered Mentors", desc: "GPT-4o contextual hints and expert office hours during the event", col: "var(--cobalt)" },
    { icon: "🌍", title: "Global Arena", desc: "Compete alongside 68K+ scientists across 87 nations", col: "var(--gold)" },
    { icon: "🔬", title: "Research Grade", desc: "Access to real datasets from Google DeepMind & NASA", col: "var(--coral)" },
    { icon: "🏆", title: "$500K+ Prizes", desc: "The largest prize pool in hackathon history — yours to claim", col: "var(--mint)" },
    { icon: "🤝", title: "Team Matching", desc: "AI-matched teams based on skills, timezone, and goals", col: "var(--cobalt)" },
];

export default function HorizontalScroll() {
    return (
        <section className="py-20 overflow-hidden">
            {/* Section label */}
            <div className="px-6 mb-10 max-w-7xl mx-auto flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-[2px]" style={{ background: "var(--cobalt)" }} />
                        <span className="font-mono text-[9px] tracking-[.3em]" style={{ color: "var(--cobalt)" }}>WHY CHOOSE US</span>
                    </div>
                    <h2 className="font-display font-black text-[clamp(1.8rem,4vw,3rem)]">
                        <span className="text-white">THE PLATFORM </span>
                        <span className="g-cobalt">ADVANTAGE</span>
                    </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 font-mono text-xs" style={{ color: "rgba(168,178,216,.4)" }}>
                    DRAG TO EXPLORE →
                </div>
            </div>

            {/* Horizontal strip */}
            <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 pb-4">
                {FEATS.map((f, i) => {
                    const rgb = f.col === "var(--mint)" ? "0,229,204" : f.col === "var(--gold)" ? "245,166,35" : f.col === "var(--coral)" ? "255,78,140" : "79,70,229";
                    return (
                        <motion.div key={f.title}
                            initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6, delay: i * .07 }} viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="card flex-shrink-0 p-6 relative" style={{ width: 260 }}>
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
                                style={{ background: `linear-gradient(90deg,${f.col},transparent)` }} />
                            <div className="text-2xl mb-4"
                                style={{ filter: `drop-shadow(0 0 8px rgba(${rgb},.6))` }}>{f.icon}</div>
                            <h3 className="font-display text-sm font-black mb-2" style={{ color: f.col }}>{f.title}</h3>
                            <p className="text-xs leading-relaxed" style={{ color: "rgba(168,178,216,.55)" }}>{f.desc}</p>
                            {/* Bottom stat line */}
                            <div className="absolute bottom-0 left-6 right-6 h-px mb-5"
                                style={{ background: `linear-gradient(90deg,rgba(${rgb},.4),transparent)` }} />
                        </motion.div>
                    );
                })}
                <div className="flex-shrink-0 w-6" />
            </div>
        </section>
    );
}
