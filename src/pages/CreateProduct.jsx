

function CreateProduct() {

 

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
            <form className="space-y-4">
                {/* Product Name */}
                <div>
                    <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                {/* Product Price */}
                <div>
                    <label
                        htmlFor="productPrice"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Product Price
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product price"
                        required
                    />
                </div>

                {/* Product Rating */}
                <div>
                    <label
                        htmlFor="productRating"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Product Rating
                    </label>
                    <input
                        type="number"
                        id="productRating"
                        name="productRating"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product rating (1-5)"
                        min="1"
                        max="5"
                        required
                    />
                </div>

                {/* Product Image URL */}
                <div>
                    <label
                        htmlFor="productImageUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Product Image URL
                    </label>
                    <input
                        type="url"
                        id="productImageUrl"
                        name="productImageUrl"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product image URL"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                    Submit
                </button>
            </form>
        </div>
  )
}

export default CreateProduct