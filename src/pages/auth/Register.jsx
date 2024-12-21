import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerValidation } from "../../validation/validationSchema";
import { registerUser } from "../../database/firebaseAuth";
import { toast } from "react-toastify";
import { createUserProfile } from "../../database/firebaseUtils";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(registerValidation),
    });

    const onSubmit = async (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: "user",
        };
        const res = await registerUser(formData);

        if (res.error) {
            toast.error(res.code);
        } else {
            // already registered;
            createUserProfile(res);
            reset();
            toast.success("You are successfully registered");
            navigate("/login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Register
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your name"
                            {...register("name")}
                        />

                        {errors.name && (
                            <span className="text-red-400">
                                {errors.name?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="text-red-400">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                            {...register("password")}
                        />
                        {errors.password && (
                            <span className="text-red-400">
                                {errors.password?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Confirm your password"
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-400">
                                {errors.confirmPassword?.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-indigo-600 hover:underline"
                    >
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
