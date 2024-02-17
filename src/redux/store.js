import { configureStore } from "@reduxjs/toolkit";
import userlogin from './slice/userlogin'
import product from "./slice/product";
import cart from "./slice/cart";

const store = configureStore({
    reducer: {
        userlogin: userlogin,
        product:product,
        cart:cart,
    }
})

export default store;