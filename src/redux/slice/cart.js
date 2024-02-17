import { createSlice } from "@reduxjs/toolkit";
import { cartpage } from "../action/user";
const cart = createSlice({
    name: 'user data',
    initialState: {
        IsLoading: false,
        data: [],
        IsError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(cartpage.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(cartpage.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data.push(action.payload);
        })
        builder.addCase(cartpage.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default cart.reducer;


