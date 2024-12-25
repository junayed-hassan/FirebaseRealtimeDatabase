import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const { carts } = useSelector((store) => store.carts);

  return (
    <header className="bg-blue-900 text-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center space-x-6 text-gray-700">
            <p className="text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-6 9 6-9 6-9-6z"
                />
              </svg>
              +880 01948493880
            </p>
            <p className="text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm2 10h-4m-4 0H4m4 0h8m4 0h4"
                />
              </svg>
              junayedhassan102045@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-500 transition"
            >
              Theme FAQ&apos;s
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-500 transition"
            >
              Help?
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1
              onClick={() => navigate("/")}
              className="text-red-500 font-bold text-lg cursor-pointer hover:text-red-700 transition"
            >
              Shop
            </h1>
          </div>

          {/* Search Bar Section */}
          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search and hit enter..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="absolute top-0 right-0 h-full border-l border-gray-300 rounded-r-lg px-4 text-sm bg-gray-50 text-gray-800 focus:outline-none">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>
          </div>

          {/* Navigation Links & Actions */}
          <div className="flex items-center space-x-4 text-sm">
            {[
                
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "Home",
              "Pages",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-blue-500 transition hover:underline"
              >
                {link}
              </a>
            ))}

            {/* Profile Icon */}
            <button className="relative text-gray-700 hover:text-black">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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

            {/* Cart Icon */}
            <button
              onClick={() => navigate("/cart-details")}
              className="relative text-gray-700 hover:text-black"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-1">
                {!carts ? 0 : carts.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
