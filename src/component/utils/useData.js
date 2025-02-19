import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantData } from "./restaurantSlice";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
   
// used in restaurnat data api calls , restaurant component


 function useData(lat,lng){
    const dispatch = useDispatch()
    const selectorRest = useSelector(store=>store.restaurant.card)
    console.log(selectorRest)
    const [filterRestuarnat,setFilterRestaurant] = useState()
   const [restaurant,setRestaurant] = useState('')
   const [isAllFetchObject,setAllfetchObject] = useState(null)
   isAllFetchObject && console.log(isAllFetchObject)

   console.count(lat,lng)
    async function fetchRestaurant(){  
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

        if (lat && lng) {
            // let fetchRest = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            let fetchRest = await fetch(url)
            let jsonRest = await fetchRest.json()
            console.count(jsonRest)
            // dispatch(restaurantData(jsonRest?.data))
            setRestaurant(jsonRest?.data)
          
            setFilterRestaurant(jsonRest?.data)
            
            setAllfetchObject(jsonRest)
            console.log('3')
        
        
        
        }   
        else(console.log('🌋'))

    }
    React.useEffect(()=>{
        fetchRestaurant(lat,lng)
        
        console.log(' i am geocode useEffect')
        
    },[lat,lng])
    // React.useEffect(()=>{
    //     dispatch(restaurantData(isAllFetchObject))
    // },[])
    React.useEffect(()=>{
        dispatch(restaurantData(isAllFetchObject))
    },[isAllFetchObject])


 

     

   return [setRestaurant,restaurant,filterRestuarnat,setFilterRestaurant,setAllfetchObject]
}
export default useData;