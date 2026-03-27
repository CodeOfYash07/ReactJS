import { useEffect, useState } from "react";

type orderType = {
    name: string;
    title: string;
    color: string;
    size: string;
    code: string;
    price: string;
};

export default function Table() {
    const [allOrders, setAllOrders] = useState<orderType[]>(
        JSON.parse(localStorage.getItem("orders") || "[]")
    );

    useEffect(() => {
        const handleStorage = () => {
            setAllOrders(JSON.parse(localStorage.getItem("orders") || "[]"));
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    const handleDelete = (index: number) => {
        const updated = allOrders.filter((_, i) => i !== index);
        setAllOrders(updated);
        localStorage.setItem("orders", JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12 relative overflow-hidden font-sans font-medium">
            {/* Header */}
            <div className="text-center mb-16 pt-8 animate-fade-in-down">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-6 uppercase">
                    Admin Dashboard
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    All Orders
                </h1>
                <p className="text-slate-500 text-lg">Manage and view your data with clarity</p>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transform transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        </div>
                        <p className="text-slate-500 font-bold uppercase text-sm mb-1 tracking-wider">Total Orders</p>
                        <p className="text-5xl font-black text-slate-900">{allOrders.length}</p>
                    </div>
                    
                    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transform transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p className="text-slate-500 font-bold uppercase text-sm mb-1 tracking-wider">Revenue</p>
                        <p className="text-5xl font-black text-slate-900">
                            <span className="text-slate-300 mr-1">$</span>
                            {allOrders.reduce((sum, o) => sum + (parseFloat(o.price) || 0), 0).toFixed(2)}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transform transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                        </div>
                        <p className="text-slate-500 font-bold uppercase text-sm mb-1 tracking-wider">Unique Colors</p>
                        <p className="text-5xl font-black text-slate-900">
                            {new Set(allOrders.map(o => o.color)).size}
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="overflow-x-auto p-4 sm:p-6">
                        <table className="min-w-full text-left">
                            <thead>
                                <tr>
                                    {["No", "Name", "Title", "Color", "Size", "Code / SKU", "Price", "Actions"].map((h, i) => (
                                        <th key={i} className="px-6 py-5 text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {allOrders.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} className="px-6 py-20 text-center">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-4">
                                                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                            </div>
                                            <p className="text-slate-900 font-bold text-lg mb-1">No orders yet</p>
                                            <p className="text-slate-500">Go to the form and create your first order.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    allOrders.map((order, index) => (
                                        <tr key={index} className="hover:bg-slate-50 transition-colors duration-200">
                                            <td className="px-6 py-5 text-sm font-bold text-slate-400">{index + 1}</td>
                                            <td className="px-6 py-5 text-sm font-bold text-slate-900">{order.name}</td>
                                            <td className="px-6 py-5 text-sm text-slate-600 font-medium">{order.title}</td>
                                            <td className="px-6 py-5 text-sm">
                                                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">{order.color}</span>
                                            </td>
                                            <td className="px-6 py-5 text-sm">
                                                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">{order.size}</span>
                                            </td>
                                            <td className="px-6 py-5 text-sm text-slate-500 font-mono tracking-tight">{order.code}</td>
                                            <td className="px-6 py-5 text-sm text-slate-900 font-bold">${parseFloat(order.price).toFixed(2)}</td>
                                            <td className="px-6 py-5 text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                    </button>
                                                    <button onClick={() => handleDelete(index)} className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
