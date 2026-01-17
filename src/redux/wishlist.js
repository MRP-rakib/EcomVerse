import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishList(state,action){
            const product = action.payload
            const existanceProduct = state.find(item=>item.id === product.id)
            if(existanceProduct){
               return state.filter(item=>item.id!==product.id)
            }
            else{
                return [...state,{...product}]
            }
        },
        deleteWishlist(state,action){
            return state.filter(item=>item.id!==action.payload.id)
        }
    }
})
export const {addWishList,deleteWishlist}= wishlistSlice.actions
export default wishlistSlice.reducer