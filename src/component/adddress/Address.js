import React, { useEffect, useState } from "react";
// import logo from "../assests/Swiggy.png"
import AddressMain from "./AddressMain";
import AddressBody from "./AddressBody";
import AddressFooter from "./AddressFooter";
import { useSelector } from "react-redux";
import Restaurnat from "../restaurant/Restaurant";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";







function Address(){
  const select = useSelector(store=>store.lat.coor)
  

  


  const islat = JSON.parse(localStorage.getItem('lat'))
  console.log(islat)
  
     if(islat) {
     

       return <Navigate to={'home'} />
    }


  console.log(select)
 


 


    return(
      <>  

        
       <div className="home-page top-0 bottom-0 left-0 right-0">
          <AddressMain />
          <AddressBody />
          <AddressFooter />
              
        </div>
        
      </>     
    )
   
}
export default Address;