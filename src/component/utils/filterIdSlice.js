import { createSlice } from "@reduxjs/toolkit";


const filterIdSlice = createSlice({
    name : 'filterId',
    initialState : {
        id : []
    },
    reducers: {
    ADD_ID: (state, action) => {
        const payload = action.payload;
        let temp =[]


      // Check if the newValue is not already in the id array
      let isDuplicate = false;
      for (let i = 0; i < state.id.length; i++) {
        if (state.id[i] === payload) {
          isDuplicate = true;
          break;
        }
      }

      // If it's not a duplicate, add it to the array
      if (!isDuplicate) {
        state.id.push(payload);
      }
      else {
        // If it's a duplicate, remove it from the array
        state.id = state.id.filter(id => id !== payload);
      }



      if(state.id.length>0 && isDuplicate){
        temp = state.id.filter((id)=> id !== action.payload)
        for (let i = 0; i <temp.length ; i++) {
        state.id[i]  = temp[i]

        
        }
      }
      
      

    },
  },
});


export default filterIdSlice.reducer;
export const {ADD_ID} = filterIdSlice.actions