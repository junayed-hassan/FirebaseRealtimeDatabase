/* eslint-disable react/prop-types */

import Popup from "./Popup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { db, setProductToCart } from "../../../../database/firebaseUtils";
import { onValue, ref } from "firebase/database";
import { getCarts } from "../../../../features/cart/cartSlice";

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
        <div className="border bg-white" onClick={() => setIsPopup(true)}>
            <img
                className="w-full h-[160px] object-cover"
                src={productImageUrl}
                alt={productName}
            />
            <div className="flex w-full p-1">
                <div className="w-full">
                    <h3
                        onClick={(e) => handleClick(e, id)}
                        className="font-bold mb-1 cursor-pointer"
                    >
                        {productName}
                    </h3>
                    <span className="text-sm block mb-1">
                        {productCategory}
                    </span>
                    <p className="text-red-600">${productPrice.toFixed(2)}</p>
                    <div className="flex mb-4 mt-3">
                        {stats.map((star, index) => (
                            <div key={index}>{star}</div>
                        ))}
                    </div>
                </div>

                <div className="w-[80px] flex flex-col justify-end mb-3 items-center">
                    {!isFavorite ? (
                        <svg
                            onClick={() => onFavorite(id)}
                            className="cursor-pointer w-6 h-6 text-red-600 dark:text-white"
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
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            onClick={() => onFavorite(id)}
                            className="cursor-pointer w-6 h-6 text-red-600 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                        </svg>
                    )}

                    <button
                        onClick={handleAddToCart}
                        disabled={activeCart ? true : false}
                        className="bg-red-600 rounded text-white py-2 px-2 inline-block mt-2 disabled:bg-red-200"
                    >
                        <svg
                            className="w-6 h-6 text-white dark:text-white"
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
                    </button>
                </div>
            </div>

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
