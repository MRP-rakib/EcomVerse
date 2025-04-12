import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const products = createAsyncThunk("products/fetch",async()=>{
    const res= await fetch("https://exclusive-backend-api.onrender.com/api/products")
    return await res.json()
})
const apiSlice = createSlice({
    name: 'API',
    initialState:{
        data:[],
        status:"idle",
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(products.pending,state=>{
            state.status="loading"
        })
        .addCase(products.fulfilled,(state,action)=>{
            state.status= "succeeded"
            state.data=action.payload
        })
        .addCase(products.rejected,(state,action)=>{
            state.status= 'failed'
            state.error=action.error.message
        })
    }
})

export default apiSlice.reducer
