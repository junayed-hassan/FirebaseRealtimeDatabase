/* eslint-disable react/prop-types */

import Popup from "./Popup";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setProductToCart } from "../../../../database/firebaseUtils";

export default function ProductItem({ product, onFavorite }) {
  const { user } = useSelector((store) => store.auth);

  const { carts } = useSelector((store) => store.carts);

  const {
    id,
    productName,
    productPrice,
    productCategory,
    productImageUrl,
    isFavorite,
  } = product;

  const activeCart = carts.find((cart) => cart.productId == id);

  const [isPopup, setIsPopup] = useState(false);

  const navigate = useNavigate();

  const closeHandler = (e) => {
    e.stopPropagation();
    setIsPopup(false);
  };

  const handleClick = (e, id) => {
    e.stopPropagation();
    navigate(`/single-product/${id}`);
  };

  let svg = (
    <svg
      className="w-5 h-5 text-[#FFCC00] dark:text-white"
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
        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
      />
    </svg>
  );
  let count = 5;
  let stats = Array(count).fill(svg);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (user) {
      setProductToCart({
        userId: user.id,
        productId: id,
        quantity: 1,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="border bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => setIsPopup(true)}
    >
      {/* Product Image */}
      <div className="relative group">
        <img
          className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
          src={productImageUrl}
          alt={`Image of ${productName}`}
        />
        {/* Badge for Sale/New Products */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          New
        </span>
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col">
        <h3
          onClick={(e) => handleClick(e, id)}
          className="font-bold mb-1 cursor-pointer hover:text-blue-600 transition-colors duration-300"
        >
          {productName}
        </h3>
        <span className="text-sm text-gray-600 mb-1">{productCategory}</span>
        <p className="text-red-600 font-semibold">${productPrice.toFixed(2)}</p>

        {/* Star Ratings */}
        <div className="flex items-center space-x-1 mt-2">
          {stats.map((star, index) => (
            <span key={index} className="text-yellow-400">
              ★
            </span>
          ))}
          {stats.length < 5 &&
            [...Array(5 - stats.length)].map((_, i) => (
              <span key={i} className="text-gray-300">
                ★
              </span>
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between p-3">
        {/* Favorite Icon */}
        <div
          className="cursor-pointer text-red-600 hover:text-red-800 transition-colors"
          onClick={() => onFavorite(id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={activeCart}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white font-bold py-2 px-3 rounded-lg transition-colors duration-300"
        >
          {activeCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>

      {/* Popup */}
      {isPopup && (
        <Popup
          onClose={closeHandler}
          onFavorite={() => onFavorite(id)}
          product={product}
        />
      )}
    </div>
  );
}
