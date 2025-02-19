import { createSlice } from "@reduxjs/toolkit";

const filterDataSlice = createSlice({
  name: 'filterData',
  initialState: {
    postData: [],
  },
  reducers: {
    ADD_FILTER_POST_DATA: (state, action) => {
      const [isContentId, iteratorId] = action.payload;

      // Check if 'isContentId' exists in the state,item is obj , here we is property of item,e.g.id = [rating: [ {value: 'ratingfacetquery3'} ,{value: 'ratingfacetquery4'}, {value: 'ratingfacetquery5'}...],cuisines: [ {value: 'cuisinesfacetquery3'} ,{value: 'cuisinesfacetquery4'}, {value: 'cuisinesfacetquery5'}...]
      const existingDataIndex = state.postData.findIndex((item) => item[isContentId]);

      if (existingDataIndex === -1) {
        // If 'isContentId' doesn't exist in the state, create a new entry
        state.postData.push({ [isContentId]: [{ value: iteratorId }] });
      } else {
        // If 'isContentId' exists, find the 'rating' array within it,state.postData[index][object property ]
        const existingRating = state.postData[existingDataIndex][isContentId];

        // Check if 'iteratorId' already exists in the 'rating' array
        const existingRatingIndex = existingRating.findIndex((item) => item.value === iteratorId);

        if (existingRatingIndex === -1) {
          // If 'iteratorId' doesn't exist in the 'rating' array, add it
          existingRating.push({ value: iteratorId });
        } else {
          // If 'iteratorId' already exists, remove it
          existingRating.splice(existingRatingIndex, 1);
        }
      }
    },
  },
});

export default filterDataSlice.reducer;
export const { ADD_FILTER_POST_DATA } = filterDataSlice.actions;


