import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import type { productFetchType } from "../utils/global";

interface Props {
    product: productFetchType;
    onView: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function ProductCard({ product, onView, onEdit, onDelete }: Props) {
    return (
        <div
            className="group bg-white border border-[#ece9e3] p-6 transition-all duration-300 hover:bg-[#faf9f7] hover:border-[#d0d0d0] cursor-pointer"
            onClick={() => onView(product.id)}
        >
            {/* Image Section */}
            <div className="h-48 flex items-center justify-center mb-5 bg-[#faf9f7] border border-[#f0ede8] overflow-hidden">
                {product.p_image ? (
                    <img
                        src={product.p_image}
                        alt={product.p_name}
                        className="h-36 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="text-[#ccc] text-xs tracking-wide uppercase">No Image</div>
                )}
            </div>

            {/* Category Badge */}
            <div className="mb-4">
                <span className="text-[9px] tracking-[.2em] uppercase text-[#bbb] font-medium">
                    {product.p_category}
                </span>
            </div>

            {/* Product Name */}
            <h3 className="font-['Cormorant_Garamond',serif] text-xl font-semibold text-[#0a0a0a] mb-2 leading-tight">
                {product.p_name}
            </h3>

            {/* Description */}
            <p className="text-[11px] text-[#aaa] leading-relaxed mb-4 line-clamp-2 font-light">
                {product.p_description}
            </p>

            {/* Divider */}
            <div className="h-px bg-[#ece9e3] my-4" />

            {/* Price & Actions */}
            <div className="flex justify-between items-end">
                <div>
                    <div className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#0a0a0a]">
                        ₹{product.p_price.toLocaleString()}
                    </div>
                    <div className="text-[9px] tracking-[.1em] uppercase text-[#bbb] mt-1">
                        {product.p_stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onView(product.id);
                        }}
                        className="w-8 h-8 flex items-center justify-center border border-[#ece9e3] bg-white text-[#888] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-200"
                        title="View"
                    >
                        <FaEye size={12} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(product.id);
                        }}
                        className="w-8 h-8 flex items-center justify-center border border-[#ece9e3] bg-white text-[#888] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-200"
                        title="Edit"
                    >
                        <FaEdit size={12} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(product.id);
                        }}
                        className="w-8 h-8 flex items-center justify-center border border-[#ece9e3] bg-white text-[#888] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
                        title="Delete"
                    >
                        <FaTrash size={11} />
                    </button>
                </div>
            </div>
        </div>
    );
}