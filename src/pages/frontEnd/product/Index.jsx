import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function SingleProductIndex() {
    const { products } = useSelector((store) => store.products);
    const params = useParams();

    const product = products.find((pro) => pro.id === params.id);

    let { productImageUrl, productName, productPrice, productCategory } =
        product;

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

    return (
        <div>
            <div className="container mx-auto h-screen flex items-center gap-4">
                <div className="w-1/2">
                    <img
                        className="w-[320px] ml-auto object-cover"
                        src={productImageUrl}
                        alt={productName}
                    />
                </div>
                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold">{productName}</h2>
                    <span className="text-red-600 text-sm">
                        {productCategory}
                    </span>
                    <p className="mt-3">Price: {productPrice}</p>

                    <div className="flex gap-1">
                        {stats.map((star, index) => (
                            <div key={index}>{star}</div>
                        ))}
                    </div>

                    <button className="bg-red-600 rounded text-white py-2 px-4 inline-block mt-5">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
