import { motion } from "framer-motion";

export default function FooterSection() {
    return (
        <footer id="footer" className="py-16 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black text-xl italic">D</div>
                            <div>
                                <div className="font-black text-lg text-white">DataHack</div>
                                <div className="text-[10px] text-gray-600 font-mono tracking-widest">by Analytics Vidhya</div>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            The world's most advanced AI hackathon platform. Where the best data scientists compete, innovate, and change the world.
                        </p>
                    </div>

                    {/* Links */}
                    {[
                        { title: "Platform", links: ["Hackathons", "Leaderboard", "Teams", "Mentors", "Resources"] },
                        { title: "Company", links: ["About Us", "Blog", "Careers", "Terms", "Privacy"] },
                    ].map(col => (
                        <div key={col.title}>
                            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-widest font-mono">{col.title}</h4>
                            <ul className="space-y-2.5">
                                {col.links.map(l => (
                                    <li key={l}><button className="text-gray-500 text-sm hover:text-white transition-colors duration-200">{l}</button></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs font-mono tracking-wider">
                        © 2026 DataHack · Powered by Analytics Vidhya
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-gray-600 text-xs font-mono tracking-wider">ALL SYSTEMS ONLINE</span>
                    </div>
                    <p className="text-gray-700 text-xs font-mono">v2.0.0 · 2026</p>
                </div>
            </div>
        </footer>
    );
}
