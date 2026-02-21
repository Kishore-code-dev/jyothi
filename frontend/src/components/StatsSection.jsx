import { motion } from "framer-motion";

// Judging criteria section — matches reference's "Judging Criteria" section
export default function StatsSection({ stats }) {
    if (!stats) return null;
    const CRITERIA = [
        { icon: "⚙️", title: "Technical Excellence", pct: 40, desc: "Code quality, architecture decisions, scalability, and use of best practices." },
        { icon: "🌍", title: "Real-World Impact", pct: 30, desc: "Does it solve a genuine problem? Would people actually use this?" },
        { icon: "💡", title: "Innovation", pct: 20, desc: "Creative use of data, novel model architectures, or unique problem framing." },
        { icon: "🎤", title: "Presentation Quality", pct: 10, desc: "Clarity of communication, demo quality, and storytelling ability." },
    ];

    return (
        <section id="stats" className="py-24 px-4" style={{ background: "rgba(26,26,26,0.3)" }}>
            <div className="container mx-auto max-w-4xl">

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Judging <span className="text-red-600">Criteria</span></h2>
                    <p className="text-gray-400 text-lg">How we pick the winners.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                    {CRITERIA.map((c, i) => (
                        <motion.div key={c.title}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6, delay: i * .1 }} viewport={{ once: true }}
                            className="glass-card p-6 card-hover">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{c.icon}</span>
                                    <span className="font-bold text-sm text-white">{c.title}</span>
                                </div>
                                <span className="font-black text-red-500 text-lg">{c.pct}%</span>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full h-1 bg-white/5 rounded-full mb-3 overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${c.pct}%` }} transition={{ duration: .8, delay: i * .1 + .3, ease: [.22, 1, .36, 1] }} viewport={{ once: true }}
                                    className="h-full bg-red-600 rounded-full" />
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Platform stats strip */}
                <div className="glass-card p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { v: `${(stats.totalParticipants / 1000).toFixed(0)}K+`, l: "Scientists" },
                            { v: stats.totalPrize, l: "Prize Pool" },
                            { v: `${stats.countries}+`, l: "Countries" },
                            { v: `${stats.liveCount || 2}`, l: "Live Now" },
                        ].map(s => (
                            <div key={s.l}>
                                <div className="text-2xl font-black text-red-500 mb-1">{s.v}</div>
                                <div className="text-xs text-gray-600 font-mono tracking-widest uppercase">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
