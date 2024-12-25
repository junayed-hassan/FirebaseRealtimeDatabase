import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export default categoriesSlice.reducer;

export const { getCategories } = categoriesSlice.actions;
