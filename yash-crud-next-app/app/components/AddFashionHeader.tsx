import React from 'react';

interface AddFashionHeaderProps {
  allProductsLength: number;
}

const AddFashionHeader: React.FC<AddFashionHeaderProps> = ({ allProductsLength }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Brand Identity */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 relative overflow-hidden border border-gray-700">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gray-700/20 rounded-full -ml-20 -mt-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-600/20 rounded-full -mr-16 -mb-16 animate-pulse delay-75"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300 border border-gray-600">
                <span className="text-2xl font-bold text-white">🎨</span>
              </div>
              <div>
                <h1 className="text-4xl font-black text-white mb-1 tracking-tight">FASHION</h1>
                <p className="text-gray-400 text-sm font-medium tracking-widest">DESIGN STUDIO</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                <p className="text-gray-300 text-sm">Create Tomorrow's Trends</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                <p className="text-gray-300 text-sm">Premium Fashion Collection</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                <p className="text-gray-300 text-sm">Designer Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Live Stats */}
        <div className="lg:w-96">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-6 border border-gray-700">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                <span className="text-white text-sm">📊</span>
              </div>
              LIVE STUDIO METRICS
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-600">
                <p className="text-gray-400 text-xs mb-1">COLLECTIONS</p>
                <p className="text-2xl font-black text-white">{allProductsLength}</p>
                <p className="text-gray-500 text-xs mt-1">+12% this week</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-600">
                <p className="text-gray-400 text-xs mb-1">DESIGNERS</p>
                <p className="text-2xl font-black text-white">1</p>
                <p className="text-gray-500 text-xs mt-1">Active now</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-600">
                <p className="text-gray-400 text-xs mb-1">TODAY</p>
                <p className="text-2xl font-black text-white">{new Date().getDate()}</p>
                <p className="text-gray-500 text-xs mt-1">{new Date().toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-600">
                <p className="text-gray-400 text-xs mb-1">STATUS</p>
                <p className="text-2xl font-black text-gray-300">LIVE</p>
                <p className="text-gray-400 text-xs mt-1 animate-pulse">● Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFashionHeader;
