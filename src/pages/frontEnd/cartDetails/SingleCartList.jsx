import { useSelector } from "react-redux";
import { db } from "../../../database/firebaseUtils";
import { ref, remove, set } from "firebase/database";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
export default function SingleCartList({ cart }) {
    const {
        cartId,
        productId,
        productName,
        productImage,
        productPrice,
        quantity,
    } = cart;

    const {user} = useSelector((state) => state.auth);
    const handleClick = () => {
       remove(ref(db, `carts/${user.id}/${cartId}`));
       toast.success("Product removed from cart successfully");
    };

    const handlePlus = () => {
        set(ref(db, `carts/${user.id}/${cartId}`),{
            productId,
            quantity: quantity < 10 ? quantity + 1 : quantity 
        })
    };

    const handleMinus = () => {
        set(ref(db, `carts/${user.id}/${cartId}`),{
            productId,
            quantity: quantity === 1 ? 1 : quantity - 1      
        })
    };

    return (
        <li className="border p-2 mb-2">
            <div className="flex items-center relative">
                <button onClick={handleClick} className="absolute top-[-5px] right-[-5px] z-10">
                    <svg
                        className="w-5 h-5 text-red-500 dark:text-white"
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
                            d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                </button>

                <img
                    className="w-[80px] h-[80px] object-cover"
                    src={productImage}
                    alt="afa"
                />
                <div className="ml-2">
                    <h3 className="font-semibold">{productName}</h3>
                    <span className="text-sm text-blue-400 font-semibold">
                        price: ${productPrice}
                        <br />
                        Total: ${productPrice * quantity}
                    </span>
                </div>
                <div className="flex gap-2 ml-auto">
                    <button
                    onClick={handleMinus}
                        disabled={quantity === 1 ? true : false}
                        className="w-6 h-6 rounded-sm flex justify-center items-center bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
                    >
                        <svg
                            className="w-4 h-4 text-white dark:text-white"
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
                                d="M5 12h14"
                            />
                        </svg>
                    </button>
                    <span>{quantity}</span>
                    <button
                    onClick={handlePlus}
                        disabled={quantity < 10 ? false : true}
                        className="w-6 h-6 rounded-sm flex justify-center items-center bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
                    >
                        <svg
                            className="w-4 h-4 text-white dark:text-white"
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
                                d="M5 12h14m-7 7V5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
}
