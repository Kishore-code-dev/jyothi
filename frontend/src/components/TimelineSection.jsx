import { motion } from "framer-motion";

// Vertical numbered timeline — matches reference's Event Timeline section
export default function TimelineSection({ events }) {
    return (
        <section id="timeline" className="py-24 px-4">
            <div className="container mx-auto max-w-2xl">

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Event <span className="text-red-600">Timeline</span></h2>
                    <p className="text-gray-400 text-lg">Key dates and milestones for DataHack 2026.</p>
                </motion.div>

                {/* Numbered vertical list */}
                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-5 top-5 bottom-5 w-[2px]"
                        style={{ background: "linear-gradient(180deg,#DC2626,rgba(220,38,38,0.05))" }} />

                    {events.map((ev, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6, delay: i * .1, ease: [.22, 1, .36, 1] }} viewport={{ once: true, margin: "-40px" }}
                            className="relative flex items-start gap-6 mb-8 last:mb-0">

                            {/* Number circle — red for first, gray for rest */}
                            <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm border-2 ${i === 0 ? "bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]" : "bg-[#1A1A1A] border-gray-700 text-gray-400"}`}>
                                {i + 1}
                            </div>

                            {/* Content */}
                            <div className={`glass-card p-5 flex-1 card-hover ${i === 0 ? "border-red-600/30" : ""}`}>
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{ev.icon}</span>
                                        <span className="font-black text-base text-white">{ev.label}</span>
                                    </div>
                                    <span className={`font-mono text-xs font-bold ${i === 0 ? "text-red-500" : "text-gray-500"}`}>{ev.year}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{ev.desc}</p>
                                {i === 0 && (
                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[10px] text-red-500 font-mono tracking-widest">OPEN NOW</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
