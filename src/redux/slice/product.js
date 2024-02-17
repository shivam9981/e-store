import { createSlice } from "@reduxjs/toolkit";
import { productdata } from "../action/user";
const product = createSlice({
    name: 'user data',
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(productdata.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(productdata.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(productdata.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default product.reducer;