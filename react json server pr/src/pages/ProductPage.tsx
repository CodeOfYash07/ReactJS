import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { deleteProduct, fetchAllProducts } from "../Services/ProductService";
import ProductCard from "../components/ProductCard";
import type { productFetchType } from "../utils/global";
import { FaPlus, FaSearch, FaBox, FaArrowLeft, FaFilter } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ViewProductPage() {
    const [products, setProducts] = useState<productFetchType[]>([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllProducts().then(setProducts);
    }, []);

    const filtered = useMemo(() => {
        return products.filter(p => p.p_name?.toLowerCase().includes(query.toLowerCase()));
    }, [products, query]);

    const handleDelete = async (id: string) => {
        if (confirm("Delete this product?")) {
            const success = await deleteProduct(id);
            if (success) {
                setProducts(prev => prev.filter(p => p.id !== id));
                toast.success("Product deleted");
            } else {
                toast.error("Failed");
            }
        }
    };

    return (
        <div className="ml-[72px] min-h-screen bg-white font-['Jost',sans-serif]">
            {/* Topbar */}
            <div className="px-12 py-5 flex items-center justify-between border-b border-[#f0ede8]">
                <div className="flex items-center gap-6">
                    <span className="text-[11px] tracking-[.2em] uppercase text-[#bbb] font-medium">
                        Inventory • {filtered.length} products
                    </span>
                    <div className="w-px h-4 bg-[#ece9e3]" />
                    <span className="text-[11px] tracking-[.1em] uppercase text-[#ccc]">
                        {products.length} total assets
                    </span>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="text-[11px] tracking-[.1em] uppercase text-[#aaa] bg-none border-none cursor-pointer font-['Jost'] flex items-center gap-2 hover:text-[#333] transition"
                >
                    <FaArrowLeft size={10} /> Back to Home
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-12 py-12 pb-20">
                {/* Header Section */}
                <div className="mb-14">
                    <div className="flex items-center gap-2.5 mb-5">
                        <span className="w-8 h-px bg-[#ccc]" />
                        <span className="text-[10px] tracking-[.3em] uppercase text-[#bbb] font-medium">
                            Asset Management
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-between items-end gap-6">
                        <div>
                            <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-[-.01em] mb-3">
                                Product <strong className="font-semibold">Catalog</strong>
                            </h1>
                            <p className="text-[0.9rem] text-[#888] leading-relaxed font-light max-w-md">
                                Explore our curated collection of premium tech products.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate("/addProduct")}
                            className="px-8 py-3.5 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[.15em] uppercase border-none cursor-pointer transition-all duration-300 hover:bg-[#222] hover:translate-x-[3px] flex items-center gap-3 shadow-sm"
                        >
                            <FaPlus size={12} /> Add Product
                        </button>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="mb-14">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <div className="flex items-center border-b border-[#ece9e3] pb-3">
                                <FaSearch className="text-[#bbb] text-sm mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full border-none outline-none text-sm font-['Jost'] font-normal tracking-[.02em] text-[#0a0a0a] bg-transparent placeholder:text-[#bbb]"
                                />
                                {query && (
                                    <button
                                        onClick={() => setQuery("")}
                                        className="bg-none border-none text-[11px] text-[#bbb] cursor-pointer font-['Jost'] hover:text-[#333] transition"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>

                        <button className="px-4 py-2 border border-[#ece9e3] text-[11px] tracking-[.1em] uppercase text-[#888] hover:bg-[#faf9f7] hover:border-[#ccc] transition flex items-center gap-2">
                            <FaFilter size={10} /> Filter
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                {filtered.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map(p => (
                                <ProductCard
                                    key={p.id}
                                    product={p}
                                    onView={(id) => navigate(`/product-detail/${id}`)}
                                    onEdit={(id) => navigate(`/edit-product/${id}`)}
                                    onDelete={() => handleDelete(p.id)}
                                />
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <span className="text-[9px] tracking-[.2em] uppercase text-[#ccc]">
                                {filtered.length} of {products.length} products displayed
                            </span>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-28 px-10 border border-[#ece9e3] bg-[#faf9f7]">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5">
                            <FaBox size={32} className="text-[#ccc]" />
                        </div>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#0a0a0a] mb-2">
                            No products found
                        </h3>
                        <p className="text-[13px] text-[#aaa] tracking-[.02em] mb-6">
                            {query ? `No results for "${query}"` : "Your inventory is empty"}
                        </p>
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                className="text-[11px] tracking-[.15em] uppercase text-[#888] border-b border-[#ccc] hover:text-[#0a0a0a] transition"
                            >
                                Clear search
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}