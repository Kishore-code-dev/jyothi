"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export default function SecureAccessForm() {
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
            if (res.ok) setStatus({ type: "success", message: "Transmission Established. Council Review Pending." });
            else setStatus({ type: "error", message: data.message || "Uplink Failed." });
        } catch (err) {
            setStatus({ type: "error", message: "Cryptographic Handshake Interrupted." });
        }
        setLoading(false);
    };

    return (
        <section id="apply" className="py-60 bg-transparent flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
                    className="bg-white p-12 md:p-32 rounded-sm border border-[#7B1123]/10 shadow-2xl shadow-[#7B1123]/[0.02]"
                >
                    <header className="mb-24 text-center">
                        <div className="w-16 h-16 border border-[#7B1123]/20 rounded-full flex items-center justify-center mx-auto mb-10">
                            <Lock className="w-6 h-6 text-[#7B1123]/40" />
                        </div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[0.7rem] uppercase tracking-[0.8em] text-[#7B1123] mb-8 block font-bold"
                        >
                            SECURE ACCESS REVEAL™
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-serif italic text-[#2A2A2A] tracking-tighter">Request Credentials</h2>
                        <p className="mt-8 text-sm text-[#2A2A2A]/40 font-light italic max-w-md mx-auto">Establish your unique identifier for the 2026 Velvet Code assembly.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                        {[
                            { label: "Nominal Identifier (Full Name)", key: "name", type: "text" },
                            { label: "Neural Link (Email)", key: "email", type: "email" },
                            { label: "Secure Line (Phone)", key: "phone", type: "tel" },
                            { label: "Host Institution", key: "college", type: "text" },
                            { label: "Entourage Identifier (Team)", key: "teamName", type: "text" },
                            { label: "Professional Uplink (LinkedIn)", key: "linkedIn", type: "url" },
                            { label: "Source Manifest (Github)", key: "github", type: "url" }
                        ].map((f, i) => (
                            <motion.div
                                key={f.key}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                                className="relative group"
                            >
                                <input
                                    required={f.key !== 'teamName'}
                                    type={f.type}
                                    value={formData[f.key]}
                                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                                    className="w-full bg-transparent border-b border-[#7B1123]/20 py-4 text-[#2A2A2A] outline-none focus:border-[#7B1123] transition-all peer font-serif italic"
                                    placeholder=" "
                                />
                                <label className="absolute left-0 top-4 text-[#2A2A2A]/30 text-[0.6rem] font-bold uppercase tracking-[0.3em] transition-all peer-focus:-top-8 peer-focus:text-[#7B1123] peer-focus:text-[0.5rem] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-[#7B1123] peer-[:not(:placeholder-shown)]:text-[0.5rem]">
                                    {f.label}
                                </label>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="relative md:col-span-2 group"
                        >
                            <select
                                required
                                value={formData.domain}
                                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                className="w-full bg-transparent border-b border-[#7B1123]/20 py-4 text-[#2A2A2A]/40 outline-none focus:border-[#7B1123] transition-all font-serif italic"
                            >
                                <option value="">Select Research Directive</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Autonomous Systems">Autonomous Systems</option>
                                <option value="FinTech Architecture">FinTech Architecture</option>
                                <option value="Sustainable Energy">Sustainable Energy</option>
                                <option value="Robotics & Automation">Robotics & Automation</option>
                            </select>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="md:col-span-2 text-center mt-20"
                        >
                            <button
                                disabled={loading}
                                className="bg-[#7B1123] text-[#F8F6F4] px-24 py-6 rounded-sm uppercase tracking-[0.5em] font-bold text-[0.7rem] hover:bg-[#5A0D18] transition-all duration-700 disabled:opacity-50 shadow-2xl shadow-[#7B1123]/10"
                            >
                                {loading ? "TRANSMITTING..." : "ESTABLISH UPLINK"}
                            </button>

                            <AnimatePresence>
                                {status && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`mt-12 text-[0.6rem] font-bold tracking-[0.3em] uppercase ${status.type === 'success' ? 'text-green-600' : 'text-[#7B1123]'}`}
                                    >
                                        {status.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
