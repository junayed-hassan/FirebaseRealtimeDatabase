import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebaseDate, removeDataFromFirebase } from "../../database/firebaseUtils";


const initialState = {
    categories:[],
    isLoading: false,
    isError: false,
    error: null,
};

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    let data = await getFirebaseDate('categories');
   return data;
});

export const deleteCategories = createAsyncThunk('categories/deleteCategories', async (id) => {
    let conn = await removeDataFromFirebase("categories/" + id);
    console.log(conn);
   return id;
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        }).addCase(getCategories.rejected, (state, action) => {
            state.isError = true;
            state.error = action.payload.error?.message;
        });

        builder.addCase(deleteCategories.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(deleteCategories.fulfilled, (state, action) => {
            const categoriesIndex = state.categories.findIndex(
                (item) => item.id == action.payload
            );
            state.categories.splice(categoriesIndex, 1);
        }).addCase(deleteCategories.rejected, (state, action) => {
            state.isError = true;
            state.error = action.payload.error?.message;
        });
    } ,
});

export default categoriesSlice.reducer;


