"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formInventoryDataType } from "../utils/type";
import AddFashionHeader from "../components/AddFashionHeader";

export default function AddFashionItem() {
  const categoryList = ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories", "Shoes", "Bags"];
  const tagList = ["New Arrival", "Sale", "Trending", "Limited Edition", "Exclusive", "Sustainable"];
  const stockList = ["In Stock", "Out of Stock", "Limited Stock"];
  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
  const colorList = ["Black", "White", "Red", "Blue", "Green", "Pink", "Yellow", "Gray", "Beige"];
  const materialList = ["Cotton", "Silk", "Wool", "Polyester", "Linen", "Denim", "Leather", "Cashmere"];
  const seasonList = ["Spring", "Summer", "Fall", "Winter", "All Season"];
  const occasionList = ["Casual", "Formal", "Party", "Business", "Sport", "Beach", "Date Night"];
  const fitList = ["Slim Fit", "Regular Fit", "Oversized", "Tailored", "Relaxed Fit"];
  const careList = ["Dry Clean Only", "Machine Wash", "Hand Wash", "Spot Clean"];

  const [formData, setFormData] = useState<formInventoryDataType>({
    id: Math.floor(Math.random() * 10000),
    productName: "",
    productSku: "",
    productPrice: 0,
    productQuantity: 0,
    productCategory: "",
    productTags: [] as string[],
    stockStatus: "",
    productDescription: "",
    size: "",
    color: "",
    material: "",
    brand: "",
    season: "",
    occasion: ""
  });

  const [errorForm, setErrorForm] = useState<any>({});

  const [allProducts, setAllProducts] = useState<formInventoryDataType[]>(JSON.parse(localStorage.getItem('products') || "[]"));

  useEffect(() => {
    if (allProducts) {
      localStorage.setItem("products", JSON.stringify(allProducts));
    }
  }, [allProducts]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (!validation()) return;

    setAllProducts(prev => [...prev, formData]);
    toast.success("Product added successfully...");

    setFormData({
      id: Math.floor(Math.random() * 10000),
      productName: "",
      productSku: "",
      productPrice: 0,
      productQuantity: 0,
      productCategory: "",
      productTags: [],
      stockStatus: "",
      productDescription: "",
      size: "",
      color: "",
      material: "",
      brand: "",
      season: "",
      occasion: ""
    });
  };

  const onHandleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]:
        name === "productPrice" ||
          name === "productQuantity" ||
          name === "reorderLevel"
          ? Number(value)
          : value
    }));
  };

  const onTagChange = (event: any) => {
    const { value, checked } = event.target;

    setFormData(prev => ({
      ...prev,
      productTags: checked
        ? [...prev.productTags, value]
        : prev.productTags.filter(tag => tag !== value)
    }));
  };

  const validation = () => {
    const error: any = {};

    if (!formData.productName.trim()) error.productName = "Required";
    if (!formData.productSku.trim()) error.productSku = "Required";
    if (!formData.brand?.trim()) error.brand = "Required";
    if (!formData.size?.trim()) error.size = "Required";
    if (!formData.color?.trim()) error.color = "Required";
    if (!formData.material?.trim()) error.material = "Required";
    if (!formData.season?.trim()) error.season = "Required";
    if (!formData.occasion?.trim()) error.occasion = "Required";
    if (!formData.productCategory.trim()) error.productCategory = "Required";
    if (formData.productTags.length === 0) error.productTags = "Required";
    if (!formData.stockStatus.trim()) error.stockStatus = "Required";
    if (!formData.productQuantity || formData.productQuantity <= 0) error.productQuantity = "Required (must be > 0)";
    if (!formData.productDescription.trim()) error.productDescription = "Required";

    setErrorForm(error);
    return Object.keys(error).length === 0;
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AddFashionHeader allProductsLength={allProducts.length} />

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Basic Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👗</span>
                </div>
                <h2 className="text-xl font-bold text-white">Basic Information</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Fashion Item Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="productName"
                    value={formData.productName}
                    onChange={onHandleChange}
                    placeholder="e.g., Silk Evening Dress"
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.productName ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-medium text-white placeholder-gray-400`}
                  />
                  {errorForm.productName && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.productName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    SKU Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="productSku"
                    value={formData.productSku}
                    onChange={onHandleChange}
                    placeholder="e.g., SKU-12345"
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.productSku ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-medium text-white placeholder-gray-400`}
                  />
                  {errorForm.productSku && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.productSku}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={onHandleChange}
                    placeholder="e.g., 49999"
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.productPrice ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-medium text-white placeholder-gray-400`}
                  />
                  {errorForm.productPrice && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.productPrice}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="productQuantity"
                    value={formData.productQuantity}
                    onChange={onHandleChange}
                    placeholder="e.g., 50"
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.productQuantity ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-medium text-white placeholder-gray-400`}
                  />
                  {errorForm.productQuantity && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.productQuantity}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Fashion Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Brand & Size Card */}
            <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🏷️</span>
                </div>
                <h2 className="text-xl font-bold text-white">Brand & Size</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Brand Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="brand"
                    value={formData.brand || ""}
                    onChange={onHandleChange}
                    placeholder="e.g., Gucci, Zara, H&M"
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.brand ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 font-medium text-white placeholder-gray-400`}
                  />
                  {errorForm.brand && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.brand}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="size"
                    value={formData.size || ""}
                    onChange={onHandleChange}
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.size ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white`}
                  >
                    <option value="" className="bg-gray-800">Select size</option>
                    {sizeList.map((size, i) => (
                      <option key={i} className="bg-gray-800">{size}</option>
                    ))}
                  </select>
                  {errorForm.size && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.size}</p>}
                </div>
              </div>
            </div>

            {/* Color & Material Card */}
            <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <h2 className="text-xl font-bold text-white">Color & Material</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Color <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="color"
                    value={formData.color || ""}
                    onChange={onHandleChange}
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.color ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white`}
                  >
                    <option value="" className="bg-gray-800">Select color</option>
                    {colorList.map((color, i) => (
                      <option key={i} className="bg-gray-800">{color}</option>
                    ))}
                  </select>
                  {errorForm.color && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.color}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Material <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="material"
                    value={formData.material || ""}
                    onChange={onHandleChange}
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.material ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white`}
                  >
                    <option value="" className="bg-gray-800">Select material</option>
                    {materialList.map((material, i) => (
                      <option key={i} className="bg-gray-800">{material}</option>
                    ))}
                  </select>
                  {errorForm.material && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.material}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Season & Style Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Season & Occasion Card */}
            <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🌸</span>
                </div>
                <h2 className="text-xl font-bold text-white">Season & Occasion</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Season <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="season"
                    value={formData.season || ""}
                    onChange={onHandleChange}
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.season ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white`}
                  >
                    <option value="" className="bg-gray-800">Select season</option>
                    {seasonList.map((season, i) => (
                      <option key={i} className="bg-gray-800">{season}</option>
                    ))}
                  </select>
                  {errorForm.season && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.season}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Occasion <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion || ""}
                    onChange={onHandleChange}
                    className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.occasion ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white`}
                  >
                    <option value="" className="bg-gray-800">Select occasion</option>
                    {occasionList.map((occasion, i) => (
                      <option key={i} className="bg-gray-800">{occasion}</option>
                    ))}
                  </select>
                  {errorForm.occasion && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.occasion}</p>}
                </div>
              </div>
            </div>

            {/* Fashion Details Card */}
            <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h2 className="text-xl font-bold text-white">Fashion Details</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Fit Type
                  </label>
                  <select
                    name="fit"
                    value={formData.fit || ""}
                    onChange={onHandleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white"
                  >
                    <option value="" className="bg-gray-800">Select fit</option>
                    {fitList.map((fit, i) => (
                      <option key={i} className="bg-gray-800">{fit}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Care Instructions
                  </label>
                  <select
                    name="care"
                    value={formData.care || ""}
                    onChange={onHandleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white"
                  >
                    <option value="" className="bg-gray-800">Select care instructions</option>
                    {careList.map((care, i) => (
                      <option key={i} className="bg-gray-800">{care}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Description, Category, Tags, Stock */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Description & Category Card */}
          <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h2 className="text-xl font-bold text-white">Details & Category</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Fashion Item Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={onHandleChange}
                  rows={4}
                  placeholder="Describe the style, fit, material, and occasion..."
                  className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.productDescription ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none font-medium text-white placeholder-gray-400`}
                />
                {errorForm.productDescription && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.productDescription}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Fashion Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={onHandleChange}
                  className={`w-full px-4 py-3 rounded-2xl border-2 ${errorForm.productCategory ? 'border-red-400 bg-red-900/20' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-700 font-medium text-white`}
                >
                  <option value="" className="bg-gray-800">Select category</option>
                  {categoryList.map((c, i) => (
                    <option key={i} className="bg-gray-800">{c}</option>
                  ))}
                </select>
                {errorForm.productCategory && <p className="text-red-500 text-xs mt-1 font-semibold">{errorForm.productCategory}</p>}
              </div>
            </div>
          </div>

          {/* Tags & Stock Card */}
          <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🏷️</span>
              </div>
              <h2 className="text-xl font-bold text-white">Tags & Stock</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Tags <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {tagList.map((tag, i) => (
                    <label key={i} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800 border-2 border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors duration-200">
                      <input
                        type="checkbox"
                        value={tag}
                        checked={formData.productTags.includes(tag)}
                        onChange={onTagChange}
                        className="rounded border-gray-600 text-red-600 focus:ring-red-500 accent-red-600"
                      />
                      <span className="text-sm font-medium text-gray-300">{tag}</span>
                    </label>
                  ))}
                </div>
                {errorForm.productTags && <p className="text-red-500 text-xs mt-2 font-semibold">{errorForm.productTags}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Stock Status <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {stockList.map((s, i) => (
                    <label key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border-2 border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors duration-200">
                      <input
                        type="radio"
                        name="stockStatus"
                        value={s}
                        checked={formData.stockStatus === s}
                        onChange={onHandleChange}
                        className="border-gray-600 text-red-600 focus:ring-red-500 accent-red-600"
                      />
                      <span className="text-sm font-medium text-gray-300">{s}</span>
                    </label>
                  ))}
                </div>
                {errorForm.stockStatus && <p className="text-red-500 text-xs mt-2 font-semibold">{errorForm.stockStatus}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-gradient-to-r from-red-600 via-gray-700 to-black text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-4 transition-all duration-300 text-lg border border-gray-600"
          >
            ✨ Create Fashion Masterpiece
          </button>
        </div>
      </div>
    </div>
  );
}