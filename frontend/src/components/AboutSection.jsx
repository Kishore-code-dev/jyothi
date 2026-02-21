import { motion } from "framer-motion";

// "About" section — matches reference's platform intro with glass card + red CTA block
export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-4">
            <div className="container mx-auto max-w-4xl">

                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-center mb-16">
                    What is <span className="text-red-600">DataHack</span>?
                </motion.h2>

                {/* Main glass info card */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }} viewport={{ once: true }}
                    className="glass-card p-8 mb-6">

                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 flex-shrink-0 bg-red-600 rounded-xl flex items-center justify-center text-2xl">⚡</div>
                        <div>
                            <p className="text-gray-300 text-base leading-relaxed">
                                <strong className="text-white">DataHack</strong> is Analytics Vidhya's flagship hackathon platform — the largest AI/ML competition ecosystem in South Asia.
                                We provide <span className="text-red-500 font-semibold">world-class challenges</span> crafted by industry experts from Google DeepMind, OpenAI, and NVIDIA.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-400 text-base leading-relaxed mb-8">
                        Founded in 2023, DataHack has grown from a cohort of 5,000 participants to over 68,000 elite data scientists competing across 87 countries. Our challenges are used by Fortune 500 companies to source top talent and validate cutting-edge solutions.
                    </p>

                    {/* Two-col sub-cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {[
                            { icon: "🧠", title: "AI-First Challenges", desc: "Real datasets, real problems — no toy tasks. Every challenge is built with industry partners." },
                            { icon: "🌍", title: "Global Community", desc: "87 countries, 68K scientists. The most diverse AI competition community on the planet." },
                        ].map(c => (
                            <div key={c.title} className="bg-[#1A1A1A] rounded-xl p-5 border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">{c.icon}</span>
                                    <span className="font-bold text-sm text-white">{c.title}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        DataHack powers <span className="text-red-500 font-semibold">real-world AI breakthroughs</span>, enabling data scientists to turn ideas into production-ready solutions — at scale, at speed, and at the frontier of what's possible.
                    </p>
                </motion.div>

                {/* Red CTA block — exactly like reference's "Hackathon Goal" red block */}
                <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: .6, delay: .2 }} viewport={{ once: true }}
                    className="red-card p-8 text-center">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="text-xl font-black mb-3">Our Mission</h3>
                    <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto">
                        Build AI solutions that <strong>actually work</strong> — not demos, not proofs of concept — but <strong>products that solve real human problems</strong> at the intersection of data, intelligence, and impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
