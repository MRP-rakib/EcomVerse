import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart(state,action){
            const product = action.payload
            const existanceProduct=state.find(item=>item._id===product._id)
             existanceProduct?existanceProduct.quantity+=1 :state.push({...product,quantity:1})
         }
    }
})
export const {addToCart}=cartSlice.actions
export default cartSlice.reducer