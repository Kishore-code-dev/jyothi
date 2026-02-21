import { useEffect, useRef } from "react";

// Exact match to reference: mint cursor replaced with red glow
export default function CosmicCursor() {
    const ring = useRef(null), dot = useRef(null);
    const pos = useRef({ x: 0, y: 0 }), cur = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const mv = e => { pos.current = { x: e.clientX, y: e.clientY }; if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px" } };
        addEventListener("mousemove", mv);
        const lerp = (a, b, t) => a + (b - a) * t;
        let raf; const tick = () => { cur.current.x = lerp(cur.current.x, pos.current.x, .12); cur.current.y = lerp(cur.current.y, pos.current.y, .12); if (ring.current) { ring.current.style.left = cur.current.x + "px"; ring.current.style.top = cur.current.y + "px" } raf = requestAnimationFrame(tick); }; tick();
        return () => { removeEventListener("mousemove", mv); cancelAnimationFrame(raf) };
    }, []);
    return (<>
        <div ref={ring} className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2" style={{ width: 28, height: 28, borderRadius: "50%", border: "1.5px solid rgba(220,38,38,0.7)", boxShadow: "0 0 12px rgba(220,38,38,0.35)" }} />
        <div ref={dot} className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" style={{ width: 5, height: 5, borderRadius: "50%", background: "#DC2626", boxShadow: "0 0 6px #DC2626" }} />
    </>);
}
