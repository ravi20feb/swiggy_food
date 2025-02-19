import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeDishShimer from "../HomeDishShimer";


export default function DishSlider(){
    let [dishSlider,setDishSlider] = useState('')
    const selector = useSelector(store=>store.restaurant.card)
    
    
    console.log(selector)

    const leftArrow1 = () => {

        let container = document.getElementsByClassName('dishCarouselScroll')[0];
            

        const maxScroll = container.scrollWidth - container.clientWidth;
        
        const scrollAmount= container.scrollLeft-=maxScroll/5
        if(scrollAmount<0){
            document.getElementsByClassName('arrowLeft1')[0].classList.add('blur-[1px]')
            document.getElementsByClassName('arrowLeft1')[0].disabled=true

        }

        document.getElementsByClassName('arrowRight1')[0].classList.remove('blur-[1px]')

        console.log(container.clientWidth,maxScroll,scrollAmount,container.scrollWidth)
        document.getElementsByClassName('arrowRight1')[0].disabled = false
    //
    };
    //left side scroll end



    //right scroll start
    const rightArrow1 = () => {
    
        let container = document.getElementsByClassName('dishCarouselScroll')[0];
    
        const maxScroll = container.scrollWidth - container.clientWidth;


        document.getElementsByClassName('arrowLeft1')[0].classList.remove('blur-[1px]')
        document.getElementsByClassName('arrowLeft1')[0].disabled=false
        const scrollAmount =container.scrollLeft+=maxScroll/8
        //   console.log(container.scrollLeft,)
        console.log(container.clientWidth,maxScroll,scrollAmount,container.scrollWidth)
        console.log(`scroll width ${container.scrollWidth}`)
        if (scrollAmount > maxScroll   ) {
            // console.log(document.getElementsByClassName('arrowLeft1')[0])
            document.getElementsByClassName('arrowRight1')[0].disabled = true
            console.log('i am right')

            // console.log(document.getElementsByClassName('leftFont')[0])
            document.getElementsByClassName('arrowRight1')[0].classList.add('blur-[1px]')


            
        }
    
         console.log(''); // Scroll to the left
    };
    //right scroll end
    console.log('i am dish slider')

    useEffect(()=>{
        console.log('what happening')
        if(selector[0]){
            let getData = selector[0]
            if (Object.keys(getData).length>0) { // return an array w
                console.log(Object.keys(getData))
                console.log(getData?.data?.cards)
                const cards = getData?.data?.cards
                let dishCarousal = []
                console.log(cards)
                
                for (const card of cards) {
                    const eachCard = card
                    console.log(eachCard?.card?.card?.id)

                    if (eachCard?.card?.card?.id == 'whats_on_your_mind') {
                    eachCard?.card?.card?.id == 'whats_on_your_mind' ? dishCarousal.push(eachCard?.card?.card?.gridElements) : console.log('card not found')
         
                    console.log(dishCarousal)
                    
                    dishCarousal[0]?.infoWithStyle?.info ? setDishSlider(dishCarousal[0]?.infoWithStyle?.info) : setDishSlider(null)
                     break
                    }

                    // eachCard?.card?.card?.id == 'whats_on_your_mind' ? dishCarousal.push(eachCard?.card?.card?.gridElements) : console.log('card not found')
         
                    // console.log(dishCarousal)
                    
                    // dishCarousal[0]?.infoWithStyle?.info ? setDishSlider(dishCarousal[0]?.infoWithStyle?.info) : setDishSlider(null)
                

                    
                    
                }

            
                // for (let index = 0; index < array.length; index++) {
                //     const element = array[index];
                    
                // }
           }
        
             console.log('hello i from error')
       
        
        }
    },[selector])


     console.log(dishSlider)

    return(
        <>
            { !dishSlider  ? <HomeDishShimer />:<div className="body-margin "> 
           <div className="">
                <div className="relative mt-4 lg:min-w-[auto] lg:max-w-[100vw]">
                    <div className="buttton-wrapper flex absolute mt-2 right-4 ">
                        <button className="arrowLeft1"><FontAwesomeIcon className=" leftFont w-[17px] h-[17px] bg-[rgb(226,226,231)]   rounded-full py-2 px-2" icon={faArrowLeft} onClick={leftArrow1}/></button>
                        <button className="arrowRight1 ml-2"><FontAwesomeIcon className=" rightFont w-[17px] h-[17px] bg-[rgb(226,226,231)] rounded-full py-2 px-2" disabled= {true} icon={faArrowRight} onClick={rightArrow1}/></button>
                    </div>
                    <div className="p-4 overflow-hidden">
                        <div className="mb-4 flex justify-between overflow-hidden text-[1.5rem] font-extrabold font-proxnov items-baseline ">
                            <div>
                                <h2>What's on your mind?</h2>
                            </div>
                        </div>
                        <div className="carousel-wrapper overflow-x-scroll overflow-y-hidden dishCarouselScroll">
                            
                            <div className="row flex   ">
                            
                                    {dishSlider.map((info)=>{
                                        {/* console.log(info) */}
                                        return( 
                                            <div key={info.id} className="ml-[-1rem] mr-4 leading-[1.75rem]">
                                            {/* {console.log(carouselCard)} */}
                                                <div className="caro-img w-[9rem] h-[11.25rem]  mr-4 ml-2">
                                                    <img loading="lazy" className='h-full'  width={144} height={'180'} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${info.imageId}`} />
                                                </div>
                                            </div>
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