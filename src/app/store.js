import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/ProductsSlice";
import categoriesSlice from "../features/category/categorySlice";
import authSlice from './../features/auth/authSlice';

const store = configureStore({

    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        auth: authSlice,
    }

});

export default store;