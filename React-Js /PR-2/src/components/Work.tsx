import { useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  image: string
  badge?: string
  isNew?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Air Max Pulse',
    category: 'Men',
    price: 11995,
    originalPrice: 14995,
    discount: 20,
    rating: 4.5,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Tech Fleece Hoodie',
    category: 'Unisex',
    price: 6499,
    originalPrice: 8999,
    discount: 28,
    rating: 4.8,
    reviews: 567,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjWITtY--lFtfaNwPR3gGEOiK34Rj4vzGgLoMY2TTGc5IPUgi9Ej4NhMPAHi5C-eWBLwpS0Qi0hMhkJc8WeWG7JkDNNiecAywBraF7tVG9c3cCR-ACFh6sXA',
    isNew: true
  },
  {
    id: 3,
    name: 'Windrunner Jacket',
    category: 'Women',
    price: 7999,
    originalPrice: 10999,
    discount: 27,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    badge: 'Limited'
  },
  {
    id: 4,
    name: 'Dri-FIT Training Tee',
    category: 'Men',
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.4,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80'
  },
  {
    id: 5,
    name: 'Yoga Essential Crop',
    category: 'Women',
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    rating: 4.7,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    isNew: true
  },
  {
    id: 6,
    name: 'Heritage Backpack',
    category: 'Unisex',
    price: 3999,
    originalPrice: 5499,
    discount: 27,
    rating: 4.9,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    badge: 'Trending'
  }
]

const categories = ['All', 'Men', 'Women', 'Unisex']

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Amazon/Flipkart style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Featured Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Best Sellers
            </h2>
          </div>

          {/* Category Tabs - Flipkart style */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${activeCategory === cat
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - Amazon/Flipkart style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.discount && (
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.badge && (
                    <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Quick Actions - Amazon style */}
                <div className={`absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 transition-all duration-300 ${hoveredId === product.id ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                  <button className="w-full bg-white text-black py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info - Flipkart/Amazon style */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-green-700">{product.rating}</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                {/* EMI Option - Flipkart style */}
                <p className="text-xs text-gray-500 mt-2">
                  No Cost EMI available
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Amazon style */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all shadow-md">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  )
}