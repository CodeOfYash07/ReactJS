"use client";

import { formInventoryDataType, tagList , categoryList , stockList } from "@/app/utils/type";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function EditFashionItemPage() {
  const {id} = useParams();
  const router = useRouter();
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
    occasion: "",
    fit: "",
    care: ""
  });
  const [errorForm, setErrorForm] = useState<any>({});

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const productToEdit = allProducts.find((product: formInventoryDataType) => product.id === Number(id));
    
    if (productToEdit) {
      setFormData(productToEdit);
    }
  }, [id]);
  
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
    if (!formData.productPrice) error.productPrice = "Required";
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
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    
    if (!validation()) {
      return;
    }
    
    const allProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = allProducts.map((product: formInventoryDataType) => {
      if(product.id === Number(id)){
        return formData;
      }
      return product;
    });
    
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    toast.success('Fashion item updated successfully!');

    router.push('/viewProduct');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Edit Fashion Item
          </h1>
          <p className="text-gray-500 mt-2">Fill in the details to edit a fashion item in your collection</p>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300">
          <div className="p-6 md:p-8 space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-rose-500 rounded-full"></span>
                Fashion Item Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="productName"
                  value={formData.productName}
                  onChange={onHandleChange}
                  placeholder="e.g., Silk Evening Dress"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productName && <p className="text-red-500 text-xs mt-1">{errorForm.productName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SKU Code <span className="text-red-500">*</span>
                </label>
                <input
                  name="productSku"
                  value={formData.productSku}
                  onChange={onHandleChange}
                  placeholder="e.g., SKU-12345"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productSku ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productSku && <p className="text-red-500 text-xs mt-1">{errorForm.productSku}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={onHandleChange}
                  placeholder="e.g., 49999"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productPrice ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productPrice && <p className="text-red-500 text-xs mt-1">{errorForm.productPrice}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="productQuantity"
                  value={formData.productQuantity}
                  onChange={onHandleChange}
                  placeholder="e.g., 50"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productQuantity ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.productQuantity && <p className="text-red-500 text-xs mt-1">{errorForm.productQuantity}</p>}
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4 pt-2">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
                Brand & Collection
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="brand"
                  value={formData.brand || ""}
                  onChange={onHandleChange}
                  placeholder="e.g., Gucci, Zara, H&M"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.brand ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200`}
                />
                {errorForm.brand && <p className="text-red-500 text-xs mt-1">{errorForm.brand}</p>}
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Size <span className="text-red-500">*</span>
                </label>
                <select
                  name="size"
                  value={formData.size || ""}
                  onChange={onHandleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.size ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white`}
                >
                  <option value="">Select size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
                {errorForm.size && <p className="text-red-500 text-xs mt-1">{errorForm.size}</p>}
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color <span className="text-red-500">*</span>
                </label>
                <select
                  name="color"
                  value={formData.color || ""}
                  onChange={onHandleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.color ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white`}
                >
                  <option value="">Select color</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Pink">Pink</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Gray">Gray</option>
                  <option value="Beige">Beige</option>
                </select>
                {errorForm.color && <p className="text-red-500 text-xs mt-1">{errorForm.color}</p>}
              </div>

              {/* Material */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material <span className="text-red-500">*</span>
                </label>
                <select
                  name="material"
                  value={formData.material || ""}
                  onChange={onHandleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.material ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white`}
                >
                  <option value="">Select material</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Silk">Silk</option>
                  <option value="Wool">Wool</option>
                  <option value="Polyester">Polyester</option>
                  <option value="Linen">Linen</option>
                  <option value="Denim">Denim</option>
                  <option value="Leather">Leather</option>
                  <option value="Cashmere">Cashmere</option>
                </select>
                {errorForm.material && <p className="text-red-500 text-xs mt-1">{errorForm.material}</p>}
              </div>

              {/* Season */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Season <span className="text-red-500">*</span>
                </label>
                <select
                  name="season"
                  value={formData.season || ""}
                  onChange={onHandleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.season ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white`}
                >
                  <option value="">Select season</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                  <option value="All Season">All Season</option>
                </select>
                {errorForm.season && <p className="text-red-500 text-xs mt-1">{errorForm.season}</p>}
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Occasion <span className="text-red-500">*</span>
                </label>
                <select
                  name="occasion"
                  value={formData.occasion || ""}
                  onChange={onHandleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.occasion ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white`}
                >
                  <option value="">Select occasion</option>
                  <option value="Casual">Casual</option>
                  <option value="Formal">Formal</option>
                  <option value="Party">Party</option>
                  <option value="Business">Business</option>
                  <option value="Sport">Sport</option>
                  <option value="Beach">Beach</option>
                  <option value="Date Night">Date Night</option>
                </select>
                {errorForm.occasion && <p className="text-red-500 text-xs mt-1">{errorForm.occasion}</p>}
              </div>
            </div>

            {/* Fashion Details Section */}
            <div className="border-b border-gray-100 pb-4 pt-2">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
                Fashion Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fit Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fit Type
                </label>
                <select
                  name="fit"
                  value={formData.fit || ""}
                  onChange={onHandleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select fit</option>
                  <option value="Slim Fit">Slim Fit</option>
                  <option value="Regular Fit">Regular Fit</option>
                  <option value="Oversized">Oversized</option>
                  <option value="Tailored">Tailored</option>
                  <option value="Relaxed Fit">Relaxed Fit</option>
                </select>
              </div>

              {/* Care Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Care Instructions
                </label>
                <select
                  name="care"
                  value={formData.care || ""}
                  onChange={onHandleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select care instructions</option>
                  <option value="Dry Clean Only">Dry Clean Only</option>
                  <option value="Machine Wash">Machine Wash</option>
                  <option value="Hand Wash">Hand Wash</option>
                  <option value="Spot Clean">Spot Clean</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fashion Item Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={onHandleChange}
                rows={3}
                placeholder="Describe the style, fit, material, and occasion..."
                className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productDescription ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none`}
              />
              {errorForm.productDescription && <p className="text-red-500 text-xs mt-1">{errorForm.productDescription}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fashion Category <span className="text-red-500">*</span>
              </label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={onHandleChange}
                className={`w-full px-4 py-2.5 rounded-xl border ${errorForm.productCategory ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white`}
              >
                <option value="">Select category</option>
                {categoryList.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>
              {errorForm.productCategory && <p className="text-red-500 text-xs mt-1">{errorForm.productCategory}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {tagList.map((tag, i) => (
                  <label key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={formData.productTags.includes(tag)}
                      onChange={onTagChange}
                      className="rounded border-gray-300 text-rose-600 focus:ring-rose-500 accent-rose-600"
                    />
                    <span className="text-sm text-gray-700">{tag}</span>
                  </label>
                ))}
              </div>
              {errorForm.productTags && <p className="text-red-500 text-xs mt-2">{errorForm.productTags}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Status <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {stockList.map((s, i) => (
                  <label key={i} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="stockStatus"
                      value={s}
                      checked={formData.stockStatus === s}
                      onChange={onHandleChange}
                      className="border-gray-300 text-rose-600 focus:ring-rose-500 accent-rose-600"
                    />
                    <span className="text-gray-700">{s}</span>
                  </label>
                ))}
              </div>
              {errorForm.stockStatus && <p className="text-red-500 text-xs mt-2">{errorForm.stockStatus}</p>}
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 md:px-8 border-t border-gray-100">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:from-rose-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Edit Fashion Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}