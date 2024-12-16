import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUsers: (state, action) => {
            state = action.payload;
        },
    },
});

export default authSlice.reducer;
export const {loginUsers} = authSlice.actions;