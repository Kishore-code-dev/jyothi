/* ═══════════════════════════════════════════════
   DataHack — Premium Animation Engine
   Canvas · Cursor · Tilt · Shimmer · Reveal
   Counter · Typewriter · Parallax · Magnetic
═══════════════════════════════════════════════ */

/* ─── 1. CANVAS PARTICLE NETWORK ─── */
(function initCanvas() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.55';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let W, H, pts;
    const resize = () => {
        W = canvas.width = innerWidth;
        H = canvas.height = innerHeight;
        pts = Array.from({ length: 70 }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - .5) * .35,
            vy: (Math.random() - .5) * .35,
            r: Math.random() * 1.8 + .5,
            phase: Math.random() * Math.PI * 2,
            hue: [240, 260, 280, 200][Math.floor(Math.random() * 4)],
        }));
    };
    resize();
    addEventListener('resize', resize);

    // mouse attractor
    let mx = -9999, my = -9999;
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    let t = 0;
    const draw = () => {
        ctx.clearRect(0, 0, W, H);
        t += .008;

        pts.forEach(p => {
            // subtle mouse attraction
            const dx = mx - p.x, dy = my - p.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 180) { p.vx += dx / d * .012; p.vy += dy / d * .012; }

            p.vx *= .994; p.vy *= .994;
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            p.phase += .02;

            // draw connections
            pts.forEach(q => {
                const ex = p.x - q.x, ey = p.y - q.y;
                const dist = Math.sqrt(ex * ex + ey * ey);
                if (dist < 140) {
                    const alpha = (1 - dist / 140) * .18;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `hsla(${p.hue},80%,70%,${alpha})`;
                    ctx.lineWidth = .6; ctx.stroke();
                }
            });

            // draw dot
            const glow = (Math.sin(p.phase) + 1) / 2 * .6 + .4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue},90%,75%,${glow})`;
            ctx.fill();
        });

        requestAnimationFrame(draw);
    };
    draw();
})();

/* ─── 2. ANIMATED AURORA ORBS ─── */
(function animOrbs() {
    const orbs = document.querySelectorAll('.orb');
    let t = 0;
    const tick = () => {
        t += .006;
        orbs.forEach((o, i) => {
            const dx = Math.sin(t + i * 1.3) * 25;
            const dy = Math.cos(t + i * 0.9) * 20;
            o.style.transform = `translate(${dx}px, ${dy}px) scale(${1 + Math.sin(t + i) * .08})`;
        });
        requestAnimationFrame(tick);
    };
    tick();
})();

/* ─── 3. CUSTOM MAGNETIC CURSOR ─── */
(function initCursor() {
    const ring = Object.assign(document.createElement('div'), { id: 'cur-ring' });
    const dot = Object.assign(document.createElement('div'), { id: 'cur-dot' });

    ring.style.cssText = 'position:fixed;width:36px;height:36px;border-radius:50%;border:1.5px solid rgba(99,102,241,.7);pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .2s,height .2s,border-color .2s;box-shadow:0 0 15px rgba(99,102,241,.25);';
    dot.style.cssText = 'position:fixed;width:5px;height:5px;border-radius:50%;background:#818cf8;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);box-shadow:0 0 8px #6366f1;';
    document.body.append(ring, dot);

    let rx = 0, ry = 0, px = 0, py = 0;
    addEventListener('mousemove', e => { px = e.clientX; py = e.clientY; dot.style.left = px + 'px'; dot.style.top = py + 'px'; });

    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
        rx = lerp(rx, px, .1);
        ry = lerp(ry, py, .1);
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
    };
    loop();

    // Magnetic effect on buttons/links
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.width = '52px'; ring.style.height = '52px';
            ring.style.borderColor = 'rgba(129,140,248,.9)';
            ring.style.backgroundColor = 'rgba(99,102,241,.06)';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.width = '36px'; ring.style.height = '36px';
            ring.style.borderColor = 'rgba(99,102,241,.7)';
            ring.style.backgroundColor = '';
        });
    });
    document.body.style.cursor = 'none';
})();

/* ─── 4. 3D CARD TILT ─── */
(function initTilt() {
    const applyTilt = cards => {
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width - .5) * 12;
                const y = ((e.clientY - r.top) / r.height - .5) * -12;
                card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px) scale(1.02)`;
                card.style.transition = 'transform .08s ease, box-shadow .3s ease';
                // Spotlight
                const shine = card.querySelector('.card-shine') || (() => {
                    const s = document.createElement('div');
                    s.className = 'card-shine';
                    s.style.cssText = 'position:absolute;inset:0;border-radius:16px;pointer-events:none;z-index:2;';
                    card.style.position = 'relative'; card.style.overflow = 'hidden';
                    card.append(s); return s;
                })();
                const cx = (e.clientX - r.left) / r.width * 100;
                const cy = (e.clientY - r.top) / r.height * 100;
                shine.style.background = `radial-gradient(circle at ${cx}% ${cy}%, rgba(129,140,248,.1), transparent 55%)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.transition = 'transform .55s cubic-bezier(.22,1,.36,1)';
                const shine = card.querySelector('.card-shine');
                if (shine) shine.style.background = '';
            });
        });
    };
    applyTilt(document.querySelectorAll('.card'));
    // Re-apply when cards grid is re-rendered
    const observer = new MutationObserver(() => applyTilt(document.querySelectorAll('.card')));
    const grid = document.getElementById('cards-grid');
    if (grid) observer.observe(grid, { childList: true });
})();

/* ─── 5. SHIMMER SWEEP ON HOVER ─── */
(function initShimmer() {
    const style = document.createElement('style');
    style.textContent = `
    @keyframes shimmer-sweep {
      from { transform: translateX(-120%) skewX(-20deg); }
      to   { transform: translateX(220%)  skewX(-20deg); }
    }
    .shimmer-wrap { position:relative; overflow:hidden; }
    .shimmer-wrap::after {
      content:''; position:absolute; top:0; left:0; width:40%;
      height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);
      transform:translateX(-120%) skewX(-20deg); pointer-events:none;
    }
    .shimmer-wrap:hover::after { animation: shimmer-sweep .7s ease forwards; }
  `;
    document.head.append(style);
    document.querySelectorAll('.card').forEach(c => c.classList.add('shimmer-wrap'));
})();

/* ─── 6. SCROLL REVEAL (IntersectionObserver) ─── */
(function initReveal() {
    const style = document.createElement('style');
    style.textContent = `
    .reveal { opacity:0; transform:translateY(32px); transition:opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1); }
    .reveal.from-left  { transform:translateX(-40px); }
    .reveal.from-right { transform:translateX( 40px); }
    .reveal.visible    { opacity:1; transform:none; }
  `;
    document.head.append(style);

    // Tag everything with reveal
    document.querySelectorAll('section > div > *:not(canvas), .card').forEach((el, i) => {
        if (!el.classList.contains('orb')) {
            el.classList.add('reveal');
            el.style.transitionDelay = (i % 6) * .07 + 's';
        }
    });

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ─── 7. NUMBER COUNTER ANIMATION ─── */
(function initCounters() {
    const NUMS = [
        { sel: '.g-gold', target: 420, prefix: '$', suffix: 'K+', duration: 1800 },
        { sel: '.g-indigo', target: 68, prefix: '', suffix: 'K+', duration: 1600 },
    ];
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const animate = (el, target, prefix, suffix, dur) => {
        const start = performance.now();
        const tick = now => {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = prefix + Math.floor(easeOut(p) * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const el = e.target;
                NUMS.forEach(n => {
                    if (el.matches(n.sel)) animate(el, n.target, n.prefix, n.suffix, n.duration);
                });
                io.unobserve(el);
            }
        });
    }, { threshold: .5 });
    document.querySelectorAll('.g-gold, .g-indigo').forEach(el => io.observe(el));
})();

/* ─── 8. TYPEWRITER HEADLINE ─── */
(function initTypewriter() {
    const words = ['Intelligence.', 'Precision.', 'Innovation.', 'Excellence.', 'the Future.'];
    const target = document.querySelector('.g-full');
    if (!target || target.dataset.tw) return;
    target.dataset.tw = '1';
    let wi = 0, ci = 0, deleting = false;
    const BASE = 'Elite AI ';

    const tick = () => {
        const word = words[wi];
        const current = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
        target.textContent = BASE + current;
        const speed = deleting ? 45 : (ci > word.length ? 1800 : 80);
        if (!deleting && ci > word.length) { deleting = true; }
        else if (deleting && ci < 0) { deleting = false; ci = 0; wi = (wi + 1) % words.length; }
        setTimeout(tick, speed);
    };
    // Start after initial load animation
    setTimeout(tick, 1400);
})();

/* ─── 9. MOUSE PARALLAX on HERO ORBS ─── */
(function initParallax() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    addEventListener('mousemove', e => {
        const cx = (e.clientX / innerWidth - .5) * 2;
        const cy = (e.clientY / innerHeight - .5) * 2;
        hero.querySelectorAll('.orb').forEach((o, i) => {
            const depth = (i + 1) * 18;
            o.style.marginLeft = cx * depth + 'px';
            o.style.marginTop = cy * depth + 'px';
        });
    });
})();

/* ─── 10. PROGRESS BAR ANIMATE IN ─── */
(function initProgressBars() {
    const bars = document.querySelectorAll('.pbar-fill');
    bars.forEach(bar => {
        const target = bar.style.width;
        bar.style.width = '0';
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setTimeout(() => { bar.style.width = target; }, 200);
                io.disconnect();
            }
        }, { threshold: .5 });
        io.observe(bar);
    });
})();

/* ─── 11. MAGNETIC BUTTONS ─── */
(function initMagnet() {
    document.querySelectorAll('a.btn-nav, [style*="gradient"]').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width / 2) * .25;
            const y = (e.clientY - r.top - r.height / 2) * .25;
            btn.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
            btn.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1)';
        });
    });
})();

/* ─── 12. STAGGERED CARD ENTRANCE ─── */
(function staggerCards() {
    const style = document.createElement('style');
    style.textContent = `
    @keyframes card-in {
      from { opacity:0; transform:translateY(30px) scale(.97); }
      to   { opacity:1; transform:none; }
    }
    .card-in { animation: card-in .6s cubic-bezier(.22,1,.36,1) both; }
  `;
    document.head.append(style);

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const cards = e.target.querySelectorAll('.card');
                cards.forEach((c, i) => {
                    c.classList.add('card-in');
                    c.style.animationDelay = i * .08 + 's';
                });
                io.unobserve(e.target);
            }
        });
    }, { threshold: .05 });
    document.querySelectorAll('section').forEach(s => io.observe(s));
})();

/* ─── 13. GRADIENT TEXT SHIFT ─── */
(function shiftGradients() {
    let t = 0;
    const tick = () => {
        t++;
        document.querySelectorAll('.g-full').forEach(el => {
            const hue = 240 + Math.sin(t * .02) * 20;
            el.style.background = `linear-gradient(${135 + Math.sin(t * .01) * 20}deg, hsl(${hue},80%,85%), hsl(${hue + 40},80%,75%), hsl(${hue + 80},80%,80%))`;
            el.style.webkitBackgroundClip = 'text';
            el.style.webkitTextFillColor = 'transparent';
            el.style.backgroundClip = 'text';
        });
        requestAnimationFrame(tick);
    };
    tick();
})();

/* ─── 14. SECTION TRANSITION RIPPLE  ─── */
(function addRipple() {
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', e => {
            const r = document.createElement('span');
            const rect = el.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            r.style.cssText = `
        position:absolute; border-radius:50%;
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(129,140,248,.25);
        transform:scale(0); animation:ripple-out .6s ease forwards;
        pointer-events:none;
      `;
            el.style.position = 'relative'; el.style.overflow = 'hidden';
            el.append(r);
            setTimeout(() => r.remove(), 700);
        });
    });
    const s = document.createElement('style');
    s.textContent = '@keyframes ripple-out{to{transform:scale(1);opacity:0;}}';
    document.head.append(s);
})();

/* ─── 15. NAV SCROLL GLOW ─── */
addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    nav.classList.toggle('scrolled', scrollY > 50);
    if (scrollY > 50) nav.style.boxShadow = '0 1px 40px rgba(99,102,241,.08)';
    else nav.style.boxShadow = '';
});
