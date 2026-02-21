const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ── Data ───────────────────────────────────────────────────────────────────
const hackathons = [
  {
    id: 1,
    title: "Neon Cyberpunk Hack",
    subtitle: "Neural Architectures Unleashed",
    category: "AI / Deep Learning",
    prize: "$50,000",
    participants: 12400,
    deadline: "2026-03-15",
    status: "live",
    difficulty: "Expert",
    tags: ["PyTorch", "LLMs", "RL"],
    color: "#00f5ff",
    accent: "#a855f7",
    description:
      "Push the boundaries of neural architecture design. Build self-adapting AI systems that evolve in real-time.",
  },
  {
    id: 2,
    title: "EcoTech Futures",
    subtitle: "Climate Intelligence Platform",
    category: "Climate AI",
    prize: "$35,000",
    participants: 8900,
    deadline: "2026-04-01",
    status: "upcoming",
    difficulty: "Advanced",
    tags: ["Climate", "Satellite", "TimeSeries"],
    color: "#10b981",
    accent: "#06b6d4",
    description:
      "Harness satellite imagery and climate data to build predictive models for ecological restoration.",
  },
  {
    id: 3,
    title: "FinTech Revolution",
    subtitle: "Quantum Risk Modelling",
    category: "Finance AI",
    prize: "$75,000",
    participants: 21000,
    deadline: "2026-04-20",
    status: "live",
    difficulty: "Expert",
    tags: ["Quant", "Risk", "NLP"],
    color: "#f59e0b",
    accent: "#ef4444",
    description:
      "Design next-gen risk engines using transformer models and quantum-inspired algorithms for real-time trading.",
  },
  {
    id: 4,
    title: "HealthAI Challenge",
    subtitle: "Multimodal Medical Diagnostics",
    category: "Healthcare AI",
    prize: "$40,000",
    participants: 15300,
    deadline: "2026-05-10",
    status: "upcoming",
    difficulty: "Intermediate",
    tags: ["Medical", "Vision", "Genomics"],
    color: "#ec4899",
    accent: "#8b5cf6",
    description:
      "Build AI diagnostics that fuse radiology, genomics and clinical text to detect rare diseases with superhuman precision.",
  },
  {
    id: 5,
    title: "SpaceX Mars Mission",
    subtitle: "Autonomous Navigation Intelligence",
    category: "Robotics AI",
    prize: "$100,000",
    participants: 6700,
    deadline: "2026-06-01",
    status: "upcoming",
    difficulty: "God-Tier",
    tags: ["Robotics", "CV", "Sim2Real"],
    color: "#f97316",
    accent: "#6366f1",
    description:
      "Engineer autonomous navigation systems capable of surviving the Martian terrain using simulation-to-real transfer.",
  },
  {
    id: 6,
    title: "Quantum Leap 2026",
    subtitle: "Post-Classical AI Algorithms",
    category: "Quantum AI",
    prize: "$120,000",
    participants: 4200,
    deadline: "2026-07-15",
    status: "upcoming",
    difficulty: "God-Tier",
    tags: ["Quantum", "Optimization", "QML"],
    color: "#a855f7",
    accent: "#00f5ff",
    description:
      "Design quantum machine learning algorithms that outperform classical approaches on combinatorial optimization problems.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Genesis Protocol",
    description:
      "DataHack launched its first cosmic hackathon series attracting 5,000+ pioneering minds across 40 countries.",
    icon: "🌌",
    color: "#00f5ff",
    milestone: "5,000 Participants",
  },
  {
    year: "2024",
    title: "Singularity Event",
    description:
      "Breakthrough year — 25 AI startups emerged from DataHack challenges, raising $200M+ in collective funding.",
    icon: "⚡",
    color: "#a855f7",
    milestone: "$200M Raised",
  },
  {
    year: "2025",
    title: "Cosmic Expansion",
    description:
      "Global partnerships with Google DeepMind, OpenAI and NVIDIA. 100K+ participants across 6 continents.",
    icon: "🚀",
    color: "#ec4899",
    milestone: "100K Participants",
  },
  {
    year: "2026",
    title: "Transcendence Arc",
    description:
      "The dawn of post-AGI hackathons. $500K in prizes, quantum AI challenges, and real Mars mission contracts.",
    icon: "✨",
    color: "#f59e0b",
    milestone: "$500K Prizes",
  },
];

// ── Routes ─────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({
    status: "operational",
    service: "DataHack API",
    version: "2.0.0",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.get("/api/hackathons", (req, res) => {
  const { status, difficulty, search } = req.query;
  let filtered = [...hackathons];

  if (status) filtered = filtered.filter((h) => h.status === status);
  if (difficulty)
    filtered = filtered.filter((h) => h.difficulty === difficulty);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (h) =>
        h.title.toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q) ||
        h.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  res.json({
    total: filtered.length,
    hackathons: filtered,
  });
});

app.get("/api/hackathons/:id", (req, res) => {
  const hack = hackathons.find((h) => h.id === parseInt(req.params.id));
  if (!hack) return res.status(404).json({ error: "Hackathon not found" });
  res.json(hack);
});

app.get("/api/timeline", (req, res) => {
  res.json({ timeline });
});

app.get("/api/stats", (req, res) => {
  res.json({
    totalHackathons: hackathons.length,
    totalParticipants: hackathons.reduce((a, h) => a + h.participants, 0),
    totalPrize: "$420,000",
    liveCount: hackathons.filter((h) => h.status === "live").length,
    countries: 87,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n🚀 DataHack API — Operational on http://localhost:${PORT}\n`);
});
