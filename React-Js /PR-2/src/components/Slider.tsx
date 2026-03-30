import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react'

const sliderData = [
  {
    id: 1,
    badge: 'Limited Edition',
    title: 'AIR MAX DN8',
    subtitle: 'Revolutionary comfort meets iconic style',
    description: 'Step into the future with our most advanced sneaker technology.',
    price: '₹14,995',
    cta: 'Shop Now',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=90',
    tag: 'New Release'
  },
  {
    id: 2,
    badge: 'Best Seller',
    title: 'TECH FLEECE',
    subtitle: 'Winter essentials reimagined',
    description: 'Premium comfort with sustainable materials for the urban explorer.',
    price: '₹6,499',
    cta: 'Explore Collection',
    img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1400&q=90',
    tag: '-25% OFF'
  },
  {
    id: 3,
    badge: 'Member Exclusive',
    title: 'ESSENTIALS',
    subtitle: 'Minimalist. Timeless. Essential.',
    description: 'Capsule collection for the modern wardrobe. Designed for versatility.',
    price: 'From ₹2,999',
    cta: 'Shop Collection',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=90',
    tag: 'Limited Stock'
  }
]

export default function Slider() {
  const [[current, dir], setCurrent] = useState([0, 0])

  const activeIndex = Math.abs(current % sliderData.length)

  function goTo(direction: number) {
    setCurrent([current + direction, direction])
  }

  useEffect(() => {
    const autoPlay = setInterval(() => goTo(1), 8000)
    return () => clearInterval(autoPlay)
  }, [current])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const activeSlide = sliderData[activeIndex]

  return (
    <div className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {/* bg image with zoom effect */}
          <motion.img
            src={activeSlide.img}
            alt={activeSlide.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          {/* main content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  <span className="text-[10px] uppercase font-bold text-white tracking-[2px]">{activeSlide.badge}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl md:text-8xl font-black text-white leading-none mb-4 tracking-tighter"
                >
                  {activeSlide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-white/90 font-medium mb-6 italic"
                >
                  {activeSlide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-5 mb-10"
                >
                  <span className="text-4xl font-light text-white">{activeSlide.price}</span>
                  <div className="h-8 w-[1px] bg-white/20" />
                  <span className="text-sm font-bold text-yellow-400 tracking-widest uppercase">
                    {activeSlide.tag}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-white text-black px-10 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    {activeSlide.cta}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
                    VIEW DETAILS
                  </button>
                </motion.div>

                {/* trust badges */}
                <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-white/10 max-w-lg">
                  <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition">
                    <Truck size={16} className="text-white" />
                    <span className="text-[10px] uppercase font-bold text-white tracking-wider">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition">
                    <RefreshCw size={16} className="text-white" />
                    <span className="text-[10px] uppercase font-bold text-white tracking-wider">Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition">
                    <ShieldCheck size={16} className="text-white" />
                    <span className="text-[10px] uppercase font-bold text-white tracking-wider">Genuine Care</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* prev / next buttons */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-30">
        <button
          onClick={() => goTo(-1)}
          className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => goTo(1)}
          className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* dot indicators */}
      <div className="absolute bottom-12 left-12 flex items-end gap-3 z-30">
        {sliderData.map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className={`text-[10px] font-bold ${activeIndex === i ? 'text-white' : 'text-white/20'}`}>
              0{i + 1}
            </span>
            <button
              onClick={() => setCurrent([i, i > activeIndex ? 1 : -1])}
              className={`h-[4px] rounded-full transition-all duration-500 ${
                activeIndex === i ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
