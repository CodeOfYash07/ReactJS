import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeft, FaBolt, FaEdit, FaTrashAlt, FaShoppingCart, FaBox, FaTag, FaRupeeSign, FaTruck, FaShieldAlt } from "react-icons/fa";
import { fetchSingleProduct, deleteProduct, fetchCart, addToCart, updateCartItem } from "../Services/ProductService";
import type { productFetchType } from "../utils/global";
import { toast } from "react-toastify";

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productData, setProductData] = useState<productFetchType | null>(null);

    useEffect(() => { if (productId) getSingleProduct(); }, [productId]);

    const getSingleProduct = async () => {
        const data = await fetchSingleProduct(productId || "");
        if (data) setProductData(data);
    };

    const handleAddToCart = async () => {
        if (!productData) return;
        const cartItems = await fetchCart();
        const existing = cartItems.find(i => i.productId === productData.id);
        let status: boolean;
        if (existing) {
            status = await updateCartItem({ ...existing, quantity: existing.quantity + 1 });
        } else {
            status = await addToCart({
                productId: productData.id,
                p_name: productData.p_name,
                p_price: productData.p_price,
                p_image: productData.p_image,
                p_category: productData.p_category,
                quantity: 1,
            });
        }
        if (status) { toast.success("Added to cart!"); navigate("/cart"); }
        else toast.error("Failed to add to cart!");
    };

    const handleDelete = async () => {
        if (!productData) return;
        if (!confirm("Are you sure you want to delete this product?")) return;
        const status = await deleteProduct(productData.id);
        if (status) { toast.success("Product deleted!"); navigate("/product"); }
        else toast.error("Failed to delete product.");
    };

    if (!productData) {
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
                        Product Details
                    </span>
                    <div className="w-px h-4 bg-[#ece9e3]" />
                    <span className="text-[11px] tracking-[.1em] uppercase text-[#ccc]">
                        {productData.p_category || "Premium Asset"}
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
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-[#aaa] hover:text-[#0a0a0a] transition-colors mb-8 group text-[11px] tracking-[.1em] uppercase font-medium"
                >
                    <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Products
                </button>

                {/* Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left - Image Section */}
                    <div className="border border-[#ece9e3] bg-[#faf9f7] overflow-hidden relative">
                        <img
                            src={productData.p_image}
                            alt={productData.p_name}
                            className="w-full object-cover min-h-[350px] max-h-[480px] transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="text-[9px] tracking-[.2em] uppercase px-3 py-1.5 bg-white border border-[#ece9e3] text-[#0a0a0a] font-medium">
                                {productData.p_category || "GADGET"}
                            </span>
                        </div>
                    </div>

                    {/* Right - Product Info */}
                    <div className="flex flex-col space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 w-fit border border-[#ece9e3] bg-[#faf9f7]">
                            <FaBolt className="text-[#0a0a0a] text-[10px]" />
                            <span className="text-[9px] tracking-[.2em] uppercase text-[#0a0a0a] font-medium">
                                Product Specifications
                            </span>
                        </div>

                        {/* Title & Price */}
                        <div className="border-b border-[#ece9e3] pb-6">
                            <h1 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[#0a0a0a] leading-tight tracking-[-.01em]">
                                {productData.p_name}
                            </h1>
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] tracking-[.2em] uppercase text-[#bbb] block mb-1">Price</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-3xl font-light text-[#0a0a0a]">
                                        ₹{Number(productData.p_price).toLocaleString()}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] tracking-[.2em] uppercase text-[#bbb] block mb-1">Availability</span>
                                    <span className={`text-[11px] font-medium tracking-[.1em] uppercase ${productData.p_stock > 0 ? "text-green-600" : "text-red-500"}`}>
                                        {productData.p_stock > 0 ? `In Stock (${productData.p_stock} units)` : "Out of Stock"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-[10px] font-medium tracking-[.2em] uppercase text-[#bbb] mb-3 flex items-center gap-2">
                                <FaBox size={10} /> Description
                            </h3>
                            <p className="text-[0.9rem] text-[#888] leading-relaxed font-light">
                                {productData.p_description || "Premium tech product with industry-leading specifications and exceptional build quality."}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 gap-3 py-2">
                            <div className="flex items-center gap-3 text-[#888]">
                                <FaTruck className="text-[#bbb] text-[12px]" />
                                <span className="text-[11px]">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#888]">
                                <FaShieldAlt className="text-[#bbb] text-[12px]" />
                                <span className="text-[11px]">1 Year Warranty</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-2">
                            <button
                                onClick={handleAddToCart}
                                disabled={productData.p_stock <= 0}
                                className={`w-full flex items-center justify-center gap-3 py-4 px-6 text-[11px] font-medium tracking-[.15em] uppercase transition-all duration-300 ${productData.p_stock > 0
                                    ? "bg-[#0a0a0a] text-white hover:bg-[#222] hover:translate-x-[3px]"
                                    : "bg-[#ece9e3] text-[#aaa] cursor-not-allowed"
                                    }`}
                            >
                                <FaShoppingCart size={11} />
                                {productData.p_stock > 0 ? "Add to Cart" : "Out of Stock"}
                            </button>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => navigate(`/edit-product/${productData.id}`)}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#ece9e3] text-[#888] text-[10px] font-medium tracking-[.15em] uppercase hover:bg-[#faf9f7] hover:border-[#ccc] transition-all duration-200"
                                >
                                    <FaEdit size={10} /> Edit Product
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#ece9e3] text-[#888] text-[10px] font-medium tracking-[.15em] uppercase hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-200"
                                >
                                    <FaTrashAlt size={10} /> Delete
                                </button>
                            </div>

                            <p className="text-center text-[9px] tracking-[.1em] uppercase text-[#ccc] pt-3">
                                Free shipping on orders over ₹999 • Secure Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}