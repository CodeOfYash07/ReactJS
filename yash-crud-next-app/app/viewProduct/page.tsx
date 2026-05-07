"use client";

import { useState, useEffect } from "react";
import { formInventoryDataType } from "../utils/type";
import ViewFashionHeader from "../components/ViewFashionHeader";
import {
  Package,
  IndianRupee,
  Edit,
  Trash2,
  AlertCircle,
  PlusCircle,
  TrendingUp,
  Search,
  Download,
  Eye,
  ShoppingCart,
  PackageOpen,
  BarChart3,
  MoreVertical
} from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ViewFashionCollection() {

  const [allProducts, setAllProducts] = useState<formInventoryDataType[]>(JSON.parse(localStorage.getItem("products") || "[]"));
  const [selectedProduct, setSelectedProduct] = useState<formInventoryDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (allProducts) {
      localStorage.setItem("products", JSON.stringify(allProducts));
    }
  }, [allProducts]);

  const deleteProduct = (id: number) => {
    const updated = allProducts.filter((p) => p.id !== id);
    setAllProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    toast.success("Product deleted successfully...");
  };

  const openProductModal = (product: formInventoryDataType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const viewProduct = (product: formInventoryDataType) => {
    openProductModal(product);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ViewFashionHeader allProducts={allProducts} />

        {/* Stats Cards - Unique Diamond Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <ShoppingCart className="w-8 h-8" />
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
            <h3 className="text-3xl font-bold mb-2">{allProducts.length}</h3>
            <p className="text-gray-300 font-medium">Fashion Items</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-white transform hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8" />
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></div>
            </div>
            <h3 className="text-3xl font-bold mb-2">
              {allProducts.length > 0 ? new Set(allProducts.map(p => p.productCategory)).size : 0}
            </h3>
            <p className="text-gray-300 font-medium">Collections</p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-800 rounded-3xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <Package className="w-8 h-8" />
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
            </div>
            <h3 className="text-3xl font-bold mb-2">
              {allProducts.length > 0 ? new Set(allProducts.map(p => p.stockStatus)).size : 0}
            </h3>
            <p className="text-gray-300 font-medium">Stock Types</p>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-2xl border border-gray-600">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8" />
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
            <h3 className="text-3xl font-bold mb-2">
              {allProducts.length > 0
                ? Math.round(allProducts.reduce((sum, p) => sum + p.productPrice, 0) / allProducts.length).toLocaleString('en-IN')
                : 0}
            </h3>
            <p className="text-gray-300 font-medium">Avg Price</p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-300 text-lg">
              Showing <span className="font-bold text-white text-xl">{allProducts.length}</span> fashion items
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 border border-gray-600">
              <Download className="w-5 h-5" />
              <span>Export Collection</span>
            </button>
            <button
              onClick={() => router.push("/addProduct")}
              className="bg-gradient-to-r from-red-600 to-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 border border-gray-600"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Add Fashion Item</span>
            </button>
          </div>
        </div>

        {/* Fashion Items Grid */}
        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-700 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  {/* Fashion Item Header */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600">
                          <Package className="w-8 h-8 text-white" />
                        </div>
                        <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full ${
                          product.stockStatus === "In Stock" 
                            ? "bg-green-600 text-white" 
                            : product.stockStatus === "Limited Stock" 
                            ? "bg-yellow-600 text-white" 
                            : "bg-red-600 text-white"
                        }`}>
                          {product.stockStatus}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.productName}</h3>
                      <p className="text-gray-400 text-sm">ID: #{product.id}</p>
                    </div>
                  </div>

                  {/* Fashion Item Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700">
                        <p className="text-gray-400 text-xs font-semibold mb-1">Brand</p>
                        <p className="text-white font-bold text-sm">{product.brand || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700">
                        <p className="text-gray-400 text-xs font-semibold mb-1">Size</p>
                        <p className="text-white font-bold text-sm">{product.size || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700">
                        <p className="text-gray-400 text-xs font-semibold mb-1">Color</p>
                        <p className="text-white font-bold text-sm">{product.color || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700">
                        <p className="text-gray-400 text-xs font-semibold mb-1">Material</p>
                        <p className="text-white font-bold text-sm">{product.material || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-3xl font-bold text-white mb-2">
                          ₹{product.productPrice.toLocaleString('en-IN')}
                        </p>
                        <p className="text-gray-400 text-sm">{product.productQuantity} in stock</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex px-3 py-1 text-xs font-semibold bg-gray-800 text-gray-300 rounded-full border border-gray-600">
                          {product.productCategory}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    {product.productTags && product.productTags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.productTags.map((tag, index) => (
                          <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-600">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => viewProduct(product)}
                        className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-600"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => router.push(`/editProduct/${product.id}`)}
                        className="flex-1 bg-gradient-to-r from-red-600 to-gray-700 text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-600"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-800 rounded-full mb-8 border border-gray-700">
              <AlertCircle className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">No Fashion Items Found</h3>
            <p className="text-gray-400 text-xl mb-8">Start building your collection by adding your first fashion item</p>
            <button
              onClick={() => router.push("/addProduct")}
              className="bg-gradient-to-r from-red-600 to-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-600"
            >
              ✨ Add Your First Fashion Item
            </button>
          </div>
        )}

        {/* Product Details Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <Package className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Fashion Item Details</h2>
                        <p className="text-purple-100 text-lg">Complete fashion item information</p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-3 bg-white/20 rounded-2xl hover:bg-white/30 transition-colors backdrop-blur-sm"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                {/* Product Overview */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.productName}</h3>
                      <p className="text-gray-600">Fashion Item ID: #{selectedProduct.id}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        ₹{selectedProduct.productPrice.toLocaleString('en-IN')}
                      </div>
                      <span className={`inline-flex px-4 py-2 text-sm font-bold rounded-full ${
                        selectedProduct.stockStatus === "In Stock" 
                          ? "bg-green-500 text-white" 
                          : selectedProduct.stockStatus === "Limited Stock" 
                          ? "bg-yellow-500 text-white" 
                          : "bg-red-500 text-white"
                      }`}>
                        {selectedProduct.stockStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fashion Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🏷️</span>
                    </div>
                    <p className="text-purple-700 font-semibold text-sm mb-1">Brand</p>
                    <p className="text-purple-900 font-bold">{selectedProduct.brand || "N/A"}</p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">📏</span>
                    </div>
                    <p className="text-pink-700 font-semibold text-sm mb-1">Size</p>
                    <p className="text-pink-900 font-bold">{selectedProduct.size || "N/A"}</p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🎨</span>
                    </div>
                    <p className="text-indigo-700 font-semibold text-sm mb-1">Color</p>
                    <p className="text-indigo-900 font-bold">{selectedProduct.color || "N/A"}</p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🧵</span>
                    </div>
                    <p className="text-teal-700 font-semibold text-sm mb-1">Material</p>
                    <p className="text-teal-900 font-bold">{selectedProduct.material || "N/A"}</p>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-6">
                  {/* Description */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
                      Fashion Description
                    </h4>
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="text-orange-900 leading-relaxed">
                        {selectedProduct.productDescription || "No description available for this fashion item."}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  {selectedProduct.productTags && selectedProduct.productTags.length > 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-green-500 rounded-full"></span>
                        Fashion Tags
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.productTags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex px-4 py-2 text-sm font-bold bg-white text-green-700 rounded-full border-2 border-green-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Season & Occasion */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-blue-900 mb-3">Season</h4>
                      <p className="text-blue-700 font-semibold text-lg">{selectedProduct.season || "N/A"}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-purple-900 mb-3">Occasion</h4>
                      <p className="text-purple-700 font-semibold text-lg">{selectedProduct.occasion || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <button
                    onClick={() => router.push(`/editProduct/${selectedProduct.id}`)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Edit className="w-5 h-5" />
                    <span>Edit Fashion Item</span>
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(selectedProduct.id);
                      closeModal();
                    }}
                    className="px-6 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}