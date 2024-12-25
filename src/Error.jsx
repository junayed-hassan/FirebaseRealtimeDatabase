import { useNavigate } from "react-router";

export default function Error() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-700 mt-4">
                Oops! The page you are looking for does not exist.
            </p>
            <button
                onClick={() => navigate(-1)} // Navigate back to the previous page
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
                Go Back
            </button>
        </div>
    );
}
