import BannerImg from "../../../assets/banner-img.png";
import { Link } from "react-router";
import Slider from "react-slick";

export default function SliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="bg-gradient-to-b from-[#F6F9FC] to-[#E8EFF5] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                Embrace Your <span className="text-red-500">Style</span> <br />
                With the Latest <br />
                <span className="text-blue-500">Fashion Trends</span>
              </h3>
              <p className="text-lg lg:text-xl text-gray-600">
                Discover the latest collection of trendy outfits, crafted with
                care and delivered to your doorstep. Enjoy free shipping on
                orders over $99!
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  to="/shop"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg font-medium transition duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  to="/learn-more"
                  className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 px-8 py-3 rounded-lg shadow-md font-medium transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-10 relative z-10">
                <img
                  src={BannerImg}
                  alt="Fashion Banner"
                  className="rounded-lg shadow-md"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#F6F9FC] to-[#E8EFF5] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                Embrace Your <span className="text-red-500">Style</span> <br />
                With the Latest <br />
                <span className="text-blue-500">Fashion Trends</span>
              </h3>
              <p className="text-lg lg:text-xl text-gray-600">
                Discover the latest collection of trendy outfits, crafted with
                care and delivered to your doorstep. Enjoy free shipping on
                orders over $99!
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  to="/shop"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg font-medium transition duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  to="/learn-more"
                  className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 px-8 py-3 rounded-lg shadow-md font-medium transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-10 relative z-10">
                <img
                  src={BannerImg}
                  alt="Fashion Banner"
                  className="rounded-lg shadow-md"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
