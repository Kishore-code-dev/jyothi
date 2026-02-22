export default function Footer() {
    return (
        <footer className="py-32 bg-white border-t border-[#7B1123]/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                    <div className="md:col-span-2">
                        <span className="text-4xl font-serif text-[#2A2A2A] italic mb-8 block">SNS <span className="text-[#7B1123]">DT-AI-Hack</span></span>
                        <p className="text-sm text-[#2A2A2A]/40 font-light italic leading-relaxed max-w-sm">
                            Building the future of AI through collaborative innovation and real-world problem solving. Powered by Groq LPU™ technology.
                        </p>
                    </div>

                    <div>
                        <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase mb-10 block">QUICK LINKS</span>
                        <ul className="space-y-4 text-[0.65rem] font-bold text-[#2A2A2A]/40 tracking-widest uppercase">
                            <li><a href="#" className="hover:text-[#7B1123] transition-colors">Overview</a></li>
                            <li><a href="#" className="hover:text-[#7B1123] transition-colors">Challenge Tracks</a></li>
                            <li><a href="#" className="hover:text-[#7B1123] transition-colors">Timeline</a></li>
                            <li><a href="#" className="hover:text-[#7B1123] transition-colors">Resources</a></li>
                        </ul>
                    </div>

                    <div>
                        <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase mb-10 block">CONNECT</span>
                        <ul className="space-y-4 text-[0.65rem] font-bold text-[#2A2A2A]/40 tracking-widest uppercase">
                            <li><a href="https://x.com/GroqInc" target="_blank" className="hover:text-[#7B1123] transition-colors">X: @GroqInc</a></li>
                            <li><a href="https://x.com/ozenhati" target="_blank" className="hover:text-[#7B1123] transition-colors">X: @ozenhati</a></li>
                            <li><a href="https://t.me/groq" target="_blank" className="hover:text-[#7B1123] text-[#7B1123] font-black transition-colors">Join Telegram →</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-20 border-t border-[#7B1123]/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[0.5rem] tracking-[0.4em] text-[#2A2A2A]/20 font-bold uppercase">
                        &copy; 2025 SNS DT-AI-Hack. Powered by Groq. All rights reserved.
                    </p>
                    <div className="flex gap-10">
                        <div className="w-12 h-1 border-t border-[#7B1123]/10" />
                        <div className="w-12 h-1 border-t border-[#7B1123]/40" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
