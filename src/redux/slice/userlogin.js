import { createSlice } from "@reduxjs/toolkit";
import { mylogin } from "../action/user";
const userlogin = createSlice({
    name:'user login',
    initialState:{
        IsLoading:false,
        data:null,
        IsError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(mylogin.pending, (state, action)=>{
            state.IsLoading = true
        })
        builder.addCase(mylogin.fulfilled, (state,action)=>{
            state.IsLoading= false
            state.data = action.payload
        })
        builder.addCase(mylogin.rejected , (state,action)=>{
            state.IsError = true
        })
    }
})

export default userlogin.reducer;
