import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CosmicCursor from "./components/CosmicCursor";
import Loader from "./components/Loader";
import SideNav from "./components/SideNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ChallengesSection from "./components/ChallengesSection";
import TracksSection from "./components/TracksSection";
import TimelineSection from "./components/TimelineSection";
import StatsSection from "./components/StatsSection";
import FooterSection from "./components/FooterSection";
import StickyBanner from "./components/StickyBanner";

const FH = [
  { id: 1, title: "Neon Cyberpunk Hack", subtitle: "Neural Architectures Unleashed", category: "AI / Deep Learning", prize: "$50,000", participants: 12400, deadline: "2026-03-15", status: "live", difficulty: "Expert", tags: ["PyTorch", "LLMs", "RL"], description: "Push the boundaries of neural architecture design. Build self-adapting AI systems that evolve in real-time." },
  { id: 2, title: "EcoTech Futures", subtitle: "Climate Intelligence Platform", category: "Climate AI", prize: "$35,000", participants: 8900, deadline: "2026-04-01", status: "upcoming", difficulty: "Advanced", tags: ["Climate", "Satellite", "TimeSeries"], description: "Harness satellite imagery and climate data to build predictive models for ecological restoration." },
  { id: 3, title: "FinTech Revolution", subtitle: "Quantum Risk Modelling", category: "Finance AI", prize: "$75,000", participants: 21000, deadline: "2026-04-20", status: "live", difficulty: "Expert", tags: ["Quant", "Risk", "NLP"], description: "Design next-gen risk engines using transformer models for real-time trading." },
  { id: 4, title: "HealthAI Challenge", subtitle: "Multimodal Medical Diagnostics", category: "Healthcare AI", prize: "$40,000", participants: 15300, deadline: "2026-05-10", status: "upcoming", difficulty: "Intermediate", tags: ["Medical", "Vision", "Genomics"], description: "Build AI diagnostics fusing radiology, genomics and clinical text to detect rare diseases." },
  { id: 5, title: "SpaceX Mars Mission", subtitle: "Autonomous Navigation AI", category: "Robotics AI", prize: "$100,000", participants: 6700, deadline: "2026-06-01", status: "upcoming", difficulty: "God-Tier", tags: ["Robotics", "CV", "Sim2Real"], description: "Engineer autonomous navigation systems capable of surviving the Martian terrain." },
  { id: 6, title: "Quantum Leap 2026", subtitle: "Post-Classical AI Algorithms", category: "Quantum AI", prize: "$120,000", participants: 4200, deadline: "2026-07-15", status: "upcoming", difficulty: "God-Tier", tags: ["Quantum", "Optimization", "QML"], description: "Design quantum ML algorithms that outperform classical approaches on optimization problems." },
];
const FT = [
  { year: "Mar 1", label: "Registration Opens", desc: "Sign up and form your team", icon: "📋" },
  { year: "Mar 15", label: "Hackathon Begins", desc: "Challenges go live, clock starts ticking", icon: "🚀" },
  { year: "Apr 30", label: "Submission Deadline", desc: "Submit your project with demo video", icon: "📤" },
  { year: "May 10", label: "Judging Period", desc: "Expert panel evaluates all submissions", icon: "⚖️" },
  { year: "May 20", label: "Results Announced", desc: "Winners revealed and prizes distributed", icon: "🏆" },
];
const FS = { totalHackathons: 6, totalParticipants: 68500, totalPrize: "$420K+", liveCount: 2, countries: 87 };

const API_BASE = import.meta.env.VITE_API_URL || "";
const get = async p => { try { const r = await fetch(API_BASE + "/api" + p); if (!r.ok) throw r; return r.json(); } catch (e) { return null; } };

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hackathons, setHackathons] = useState(FH);
  const [timeline, setTimeline] = useState(FT);
  const [stats, setStats] = useState(FS);
  const done = useCallback(() => setLoading(false), []);

  useEffect(() => {
    Promise.allSettled([get("/hackathons"), get("/timeline"), get("/stats")]).then(([h, t, s]) => {
      if (h.status === "fulfilled" && h.value) setHackathons(h.value.hackathons || FH);
      if (s.status === "fulfilled" && s.value) setStats(s.value);
    });
  }, []);

  return (
    <div className="bg-[#0F0F0F] text-white font-sans min-h-screen selection:bg-red-600 selection:text-white">
      <CosmicCursor />

      <AnimatePresence>
        {loading && (
          <motion.div key="loader" exit={{ opacity: 0 }} transition={{ duration: .7 }}>
            <Loader onDone={done} />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <SideNav />
          <StickyBanner deadline={hackathons[0]?.deadline} />

          <nav className="fixed w-full z-40 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black text-xl italic">D</div>
                <span className="font-bold text-xl tracking-tight hidden sm:block">DataHack</span>
                <span className="text-[10px] text-gray-500 font-mono tracking-widest hidden md:block ml-1">by Analytics Vidhya</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm font-mono text-gray-400">
                {["About", "Challenges", "Tracks", "Timeline", "Judging"].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`}
                    className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wider text-[11px] uppercase">
                    {l}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <a href="#tracks" className="text-sm text-gray-400 border border-white/10 px-4 py-2 rounded-lg hover:border-red-600/50 hover:text-white transition-all duration-200">
                  View Tracks
                </a>
                <a href="#challenges" className="text-sm bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200">
                  Register Now
                </a>
              </div>
            </div>
          </nav>

          <main>
            <HeroSection stats={stats} />
            <AboutSection />
            <ChallengesSection hackathons={hackathons} />
            <TracksSection hackathons={hackathons} />
            <TimelineSection events={timeline} />
            <StatsSection stats={stats} />
            <FooterSection />
          </main>
        </>
      )}
    </div>
  );
}
