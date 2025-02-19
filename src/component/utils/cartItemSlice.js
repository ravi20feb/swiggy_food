import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItem',
    initialState:{
        item :{quatity:0,
            cartItems:{
                
            },


        }
    },
    reducers:{
        ADD_CART:(state,action) => {
            const payload = action.payload
        //    for (const key in payload) {
            if (!state.item.cartItems[payload.id]) {
                state.item.cartItems[payload.id] = payload
                state.item.cartItems[payload.id]['count'] = 0
                state.item.quatity +=1
                
                
            }
             if (state.item.cartItems[payload.id]) {
                
                state.item.cartItems[payload.id]['count'] +=1
                
            }
           

            },
             REMOVE_CART:(state,action) =>{
                const payload = action.payload;
                const item = state.item.cartItems[payload.id];

                if (item && item.count > 0) {
                item.count -= 1;
                if (item.count === 0) {
                    state.item.quatity -= 1;
                    delete state.item.cartItems[payload.id];
                }
                } 
               
            

        //    }
           


        }
    }

})
export default cartSlice.reducer;
export const {ADD_CART,REMOVE_CART} = cartSlice.actions 