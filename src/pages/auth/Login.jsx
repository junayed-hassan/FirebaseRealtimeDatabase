import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidation } from "../../validation/validationSchema";
import { auth, loginUser } from "../../database/firebaseAuth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createUserProfile, getProfile } from "../../database/firebaseUtils";
import { useNavigate } from "react-router";
import { setLoginUserDataToRedux } from "../../features/auth/authSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const googleAuthProvider = new GoogleAuthProvider();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginValidation),
    });

    const onSubmit = async (data) => {
        const res = await loginUser(data);

        if (res.error) {
            toast.error(res.code);
        } else {
            // Login User;
            let userProfile = await getProfile(res.id);
            const loginUserInfo = {
                id: res.id,
                email: res.email,
                name: userProfile.name,
                role: userProfile.role,
            };

            dispatch(setLoginUserDataToRedux(loginUserInfo));
            reset();
            navigate("/dashboard");
        }
    };

    const googleLogin = async () => {
        try {
            const res = await signInWithPopup(auth, googleAuthProvider);
            const user = res.user;

            const newUser = {
                id: user.uid,
                name: user.displayName,
                email: user.email,
            };

            const userProfile = await getProfile(user.uid);

            if (!userProfile || userProfile.email != user.email) {
                // Create a new user;
                createUserProfile(newUser);
                dispatch(
                    setLoginUserDataToRedux({
                        ...newUser,
                        role: "user",
                    })
                );
            } else {
                // Just set user information to redux;
                dispatch(
                    setLoginUserDataToRedux({
                        ...newUser,
                        role: userProfile.role,
                    })
                );
            }

            toast.success("You are logged in");
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-between">
                    <hr className="w-full border-gray-300" />
                    <span className="px-2 text-sm text-gray-500">OR</span>
                    <hr className="w-full border-gray-300" />
                </div>

                <button
                    onClick={() => googleLogin()}
                    className="mt-4 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Login with Google
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    {` Don't have an account? `}
                    <a
                        href="/register"
                        className="text-indigo-600 hover:underline"
                    >
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
