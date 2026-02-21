// Sticky bottom countdown banner — matches reference's sticky bottom CTA strip
import { useState, useEffect } from "react";

export default function StickyBanner({ deadline }) {
    const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const target = new Date(deadline || "2026-03-15");
        const tick = () => {
            const diff = target - new Date();
            if (diff <= 0) { setHidden(true); return; }
            setTime({
                d: Math.floor(diff / 86400000),
                h: Math.floor(diff / 3600000) % 24,
                m: Math.floor(diff / 60000) % 60,
                s: Math.floor(diff / 1000) % 60,
            });
        };
        tick(); const iv = setInterval(tick, 1000);
        return () => clearInterval(iv);
    }, [deadline]);

    if (hidden) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50"
            style={{ background: "linear-gradient(90deg,#DC2626,#991B1B)", boxShadow: "0 -4px 30px rgba(220,38,38,0.4)" }}>
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-white">⏰ Registration closes in:</span>
                    <div className="flex items-center gap-2">
                        {[{ v: time.d, l: "days" }, { v: time.h, l: "hrs" }, { v: time.m, l: "min" }, { v: time.s, l: "sec" }].map(t => (
                            <div key={t.l} className="text-center">
                                <div className="bg-black/30 rounded-lg px-2.5 py-1 min-w-[40px] text-center">
                                    <div className="font-black text-lg text-white leading-none">{String(t.v).padStart(2, "0")}</div>
                                    <div className="text-[8px] text-white/60 font-mono tracking-wider uppercase">{t.l}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-white/80 text-sm hidden sm:block">Don't miss your chance to compete!</span>
                    <a href="#challenges"
                        className="bg-white text-red-600 font-black text-xs px-5 py-2 rounded-full hover:bg-red-50 transition-all duration-200 whitespace-nowrap">
                        REGISTER NOW →
                    </a>
                </div>
            </div>
        </div>
    );
}
