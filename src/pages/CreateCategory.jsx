import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryFormSchema } from "../validation/validationSchema";
import { getFirebaseDateForEdit, setDataToFirebase, updateDataFromFirebase } from "../database/firebaseUtils";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

function CreateCategory() {
    const navigate  = useNavigate();
    const prams = useParams();
    
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
        if (prams.id) {
            // updateCategory
            updateDataFromFirebase(`categories/${prams.id}`, data);
            toast.success("Update is successful");
        } else {
            // createCategory
            setDataToFirebase("categories", data);
            toast.success("categories is successful");
        }
        navigate("/");
    };

    useEffect(() => {
        async function getData() {
            let res = await getFirebaseDateForEdit("categories/" + prams.id);
            reset(res);            
        };
        if (prams.id) {
            getData();
        } else {
            reset({
                categoryName: "",
                categoryImageUrl: "",
            });
        }
    },[prams, reset]);


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">{prams.id ? "UpData Category" : "Add Category"}</h2>
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
                    {errors.categoryName && <span className="text-red-700 text-[12px]">{errors.categoryName?.message}</span>}
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
                    {errors.categoryImageUrl && <span className="text-red-700 text-[12px]">{errors.categoryImageUrl?.message}</span>}
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

export default CreateCategory