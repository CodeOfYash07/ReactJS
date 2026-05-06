import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Table from "./Table";

type orderType = {
    name: string; title: string; color: string;
    size: string; code: string; price: string;
};

const neu = {
    shadow: '6px 6px 14px #ddd0ce, -6px -6px 14px #ffffff',
    inset: 'inset 4px 4px 10px #ddd0ce, inset -4px -4px 10px #ffffff',
    btnShadow: '6px 6px 16px #e8b0a8, -2px -2px 8px #ffffff',
};

export default function Form() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [code, setCode] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState<any>({});
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [allOrders, setAllOrders] = useState<orderType[]>(
        JSON.parse(localStorage.getItem("orders") || "[]")
    );

    const allColors = ["Red", "Blue", "Green", "Black", "White"];
    const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(allOrders));
    }, [allOrders]);

    const validation = () => {
        let e: any = {};
        if (!name) e.name = "Name is required";
        if (!title) e.title = "Title is required";
        if (!color) e.color = "Color is required";
        if (!size) e.size = "Size is required";
        if (!code) e.code = "Code is required";
        if (!price) e.price = "Price is required";
        else if (isNaN(Number(price))) e.price = "Must be a number";
        setError(e);
        return Object.keys(e).length;
    };

    const handleEdit = (index: number) => {
        const o = allOrders[index];
        setName(o.name); setTitle(o.title); setColor(o.color);
        setSize(o.size); setCode(o.code); setPrice(o.price);
        setEditIndex(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validation() !== 0) return;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        if (editIndex !== null) {
            const updated = [...allOrders];
            updated[editIndex] = { name, title, color, size, code, price };
            setAllOrders(updated);
            setEditIndex(null);
            toast.success("Order updated successfully!");
        } else {
            setAllOrders(prev => [...prev, { name, title, color, size, code, price }]);
            toast.success("Order added successfully!");
        }
        setName(""); setTitle(""); setColor(""); setSize(""); setCode(""); setPrice("");
    };

    const inputCls = (hasError: boolean) =>
        `w-full px-4 py-3 rounded-2xl text-sm text-[#5c3d38] outline-none bg-[#F8EDEB] border-2 transition-all duration-200 ${hasError ? 'border-[#e07060]' : 'border-transparent'}`;

    return (
        <>
        <div className="rounded-3xl p-6 md:p-10" style={{ background: '#F8EDEB', boxShadow: neu.shadow }}>
            <ToastContainer position="top-right" />

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FEC5BB 0%, #FCD5CE 100%)', boxShadow: '4px 4px 14px #e8b0a8' }}>
                    <svg width="22" height="22" fill="none" stroke="#5c3d38" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#5c3d38] leading-tight">Order Form</h1>
                    <p className="text-sm text-[#a07870] mt-1">Fill in the product details</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div>
                        <label className="block text-[11px] font-extrabold text-[#a07870] uppercase tracking-widest mb-2">
                            Name <span className="text-[#e07060]">*</span>
                        </label>
                        <input
                            className={inputCls(!!error.name)}
                            style={{ boxShadow: neu.inset }}
                            value={name} onChange={e => setName(e.target.value)}
                            placeholder="Product name"
                        />
                        {error.name && <p className="text-[#e07060] text-xs font-semibold mt-1">{error.name}</p>}
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-[11px] font-extrabold text-[#a07870] uppercase tracking-widest mb-2">
                            Title <span className="text-[#e07060]">*</span>
                        </label>
                        <input
                            className={inputCls(!!error.title)}
                            style={{ boxShadow: neu.inset }}
                            value={title} onChange={e => setTitle(e.target.value)}
                            placeholder="Product title"
                        />
                        {error.title && <p className="text-[#e07060] text-xs font-semibold mt-1">{error.title}</p>}
                    </div>

                    {/* Color */}
                    <div>
                        <label className="block text-[11px] font-extrabold text-[#a07870] uppercase tracking-widest mb-2">
                            Color <span className="text-[#e07060]">*</span>
                        </label>
                        <select
                            className={inputCls(!!error.color)}
                            style={{ boxShadow: neu.inset }}
                            value={color} onChange={e => setColor(e.target.value)}
                        >
                            <option value="">Select color</option>
                            {allColors.map((c, i) => <option key={i} value={c}>{c}</option>)}
                        </select>
                        {error.color && <p className="text-[#e07060] text-xs font-semibold mt-1">{error.color}</p>}
                    </div>

                    {/* Size */}
                    <div>
                        <label className="block text-[11px] font-extrabold text-[#a07870] uppercase tracking-widest mb-2">
                            Size <span className="text-[#e07060]">*</span>
                        </label>
                        <select
                            className={inputCls(!!error.size)}
                            style={{ boxShadow: neu.inset }}
                            value={size} onChange={e => setSize(e.target.value)}
                        >
                            <option value="">Select size</option>
                            {allSizes.map((s, i) => <option key={i} value={s}>{s}</option>)}
                        </select>
                        {error.size && <p className="text-[#e07060] text-xs font-semibold mt-1">{error.size}</p>}
                    </div>

                    {/* Code */}
                    <div>
                        <label className="block text-[11px] font-extrabold text-[#a07870] uppercase tracking-widest mb-2">
                            Code / SKU <span className="text-[#e07060]">*</span>
                        </label>
                        <input
                            className={inputCls(!!error.code)}
                            style={{ boxShadow: neu.inset }}
                            value={code} onChange={e => setCode(e.target.value)}
                            placeholder="SKU-1234"
                        />
                        {error.code && <p className="text-[#e07060] text-xs font-semibold mt-1">{error.code}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-[11px] font-extrabold text-[#a07870] uppercase tracking-widest mb-2">
                            Price ($) <span className="text-[#e07060]">*</span>
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c47b6e] font-extrabold text-base">$</span>
                            <input
                                className={`${inputCls(!!error.price)} pl-8`}
                                style={{ boxShadow: neu.inset }}
                                value={price} onChange={e => setPrice(e.target.value)}
                                placeholder="0.00"
                            />
                        </div>
                        {error.price && <p className="text-[#e07060] text-xs font-semibold mt-1">{error.price}</p>}
                    </div>
                </div>

                {/* Submit */}
                <div className="mt-8 flex gap-3">
                    <button
                        type="submit"
                        className="flex-1 py-4 rounded-2xl font-extrabold text-[#5c3d38] text-base tracking-wide transition-all duration-200 active:scale-[0.98]"
                        style={{ background: 'linear-gradient(135deg, #FEC5BB 0%, #f9a99d 100%)', boxShadow: neu.btnShadow }}
                    >
                        {editIndex !== null ? '✏️ Update Order' : '+ Add Order'}
                    </button>
                    {editIndex !== null && (
                        <button
                            type="button"
                            onClick={() => { setEditIndex(null); setName(''); setTitle(''); setColor(''); setSize(''); setCode(''); setPrice(''); setError({}); }}
                            className="px-6 py-4 rounded-2xl font-extrabold text-[#a07870] text-base tracking-wide transition-all duration-200 active:scale-[0.98]"
                            style={{ background: '#F8EDEB', boxShadow: neu.btnShadow }}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>

        {/* All Orders below form */}
        <div className="mt-8">
            <Table allOrders={allOrders} setAllOrders={setAllOrders} onEdit={handleEdit} />
        </div>
        </>
    );
}
