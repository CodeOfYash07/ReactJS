import React from 'react';
import { formInventoryDataType } from '../utils/type';

interface ViewFashionHeaderProps {
  allProducts: formInventoryDataType[];
}

const ViewFashionHeader: React.FC<ViewFashionHeaderProps> = ({ allProducts }) => {
  const totalItems = allProducts.length;
  const totalCategories = totalItems > 0 ? new Set(allProducts.map(p => p.productCategory)).size : 0;
  const avgPrice = totalItems > 0 
    ? Math.round(allProducts.reduce((sum, p) => sum + p.productPrice, 0) / totalItems)
    : 0;
  const totalValue = allProducts.reduce((sum, p) => sum + p.productPrice, 0);

  return (
    <div className="mb-12">
      <div className="relative">
        {/* Background Tower */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-32 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-full opacity-60"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10">
              {/* Top Banner */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-t-3xl p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gray-800/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-gray-600 transform hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl font-bold text-white animate-pulse">👗</span>
                    </div>
                    <div>
                      <h1 className="text-5xl font-black text-white mb-2 tracking-tight">FASHION</h1>
                      <p className="text-gray-400 text-lg font-medium">COLLECTION GALLERY</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-black text-white">{totalItems}</p>
                      <p className="text-gray-500 text-xs">ITEMS</p>
                    </div>
                    <div className="w-px h-12 bg-gray-600"></div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-white">{totalCategories}</p>
                      <p className="text-gray-500 text-xs">CATEGORIES</p>
                    </div>
                  </div>
                </div>
              </div>
                    {/* Middle Stats Row */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 border-x border-gray-700">
                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-sm font-medium">PREMIUM QUALITY</span>
                  </div>
                  <div className="w-px h-4 bg-gray-600"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse delay-75"></div>
                    <span className="text-gray-400 text-sm font-medium">DESIGNER BRANDS</span>
                  </div>
                  <div className="w-px h-4 bg-gray-600"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse delay-150"></div>
                    <span className="text-gray-400 text-sm font-medium">LATEST TRENDS</span>
                  </div>
                </div>
              </div>
                    {/* Bottom Banner */}
              <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-b-3xl p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center border border-gray-600">
                      <span className="text-white text-xl">📈</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">AVERAGE PRICE</p>
                      <p className="text-2xl font-black text-white">₹{avgPrice.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-gray-500 text-sm mb-1">TOTAL VALUE</p>
                      <p className="text-2xl font-black text-white">₹{totalValue.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="w-px h-12 bg-gray-600"></div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm mb-1">STOCK STATUS</p>
                      <p className="text-lg font-bold text-gray-400">OPTIMAL</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFashionHeader;
