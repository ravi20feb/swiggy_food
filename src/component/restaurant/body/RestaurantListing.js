import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { starPath } from "../../utils/constant";
import { Link } from "react-router-dom";
import { UseRestaurantListing } from "../../utils/useResturantListing";
import HomeDishShimer from "../HomeDishShimer";
import InfiniteShimmer from "../InfiniteShimmer";


function RestaurnatListing(){
    const[isSelector,setSelector]= useState('')
    const[isFilterFetch,setFilterFetch]= useState('')
    const[defaultRestData,setDefaultRestData] = useState('')

    const selector = useSelector(store=>store?.restaurant?.card)
    let filterPostSelector = useSelector(store=>store.FilterRestaruant.card)
    const mapArray = isFilterFetch?isFilterFetch : isSelector
    ele = document.getElementsByClassName('grid-listing-wrapper')[0]
    
    // const onScrollRestaurant = UseRestaurantListing(ele,setDefaultRestData,setFilterFetch,defaultRestData,isFilterFetch)
    // console.log(onScrollRestaurant)


  
    
const BACKGROUND = {
  WebkitBoxShadow: 'inset 0px -110px 65px -38px rgba(0,0,0,0.75)',
MozBoxShadow: ' inset 0px -104px 65px -38px rgba(0,0,0,0.75)',
boxShadow: 'inset 0px -104px 65px -38px rgba(0,0,0,0.75'
};
console.log(isFilterFetch)

    // console.log(selector)
    // console.log('selector202')
      console.log('filterSelector')
    console.log(filterPostSelector[0])
    console.log(isFilterFetch)

    // console.log('isSelector')
    // console.log(isSelector)
    

    useEffect(()=>{
        let temp ;
        if(selector[0]){
            temp = selector[0]?.data?.cards
            console.log(temp)
            for (const value of temp) {
                // console.log(value?.card?.card?.gridElements?.infoWithStyle?.restaurants

                if(value?.card?.card?.id == 'restaurant_grid_listing')
                {
                    console.log(value)
                    setDefaultRestData(value?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                    

                    break
                }

                
            }

        }
        
        console.log(selector),[selector]
    },[selector])
    
    useEffect(()=>{
        let filterFetch = filterPostSelector[0]
        
        console.log(filterPostSelector[0])

        console.log(filterFetch)
        console.log('filterFetch')
        setFilterFetch(filterFetch)
    },[filterPostSelector[0]])
//   dynamically set isSelector value
     console.log()
    useEffect(()=>{
        setSelector(()=>isFilterFetch?isFilterFetch:defaultRestData)
    },[defaultRestData,isFilterFetch])


      



    return(
        <div className="grid-listing-wrapper body-margin ">
            <div>
            
                <div className="grid-container">
                    <div className="grid grid-cols-[repeat(4,_1fr)] gap-4 my-8 mx-3 items-start xs:grid-cols-[repeat(1,_1fr)] sm:grid-cols-[repeat(2,_1fr)] md:grid-cols-[repeat(3,_1fr)] xs:gap-2   lg:min-w-[auto] lg:max-w-[100vw]">
                        {
                            !isSelector?<div className="hidden"></div>:
                            
                                isSelector.map((info,index)=>{
                                        return( 
                                            <Link  to={'/home/restaurant'+'/'+info?.info?.id} key={index}>
                                                <div  className=" leading-[1.75rem] relative cursor-pointer hover:scale-[.95] xs:hover:scale-1 lg:mx-auto lg:min-w-[auto] lg:max-w-[100vw]  transition-all">
                                                {/* {console.log(carouselCard)} */}
                                                
                                                    <div className="  flex flex-col w-[14rem]  relative   lg:mx-auto xs:w-[80vw] ">
                                                        <div className="caro1-img   mx-0 my-0  relative  rounded-[1.2rem]  overflow-hidden	" >
                                                            <div className="  w-[24rem] left-0 right-0  h-[9rem] absolute  z-[1] xs:min-w-[full] xs:h-[13rem] " style={BACKGROUND}></div>
                                                            
                                                                <img className= "bg-cover w-[full]  h-[9rem] xs:min-w-[24rem] xs:h-[12rem]  "     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${info.info.cloudinaryImageId}`} />
                                                            <div className=" absolute bottom-2 mr-1 truncate font-[800] text-[1.2rem] text-[white] px-3 z-[1]  text-left h-10 w-full overflow-hidden xs:ml-0 ">{info?.info?.aggregatedDiscountInfoV3?.header ? info?.info?.aggregatedDiscountInfoV3?.header +" " +info?.info?.aggregatedDiscountInfoV3?.subHeader :''}</div>

                                                        </div>
                                                        <div>
                                                            <div className="text-[18px] font-bold text-[rgba(2,6,12,.75)] overflow-hiddenantialiased ml-2 truncate">
                                                                {info?.info?.name}
                                                            </div>
                                                            <div className="flex">
                                                                <span className="star mr-1 mt-1 ml-1"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                                                    <path d={starPath} fill="white"></path>
                                                                    <defs>
                                                                        <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                                                            <stop stopColor="#21973B"></stop>
                                                                            <stop offset="1" stopColor="#128540"></stop>
                                                                        </linearGradient>
                                                                    </defs>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[18px] font-bold text-[rgba(2,6,12,.75)] overflow-hidden antialiased ">{info?.info?.avgRating}</span>
                                                            </div>
                                                            {<div className=" truncate font-[200] text-[1rem] text-[rgba(2,6,12,.75)] pr-3">
                                                                {info.info.cuisines.map((cuisines,index)=>(
                                                                    
                                                                        <span key={index}>{cuisines}, {''}</span>
                                                                    
                                                                ))}
                                                            </div>}  
                                                            <div className="truncate font-[200] text-[1rem] text-[rgba(2,6,12,.75)] mt-[-.25rem]">
                                                                {info.info.areaName}
                                                            </div>
                                                        </div>
                                                    </div>         
                                                </div>
                                            </Link>    
                                        )
                                    })
                                    
                        }  
                            
                    </div>

                </div>

            </div>
        </div>
    )
    

}
export default RestaurnatListing