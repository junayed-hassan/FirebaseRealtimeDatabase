import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginUserDataToRedux: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
    },
});

export default authSlice.reducer;
export const { setLoginUserDataToRedux } = authSlice.actions;
