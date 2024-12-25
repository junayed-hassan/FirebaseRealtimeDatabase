import { useSelector } from "react-redux";
import Table from "../../../component/Table";
import { useNavigate } from "react-router";

export default function IndexProduct() {
    const { products } = useSelector((store) => store.products);
    const { categories } = useSelector((store) => store.categories);
    const navigate = useNavigate();

    const updatedProducts = products.map((item) => {
        let findCat = categories.find((d) => d.id == item.productCategory);

        return {
            ...item,
            productCategory: findCat?.categoryName,
        };
    });

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Our Products</h1>
            <Table
                tableContent={updatedProducts}
                onAdd={() => navigate("/dashboard/create-product")}
                onEdit={(data) =>
                    navigate(`/dashboard/edit-product/${data.id}`)
                }
            />
        </>
    );
}
