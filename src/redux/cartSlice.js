import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart(state,action){
            const product = action.payload
            const existanceProduct=state.find(item=>item.id===product.id)
             existanceProduct?existanceProduct.quantity+=1 :state.push({...product,quantity:1})
         },
         increaseItem(state,action){
            const productId = action.payload
            const product = state.find(item=>item.id===productId)
          if(product){
            product.quantity+=1
          }
         },
         decreaseItem(state,action){
            const productId = action.payload
            const product = state.find(item=>item.id === productId)
            if (product&&product.quantity>1){
                product.quantity-=1
            }
         },
         deleteItem(state,action){
            const productId = action.payload
            return state.filter(item=>item.id !==productId)
         }

    }
})
export const {addToCart,increaseItem,decreaseItem,deleteItem}=cartSlice.actions
export default cartSlice.reducer