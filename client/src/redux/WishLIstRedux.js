import {createSlice} from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        products:[],
        quantity:0
    },
    reducers:{
        addProduct:(state,action) => {
            state.quantity+=1;
            state.products.push(action.payload.product);
        },
    },
});

export const {addProduct} = wishlistSlice.actions;
export default wishlistSlice.reducer;
