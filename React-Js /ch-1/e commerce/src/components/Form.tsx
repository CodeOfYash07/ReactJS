import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type orderType = {
    name: string;
    title: string;
    color: string;
    size: string;
    code: string;
    price: string;
};

export default function Form() {
    const [name, setName] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [error, setError] = useState<any>({});
    const [allOrders, setAllOrders] = useState<orderType[]>(
        JSON.parse(localStorage.getItem("orders") || "[]")
    );

    const allColors = ["Red", "Blue", "Green", "Black", "White"];
    const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(allOrders));
    }, [allOrders]);

    const validation = () => {
        let newError: any = {};
        if (!name) newError.name = "Name is required..";
        if (!title) newError.title = "Title is required..";
        if (!color) newError.color = "Color is required..";
        if (!size) newError.size = "Size is required..";
        if (!code) newError.code = "Code is required..";
        if (!price) newError.price = "Price is required..";
        else if (isNaN(Number(price))) newError.price = "Price must be a number..";
        setError(newError);
        return Object.keys(newError).length;
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (validation() !== 0) return;

        const orderData: orderType = { name, title, color, size, code, price };
        setAllOrders(prev => [...prev, orderData]);

        setName(""); setTitle(""); setColor(""); setSize(""); setCode(""); setPrice("");
        toast.success("Order added successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12 relative overflow-hidden font-sans font-medium">
            <ToastContainer />
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col pt-8 animate-fade-in-down">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-4 shadow-sm uppercase">
                        Minimalist Design
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Order Form
                    </h1>
                    <p className="text-slate-500 text-lg">A seamless, clean data entry experience</p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-white/50">
                        <h2 className="text-slate-900 text-2xl font-bold">Details</h2>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>

                    <form className="p-10 space-y-8" onSubmit={handleSubmit}>
                        {/* Name & Title */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full px-5 py-4 rounded-2xl border ${error.name ? "border-red-400 bg-red-50/50 text-red-900" : "border-slate-200 bg-slate-50/50 text-slate-900"} placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                                    placeholder="Enter product name"
                                />
                                {error.name && <span className="text-red-500 text-sm font-bold">{error.name}</span>}
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Title <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className={`w-full px-5 py-4 rounded-2xl border ${error.title ? "border-red-400 bg-red-50/50 text-red-900" : "border-slate-200 bg-slate-50/50 text-slate-900"} placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                                    placeholder="Enter product title"
                                />
                                {error.title && <span className="text-red-500 text-sm font-bold">{error.title}</span>}
                            </div>
                        </div>

                        {/* Color & Size */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Color <span className="text-red-500">*</span></label>
                                <select
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className={`w-full px-5 py-4 rounded-2xl border ${error.color ? "border-red-400 bg-red-50/50 text-red-900" : "border-slate-200 bg-slate-50/50 text-slate-900"} focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                                >
                                    <option value="">Select a color</option>
                                    {allColors.map((c, i) => <option key={i} value={c}>{c}</option>)}
                                </select>
                                {error.color && <span className="text-red-500 text-sm font-bold">{error.color}</span>}
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Size <span className="text-red-500">*</span></label>
                                <select
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className={`w-full px-5 py-4 rounded-2xl border ${error.size ? "border-red-400 bg-red-50/50 text-red-900" : "border-slate-200 bg-slate-50/50 text-slate-900"} focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                                >
                                    <option value="">Select a size</option>
                                    {allSizes.map((s, i) => <option key={i} value={s}>{s}</option>)}
                                </select>
                                {error.size && <span className="text-red-500 text-sm font-bold">{error.size}</span>}
                            </div>
                        </div>

                        {/* Code & Price */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Code / SKU <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className={`w-full px-5 py-4 rounded-2xl border ${error.code ? "border-red-400 bg-red-50/50 text-red-900" : "border-slate-200 bg-slate-50/50 text-slate-900"} placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                                    placeholder="e.g. SKU-1234"
                                />
                                {error.code && <span className="text-red-500 text-sm font-bold">{error.code}</span>}
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Price ($) <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                    <input
                                        type="text"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className={`w-full pl-10 pr-5 py-4 rounded-2xl border ${error.price ? "border-red-400 bg-red-50/50 text-red-900" : "border-slate-200 bg-slate-50/50 text-slate-900"} placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300`}
                                        placeholder="0.00"
                                    />
                                </div>
                                {error.price && <span className="text-red-500 text-sm font-bold">{error.price}</span>}
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="w-full rounded-2xl font-bold text-lg text-white py-5 px-6 bg-slate-900 hover:bg-black hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                            >
                                Confirm Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
