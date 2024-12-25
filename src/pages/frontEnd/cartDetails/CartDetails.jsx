import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import SingleCartList from "./SingleCartList";

export default function CartDetails() {
    const { user } = useSelector((store) => store.auth);
    const { carts } = useSelector((store) => store.carts);
    const { products } = useSelector((store) => store.products);

    const updateCarts = carts.map((cart) => {
        let findProduct = products.find(
            (product) => product.id === cart.productId
        );
        return {
            cartId: cart.id,
            productId: cart.productId,
            productName: findProduct.productName,
            productImage: findProduct.productImageUrl,
            productPrice: findProduct.productPrice,
            quantity: cart.quantity,
        };
    });

    let totalPrice = updateCarts.reduce((total, cart) => {
        return total + cart.productPrice;
    }, 0);

    if (!user) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className="max-w-md mx-auto py-6">
            <h1 className="text-4xl font-bold mb-4 text-center">
                Hello {user.name}, Your Cart Details
            </h1>
            <ul>
                {updateCarts.map((cart) => (
                    <SingleCartList key={cart.cartId} cart={cart} />
                ))}
            </ul>
            <button className="inline-block px-6 py-2 bg-red-600 text-white mt-6 mb-6 mx-auto">
                Checkout Now and pay ${totalPrice}
            </button>
        </div>
    );
}
