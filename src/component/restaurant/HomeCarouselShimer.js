import React from 'react'

export default function HomeCarouselShimer() {
  return (
    <div className="body-margin lg:min-w-[auto] lg:max-w-[100vw] boder-2 border-orange ">
        <div className="relative animate-pulse mt-4   xs:min-w-[auto] xs:max-w-[100vw] boder-2 border-orange  ">
                    <div className="buttton-wrapper flex mt-[-20px] absolute right-4  ">
                        <button className="arrow-left w-[30px] h-[30px] rounded-full py-2 px-2 relative bg-[#dadada]"></button>
                        <button className="arrow-right ml-2 w-[30px] h-[30px] rounded-full py-2 px-2 relative bg-[#dadada]"></button>
                    </div>
                    <div className="p-4 mt-10 overflow-hidden">
                        <div className="mb-4 h-8 mt-[-2px] items-baseline w-32 bg-[#dadada] ">
                            
                        </div>
                        {/* card carousel start */}
                        <div className="carousel-wrapper relative overFlow-hidden   overflow-hidden">
                            
                            <div className="row   relative flex   xs:ml-[.5rem] overflow-hidden ">
                              <div className="caro-img  mr-4 w-[24rem]  pl-4 xs:pl-3  h-[14.5rem] sm:min-w-[24.5rem]   xs:max-h-[14rem] xs:min-h-[11.5rem]  rounded-[22px] bg-[#dadada] overflow-hidden">
                                  
                              </div>
                              <div className="caro-img relative mr-4  w-[24rem]  pl-4 xs:pl-3  h-[14.5rem] sm:min-w-[12.5rem] sm:max-w-[12.5rem] xs:max-[80vw]  xs:max-h-[14rem] xs:min-h-[11.5rem]  rounded-[22px] bg-[#dadada] overflow-hidden">    
                              </div>
                              <div className="caro-img relative sm:hidden  mr-4 w-[24rem]  pl-4 xs:pl-3  h-[14.5rem] sm:min-w-[12.5rem] xs:max-[80vw]  xs:max-h-[14rem] xs:min-h-[11.5rem]  rounded-[22px] bg-[#dadada] overflow-hidden"> 
                              </div>
                              
                                      
                                    
                            </div>
                        </div>
                        {/* card carousel end */}
                    </div>

                </div>
    </div>
  )
}
