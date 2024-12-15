import { yupResolver } from "@hookform/resolvers/yup";
import { productsFormSchema } from "../../../validation/validationSchema";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../features/products/ProductsSlice";
import { useNavigate } from "react-router";


function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(productsFormSchema),
        defaultValues: {
            productName: "",
            productPrice: "",
            productImageUrl: "",
        },
    });

        const onSubmit = (data) => {
            dispatch(setProducts(data));
            reset();
            navigate("/")
        };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Product Name */}
                <div>
                    <label
                        htmlFor="productName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Product Name
                    </label>
                    <input
                    {...register("productName")}
                        type="text"
                        id="productName"
                        name="productName"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product name"
                    />
                    {errors.productName && <span className="text-red-700 text-[12px]">{errors.productName?.message}</span>}
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
                    {...register("productPrice")}
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product price"
                    />
                    {errors.productPrice && <span className="text-red-700 text-[12px]">{errors.productPrice?.message}</span>}
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
                    {...register("productImageUrl")}
                        type="url"
                        id="productImageUrl"
                        name="productImageUrl"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product image URL"
                    />
                    {errors.productImageUrl && <span className="text-red-700 text-[12px]">{errors.productImageUrl?.message}</span>}
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