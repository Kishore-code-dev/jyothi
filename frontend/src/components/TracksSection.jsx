import { motion } from "framer-motion";

// 5-card grid — matches reference's "Challenge Tracks" section
const TRACKS = [
    { icon: "🏥", title: "Healthcare & Diagnostics", desc: "Multi-modal diagnostics combining radiology, genomics, and clinical notes to detect rare diseases in real-time.", col: "text-blue-400" },
    { icon: "📊", title: "Financial Analysis", desc: "Quantum-inspired risk engines and fraud detection using transformer models at millisecond inference speeds.", col: "text-green-400" },
    { icon: "🚚", title: "Supply Chain Optimization", desc: "End-to-end AI logistics systems that predict disruptions months ahead using satellite data and economic signals.", col: "text-yellow-400" },
    { icon: "💬", title: "Customer Service Automation", desc: "Autonomous multi-agent systems that handle complex customer journeys across voice, text, and visual modalities.", col: "text-purple-400" },
    { icon: "🌱", title: "Sustainability Monitoring", desc: "AI platforms monitoring deforestation, emissions, and biodiversity using real-time satellite and sensor networks.", col: "text-green-500" },
    { icon: "🔬", title: "Cross-Domain Innovation", desc: "Build anything that doesn't fit the above — if your idea is groundbreaking, it belongs here.", col: "text-red-400" },
];

export default function TracksSection({ hackathons }) {
    return (
        <section id="tracks" className="py-24 px-4" style={{ background: "rgba(26,26,26,0.3)" }}>
            <div className="container mx-auto max-w-6xl">

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Challenge <span className="text-red-600">Tracks</span></h2>
                    <p className="text-gray-400 text-lg">Six domains. Six opportunities to change the world.</p>
                </motion.div>

                {/* 5-card then 1 red CTA card — matches reference */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TRACKS.slice(0, 5).map((t, i) => (
                        <motion.div key={t.title}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6, delay: i * .07 }} viewport={{ once: true }}
                            className="glass-card p-6 card-hover">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">{t.icon}</span>
                                <h3 className={`font-bold text-sm ${t.col}`}>{t.title}</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                        </motion.div>
                    ))}
                    {/* Last card — red CTA like the reference's "Ready to Build?" card */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .35 }} viewport={{ once: true }}
                        className="red-card p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-90 transition-opacity">
                        <div className="text-3xl mb-3">🚀</div>
                        <h3 className="font-black text-lg mb-2">Ready to Build?</h3>
                        <p className="text-white/70 text-sm mb-4">Your chance to compete on the world's most advanced AI platform.</p>
                        <span className="bg-white text-red-600 font-black text-xs px-4 py-2 rounded-full">REGISTER NOW →</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
