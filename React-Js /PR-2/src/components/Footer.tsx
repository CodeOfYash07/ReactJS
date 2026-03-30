export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section - Amazon/Flipkart style */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Be the first to know</h3>
              <p className="text-gray-400 text-sm">Get exclusive offers, early access, and style inspiration</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white rounded-l-lg"
              />
              <button className="px-6 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-xl tracking-tight">VÊTU</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium fashion for the modern individual. Quality, style, and authenticity.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Shop</h4>
          <ul className="space-y-2">
            {['Men', 'Women', 'Unisex', 'New Arrivals', 'Sale'].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Support</h4>
          <ul className="space-y-2">
            {['Help Center', 'Order Tracking', 'Returns', 'Size Guide', 'Contact'].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2">
            {['About Us', 'Sustainability', 'Careers', 'Press', 'Affiliates'].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Legal</h4>
          <ul className="space-y-2">
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Cookie Policy'].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Connect</h4>
          <div className="flex gap-4">
            {['Instagram', 'Twitter', 'Pinterest', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Amazon/Flipkart style */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2025 VÊTU. All rights reserved.</p>
          <div className="flex gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Amazon_Pay_logo.svg/2560px-Amazon_Pay_logo.svg.png" alt="Amazon Pay" className="h-6 opacity-70" />
          </div>
        </div>
      </div>
    </footer>
  )
}