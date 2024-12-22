import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { onValue, ref } from "firebase/database";
import { useDispatch } from "react-redux";
import { db } from "../database/firebaseUtils";
import { getCategories } from "../features/categories/categorySlice";
import { getProducts } from "../features/products/productsSlice";

export default function HomeLayout() {
    const dispatch = useDispatch();

    useEffect(() => {
        const categoryRef = ref(db, "categories");
        const productRef = ref(db, "products");

        // Set category to redux for getting this content globally;
        const disableCategory = onValue(categoryRef, (snapshot) => {
            const updateCategoryList = [];

            snapshot.forEach((item) => {
                updateCategoryList.push({
                    id: item.key,
                    ...item.val(),
                });
            });

            dispatch(getCategories(updateCategoryList));
        });

        // Set products to redux for getting this content globally;
        const disableProduct = onValue(productRef, (snapshot) => {
            const updateProductList = [];

            snapshot.forEach((item) => {
                updateProductList.push({
                    id: item.key,
                    ...item.val(),
                });
            });

            dispatch(getProducts(updateProductList));
        });

        return () => {
            disableCategory();
            disableProduct();
        };
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
