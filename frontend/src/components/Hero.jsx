import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const COUNTER_WORDS = ["Intelligence.", "Precision.", "Innovation.", "Excellence."];

export default function Hero({ stats }) {
    const [idx, setIdx] = useState(0);
    const [vis, setVis] = useState(true);

    useEffect(() => {
        const t = setInterval(() => {
            setVis(false);
            setTimeout(() => { setIdx(i => (i + 1) % COUNTER_WORDS.length); setVis(true); }, 400);
        }, 3000);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

            {/* Giant faded BG number */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "min(40vw,480px)", lineHeight: 1, color: "rgba(0,229,204,.03)", userSelect: "none", letterSpacing: "-.05em" }}>
                AI
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">

                {/* ── Two-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* LEFT — 7 cols */}
                    <div className="lg:col-span-7">

                        {/* Overline */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}
                            className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-[2px]" style={{ background: "var(--mint)" }} />
                            <span className="font-mono text-[10px] tracking-[.3em]" style={{ color: "var(--mint)" }}>ANALYTICS VIDHYA × DATAHACK 2026</span>
                        </motion.div>

                        {/* Giant headline — stacked */}
                        <div className="mb-8">
                            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .3, ease: [.22, 1, .36, 1] }}>
                                <h1 className="font-display font-black leading-[.92] tracking-tight">
                                    <span className="block text-[clamp(3.5rem,9vw,8rem)] text-white">WHERE</span>
                                    <span className="block text-[clamp(3.5rem,9vw,8rem)] text-white">DATA</span>
                                    <span className="block text-[clamp(3.5rem,9vw,8rem)] g-aurora">MEETS</span>
                                </h1>
                            </motion.div>

                            {/* Swapping word */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}
                                className="overflow-hidden" style={{ height: "clamp(3.5rem,9vw,8rem)" }}>
                                <motion.span
                                    key={idx}
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={vis ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
                                    transition={{ duration: .4, ease: [.22, 1, .36, 1] }}
                                    className="block font-display font-black leading-[.92] tracking-tight text-[clamp(3.5rem,9vw,8rem)] g-gold">
                                    {COUNTER_WORDS[idx]}
                                </motion.span>
                            </motion.div>
                        </div>

                        {/* Divider */}
                        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 1, transformOrigin: "left" }}
                            className="w-80 h-[1.5px] mb-8"
                            style={{ background: "linear-gradient(90deg,var(--mint),var(--cobalt),transparent)" }} />

                        {/* Description */}
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.1 }}
                            className="text-lg leading-relaxed max-w-lg mb-10" style={{ color: "rgba(168,178,216,.7)" }}>
                            The world's most advanced AI hackathon platform. Six elite challenges, one global arena. Build what matters. Win what others dream of.
                        </motion.p>

                        {/* CTA row */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.3 }}
                            className="flex flex-wrap gap-4 mb-14">
                            <button onClick={() => document.getElementById("hackathons")?.scrollIntoView({ behavior: "smooth" })}
                                className="group relative px-8 py-4 rounded-xl font-mono text-sm font-bold tracking-widest overflow-hidden"
                                style={{ background: "linear-gradient(135deg,var(--mint),var(--cobalt))", color: "var(--ink)", boxShadow: "0 8px 32px rgba(0,229,204,.3)" }}>
                                <span className="relative z-10">EXPLORE CHALLENGES →</span>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ background: "linear-gradient(135deg,var(--cobalt),var(--mint))" }} />
                            </button>
                            <button className="px-8 py-4 rounded-xl font-mono text-sm tracking-widest glass"
                                style={{ color: "rgba(168,178,216,.7)" }}>
                                WATCH DEMO
                            </button>
                        </motion.div>

                        {/* Stats inline */}
                        {stats && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                                className="grid grid-cols-3 gap-8 max-w-sm">
                                {[
                                    { v: `${(stats.totalParticipants / 1000).toFixed(0)}K+`, l: "Scientists" },
                                    { v: stats.totalPrize, l: "In Prizes" },
                                    { v: `${stats.countries}+`, l: "Nations" },
                                ].map(s => (
                                    <div key={s.l}>
                                        <div className="font-display text-2xl font-black g-mint mb-0.5">{s.v}</div>
                                        <div className="font-mono text-[9px] tracking-widest uppercase" style={{ color: "rgba(168,178,216,.35)" }}>{s.l}</div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* RIGHT — 5 cols: Rotating card stack */}
                    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .5, ease: [.22, 1, .36, 1] }}
                        className="lg:col-span-5 hidden lg:flex items-center justify-center">
                        <div className="relative w-80 h-80">

                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full animate-spin-cw"
                                style={{ border: "1px dashed rgba(0,229,204,.2)" }} />
                            <div className="absolute rounded-full animate-spin-ccw"
                                style={{ inset: 20, border: "1px dashed rgba(79,70,229,.2)" }} />

                            {/* Orbiting badges */}
                            {[
                                { label: "⚡ LIVE", angle: 0, col: "var(--mint)" },
                                { label: "🏆 $100K", angle: 72, col: "var(--gold)" },
                                { label: "🌍 87 Countries", angle: 144, col: "var(--cobalt)" },
                                { label: "🧠 AI Mentors", angle: 216, col: "var(--coral)" },
                                { label: "⚙️ 6 Challenges", angle: 288, col: "var(--mint)" },
                            ].map((b, i) => {
                                const rad = (b.angle - 90) * Math.PI / 180;
                                const r = 148, cx = r * Math.cos(rad) + 160, cy = r * Math.sin(rad) + 160;
                                return (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2 + i * .1, duration: .5, ease: [.22, 1, .36, 1] }}
                                        className="absolute glass-mint rounded-full px-3 py-1.5 -translate-x-1/2 -translate-y-1/2 animate-float"
                                        style={{ left: cx, top: cy, animationDelay: `${i * .8}s` }}>
                                        <span className="font-mono text-[9px] tracking-wide whitespace-nowrap" style={{ color: b.col }}>{b.label}</span>
                                    </motion.div>
                                );
                            })}

                            {/* Centre orb */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center"
                                style={{
                                    background: "radial-gradient(circle at 35% 30%,rgba(0,229,204,.2),rgba(79,70,229,.15),rgba(4,6,16,.9))",
                                    border: "1px solid rgba(0,229,204,.25)", boxShadow: "0 0 60px rgba(0,229,204,.15),inset 0 0 30px rgba(79,70,229,.1)"
                                }}>
                                <div className="text-center">
                                    <div className="font-display text-3xl font-black g-aurora">DH</div>
                                    <div className="font-mono text-[7px] tracking-widest mt-1" style={{ color: "rgba(168,178,216,.4)" }}>2026</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll caret */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
                <div className="w-px h-12 rounded-full" style={{ background: "linear-gradient(180deg,var(--mint),transparent)" }} />
                <span className="font-mono text-[8px] tracking-[.3em]" style={{ color: "rgba(0,229,204,.35)" }}>SCROLL</span>
            </motion.div>
        </section>
    );
}
