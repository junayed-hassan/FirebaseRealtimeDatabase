import { Link, Outlet } from "react-router"
import { ToastContainer } from "react-toastify";

function DashboardLayout() {
  return (
    <>
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link
                    to="/"
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                >
                    Home
                </Link>

                <div className="space-x-4">
                    <Link
                        to="create-product"
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                        Create new Category
                    </Link>
                    <Link
                        to="create-category"
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                        Create new Product
                    </Link>
                </div>
            </div>
        </header>
        <div className="py-5">
            <Outlet />
            <ToastContainer />
        </div>
    </>
);
}

export default DashboardLayout