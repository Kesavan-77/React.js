import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
    },
    reducers: {
        //mutating the state here
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
})

export const {addItem, clearCart} = cartSlice.actions;

// export default cartSlice.reducer

//or

const cartReducer = cartSlice.reducer;

export default cartReducer;