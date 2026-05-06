import { useState } from "react";

type orderType = {
    name: string; title: string; color: string;
    size: string; code: string; price: string;
};

type Props = {
    allOrders: orderType[];
    setAllOrders: React.Dispatch<React.SetStateAction<orderType[]>>;
    onEdit: (index: number) => void;
};

const neu = {
    shadow: '6px 6px 14px #ddd0ce, -6px -6px 14px #ffffff',
    inset: 'inset 4px 4px 10px #ddd0ce, inset -4px -4px 10px #ffffff',
    btnShadow: '4px 4px 8px #ddd0ce, -4px -4px 8px #ffffff',
};

const colorBadge: Record<string, string> = {
    Red: 'bg-[#FEC5BB] text-[#7a3b2e]',
    Blue: 'bg-[#D8E2DC] text-[#2d5a4e]',
    Green: 'bg-[#D8E2DC] text-[#2d5a4e]',
    Black: 'bg-[#E8E8E4] text-[#3a3a3a]',
    White: 'bg-[#FAE1DD] text-[#7a3b2e]',
};

const sizeBadge: Record<string, string> = {
    XS: 'bg-[#FCD5CE] text-[#7a3b2e]',
    S: 'bg-[#FAE1DD] text-[#7a3b2e]',
    M: 'bg-[#FEC5BB] text-[#7a3b2e]',
    L: 'bg-[#D8E2DC] text-[#2d5a4e]',
    XL: 'bg-[#E8E8E4] text-[#4a4a4a]',
    XXL: 'bg-[#FCD5CE] text-[#7a3b2e]',
};

export default function Table({ allOrders, setAllOrders, onEdit }: Props) {
    const [search, setSearch] = useState("");

    const filtered = allOrders.filter(o =>
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.color.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (index: number) => {
        const updated = allOrders.filter((_, i) => i !== index);
        setAllOrders(updated);
        localStorage.setItem("orders", JSON.stringify(updated));
    };

    const stats = [
        {
            label: 'Total Orders', value: allOrders.length,
            iconBg: 'linear-gradient(135deg, #FEC5BB 0%, #FCD5CE 100%)',
            glow: '#e8b0a8',
            icon: <svg width="20" height="20" fill="none" stroke="#5c3d38" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        },
        {
            label: 'Revenue',
            value: `$${allOrders.reduce((s, o) => s + (parseFloat(o.price) || 0), 0).toFixed(2)}`,
            iconBg: 'linear-gradient(135deg, #D8E2DC 0%, #c8d8d2 100%)',
            glow: '#c8d8d2',
            icon: <svg width="20" height="20" fill="none" stroke="#2d5a4e" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
        {
            label: 'Colors', value: new Set(allOrders.map(o => o.color)).size,
            iconBg: 'linear-gradient(135deg, #E8E8E4 0%, #d8d8d4 100%)',
            glow: '#d8d8d4',
            icon: <svg width="20" height="20" fill="none" stroke="#4a4a4a" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
        },
    ];

    return (
        <div className="font-sans">
            {/* Header */}
            <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #D8E2DC 0%, #c8d8d2 100%)', boxShadow: '4px 4px 14px #c8d8d2' }}>
                    <svg width="22" height="22" fill="none" stroke="#2d5a4e" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M3 14h18M10 4v16M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#5c3d38] leading-tight">All Orders</h1>
                    <p className="text-sm text-[#a07870] mt-1">Manage your order records</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-5">
                <input
                    className="w-full px-4 py-3 rounded-2xl text-sm text-[#5c3d38] outline-none bg-[#F8EDEB] border-2 border-transparent"
                    style={{ boxShadow: neu.inset }}
                    placeholder="🔍 Search by name or color..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {stats.map((s, i) => (
                    <div key={i} className="rounded-2xl p-5 flex items-center gap-4"
                        style={{ background: '#F8EDEB', boxShadow: neu.shadow }}>
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: s.iconBg, boxShadow: `4px 4px 10px ${s.glow}` }}>
                            {s.icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-extrabold text-[#a07870] uppercase tracking-widest">{s.label}</p>
                            <p className="text-2xl font-extrabold text-[#5c3d38] mt-1">{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block rounded-3xl overflow-hidden" style={{ background: '#F8EDEB', boxShadow: neu.shadow }}>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse">
                        <thead>
                            <tr style={{ background: 'linear-gradient(135deg, #FEC5BB 0%, #FCD5CE 100%)' }}>
                                {['No', 'Name', 'Title', 'Color', 'Size', 'Code', 'Price', 'Actions'].map((h, i) => (
                                    <th key={i} className="px-5 py-4 text-left text-[11px] font-extrabold text-[#5c3d38] uppercase tracking-widest">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="py-16 text-center">
                                        <p className="text-[#5c3d38] font-bold text-base">No orders yet</p>
                                        <p className="text-[#a07870] text-sm mt-1">Add one from the Order Form</p>
                                    </td>
                                </tr>
                            ) : filtered.map((order, index) => (
                                <tr key={index} className="border-b border-[#FAE1DD] hover:bg-[#FAE1DD] transition-colors duration-200">
                                    <td className="px-5 py-4 text-sm font-bold text-[#a07870]">{index + 1}</td>
                                    <td className="px-5 py-4 text-sm font-bold text-[#5c3d38]">{order.name}</td>
                                    <td className="px-5 py-4 text-sm text-[#a07870]">{order.title}</td>
                                    <td className="px-5 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${colorBadge[order.color] || 'bg-[#E8E8E4] text-[#5c3d38]'}`}>{order.color}</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${sizeBadge[order.size] || 'bg-[#E8E8E4] text-[#5c3d38]'}`}>{order.size}</span>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-[#a07870] font-mono">{order.code}</td>
                                    <td className="px-5 py-4 text-sm font-extrabold text-[#2d5a4e]">${parseFloat(order.price).toFixed(2)}</td>
                                    <td className="px-5 py-4">
                                        <div className="flex gap-2">
                                            <button onClick={() => onEdit(allOrders.indexOf(order))} className="w-9 h-9 rounded-xl flex items-center justify-center text-[#a07870] hover:text-[#5c3d38] transition-colors"
                                                style={{ background: '#F8EDEB', boxShadow: neu.btnShadow }}>
                                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                            </button>
                                            <button onClick={() => handleDelete(allOrders.indexOf(order))} className="w-9 h-9 rounded-xl flex items-center justify-center text-[#a07870] hover:text-[#e07060] transition-colors"
                                                style={{ background: '#F8EDEB', boxShadow: neu.btnShadow }}>
                                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {allOrders.length === 0 ? (
                    <div className="rounded-3xl p-8 text-center" style={{ background: '#F8EDEB', boxShadow: neu.shadow }}>
                        <p className="text-[#5c3d38] font-bold">No orders yet</p>
                        <p className="text-[#a07870] text-sm mt-1">Add one from the Order Form</p>
                    </div>
                ) : filtered.map((order, index) => (
                    <div key={index} className="rounded-3xl p-5" style={{ background: '#F8EDEB', boxShadow: neu.shadow }}>
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="font-extrabold text-[#5c3d38] text-base">{order.name}</p>
                                <p className="text-[#a07870] text-sm">{order.title}</p>
                            </div>
                            <p className="font-extrabold text-[#2d5a4e] text-lg">${parseFloat(order.price).toFixed(2)}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${colorBadge[order.color] || 'bg-[#E8E8E4] text-[#5c3d38]'}`}>{order.color}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${sizeBadge[order.size] || 'bg-[#E8E8E4] text-[#5c3d38]'}`}>{order.size}</span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAE1DD] text-[#a07870] font-mono">{order.code}</span>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button onClick={() => onEdit(allOrders.indexOf(order))} className="w-9 h-9 rounded-xl flex items-center justify-center text-[#a07870]"
                                style={{ background: '#F8EDEB', boxShadow: neu.btnShadow }}>
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </button>
                            <button onClick={() => handleDelete(allOrders.indexOf(order))} className="w-9 h-9 rounded-xl flex items-center justify-center text-[#e07060]"
                                style={{ background: '#F8EDEB', boxShadow: neu.btnShadow }}>
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
