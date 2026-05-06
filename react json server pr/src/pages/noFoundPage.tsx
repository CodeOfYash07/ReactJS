import { useNavigate } from "react-router";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="ml-[72px] min-h-screen bg-white font-['Jost',sans-serif]">
            {/* Topbar */}
            <div className="px-12 py-5 flex items-center justify-between border-b border-[#f0ede8]">
                <div className="flex items-center gap-6">
                    <span className="text-[11px] tracking-[.2em] uppercase text-[#bbb] font-medium">
                        Error 404
                    </span>
                    <div className="w-px h-4 bg-[#ece9e3]" />
                    <span className="text-[11px] tracking-[.1em] uppercase text-[#ccc]">
                        Page Not Found
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
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] px-12">
                <div className="text-center max-w-2xl mx-auto">
                    {/* Large 404 Number */}
                    <div className="mb-8">
                        <span className="font-['Cormorant_Garamond',serif] text-[180px] font-light text-[#0a0a0a] leading-none tracking-[-.02em]">
                            404
                        </span>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-12 h-px bg-[#ccc]" />
                        <span className="text-[10px] tracking-[.3em] uppercase text-[#bbb] font-medium">
                            Lost Your Way?
                        </span>
                        <span className="w-12 h-px bg-[#ccc]" />
                    </div>

                    {/* Heading */}
                    <h1 className="font-['Cormorant_Garamond',serif] text-3xl font-light text-[#0a0a0a] mb-4">
                        Page <strong className="font-semibold">Not Found</strong>
                    </h1>

                    {/* Description */}
                    <p className="text-[0.9rem] text-[#888] leading-relaxed font-light max-w-md mx-auto mb-10">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate("/")}
                            className="px-8 py-3.5 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[.15em] uppercase transition-all duration-300 hover:bg-[#222] hover:translate-x-[3px] flex items-center gap-3"
                        >
                            <FaHome size={11} /> Go Back Home
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-8 py-3.5 border border-[#ece9e3] text-[11px] font-medium tracking-[.15em] uppercase text-[#888] hover:bg-[#faf9f7] hover:border-[#ccc] transition-all duration-200 flex items-center gap-3"
                        >
                            <FaArrowLeft size={10} /> Go Back
                        </button>
                    </div>

                    {/* Help Text */}
                    <p className="text-[10px] tracking-[.1em] uppercase text-[#ccc] mt-8">
                        Check the URL or return to homepage
                    </p>
                </div>
            </div>
        </div>
    );
}