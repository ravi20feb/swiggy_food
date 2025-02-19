import React from "react";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { starPath } from "../../utils/constant";
import { Link } from "react-router-dom";
import HomeDishShimer from "../HomeDishShimer";
import RestaurantAreaShimer from "../RestaurantAreaShimer";


export default function RestaurantAreaSlider(){


   let [restAreaCard,setrestAreaCard] = useState('')
    const selector = useSelector(store=>store.restaurant.card)
    
    
    console.log(selector)
    console.log('selectorarea')

    const leftArrow1 = () => {

        let container = document.getElementsByClassName('restAreacardScroll')[0];
            

        const maxScroll = container.scrollWidth - container.clientWidth;
        
        const scrollAmount= container.scrollLeft-=maxScroll/5
        if(scrollAmount<0){
            document.getElementsByClassName('arrowLeft2')[0].classList.add('blur-[1px]')
            document.getElementsByClassName('arrowLeft2')[0].disabled=true

        }

        document.getElementsByClassName('arrowRight2')[0].classList.remove('blur-[1px]')

        console.log(container.clientWidth,maxScroll,scrollAmount,container.scrollWidth)
        document.getElementsByClassName('arrowRight2')[0].disabled = false
    //
    };
    //left side scroll end



    //right scroll start
    const rightArrow1 = () => {
    
        let container = document.getElementsByClassName('restAreacardScroll')[0];
    
        const maxScroll = container.scrollWidth - container.clientWidth;


        document.getElementsByClassName('arrowLeft2')[0].classList.remove('blur-[1px]')
        document.getElementsByClassName('arrowLeft2')[0].disabled=false
        const scrollAmount =container.scrollLeft+=maxScroll/8
        //   console.log(container.scrollLeft,)
        console.log(container.clientWidth,maxScroll,scrollAmount,container.scrollWidth)
        console.log(`scroll width ${container.scrollWidth}`)
        if (scrollAmount > maxScroll   ) {
            // console.log(document.getElementsByClassName('arrowLeft2')[0])
            document.getElementsByClassName('arrowRight2')[0].disabled = true
            console.log('i am right')

            // console.log(document.getElementsByClassName('leftFont')[0])
            document.getElementsByClassName('arrowRight2')[0].classList.add('blur-[1px]')


            
        }
    
         console.log(''); // Scroll to the left
    };
    //right scroll end
    console.log('i am dish slider')

    useEffect(()=>{
        console.log('what happening')
        if(selector[0]){
            let getData = selector[0]
            console.log('getData')
            console.log(getData)
            if (Object.keys(getData).length>0) { // return an array w
                console.log(Object.keys(getData))
                console.log(getData?.data?.cards)
                const cards = getData?.data?.cards
                let dishCarousal = []
                console.log(cards)
                console.log('Restcards')
                
                for (const card of cards) {
                    const eachCard = card
                    console.log(eachCard)
                    console.log('eachCard')
                    console.log(eachCard?.card?.card?.id)
                    


                    if(eachCard?.card?.card?.id == 'top_brands_for_you'){

                        console.log(eachCard?.card?.card?.gridElements)
                         eachCard?.card?.card?.id == 'top_brands_for_you' ? dishCarousal.push(eachCard?.card?.card?.gridElements) : console.log('card not found')
                         // eachCard?.card?.card?.id == 'topical_banner' ? console.log('topical banner id') : dishCarousal.push(null)
                        console.log(dishCarousal)
                        console.log('dishCarousal')

                        
                        dishCarousal[0]?.infoWithStyle?.restaurants ? setrestAreaCard(dishCarousal[0]?.infoWithStyle?.restaurants) : setrestAreaCard(null)
                        break
                

                    }
                    
                }
           }
        
             console.log('trure')
       
        
        }
    },[selector])


   
     console.log(restAreaCard)
     console.log('restAreaCard')
     console.log(!restAreaCard.length>0)

    return(
        <>
            { !restAreaCard  ? <HomeDishShimer /> : <div className="body-margin "> 
           <div className="">
                <div className="relative mt-4 lg:min-w-[auto] lg:max-w-[100vw]">
                    <div className="buttton-wrapper flex absolute mt-2 right-4 ">
                        <button className="arrowLeft2"><FontAwesomeIcon className=" leftFont w-[17px] h-[17px] bg-[rgb(226,226,231)]   rounded-full py-2 px-2" icon={faArrowLeft} onClick={leftArrow1}/></button>
                        <button className="arrowRight2 ml-2"><FontAwesomeIcon className=" rightFont w-[17px] h-[17px] bg-[rgb(226,226,231)] rounded-full py-2 px-2" disabled= {true} icon={faArrowRight} onClick={rightArrow1}/></button>
                    </div>
                    <div className="p-4 overflow-hidden">
                    
                        <div className="mb-4 flex justify-between overflow-hidden text-[1.5rem] font-extrabold  items-baseline ">
                            <div>
                                <h2>{selector[0]?.data?.cards[2]?.card?.card?.header?.title}</h2>
                               
                            </div>
                        </div>
                        <div className="carousel-wrapper w-full h-full overflow-x-scroll overflow-y-hidden restAreacardScroll">
                            
                            <div className="row flex   ">
                            
                                    {restAreaCard.map((info,index)=>{
                                        return( 
                                            <Link  to={'/home/restaurant'+'/'+info?.info?.id} key={index}>
                                                <div  className=" mr-4 leading-[1.75rem] relative cursor-pointer hover:scale-[.95] transition-all">
                                                {/* {console.log(carouselCard)} */}
                                                <div className="w-[17.5rem] full flex flex-col relative">
                                                    <div className="caro1-img w-full h-auto rounded-[1.4rem] overflow-hidden offer-text relative" >

                                                    <div className="" > <img  className=''    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${info.info.cloudinaryImageId}`} /></div>
                                                    <div className=" absolute bottom-2 mr-2 pb-2 font-[800] text-[1.5rem] text-[white] px-3 text-left h-10 w-full overflow-hidden  ">{info?.info?.aggregatedDiscountInfoV3?.header?info?.info?.aggregatedDiscountInfoV3?.header +" " +info?.info?.aggregatedDiscountInfoV3?.subHeader :''}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-[18px] font-bold text-[rgba(2,6,12,.75)] overflow-hidden antialiased ml-2 truncate">
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
                
              

                        
       

            </div>
        </div>}
        </>
    )
}