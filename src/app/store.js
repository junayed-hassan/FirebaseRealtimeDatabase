import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productsSlice";
import categorySlice from "../features/categories/categorySlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        auth: authSlice,
    },
});

export default store;
