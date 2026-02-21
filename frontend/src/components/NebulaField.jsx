import { useEffect, useRef } from "react";

export default function AuroraCanvas() {
    const ref = useRef(null);
    useEffect(() => {
        const c = ref.current, ctx = c.getContext("2d");
        let W = c.width = innerWidth, H = c.height = innerHeight, id;
        const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
        addEventListener("resize", resize);

        // Grid dots
        const COLS = ["rgba(0,229,204,", "rgba(79,70,229,", "rgba(245,166,35,", "rgba(255,78,140,"];
        const dots = [];
        for (let i = 0; i < 60; i++) dots.push({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
            r: Math.random() * 1.8 + .4, phase: Math.random() * Math.PI * 2,
            col: COLS[Math.floor(Math.random() * 4)],
        });

        // Aurora blobs
        const blobs = [
            { x: .15, y: .35, r: 350, col: "rgba(0,229,204,0.045)" },
            { x: .85, y: .65, r: 300, col: "rgba(79,70,229,0.05)" },
            { x: .5, y: .1, r: 250, col: "rgba(245,166,35,0.03)" },
            { x: .3, y: .85, r: 280, col: "rgba(255,78,140,0.035)" },
            { x: .75, y: .2, r: 260, col: "rgba(0,229,204,0.04)" },
        ];

        let t = 0;
        const draw = () => {
            ctx.clearRect(0, 0, W, H); t += .004;

            // Blobs
            blobs.forEach(b => {
                const x = b.x * W + Math.sin(t + b.r) * .04 * W;
                const y = b.y * H + Math.cos(t + b.r) * .04 * H;
                const g = ctx.createRadialGradient(x, y, 0, x, y, b.r);
                g.addColorStop(0, b.col); g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, b.r, 0, Math.PI * 2); ctx.fill();
            });

            // Connections + dots
            dots.forEach(d => {
                d.x += d.vx; d.y += d.vy; d.phase += .03;
                if (d.x < 0 || d.x > W) d.vx *= -1; if (d.y < 0 || d.y > H) d.vy *= -1;
                dots.forEach(m => {
                    const dx = d.x - m.x, dy = d.y - m.y, dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const a = (1 - dist / 150) * .12;
                        ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(m.x, m.y);
                        ctx.strokeStyle = `rgba(0,229,204,${a})`; ctx.lineWidth = .5; ctx.stroke();
                    }
                });
                const glow = (Math.sin(d.phase) + 1) / 2 * .8 + .2;
                ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = `${d.col}${glow})`; ctx.fill();
            });

            id = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(id); removeEventListener("resize", resize); };
    }, []);
    return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none opacity-50" />;
}
