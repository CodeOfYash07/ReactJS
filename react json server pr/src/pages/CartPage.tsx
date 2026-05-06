import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchCart, removeFromCart } from "../Services/ProductService";
import { FaArrowLeft, FaTrashAlt, FaShoppingBag, FaRupeeSign, FaTag, FaBox } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CartPage() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { fetchCart().then(setItems); }, []);

    const total = items.reduce((a, b) => a + (b.p_price * b.quantity), 0);
    const itemCount = items.reduce((a, b) => a + b.quantity, 0);

    const handleRemove = async (id: string, name: string) => {
        const success = await removeFromCart(id);
        if (success) {
            setItems(prev => prev.filter(x => x.id !== id));
            toast.success(`${name} removed from cart`);
        } else {
            toast.error("Failed to remove item");
        }
    };

    return (
        <div className="ml-[72px] min-h-screen bg-white font-['Jost',sans-serif]">
            {/* Topbar */}
            <div className="px-12 py-5 flex items-center justify-between border-b border-[#f0ede8]">
                <div className="flex items-center gap-6">
                    <span className="text-[11px] tracking-[.2em] uppercase text-[#bbb] font-medium">
                        Shopping Cart
                    </span>
                    <div className="w-px h-4 bg-[#ece9e3]" />
                    <span className="text-[11px] tracking-[.1em] uppercase text-[#ccc]">
                        {itemCount} {itemCount === 1 ? 'item' : 'items'}
                    </span>
                </div>
                <button
                    onClick={() => navigate("/product")}
                    className="text-[11px] tracking-[.1em] uppercase text-[#aaa] bg-none border-none cursor-pointer font-['Jost'] flex items-center gap-2 hover:text-[#333] transition"
                >
                    <FaArrowLeft size={10} /> Continue Shopping
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-[1200px] mx-auto px-12 py-12 pb-20">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2.5 mb-5">
                        <span className="w-8 h-px bg-[#ccc]" />
                        <span className="text-[10px] tracking-[.3em] uppercase text-[#bbb] font-medium">
                            Your Selection
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-between items-end gap-6">
                        <div>
                            <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light text-[#0a0a0a] leading-[1.1] tracking-[-.01em] mb-3">
                                Shopping <strong className="font-semibold">Cart</strong>
                            </h1>
                            <p className="text-[0.9rem] text-[#888] leading-relaxed font-light max-w-md">
                                Review and manage your selected items.
                            </p>
                        </div>
                    </div>
                </div>

                {items.length > 0 ? (
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Cart Items - Left Column */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((i, idx) => (
                                <div
                                    key={i.id}
                                    className="border border-[#ece9e3] p-5 flex items-center gap-6 transition-all duration-200 hover:bg-[#faf9f7]"
                                >
                                    {/* Product Image */}
                                    <div className="w-24 h-24 flex-shrink-0 border border-[#f0ede8] bg-[#faf9f7] overflow-hidden">
                                        <img
                                            src={i.p_image}
                                            alt={i.p_name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1">
                                        <div className="mb-1">
                                            <span className="text-[9px] tracking-[.2em] uppercase text-[#bbb] font-medium">
                                                {i.p_category || "GADGET"}
                                            </span>
                                        </div>
                                        <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold text-[#0a0a0a] leading-tight mb-2">
                                            {i.p_name}
                                        </h4>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <FaRupeeSign size={10} className="text-[#888]" />
                                                <span className="text-lg font-light text-[#0a0a0a]">
                                                    {i.p_price.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] tracking-[.1em] uppercase text-[#bbb]">Qty:</span>
                                                <span className="text-sm text-[#0a0a0a]">{i.quantity}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[10px] tracking-[.1em] uppercase text-[#bbb]">Total:</span>
                                                <span className="text-sm font-medium text-[#0a0a0a]">
                                                    ₹{(i.p_price * i.quantity).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemove(i.id, i.p_name)}
                                        className="w-10 h-10 flex items-center justify-center border border-[#ece9e3] text-[#aaa] hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-all duration-200 flex-shrink-0"
                                        title="Remove item"
                                    >
                                        <FaTrashAlt size={12} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary - Right Column */}
                        <div className="lg:col-span-1">
                            <div className="border border-[#ece9e3] bg-[#faf9f7] p-8 sticky top-8">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2.5 mb-4">
                                        <span className="w-6 h-px bg-[#ccc]" />
                                        <span className="text-[9px] tracking-[.3em] uppercase text-[#bbb] font-medium">
                                            Order Summary
                                        </span>
                                    </div>
                                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#0a0a0a]">
                                        Total <strong className="font-semibold">Amount</strong>
                                    </h3>
                                </div>

                                {/* Breakdown */}
                                <div className="space-y-3 mb-6 pb-6 border-b border-[#ece9e3]">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#888]">Subtotal ({itemCount} items)</span>
                                        <span className="text-[#0a0a0a]">₹{total.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#888]">Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#888]">Tax (GST)</span>
                                        <span className="text-[#0a0a0a]">Included</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-[10px] tracking-[.2em] uppercase text-[#bbb] font-medium">Total Amount</span>
                                    <span className="font-['Cormorant_Garamond',serif] text-3xl font-light text-[#0a0a0a]">
                                        ₹{total.toLocaleString()}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    onClick={() => toast.info("Checkout coming soon!")}
                                    className="w-full py-4 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[.15em] uppercase transition-all duration-300 hover:bg-[#222] hover:translate-x-[3px] flex items-center justify-center gap-3"
                                >
                                    <FaShoppingBag size={12} /> Proceed to Checkout
                                </button>

                                <p className="text-center text-[9px] tracking-[.1em] uppercase text-[#ccc] mt-4">
                                    Secure Payment • 100% Authentic
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Empty Cart State */
                    <div className="text-center py-28 px-10 border border-[#ece9e3] bg-[#faf9f7]">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5">
                            <FaShoppingBag size={32} className="text-[#ccc]" />
                        </div>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#0a0a0a] mb-2">
                            Your cart is empty
                        </h3>
                        <p className="text-[13px] text-[#aaa] tracking-[.02em] mb-6">
                            Looks like you haven't added any items yet
                        </p>
                        <button
                            onClick={() => navigate("/product")}
                            className="px-8 py-3.5 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[.15em] uppercase transition-all duration-300 hover:bg-[#222] hover:translate-x-[3px] inline-flex items-center gap-3"
                        >
                            Browse Products
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}