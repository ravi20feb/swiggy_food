import { createSlice } from "@reduxjs/toolkit";


const restaurantSlice = createSlice({
    name: 'restaruant',
    initialState: {
        card: []
    },
    reducers:{
        restaurantData:(state,action)=>{
            state.card[0]=action.payload
        },
       
      
    }
})

export default restaurantSlice.reducer;
export const {restaurantData,removeData} = restaurantSlice.actions;