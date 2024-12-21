import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { categoryFormSchema } from "../../../validation/validationSchema";

import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
    getFirebaseDataForEdit,
    setDataToFirebase,
    updateDataFromFirebase,
} from "../../../database/firebaseUtils";

export default function CreateCategory() {
    const navigate = useNavigate();
    const params = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(categoryFormSchema),
        defaultValues: {
            categoryName: "",
            categoryImageUrl: "",
        },
    });

    const onSubmit = (data) => {
        if (params.id) {
            // Update category;
            updateDataFromFirebase(`categories/${params.id}`, data);
            toast.success("Update is successful");
        } else {
            // Create category;
            setDataToFirebase("categories", data);
            toast.success("Creation is successful");
        }
        navigate("/dashboard/index-category");
    };

    useEffect(() => {
        async function getData() {
            let res = await getFirebaseDataForEdit("categories/" + params.id);
            reset(res);
        }

        if (params.id) {
            getData();
        } else {
            reset({
                categoryName: "",
                categoryImageUrl: "",
            });
        }
    }, [params]);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {params.id ? "Edit Category" : "Add Category"}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Product Name */}
                <div>
                    <label
                        htmlFor="categoryName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Name
                    </label>
                    <input
                        {...register("categoryName")}
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product name"
                    />
                    {errors.categoryName && (
                        <span className="text-red-400">
                            {errors.categoryName?.message}
                        </span>
                    )}
                </div>

                {/* Product Image URL */}
                <div>
                    <label
                        htmlFor="categoryImageUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Image URL
                    </label>
                    <input
                        {...register("categoryImageUrl")}
                        type="url"
                        id="categoryImageUrl"
                        name="categoryImageUrl"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product image URL"
                    />

                    {errors.categoryImageUrl && (
                        <span className="text-red-400">
                            {errors.categoryImageUrl?.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                    {params.id ? "Update Category" : "Add Category"}
                </button>
            </form>
        </div>
    );
}
