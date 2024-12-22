import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default function ProductSection() {
    const { products } = useSelector((store) => store.products);
    const { categories } = useSelector((store) => store.categories);

    const updatedProducts = products.map((item) => {
        let findCat = categories.find((d) => d.id == item.productCategory);

        return {
            ...item,
            productCategory: findCat.categoryName,
        };
    });

    return (
        <div className="py-8 bg-[#F6F9FC]">
            <div className="container  mx-auto grid grid-cols-5 gap-4 ">
                {updatedProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
