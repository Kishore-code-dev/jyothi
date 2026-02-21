import { useEffect, useRef } from "react";

export default function Loader({ onDone }) {
    const bar = useRef(null), pct = useRef(null), msg = useRef(null);
    const MSGS = ["INITIALISING DATAHACK", "LOADING CHALLENGES", "SYNCING LEADERBOARDS", "CALIBRATING AI", "LAUNCHING"];

    useEffect(() => {
        let p = 0;
        const iv = setInterval(() => {
            p += Math.random() * 15 + 4;
            if (p >= 100) { p = 100; clearInterval(iv); setTimeout(onDone, 500); }
            if (bar.current) bar.current.style.width = p + "%";
            if (pct.current) pct.current.textContent = ~~p + "%";
            if (msg.current) msg.current.textContent = MSGS[Math.min(~~(p / 100 * MSGS.length), MSGS.length - 1)];
        }, 120);
        return () => clearInterval(iv);
    }, [onDone]);

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ background: "#0F0F0F" }}>

            {/* Hero gradient */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%,rgba(220,38,38,0.12) 0%,#0F0F0F 100%)" }} />

            {/* Logo + spinner */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-red-600 flex items-center justify-center font-black text-4xl italic shadow-[0_0_60px_rgba(220,38,38,0.4)]">D</div>
                    <div className="absolute inset-[-8px] rounded-3xl border border-red-600/20 animate-[spin_3s_linear_infinite]" />
                </div>
                <div className="font-black text-2xl tracking-[.3em] text-white mb-1">DATAHACK</div>
                <div className="font-mono text-[10px] tracking-[.3em] text-gray-500 mb-10">by Analytics Vidhya</div>

                {/* Message */}
                <div ref={msg} className="font-mono text-xs tracking-widest text-red-500 mb-6">INITIALISING DATAHACK</div>

                {/* Progress bar */}
                <div className="w-64">
                    <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                        <div ref={bar} className="h-full bg-red-600 rounded-full transition-all duration-150"
                            style={{ width: "0%", boxShadow: "0 0 10px #DC2626" }} />
                    </div>
                    <div className="flex justify-end mt-2">
                        <span ref={pct} className="font-mono text-[10px] text-gray-600">0%</span>
                    </div>
                </div>
            </div>

            {/* Scan line */}
            <div className="fixed inset-x-0 overflow-hidden pointer-events-none opacity-8"
                style={{ top: 0, height: "100vh" }}>
                <div style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(220,38,38,.5),transparent)", animation: "scan 3s linear infinite" }} />
            </div>
        </div>
    );
}
