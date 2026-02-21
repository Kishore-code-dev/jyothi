import { motion } from "framer-motion";

// Hero — center-aligned, huge bold headline, 4-stat row, two CTAs — matches reference pattern
export default function HeroSection({ stats }) {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden hero-gradient">

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

            <div className="container mx-auto px-4 relative z-10 text-center py-20">

                {/* Live badge — exactly like reference */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold mb-8 animate-pulse-slow"
                    style={{ background: "rgba(220,38,38,0.1)", borderColor: "rgba(220,38,38,0.3)", color: "#DC2626" }}>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Registration Live · Limited Slots Available
                </motion.div>

                {/* Giant headline */}
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3, ease: [.22, 1, .36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
                    The Future of
                    <br />
                    <span className="text-red-600">AI Hackathons</span>
                    <br />
                    Starts Here.
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .5 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join the world's most elite data science competition. Six world-class challenges, one global arena — powered by Analytics Vidhya.
                </motion.p>

                {/* CTA buttons */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .7 }}
                    className="flex flex-wrap gap-4 justify-center mb-16">
                    <a href="#challenges"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)]">
                        Start Building Now →
                    </a>
                    <a href="#tracks"
                        className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-red-600/50 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-white/5">
                        View Challenge Tracks
                    </a>
                </motion.div>

                {/* 4-stat strip — exactly like reference */}
                {stats && (
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .9 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        {[
                            { val: stats.totalPrize, label: "In Prizes", icon: "🏆" },
                            { val: `${(stats.totalParticipants / 1000).toFixed(0)}K+`, label: "Participants", icon: "👥" },
                            { val: `${stats.totalHackathons}`, label: "Challenge Tracks", icon: "⚡" },
                            { val: `${stats.countries}+`, label: "Countries", icon: "🌍" },
                        ].map(s => (
                            <div key={s.label} className="glass-card py-5 px-4 text-center card-hover">
                                <div className="text-2xl mb-1">{s.icon}</div>
                                <div className="text-2xl font-black text-red-500 mb-1">{s.val}</div>
                                <div className="text-xs text-gray-500 font-mono tracking-wider uppercase">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
