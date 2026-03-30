import { useState, useEffect } from 'react'
import { ShoppingBag, Heart, User, Search, Menu, X, ChevronRight } from 'lucide-react'

const navLinks = ['Shop', 'Men', 'Women', 'New Arrivals']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(3)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-[#131921] text-white text-[11px] py-2 px-4 hidden md:block transition-all duration-500 ${scrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex gap-6 items-center">
            <span className="hover:text-orange-400 cursor-pointer transition">Get 10% off on first order</span>
            <div className="w-[1px] h-3 bg-gray-600"></div>
            <span className="hover:text-orange-400 cursor-pointer transition">Free shipping over ₹4999</span>
          </div>
          <div className="flex gap-5">
            {['Help', 'Track Order', 'Sell on Vêtu'].map((item) => (
              <span key={item} className="hover:underline cursor-pointer opacity-90 hover:opacity-100">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="font-black text-2xl tracking-tighter text-black uppercase">Vêtu</span>
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for styles..."
                className="w-full py-2.5 px-5 pr-12 border border-gray-200 rounded-full focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all bg-gray-50 text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                <Search size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Action Icons - FIXED VISIBILITY */}
          <div className="flex items-center gap-4 md:gap-6 text-black">
            {/* Account */}
            <button className="hidden md:flex flex-col items-center hover:scale-110 transition-transform group">
              <User size={22} strokeWidth={1.5} className="group-hover:stroke-[2px]" />
              <span className="text-[9px] font-bold uppercase mt-1">Profile</span>
            </button>

            {/* Wishlist */}
            <button className="relative hover:scale-110 transition-transform group p-1">
              <Heart size={22} strokeWidth={1.5} className="group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">0</span>
            </button>

            {/* Cart */}
            <button className="relative hover:scale-110 transition-transform group p-1">
              <ShoppingBag size={22} strokeWidth={1.5} className="group-hover:stroke-[2px]" />
              <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">{cartCount}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="hidden md:flex justify-center border-t border-gray-100 bg-white">
          <div className="flex items-center gap-10 py-3">
            {navLinks.map((link) => (
              <a key={link} href="#" className="relative text-[12px] font-bold uppercase tracking-wider text-gray-800 hover:text-black transition group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#" className="text-[12px] font-bold uppercase tracking-wider text-red-600 hover:text-red-700">
              🔥 Sale
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 ease-in-out z-50 ${menuOpen ? 'max-h-screen border-t opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-lg font-semibold flex justify-between items-center border-b border-gray-50 pb-3">
                {link} <ChevronRight size={18} className="text-gray-400" />
              </a>
            ))}
            <a href="#" className="text-lg font-semibold text-red-600">Sale %</a>
          </div>
        </div>
      </header>
    </>
  )
}