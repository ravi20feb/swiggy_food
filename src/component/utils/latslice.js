import { createSlice } from "@reduxjs/toolkit";

const latSlice = createSlice({
    name: 'lat',
    initialState: {
        coor : []
    },
    reducers:{
        addLat : (state,action)=>{
            state.coor[0]=action.payload
        },
        
        removeLngLat:(state,action)=>{
            for (let i = 0; i = state.coor.length; i++) {
                state.coor.pop();
                console.log(i)       
            }
        }
    }

})
export default latSlice.reducer
export const {addLat,removeLngLat} = latSlice.actions