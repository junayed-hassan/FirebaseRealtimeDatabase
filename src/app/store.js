import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/ProductsSlice";
import categoriesSlice from "../features/category/categorySlice";

const store = configureStore({

    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
    }

});

export default store;