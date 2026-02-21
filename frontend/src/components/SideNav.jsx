// Right-side dot navigation — EXACTLY like the reference
import { useEffect, useState } from "react";

const SECTIONS = ["hero", "about", "challenges", "tracks", "timeline", "stats", "footer"];
const LABELS = ["Home", "About", "Challenges", "Tracks", "Timeline", "Stats", "Contact"];

export default function SideNav() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
            { threshold: 0.4 }
        );
        SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
        return () => obs.disconnect();
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div className="flex flex-col space-y-4 items-end">
                {SECTIONS.map((id, i) => (
                    <a key={id} href={`#${id}`} title={LABELS[i]}>
                        <div className="flex items-center space-x-3 group">
                            <span className="text-[11px] text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap font-mono tracking-wider">
                                {LABELS[i]}
                            </span>
                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:bg-red-600 ${active === id ? "bg-red-600 shadow-[0_0_10px_#DC2626]" : "bg-gray-600"}`} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
