"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (res.ok) {
            const { token } = await res.json();
            localStorage.setItem("velvet_admin_token", token);
            router.push("/admin/dashboard");
        } else {
            setError("Invalid Administrative Credentials");
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-[#F8F6F4]">
            <div className="bg-white p-16 shadow-2xl border border-[#7B1123]/10 max-w-md w-full">
                <header className="mb-12 text-center">
                    <span className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.4em] uppercase">SYSTEM ACCESS</span>
                    <h2 className="text-3xl font-serif text-[#2A2A2A] italic mt-4">Administrative Login</h2>
                </header>
                <form onSubmit={handleLogin} className="space-y-10">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-transparent border-b border-[#7B1123]/20 py-3 outline-none focus:border-[#7B1123] transition-all"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border-b border-[#7B1123]/20 py-3 outline-none focus:border-[#7B1123] transition-all"
                    />
                    {error && <p className="text-xs text-[#7B1123] font-bold tracking-widest uppercase">{error}</p>}
                    <button className="w-full bg-[#7B1123] text-white py-4 uppercase tracking-[0.3em] font-bold text-xs hover:bg-[#5A0D18] transition-all">
                        Enter Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
}
