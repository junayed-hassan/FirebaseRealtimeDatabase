import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: {
        carts: [],
    },
    reducers: {
        getCarts: (state, action) => {
            state.carts = action.payload;
        },
        // addCarts: (state, action) => {
        //     state.carts.push(action.payload);
        // },
        // updateCarts: (state, action) => {
        //     let cartIndex = state.carts.findIndex(
        //         (data) => data.id === action.payload?.id
        //     );
        //     state.carts.splice(cartIndex, 1, action.payload);
        // },
        // deleteCarts: (state, action) => {
        //     let cartIndex = state.carts.findIndex(
        //         (data) => data.id === action.payload?.id
        //     );
        //     state.carts.splice(cartIndex, 1);
        // },
    },
});

export default cartSlice.reducer;

export const { getCarts } = cartSlice.actions;
