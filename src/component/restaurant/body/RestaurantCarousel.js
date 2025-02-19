import React from "react";
import { useEffect,useState } from "react";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HomeCarouselShimer from "../HomeCarouselShimer";
// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
function RestaurnatCarousel(){
    const selector = useSelector(store=>store.restaurant.card)
    const [carouselCard,setCarouselCard] = useState('')

    // console.log(selector[0])
    // console.log('selector[0]')
    
   selector[0] ? localStorage.setItem('csrf_id',selector[0]?.cards?.csrfToken) : console.log('no csrf')

    // left side scroll start
    const leftArrow = () => {

        let container = document.getElementsByClassName('carorsel-scroll')[0];
            

        const maxScroll = container.scrollWidth - container.clientWidth;
        
        const scrollAmount= container.scrollLeft-=300
        if(scrollAmount<0){
            document.getElementsByClassName('arrow-left')[0].classList.add('blur-[1px]')
            document.getElementsByClassName('arrow-left')[0].disabled=true

        }

        document.getElementsByClassName('arrow-right')[0].classList.remove('blur-[1px]')

        // console.log(container.clientWidth,maxScroll,scrollAmount,container.scrollWidth)
        document.getElementsByClassName('arrow-right')[0].disabled = false
    //
    };
    //left side scroll end



    //right scroll start
    const rightArrow = () => {
    
        let container = document.getElementsByClassName('carorsel-scroll')[0];
    
        const maxScroll = container.scrollWidth - container.clientWidth;


        document.getElementsByClassName('arrow-left')[0].classList.remove('blur-[1px]')
        document.getElementsByClassName('arrow-left')[0].disabled=false
        const scrollAmount =container.scrollLeft+=300
        //   console.log(container.scrollLeft,)
        // console.log(container.clientWidth,maxScroll,scrollAmount,container.scrollWidth)
        // console.log(`scroll width ${container.scrollWidth}`)
        if (scrollAmount > maxScroll   ) {
            // console.log(document.getElementsByClassName('arrow-left')[0])
            document.getElementsByClassName('arrow-right')[0].disabled = true
            // console.log('i am right')

            // console.log(document.getElementsByClassName('leftFont')[0])
            document.getElementsByClassName('arrow-right')[0].classList.add('blur-[1px]')


            
        }
    
         console.log(''); // Scroll to the left
    };
    //right scroll end








    useEffect(()=>{
        // console.log('what happening')
        if(selector[0]){
        let getData = selector[0]
        if (Object.keys(getData).length>0) { // return an array w
            // console.log(Object.keys(getData))
            // console.log(getData?.data?.cards)/
            const cards = getData?.data?.cards
            const gridCarousel = []
            for (const card of cards) {
                // console.log(card)
                // console.log('card[0]')
                const eachCard = card
                 if(eachCard?.card?.card?.id == 'topical_banner'){
                    eachCard?.card?.card?.id == 'topical_banner' ? gridCarousel.push(eachCard?.card?.card?.gridElements) : gridCarousel.push(null)
                
                gridCarousel[0]?.infoWithStyle?.info ? setCarouselCard(gridCarousel[0].infoWithStyle.info) : setCarouselCard(null)
                break

                 }

                
                
            }

            // console.log(carouselCard)
        }
        
        // console.log('trure')
        
    }
    },[selector])




//   console.log(carouselCard); 
//   console.log('carouselCard[0]'); 

    
    return(
        <>
       { carouselCard.length>0  ?<div className="body-margin lg:min-w-[auto] lg:max-w-[100vw] "> 
           <div className="">
                <div className="relative mt-4   xs:min-w-[auto] xs:max-w-[100vw] ">
                    <div className="buttton-wrapper flex absolute mt-2 right-4  ">
                        <button className="arrow-left"><FontAwesomeIcon className=" leftFont w-[17px] h-[17px] bg-[rgb(226,226,231)]   rounded-full py-2 px-2" icon={faArrowLeft} onClick={leftArrow}/></button>
                        <button className="arrow-right ml-2"><FontAwesomeIcon className=" rightFont w-[17px] h-[17px] bg-[rgb(226,226,231)] rounded-full py-2 px-2" disabled= {true} icon={faArrowRight} onClick={rightArrow}/></button>
                    </div>
                    <div className="p-4 overflow-hidden">
                        <div className="mb-4 flex justify-between overflow-hidden text-[1.5rem] font-extrabold font-proxnov items-baseline xs:text-[1.25rem] ">
                            <div>
                                <h2>Best Offer For you</h2>
                            </div>
                        </div>
                        {/* card carousel start */}
                        <div className="carousel-wrapper overflow-x-scroll overflow-y-hidden carorsel-scroll  cursor-pointer ">
                            
                            <div className="row flex  xs:ml-[.5rem] ">
                            
                                    {carouselCard.map((info)=>{
                                        return( 
                                            <div key={info.id} className="ml-[-1rem] mr-4 leading-[1.75rem] ">
                                            {/* {console.log(carouselCard)} */}
                                                <div className="caro-img  w-[24rem]  pl-4 xs:pl-3  ">
                                                    <img loading="lazy"  className=" w-full   h-[14.5rem] xs:min-w-[12.5rem]   xs:max-h-[12rem] xs:min-h-[11.5rem] " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${info.imageId}`} />
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                            </div>
                        </div>
                        {/* card carousel end */}
                    </div>

                </div>
                
               

                        
       

            </div>
        </div>:<HomeCarouselShimer /> }
        
        </>
    )

}
export default RestaurnatCarousel