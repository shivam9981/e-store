import { createAsyncThunk } from "@reduxjs/toolkit";

export const mylogin = createAsyncThunk('user login', async (data) => {
    const { username, password } = data
    console.log(username + password)
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',

        })
    })
    const finaldata = await response.json();
    return finaldata
})

export const productdata = createAsyncThunk('user data', async () => {
    const response = await fetch('https://dummyjson.com/products')
    const finaldata = await response.json();
    return finaldata
})

export const cartpage = createAsyncThunk('cart data', (data) => {
    return data
})

