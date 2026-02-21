import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="about" className="relative pt-24 pb-10 px-6 overflow-hidden">
            {/* Top aurora border */}
            <div className="absolute top-0 inset-x-0 h-[1.5px]"
                style={{ background: "linear-gradient(90deg,transparent,var(--mint),var(--cobalt),var(--gold),transparent)" }} />
            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{ width: 600, height: 250, background: "radial-gradient(ellipse,rgba(0,229,204,.04),rgba(79,70,229,.03),transparent 70%)" }} />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 rounded-xl aurora-bg opacity-80" />
                                <div className="absolute inset-[2px] rounded-[10px] flex items-center justify-center" style={{ background: "var(--ink)" }}>
                                    <span className="font-display text-xs font-black g-mint">DH</span>
                                </div>
                            </div>
                            <div>
                                <div className="font-display text-xl font-black text-white">DATA<span className="g-mint">HACK</span></div>
                                <div className="font-mono text-[8px] tracking-widest" style={{ color: "rgba(168,178,216,.35)" }}>by Analytics Vidhya</div>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: "rgba(168,178,216,.45)" }}>
                            The world's most advanced AI hackathon platform — where elite data scientists compete, collaborate, and create the future of intelligence.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Twitter/X", "Discord", "GitHub", "LinkedIn"].map(s => (
                                <button key={s} className="glass font-mono text-[9px] tracking-widest px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105"
                                    style={{ color: "rgba(168,178,216,.4)" }}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: "Platform", links: ["Hackathons", "Leaderboard", "Teams", "Mentors"] },
                        { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
                    ].map(col => (
                        <div key={col.title}>
                            <h4 className="font-display text-xs font-black tracking-widest mb-5 uppercase g-mint">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map(l => (
                                    <li key={l}><button className="font-mono text-xs transition-all duration-200"
                                        style={{ color: "rgba(168,178,216,.4)" }}
                                        onMouseEnter={e => e.target.style.color = "#F0F4FF"}
                                        onMouseLeave={e => e.target.style.color = "rgba(168,178,216,.4)"}>{l}</button></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="divider-aurora mb-6 opacity-20" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-[9px] tracking-widest" style={{ color: "rgba(168,178,216,.25)" }}>
                        © 2026 DataHack · Powered by Analytics Vidhya
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse-mint" style={{ background: "var(--mint)" }} />
                        <span className="font-mono text-[9px] tracking-widest" style={{ color: "rgba(168,178,216,.25)" }}>ALL SYSTEMS ONLINE</span>
                    </div>
                    <p className="font-mono text-[9px]" style={{ color: "rgba(168,178,216,.18)" }}>v2.0.0 · 2026</p>
                </div>
            </div>
        </footer>
    );
}
