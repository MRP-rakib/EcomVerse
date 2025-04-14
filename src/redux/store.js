import { configureStore } from "@reduxjs/toolkit"
import productReducer from'./apiSlice'
import cartReducer from './cartSlice'
import wishlistReducer from "./wishlist"

const store = configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
        wishlist: wishlistReducer,
        
    }
})
export default store