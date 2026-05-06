import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateProduct, fetchSingleProduct } from "../Services/ProductService";
import { toast } from "react-toastify";
import { FaArrowLeft, FaSave, FaImage, FaTag, FaBox, FaDollarSign, FaAlignLeft, FaList } from "react-icons/fa";

export default function EditProductPage() {
    const { productId } = useParams();
    const [form, setForm] = useState({
        p_name: "",
        p_price: 0,
        p_stock: 0,
        p_image: "",
        p_category: "",
        p_description: ""
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (productId) {
            fetchSingleProduct(productId).then(data => {
                if (data) {
                    setForm({
                        p_name: data.p_name || "",
                        p_price: data.p_price || 0,
                        p_stock: data.p_stock || 0,
                        p_image: data.p_image || "",
                        p_category: data.p_category || "",
                        p_description: data.p_description || "",
                    });
                }
                setLoading(false);
            });
        }
    }, [productId]);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        const ok = await updateProduct(productId || "", form);
        if (ok) {
            toast.success("Product Updated Successfully!");
            navigate("/product");
        }
    };

    if (loading) {
        return (
            <div className="ml-[72px] min-h-screen bg-white flex justify-center items-center">
                <div className="w-8 h-8 border-2 border-[#ece9e3] border-t-[#0a0a0a] rounded-full animate-spin" />
            </div>
        );
    }

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
                        Edit Existing Entry
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
            <div className="max-w-[1000px] mx-auto px-12 py-12 pb-20">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2.5 mb-5">
                        <span className="w-8 h-px bg-[#ccc]" />
                        <span className="text-[10px] tracking-[.3em] uppercase text-[#bbb] font-medium">
                            Edit Listing
                        </span>
                    </div>

                    <div>
                        <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-[-.01em] mb-3">
                            Edit <strong className="font-semibold">Product</strong>
                        </h1>
                        <p className="text-[0.9rem] text-[#888] leading-relaxed font-light max-w-md">
                            Update the product details below.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={submit} className="max-w-2xl">
                    <div className="space-y-6">
                        {/* Product Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                <FaTag size={10} /> Product Name *
                            </label>
                            <input
                                className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc] w-full"
                                placeholder="e.g., iPhone 15 Pro"
                                value={form.p_name}
                                onChange={e => setForm({ ...form, p_name: e.target.value })}
                                required
                            />
                        </div>

                        {/* Price and Stock - Side by Side */}
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                    <FaDollarSign size={10} /> Price (₹) *
                                </label>
                                <input
                                    type="number"
                                    className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc] w-full"
                                    placeholder="0"
                                    value={form.p_price}
                                    onChange={e => setForm({ ...form, p_price: Number(e.target.value) })}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                    <FaBox size={10} /> Stock *
                                </label>
                                <input
                                    type="number"
                                    className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc] w-full"
                                    placeholder="0"
                                    value={form.p_stock}
                                    onChange={e => setForm({ ...form, p_stock: Number(e.target.value) })}
                                    required
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                <FaList size={10} /> Category
                            </label>
                            <select
                                className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] w-full"
                                value={form.p_category}
                                onChange={e => setForm({ ...form, p_category: e.target.value })}
                            >
                                <option value="">Select Category</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Audio">Audio</option>
                                <option value="Wearables">Wearables</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                        </div>

                        {/* Image URL */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] flex items-center gap-2">
                                <FaImage size={10} /> Image URL
                            </label>
                            <input
                                className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc] w-full"
                                placeholder="https://images.unsplash.com/..."
                                value={form.p_image}
                                onChange={e => setForm({ ...form, p_image: e.target.value })}
                            />
                            {/* Image Preview */}
                            {form.p_image && (
                                <div className="mt-3 border border-[#ece9e3] bg-[#faf9f7] p-4 flex justify-center">
                                    <img
                                        src={form.p_image}
                                        alt="Preview"
                                        className="h-28 object-contain"
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
                                className="border border-[#ece9e3] p-4 rounded-none outline-none focus:border-[#0a0a0a] transition-all bg-white text-[#0a0a0a] text-sm font-['Jost'] placeholder:text-[#ccc] resize-none w-full"
                                rows={5}
                                placeholder="Describe the product specifications, features, and highlights..."
                                value={form.p_description}
                                onChange={e => setForm({ ...form, p_description: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="px-10 py-4 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[.15em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#222] hover:translate-x-[3px] flex items-center gap-3"
                            >
                                <FaSave size={11} /> Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/product")}
                                className="px-8 py-4 border border-[#ece9e3] text-[11px] font-medium tracking-[.15em] uppercase text-[#888] hover:bg-[#faf9f7] hover:border-[#ccc] transition-all duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}