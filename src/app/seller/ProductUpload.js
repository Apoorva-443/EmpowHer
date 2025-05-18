"use client";
import { useState } from "react";

export default function ProductUpload({ onClose }) {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        onClose();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({...formData, image: URL.createObjectURL(file)});
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">Create Your Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload Section */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                        <div className="w-full h-64 border-2 border-dashed border-yellow-300 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:border-yellow-400 relative">
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" className="max-h-60 object-contain" />
                            ) : (
                                <>
                                    <svg className="w-12 h-12 text-yellow-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Click to upload image</span>
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Input Fields */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter product title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price (₹)
                        </label>
                        <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter price"
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Handcrafted Textiles">Handcrafted Textiles</option>
                            <option value="Organic Food Products">Organic Food Products</option>
                            <option value="Artisanal Crafts">Artisanal Crafts</option>
                            <option value="Digital Products">Digital Products</option>
                            <option value="Services">Services</option>
                            <option value="Beauty & Wellness">Beauty & Wellness</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            rows={4}
                            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter product description"
                            required
                        />
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        className="flex-1 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        Submit Product
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-700 font-semibold shadow hover:bg-yellow-100 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}