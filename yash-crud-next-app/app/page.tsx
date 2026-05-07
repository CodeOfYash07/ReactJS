import Card from "./components/Card";
import Slider from "./components/Slider";

export default function Home() {
  const cardViewData = [
    {
      icon: "🎨",
      title: "Dark Fashion",
      category: "EXCLUSIVE",
      description: "Embrace the shadows with our exclusive midnight series. Bold designs that command attention in complete darkness.",
      stats: "Limited Edition"
    },
    {
      icon: "�",
      title: "Night Style",
      category: "PREMIUM",
      description: "Where luxury meets darkness. Sophisticated pieces designed for those who dare to stand apart from the crowd.",
      stats: "New Collection"
    },
    {
      icon: "✨",
      title: "Shadow Couture",
      category: "DESIGNER",
      description: "Get expert fashion advice and personalized recommendations. Our AI-powered stylist helps you create the perfect dark wardrobe.",
      stats: "Trending Now"
    },
    {
      icon: "🖤",
      title: "Midnight Delivery",
      category: "GLOBAL",
      description: "Express shipping to over 100 countries. Track your order in real-time and enjoy hassle-free returns and exchanges in the dark.",
      stats: "Worldwide"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <Slider />

        {/* Features Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything you need to shine
            </h2>
            <div className="h-1.5 w-20 bg-gray-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardViewData.map((cardData, index) => (
              <Card key={index} {...cardData} />
            ))}
          </div>
        </section>
      </main>

      {/* --- BLACK THEME FOOTER --- */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4 italic">FashionHub</h3>
              <p className="text-gray-400 max-w-xs mb-6">
                The world's most stylish fashion destination. Curated for trendsetters, designed for the modern fashion lover.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-300">𝕏</span>
                <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-300">𝑓</span>
                <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-300">in</span>
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors duration-300">New Arrivals</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Collections</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Sale</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Lookbook</li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Our Story</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Sustainability</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Contact</li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Style Guide</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Size Guide</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Shipping Info</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 FashionHub Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:underline cursor-pointer hover:text-white transition-colors duration-300">Terms of Service</span>
              <span className="hover:underline cursor-pointer hover:text-white transition-colors duration-300">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}