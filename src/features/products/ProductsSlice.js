import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getFirebaseDate,
  setDataToFirebase,
} from "../../database/firebaseUtils";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    let data = await getFirebaseDate("products");
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      setDataToFirebase("products", action.payload);
    },
    deleteProducts: (state,action) => {
        const productsIndex = state.products.findIndex(
            (item) => item.id == action.payload
        );
        state.products.splice(productsIndex, 1);
    }


  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isError = true;
      state.error = action.payload.error?.message;
    });
  },
});

export default productsSlice.reducer;
export const { setProducts, deleteProducts } = productsSlice.actions;
