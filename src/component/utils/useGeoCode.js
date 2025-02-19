import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { restaurantData } from "./restaurantSlice";
import { addLat } from "./latslice";
import { useSelector } from "react-redux";



 function useGeoCode(){
    let[formattedAddress,setformattedAddress] = useState('')
    let[placeId,setPlaceId] = useState('')
    let[restaurant,setRestaurant] = useState('')
    let[address,setAddress] = useState({})
    let[lat,setLat] = useState('')
    let[lng,setLng] = useState('')
    let dispatch = useDispatch()
    let selector3 = useSelector(store=>store.lat.coor)
    console.log(selector3)
    !(lng)

    !(lng)  ?console.log('lng'):localStorage.setItem('lng',lng)     
     console.log(lat,lng)


    
  

    console.log(address)

    !restaurant?console.log('i am empty'):console.log(restaurant) 
    // let url = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`
    const url = `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`;

     
        async function geoCode(){
            if (placeId) {
            
            
                try {
                    const  fetchData =await fetch(url);
                    const json = await fetchData.json()
                    const city = json.data[0].address_components.map((type)=>type.types[0]==='locality' && type.long_name ).filter(Boolean)
                    console.log(json);
                    console.log(json.data[0].address_components.map((type)=>type.types[0]==='locality' && type.long_name ).filter(Boolean))
                    localStorage.setItem('address',JSON.stringify({address2:json.data[0].formatted_address,city:city[0] }))  
                    setAddress(json) 
                    setLat(json.data[0].geometry.location.lat) 
                    setLng(json.data[0].geometry.location.lng)
                    localStorage.setItem('lat',json.data[0].geometry.location.lat)
                    localStorage.setItem('lng',json.data[0].geometry.location.lng)
                    dispatch(addLat({lat:json.data[0].geometry.location.lat})) 
                    console.log('dispatch lat')
                    dispatch(addLat({lng:json.data[0].geometry.location.lng})) 
                    console.log('dispatch lng')
                    console.log('i am in geo code')
                   

                   
                 
                      
                }    
                catch (error){
                console.log(error)
                }
            }
            else(console.log('happy coding 😂'))

        }
        
      
    useEffect(()=>{

        console.log('i am first exact address lt lng')
         geoCode(placeId) 
    },[placeId]

   )
//    
    return [setPlaceId,setAddress,setLat,setLng ]


}

export default useGeoCode;