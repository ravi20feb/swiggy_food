import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";


import { faStar } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import MenuItemShimer from "../MenuItemShimer";

export function RestaurantMenu(){
    const[RestAurantInfo,setRestaurantInfo] = useState('')
    const[isRestInfo,setRestInfo] = useState('')
    const[isOffer,setOffer] = useState('')
    const[isGroudCard,setGroupCard] = useState('')
    // cosnt[isScrolling,setScrolling] = useState('')
    const[isFixed,setFixed] = useState('')
    const {resId }= useParams()
    const lat = localStorage.getItem('lat')
    const lng = localStorage.getItem('lng')
    
    const selector = useSelector(store=>store?.cart?.item)
    let docPin = document.getElementsByClassName('restaurant-menu-wrapper')[0] ? document.getElementsByClassName('restaurant-menu-wrapper')[0]:null
    docPin && console.log(docPin.getBoundingClientRect()) 
    
    
    
    console.log('RestAurantInfo')
    console.log(RestAurantInfo)
    console.log('isRestInfo')
    console.log(isRestInfo)
    console.log('isOffer')
    console.log(isOffer)
    console.log('isGroudCard')
    console.log(isGroudCard)

    

    console.log(resId)

    useEffect(()=>{
        getMenuList()
    },[])
    useEffect(()=>{
        let timeOut ;
        const handleScroll = ()=>{
            clearTimeout(timeOut);
            timeOut=setTimeout(()=>{
                const parent = document.getElementsByClassName('restaurant-menu-wrapper')[0]
                const child = document.getElementsByClassName('restaurant-detail2 ')[0]

                const distanceFromTop = parent.getBoundingClientRect().top
              
                // console.log('distanceFromTop')
                // console.log(distanceFromTop)

                if(distanceFromTop<65){
                    setFixed(true)

                }
                
                else{
                    setFixed(false)
                }
                child && distanceFromTop<1 && child.classList.add('sticky')
                child && distanceFromTop>1 && child.classList.remove('sticky')




            },10)
        }
        window.addEventListener('scroll',handleScroll)
        return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('i am unmount')
      clearTimeout(timeOut);
    };

    },[isFixed])

      async  function getMenuList(){
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const data = await fetch(url)
        const json = await data.json()
        console.log('1814')
        console.log(json)
        setRestaurantInfo(json?.data?.cards)
        for (const iterator of json?.data?.cards) {
            if (iterator?.card?.card?.hasOwnProperty('info')) {
                setRestInfo(iterator?.card?.card?.info)
                
            } 
            if(iterator?.card?.card.hasOwnProperty('gridElements')){
                setOffer(iterator?.card?.card?.gridElements?.infoWithStyle?.offers)
            }

            if(iterator.hasOwnProperty('groupedCard')){
               setGroupCard(iterator?.groupedCard?.cardGroupMap?.REGULAR?.cards)

            }
            
        
            
        }
      
        console.log('hello')
       
    }

    return (
       isRestInfo?.id ? <div>
           <div>
                <div className="restaurant-menu-wrapper relative      max-w-[800px]  min-h-[800px] mx-auto mt-5 mb-0  ">
                    <div className=" ">
                        {!isFixed?
                            <div className="restaurant-detail flex align-middle ease-linear  h-[40px] text-[10px] text-[#93959f] my-0  overflow-hidden ">
                                <span>Home</span>
                                <span>/</span>
                                <span>{isRestInfo?.city}</span>
                                <span>/</span>
                                <span className='text-[#535665] font-normal'>{isRestInfo?.name}</span>
                            </div>:
                            <div className="restaurant-detail2 top-0 z-10 border-b-[1px] border-b-[#7e808c]   h-[40px]   ease-linear text-[.93rem] text-[#3d4152] font-semibold overflow-hidden bg-white"  >
                                <div className=" w-full bg-white">
                                    <span>{isRestInfo?.name}</span>
                                    <div className="text-[#7e808c] text-[.72rem] font-normal ">{isRestInfo?.sla?.deliveryTime + 'min'}</div >
                                    
                                </div>   
                            </div>
                        }
                        <div className="mx-2 relative mt-2">
                            <div >
                                
                                <div className="flex justify-between  ">
                                    <div >
                                        <div className="font-semibold text-[1.43rem] text-[#282c3f]">{isRestInfo?.name}</div>
                                        {isRestInfo && isRestInfo?.cuisines.map((item,index)=>{
                                          return  <span className="text-[.73rem] turncate  text-[#7e808c]" key={index}>{item},</span>
                                        })}
                                        <div className="text-[.73rem] turncate  text-[#7e808c]">
                                            <span>{isRestInfo?.areaName},</span>

                                            <span>{isRestInfo && isRestInfo?.sla?.lastMileTravelString}</span>
                                        </div>
                                        
                                    </div>


                                    <div>
                                        <div className="border-[1px] rounded-[5px]  border-[#e9e9eb] flex justify-center flex-col ">
                                            <div className="mx-4 my-3">
                                                <FontAwesomeIcon icon={faStar} style={{color: "#3d9b6d",}} />
                                                <span className="text-[#3d9b6d] ml-1 font-bold">{isRestInfo?.avgRating}</span>
                                            </div>
                                            <div className="text-[11px] text-[#8b8d97] font-semibold  text-center">{isRestInfo?.totalRatingsString}</div>
                                       
                                            
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                                <div className="border-dashed border-b-[1px] border-[#7e808c]">
                                    <div className="mt-3 flex">
                                        <span className="h-[18px] w-[18px] mr-2">
                                            <img className= "bg-cover h-[18px] w-[18px] mr-2" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${isRestInfo?.feeDetails?.icon}`} />

                                        </span>
                                        <span className="pb-3 text-[14px] font-[300] text-[#7e808c]">
                                            {isRestInfo?.feeDetails?.message}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-3 flex items-center">

                                        <div className="flex  items-center">
                                            <span className="mr-2"><svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg></span>
                                            <span className="font-semibold text-[#282c3f]">{isRestInfo?.sla?.deliveryTime} MIN</span>
                                        </div>
                                        <div className="flex items-center ml-6">
                                            <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path>
                                            </svg>
                                            <span className="font-semibold text-[#282c3f] ml-2 ">{isRestInfo?.costForTwoMessage}  </span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3 flex overflow-y-hidden overflow-x-scroll ">
                                        <div className="offer-banner mt-3 flex ">
                                        {
                                            isOffer && isOffer.map((item,index)=>{
                                                {/* {console.log('coupon')}
                                                {console.log(item)} */}
                                                 return    <div className="mr-6 flex min-w-[200px]  rounded-lg pl-2 py-2 flex-col border-[1px] border-[#E0E0EB]" key={index}>
                                                        <div className="flex  whitespace-nowrap">
                                                            <img className= "bg-cover h-[22px] w-[22px] mr-2" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${item?.info?.offerLogo}`} />
                                                            <span className="text-[#686B78] text-[14px] font-semibold">{item?.info?.header}</span>
                                                         </div>
                                                         <div className="">
                                                            <span className="text-[12px] text-[#939F9F]">{item?.info?.couponCode} | {item?.info?.description }</span>

                                                         </div>
                                                         

                                                    </div>
                                                
                                            })
                                        }
                                        

                                        </div>
                                    </div>
                                </div>

                                   
                                   <MenuItem prop={isGroudCard}/>
                                   
                                  { selector.quatity && <div className="1814">
                                        <div>
                                            <div className="fixed bottom-0 text-white capitalize font-bold text-[20px] sm:left-0 sm:min-w-[auto] sm:max-w-[100vw] sm:right-0  w-[800px] z-[99 ] bg-[#60b246] flex justify-between p-3 mt-5 ">
                                            <span>item-{selector.quatity}</span>
                                            <Link to={'/home/cart'}><button><span>View Cart</span></button></Link>

                                            </div>
                                        </div>
                                    </div>}
                            </div>
                        </div>

                    </div>

                </div>
           </div>
        </div>:<MenuItemShimer />
    )
}
 