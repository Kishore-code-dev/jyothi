import { useState, useRef } from "react";
import { motion } from "framer-motion";

const ACCENTS = ["var(--mint)", "var(--cobalt)", "var(--gold)", "var(--coral)", "var(--mint)", "var(--cobalt)"];
const DIFF_STYLE = {
    "Intermediate": { bg: "rgba(0,229,204,.12)", border: "rgba(0,229,204,.3)", text: "var(--mint)" },
    "Advanced": { bg: "rgba(79,70,229,.12)", border: "rgba(79,70,229,.3)", text: "#818CF8" },
    "Expert": { bg: "rgba(245,166,35,.12)", border: "rgba(245,166,35,.3)", text: "var(--gold)" },
    "God-Tier": { bg: "rgba(255,78,140,.12)", border: "rgba(255,78,140,.3)", text: "var(--coral)" },
};

export default function HackathonCard({ hack, index }) {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [hov, setHov] = useState(false);
    const accent = ACCENTS[index % ACCENTS.length];
    const diff = DIFF_STYLE[hack.difficulty] || DIFF_STYLE["Intermediate"];
    const days = Math.max(0, Math.ceil((new Date(hack.deadline) - new Date()) / 86400000));

    const onMove = e => {
        const r = ref.current.getBoundingClientRect();
        setTilt({ x: ((e.clientX - r.left) / r.width - .5) * 14, y: ((e.clientY - r.top) / r.height - .5) * -14 });
    };

    // Parse accent colour for rgba usage
    const accentRgb = accent === "var(--mint)" ? "0,229,204" : accent === "var(--gold)" ? "245,166,35" : accent === "var(--coral)" ? "255,78,140" : "79,70,229";

    return (
        <motion.article ref={ref}
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, delay: index * .1, ease: [.22, 1, .36, 1] }} viewport={{ once: true, margin: "-60px" }}
            onMouseMove={onMove} onMouseEnter={() => setHov(true)}
            onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }) }}
            style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(${hov ? 10 : 0}px)`, transition: hov ? "transform .08s" : "transform .55s ease" }}
            className="card cursor-none">

            {/* Accent left border */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[20px]"
                style={{ background: `linear-gradient(180deg,${accent},transparent)` }} />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-[20px]"
                style={{ background: `linear-gradient(90deg,${accent},rgba(${accentRgb},.3),transparent)` }} />

            {/* Hover glow */}
            {hov && <div className="absolute inset-0 pointer-events-none rounded-[20px]"
                style={{ background: `radial-gradient(circle at 50% -10%,rgba(${accentRgb},.07),transparent 60%)` }} />}

            <div className="p-6 pl-8">

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                    <div className="flex flex-wrap gap-2">
                        <span className="font-mono text-[8px] tracking-widest px-2.5 py-1 rounded-md"
                            style={{
                                background: hack.status === "live" ? "rgba(0,229,204,.12)" : "rgba(168,178,216,.08)",
                                color: hack.status === "live" ? "var(--mint)" : "rgba(168,178,216,.6)",
                                border: `1px solid ${hack.status === "live" ? "rgba(0,229,204,.25)" : "rgba(168,178,216,.12)"}`
                            }}>
                            {hack.status === "live" ? "● LIVE" : "○ UPCOMING"}
                        </span>
                        <span className="font-mono text-[8px] tracking-widest px-2.5 py-1 rounded-md"
                            style={{ background: diff.bg, color: diff.text, border: `1px solid ${diff.border}` }}>
                            {hack.difficulty}
                        </span>
                    </div>
                    {days > 0 && <span className="font-mono text-[9px]" style={{ color: "rgba(168,178,216,.35)" }}>{days}d left</span>}
                </div>

                {/* Title + subtitle */}
                <h3 className="font-display text-lg font-black leading-tight mb-1 transition-colors duration-300"
                    style={{ color: hov ? accent : "rgba(240,244,255,.95)" }}>
                    {hack.title}
                </h3>
                <p className="font-mono text-[9px] tracking-widest mb-3" style={{ color: "rgba(168,178,216,.5)" }}>
                    {hack.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "rgba(168,178,216,.55)" }}>
                    {hack.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {hack.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Metrics row */}
                <div className="divider-aurora mb-4" />
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <div className="font-display text-xl font-black" style={{ color: accent }}>{hack.prize}</div>
                        <div className="font-mono text-[8px] tracking-widest" style={{ color: "rgba(168,178,216,.3)" }}>PRIZE</div>
                    </div>
                    <div className="text-right">
                        <div className="font-display text-xl font-black" style={{ color: "rgba(240,244,255,.7)" }}>{(hack.participants / 1000).toFixed(1)}K</div>
                        <div className="font-mono text-[8px] tracking-widest" style={{ color: "rgba(168,178,216,.3)" }}>TEAMS</div>
                    </div>
                    <div className="text-right">
                        <div className="font-mono text-xs font-bold" style={{ color: "rgba(240,244,255,.6)" }}>{hack.category.split(" ")[0]}</div>
                        <div className="font-mono text-[8px] tracking-widest" style={{ color: "rgba(168,178,216,.3)" }}>DOMAIN</div>
                    </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 rounded-xl font-mono text-xs font-bold tracking-widest transition-all duration-300"
                    style={{
                        background: hov ? `linear-gradient(135deg,rgba(${accentRgb},.9),rgba(${accentRgb},.6))` : "rgba(240,244,255,.05)",
                        color: hov ? "var(--ink)" : "rgba(168,178,216,.5)",
                        border: hov ? "none" : `1px solid rgba(240,244,255,.07)`
                    }}>
                    REGISTER NOW →
                </button>
            </div>
        </motion.article>
    );
}
