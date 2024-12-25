import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        updateProductsAfterFavorite: (state, action) => {
            state.products = action.payload;
        },
    },
});

export default productsSlice.reducer;
export const { getProducts, updateProductsAfterFavorite } =
    productsSlice.actions;
