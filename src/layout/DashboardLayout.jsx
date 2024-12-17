import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Avatar from 'react-avatar';

function DashboardLayout() {
    const authUser = useSelector((store) => store.auth);

    if (!authUser?.user?.name) {
        return (
            <div className="text-center py-10">
                <h2 className="text-xl font-bold">Unauthorized</h2>
                <p>Please log in to access the dashboard.</p>
                <Link to="/login" className="text-blue-500 hover:underline">
                    Go to Login
                </Link>
            </div>
        );
    }

    return (
        <>
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto max-w-5xl flex justify-between items-center px-4">
                    <Link
                        to="/"
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                        Home
                    </Link>

                    <div className="space-x-4">
                        <Link
                            to="create-category"
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                        >
                            Create new Category
                        </Link>
                        <Link
                            to="create-product"
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                        >
                            Create new Product
                        </Link>
                        <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition">LogOut</button>
                    </div>
                </div>
            </header>

            <h1 className="text-center text-3xl font-bold py-4">
                <Avatar round={true} size="40" className="me-2" name={authUser.user.name} />
                Welcome, {authUser.user.name}
            </h1>

            <div className="py-5 container mx-auto max-w-5xl">
                <Outlet />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </>
    );
}

export default DashboardLayout;
