import { updateProductsAfterFavorite } from "../../../../features/products/productsSlice";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";

export default function ProductSection() {
    const { products } = useSelector((store) => store.products);
    const { categories } = useSelector((store) => store.categories);

    const dispatch = useDispatch();

    const updatedProducts = products.map((item) => {
        let findCat = categories.find((d) => d.id == item.productCategory);

        return {
            ...item,
            productCategory: findCat ? findCat?.categoryName : "not available",
        };
    });

    const handleFavorite = (key) => {
        let newProductsList = products.map((product) => {
            if (product.id === key) {
                return {
                    ...product,
                    isFavorite: !product.isFavorite,
                };
            }

            return product;
        });

        dispatch(updateProductsAfterFavorite(newProductsList));
    };

    return (
        <div className="py-8 bg-[#F6F9FC]" id="productSection">
            <div className="container  mx-auto grid grid-cols-5 gap-4 ">
                {updatedProducts.map((product) => (
                    <ProductItem
                        onFavorite={handleFavorite}
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}
