import { createSlice } from "@reduxjs/toolkit";


const postFilterDataSlice = createSlice({
    name: 'FilterRestaruant',
    initialState: {
        card: []
    },
    reducers:{
        restaurantFilterData:(state,action)=>{
            state.card[0]=action.payload
        },
       
      
    }
})

export default postFilterDataSlice.reducer;
export const {restaurantFilterData} = postFilterDataSlice.actions;