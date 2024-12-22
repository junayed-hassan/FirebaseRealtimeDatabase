const Navbar = () => {
    return (
        <header className="bg-blue-900 text-white">
            <div className="container mx-auto flex justify-between items-center py-2 px-4">
                <div className="flex items-center space-x-4">
                    <p className="text-sm">+88012 3456 7894</p>
                    <p className="text-sm">support@ui-lib.com</p>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm hover:underline">
                        Theme FAQ's
                    </a>
                    <a href="#" className="text-sm hover:underline">
                        Need Help?
                    </a>
                </div>
            </div>
            <div className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    <div className="flex items-center">
                        <h1 className="text-red-500 font-bold text-lg">
                            divineshop
                        </h1>
                    </div>
                    <div className="flex-grow mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search and hit enter..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select className="absolute top-0 right-0 h-full border-l border-gray-300 text-black border px-4 text-sm">
                                <option>All Categories</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-sm hover:underline">
                            Home
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Pages
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            User Account
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Vendor Account
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Track My Orders
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Back to Demos
                        </a>
                        <button className="relative text-gray-700 hover:text-black">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </button>
                        <button className="relative text-gray-700 hover:text-black">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                                />
                            </svg>

                            <span className="absolute top-[-10px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-1">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
