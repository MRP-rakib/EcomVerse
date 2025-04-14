import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishList(state,action){
            const product = action.payload
            const existanceProduct = state.find(item=>item._id === product._id)
            if(existanceProduct){
               return state.filter(item=>item._id!==product._id)
            }
            else{
                return [...state,{...product}]
            }
        },
        deleteWishlist(state,action){
            return state.filter(item=>item._id!==action.payload._id)
        }
    }
})
export const {addWishList,deleteWishlist}= wishlistSlice.actions
export default wishlistSlice.reducer