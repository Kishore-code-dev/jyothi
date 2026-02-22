"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [apps, setApps] = useState([]);
    const [stats, setStats] = useState({});
    const [filter, setFilter] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetchData();
    }, [filter]);

    const fetchData = async () => {
        const token = localStorage.getItem("velvet_admin_token");
        if (!token) return router.push("/admin/login");

        const res = await fetch(`http://localhost:3001/api/applications?domain=${filter}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) setApps(await res.json());

        const sRes = await fetch("http://localhost:3001/api/applications/stats", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (sRes.ok) setStats(await sRes.json());
    };

    const updateStatus = async (id, status) => {
        const token = localStorage.getItem("velvet_admin_token");
        await fetch(`http://localhost:3001/api/applications/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ status })
        });
        fetchData();
    };

    return (
        <div className="min-h-screen bg-[#F8F6F4] p-10">
            <header className="flex justify-between items-baseline mb-20 border-b border-[#7B1123]/10 pb-10">
                <div>
                    <h1 className="text-4xl font-serif italic text-[#2A2A2A]">Curation Dashboard</h1>
                    <p className="text-[0.6rem] font-bold text-[#7B1123] tracking-[0.5em] uppercase mt-2">Administrative Console</p>
                </div>
                <div className="flex gap-12">
                    {Object.entries(stats).map(([k, v]) => (
                        <div key={k} className="text-center">
                            <span className="block text-2xl font-serif text-[#2A2A2A]">{v}</span>
                            <span className="text-[0.5rem] font-bold text-[#7B1123] tracking-[0.2em] uppercase">{k}</span>
                        </div>
                    ))}
                    <button
                        onClick={() => { localStorage.removeItem("velvet_admin_token"); router.push("/admin/login"); }}
                        className="text-[0.6rem] font-bold text-[#2A2A2A]/40 uppercase tracking-widest hover:text-[#7B1123]"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="flex gap-6 mb-10">
                <select
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-white border border-[#7B1123]/10 px-6 py-2 text-[0.6rem] font-bold uppercase tracking-widest outline-none"
                >
                    <option value="">All Domains</option>
                    <option value="Artificial Intelligence">AI</option>
                    <option value="Autonomous Systems">Autonomous</option>
                    <option value="FinTech Architecture">FinTech</option>
                </select>
            </div>

            <div className="bg-white border border-[#7B1123]/5 shadow-xl">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#7B1123]/10 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#7B1123]/40">
                            <th className="p-8">Name</th>
                            <th className="p-8">Domain</th>
                            <th className="p-8">College</th>
                            <th className="p-8">Status</th>
                            <th className="p-8 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#7B1123]/5">
                        {apps.map(app => (
                            <tr key={app._id} className="hover:bg-[#F8F6F4] transition-colors group">
                                <td className="p-8">
                                    <span className="block font-serif text-lg text-[#2A2A2A]">{app.name}</span>
                                    <span className="text-[0.6rem] font-bold text-[#2A2A2A]/30 uppercase tracking-widest">{app.email}</span>
                                </td>
                                <td className="p-8 text-[0.6rem] font-bold uppercase tracking-widest text-[#2A2A2A]/60">{app.domain}</td>
                                <td className="p-8 text-xs font-light italic text-[#2A2A2A]/60">{app.college}</td>
                                <td className="p-8">
                                    <span className={`text-[0.5rem] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${app.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                            app.status === 'Rejected' ? 'bg-red-100 text-[#7B1123]' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="p-8 text-right space-x-4">
                                    <button onClick={() => updateStatus(app._id, 'Approved')} className="text-[0.6rem] font-bold text-[#7B1123] hover:underline uppercase tracking-widest">Approve</button>
                                    <button onClick={() => updateStatus(app._id, 'Rejected')} className="text-[0.6rem] font-bold text-[#2A2A2A]/20 hover:text-[#7B1123] uppercase tracking-widest">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
