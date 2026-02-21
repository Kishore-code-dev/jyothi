import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = ["Hackathons", "Timeline", "Stats", "About"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(scrollY > 50);
        addEventListener("scroll", fn);
        return () => removeEventListener("scroll", fn);
    }, []);

    const go = id => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false) };

    return (
        <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .9, ease: [.22, 1, .36, 1] }}
            className="fixed top-0 inset-x-0 z-50 px-6 py-4">

            <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3.5 transition-all duration-500 ${scrolled ? "glass-hard" : ""}`}>

                {/* Logo */}
                <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
                    {/* Aurora square logo */}
                    <div className="relative w-9 h-9">
                        <div className="absolute inset-0 rounded-xl aurora-bg opacity-80" />
                        <div className="absolute inset-[2px] rounded-[10px] flex items-center justify-center" style={{ background: "var(--ink)" }}>
                            <span className="font-display text-[10px] font-black g-mint">DH</span>
                        </div>
                    </div>
                    <div>
                        <div className="font-display text-sm font-black tracking-wider text-white">DATA<span className="g-mint">HACK</span></div>
                        <div className="font-mono text-[7px] tracking-[.2em]" style={{ color: "rgba(168,178,216,.4)" }}>by Analytics Vidhya</div>
                    </div>
                </button>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {LINKS.map(l => (
                        <button key={l} onClick={() => go(l)}
                            className="font-mono text-[10px] tracking-widest uppercase relative group"
                            style={{ color: "rgba(168,178,216,.6)" }}
                            onMouseEnter={e => e.currentTarget.style.color = "#F0F4FF"}
                            onMouseLeave={e => e.currentTarget.style.color = "rgba(168,178,216,.6)"}>
                            {l}
                            <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px transition-all duration-300"
                                style={{ background: "linear-gradient(90deg,var(--mint),var(--cobalt))" }} />
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <button onClick={() => go("Hackathons")}
                    className="hidden md:flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg,var(--mint),var(--cobalt))", color: "var(--ink)", boxShadow: "0 4px 20px rgba(0,229,204,.25)" }}>
                    GET STARTED →
                </button>

                {/* Mobile */}
                <button className="md:hidden flex flex-col gap-1.5 w-7 justify-center" onClick={() => setOpen(!open)}>
                    {[0, 1, 2].map(i => (
                        <span key={i} className="block h-px rounded-full transition-all duration-300"
                            style={{ background: "var(--mint)", transform: open ? (i === 0 ? "rotate(45deg) translate(3px,3px)" : i === 2 ? "rotate(-45deg) translate(3px,-3px)" : "scaleX(0)") : "none" }} />
                    ))}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                        className="mt-2 mx-auto max-w-7xl glass-hard rounded-2xl p-5">
                        {LINKS.map(l => (
                            <button key={l} onClick={() => go(l)}
                                className="block w-full text-left py-3 font-mono text-sm tracking-widest uppercase border-b last:border-0"
                                style={{ color: "rgba(168,178,216,.6)", borderColor: "rgba(240,244,255,.05)" }}>
                                {l}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
