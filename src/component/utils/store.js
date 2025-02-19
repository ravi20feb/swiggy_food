import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";
import latslice from "./latslice";
import filterIdSlice from "./filterIdSlice";
import cartSlice from './cartItemSlice'
import postFilterDataSlice from "./FilterPostDataSlice";





import filterDataSlice from "./filterDataSlice";

 const store = configureStore({
    reducer:{
        
        restaurant: restaurantSlice,
        FilterRestaruant:postFilterDataSlice ,
        lat: latslice,
        filterId : filterIdSlice,
        filterData : filterDataSlice,
        cart:cartSlice,

    }

})

export default store;
