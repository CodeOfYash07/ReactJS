import { useState } from "react";
import { useNavigate } from "react-router";
import { addProduct } from "../Services/ProductService";
import { toast } from "react-toastify";
import { FaArrowLeft, FaPlus, FaImage, FaTag, FaBox, FaDollarSign, FaAlignLeft } from "react-icons/fa";

export default function AddProductPage() {
    const [form, setForm] = useState({
        p_name: "",
        p_price: 0,
        p_stock: 0,
        p_image: "",
        p_category: "",
        p_description: ""
    });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await addProduct(form);
        if (success) {
            toast.success("Product Cataloged");
            navigate("/product");
        }
    };

    return (
        <div className="ml-[72px] min-h-screen bg-white font-['Jost',sans-serif]">
            {/* Topbar */}
            <div className="px-12 py-5 flex items-center justify-between border-b border-[#f0ede8]">
                <div className="flex items-center gap-6">
                    <span className="text-[11px] tracking-[.2em] uppercase text-[#bbb] font-medium">
                        Product Management
                    </span>
                    <div className="w-px h-4 bg-[#ece9e3]" />
                    <span className="text-[11px] tracking-[.1em] uppercase text-[#ccc]">
                        Add New Asset
                    </span>
                </div>
                <button
                    onClick={() => navigate("/product")}
                    className="text-[11px] tracking-[.1em] uppercase text-[#aaa] bg-none border-none cursor-pointer font-['Jost'] flex items-center gap-2 hover:text-[#333] transition"
                >
                    <FaArrowLeft size={10} /> Back to Catalog
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-[1200px] mx-auto px-12 py-12 pb-20">
                {/* Header Section */}
                <div className="mb-14">
                    <div className="flex items-center gap-2.5 mb-5">
                        <span className="w-8 h-px bg-[#ccc]" />
                        <span className="text-[10px] tracking-[.3em] uppercase text-[#bbb] font-medium">
                            Create Listing
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-between items-end gap-6">
                        <div>
                            <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-[-.01em] mb-3">
                                Add <strong className="font-semibold">Product</strong>
                            </h1>
                            <p className="text-[0.9rem] text-[#888] leading-relaxed font-light max-w-md">
                                Specify technical parameters for the new listing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-3xl">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">

                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Product Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                    <FaTag size={10} /> Product Name
                                </label>
                                <input
                                    className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc]"
                                    placeholder="e.g., iPhone 15 Pro"
                                    onChange={e => setForm({ ...form, p_name: e.target.value })}
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                    <FaBox size={10} /> Category
                                </label>
                                <input
                                    className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc]"
                                    placeholder="e.g., Smartphones, Laptops, Audio"
                                    onChange={e => setForm({ ...form, p_category: e.target.value })}
                                />
                            </div>

                            {/* Price & Stock - side by side */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                        <FaDollarSign size={10} /> Price (₹)
                                    </label>
                                    <input
                                        type="number"
                                        className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc]"
                                        placeholder="0"
                                        onChange={e => setForm({ ...form, p_price: Number(e.target.value) })}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                        <FaBox size={10} /> Stock
                                    </label>
                                    <input
                                        type="number"
                                        className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc]"
                                        placeholder="0"
                                        onChange={e => setForm({ ...form, p_stock: Number(e.target.value) })}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Image URL */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                    <FaImage size={10} /> Image URL
                                </label>
                                <input
                                    className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc]"
                                    placeholder="https://images.unsplash.com/..."
                                    onChange={e => setForm({ ...form, p_image: e.target.value })}
                                />
                                {/* Image Preview */}
                                {form.p_image && (
                                    <div className="mt-3 border border-[#ece9e3] bg-[#faf9f7] p-3 flex justify-center">
                                        <img
                                            src={form.p_image}
                                            alt="Preview"
                                            className="h-24 object-contain"
                                            onError={(e) => (e.currentTarget.style.display = 'none')}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                    <FaAlignLeft size={10} /> Description
                                </label>
                                <textarea
                                    className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc] resize-none"
                                    rows={5}
                                    placeholder="Describe the product specifications, features, and highlights..."
                                    onChange={e => setForm({ ...form, p_description: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button - matches HomePage button style */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="px-10 py-4 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[.15em] uppercase border-none cursor-pointer transition-all duration-300 hover:bg-[#222] hover:translate-x-[3px] flex items-center gap-3 shadow-sm"
                        >
                            <FaPlus size={11} /> Deploy to Catalog
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/product")}
                            className="px-8 py-4 border border-[#ece9e3] text-[11px] font-medium tracking-[.15em] uppercase text-[#888] hover:bg-[#faf9f7] hover:border-[#ccc] transition-all duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}