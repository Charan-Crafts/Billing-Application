
const ProductForm = () => {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Product</h2>
  
        <form className="flex flex-col gap-5">
  
          {/* Product Image */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Product Image</label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50
                         focus:outline-none focus:ring-2 focus:ring-black-300"
            />
          </div>
  
          {/* Product Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50
                         focus:outline-none focus:ring-2 focus:ring-black-300"
            />
          </div>
  
          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Category</label>
            <select
              id="chooseCategory"
              name="chooseCategory"
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50
                         focus:outline-none focus:ring-2 focus:ring-black-300"
            >
              <option value="">---- Select Category ----</option>
            </select>
          </div>
  
          {/* Price */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Price (₹)</label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50
                         focus:outline-none focus:ring-2 focus:ring-black-300"
            />
          </div>
  
          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Description</label>
            <textarea
              id="productDescription"
              name="productDescription"
              rows={4}
              placeholder="Write product details..."
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 resize-none
                         focus:outline-none focus:ring-2 focus:ring-black-300"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg shadow-md
                       hover:bg-black-700 transition-all mt-2 cursor-pointer"
          >
            Add Product
          </button>
  
        </form>
      </div>
    );
  };
  
  export default ProductForm;
  