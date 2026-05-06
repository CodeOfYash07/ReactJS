import { useNavigate, useLocation } from "react-router";
import { FaHome, FaPlus, FaBoxOpen, FaShoppingCart } from "react-icons/fa";

const navItems = [
    { icon: FaHome, label: "Home", path: "/" },
    { icon: FaPlus, label: "Add Product", path: "/addProduct" },
    { icon: FaBoxOpen, label: "All Products", path: "/product" },
    { icon: FaShoppingCart, label: "Cart", path: "/cart" },
];

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside
            className="fixed left-0 top-0 h-full w-[72px] flex flex-col items-center py-8 gap-6 z-50"
            style={{
                background: "rgba(5,5,16,0.95)",
                backdropFilter: "blur(20px)",
                borderRight: "1px solid rgba(139,92,246,0.15)",
                fontFamily: "'Space Grotesk', sans-serif"
            }}
        >
            {/* Logo dot */}
            <div
                className="w-8 h-8 rounded-xl mb-4 cursor-pointer"
                style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", boxShadow: "0 0 16px rgba(124,58,237,0.5)" }}
                onClick={() => navigate("/")}
            />

            {navItems.map(({ icon: Icon, label, path }) => {
                const active = location.pathname === path;
                return (
                    <button
                        key={path}
                        onClick={() => navigate(path)}
                        title={label}
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 group relative"
                        style={{
                            background: active ? "linear-gradient(135deg,#7c3aed,#a855f7)" : "rgba(255,255,255,0.04)",
                            border: active ? "none" : "1px solid rgba(139,92,246,0.15)",
                            color: active ? "#fff" : "#6b7280",
                            boxShadow: active ? "0 4px 14px rgba(124,58,237,0.4)" : "none",
                        }}
                    >
                        <Icon size={16} />
                        {/* Tooltip */}
                        <span
                            className="absolute left-14 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                            style={{ background: "rgba(20,20,35,0.95)", color: "#e2e8f0", border: "1px solid rgba(139,92,246,0.2)" }}
                        >
                            {label}
                        </span>
                    </button>
                );
            })}
        </aside>
    );
}
