"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", college: "", teamName: "", domain: "", linkedIn: "", github: ""
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3001/api/applications/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) setStatus({ type: "success", message: "Transmission received. Council review pending." });
            else setStatus({ type: "error", message: data.message || "Uplink failed." });
        } catch (err) {
            setStatus({ type: "error", message: "Server connection failure." });
        }
        setLoading(false);
    };

    return (
        <section id="apply" className="py-40 bg-black relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl p-12 md:p-24 rounded-3xl border border-white/5 shadow-2xl">
                    <header className="mb-20 text-center">
                        <span className="text-[0.7rem] uppercase tracking-[0.8em] text-[#D4AF37] mb-6 block font-bold">REGISTRATION</span>
                        <h2 className="text-4xl md:text-6xl font-sans font-black text-white italic mb-8">Request Invitation</h2>
                        <p className="text-white/30 font-light italic">Establish your credentials for the 2026 assembly.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { label: "Full Name", key: "name", type: "text" },
                            { label: "Neural ID (Email)", key: "email", type: "email" },
                            { label: "Liaison Number", key: "phone", type: "tel" },
                            { label: "Institution", key: "college", type: "text" },
                            { label: "Team Directive", key: "teamName", type: "text" },
                            { label: "LinkedIn Protocol", key: "linkedIn", type: "url" },
                            { label: "Uplink/GitHub", key: "github", type: "url" }
                        ].map((f) => (
                            <div key={f.key} className="relative group">
                                <input
                                    required={f.key !== 'teamName'}
                                    type={f.type}
                                    value={formData[f.key]}
                                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-[#D4AF37] transition-all peer font-light"
                                    placeholder=" "
                                />
                                <label className="absolute left-0 top-4 text-white/20 text-[0.6rem] font-bold uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-[#D4AF37] peer-focus:text-[0.5rem] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[#D4AF37] peer-[:not(:placeholder-shown)]:text-[0.5rem]">
                                    {f.label}
                                </label>
                            </div>
                        ))}

                        <div className="relative md:col-span-2 group">
                            <select
                                required
                                value={formData.domain}
                                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white/60 outline-none focus:border-[#D4AF37] transition-all font-light"
                            >
                                <option value="" className="bg-black text-white">Select Directive</option>
                                <option value="Artificial Intelligence" className="bg-black text-white">Artificial Intelligence</option>
                                <option value="Autonomous Systems" className="bg-black text-white">Autonomous Systems</option>
                                <option value="FinTech Architecture" className="bg-black text-white">FinTech Architecture</option>
                                <option value="Sustainable Energy" className="bg-black text-white">Sustainable Energy</option>
                                <option value="Robotics & Automation" className="bg-black text-white">Robotics & Automation</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 text-center mt-12">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                                className="bg-white text-black px-20 py-5 rounded-full uppercase tracking-[0.4em] font-black text-[0.7rem] flex items-center gap-4 mx-auto hover:bg-[#D4AF37] transition-all duration-700 disabled:opacity-50"
                            >
                                {loading ? "TRANSMITTING..." : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Submit Application
                                    </>
                                )}
                            </motion.button>

                            {status && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-10 text-[0.6rem] font-bold tracking-[0.2em] uppercase ${status.type === 'success' ? 'text-emerald-500' : 'text-[#7B1123]'}`}
                                >
                                    {status.message}
                                </motion.p>
                            )}
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
