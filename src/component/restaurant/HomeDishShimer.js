import React from 'react'

export default function HomeDishShimer() {
  return (
    <div className=" animate-pulse mt-4  body-margin lg:min-w-[auto] lg:max-w-[100vw] boder-2 border-orange">
      <div className="relative ">
        <div className="buttton-wrapper flex absolute mt-2 right-4 ">
            <button className="arrowLeft1 ml-2 w-[32px] h-[32px] rounded-full py-2 px-2 bg-[#dadada]"></button>
            <button className="arrowRight1 ml-2 w-[32px] h-[32px] rounded-full py-2 px-2 bg-[#dadada]"></button>
        </div>
        <div className="p-4 overflow-hidden">
            
          <div className='w-48 h-6 rounded-lg bg-[#dadada]'>
              
          </div>
            
          <div className="carousel-wrapper overflow-hidden mt-5 ml-[-14px]">
              
            <div className="row flex   ">
              <div className="caro-img min-w-[144px] h-[144px]  mr-4 ml-4 bg-[#dadada] rounded-full" ></div>
              <div className="caro-img min-w-[144px] h-[144px]  mr-4 ml-4 bg-[#dadada] rounded-full" ></div>
              <div className="caro-img min-w-[144px] h-[144px]  mr-4 ml-4 bg-[#dadada] rounded-full" ></div>
              <div className="caro-img min-w-[144px] h-[144px]  mr-4 ml-4 bg-[#dadada] rounded-full" ></div>
              <div className="caro-img min-w-[144px] h-[144px]  mr-4 ml-4 bg-[#dadada] rounded-full" ></div>
              <div className="caro-img min-w-[144px] h-[144px]  mr-4 ml-4 bg-[#dadada] rounded-full" ></div>
              
                        
            </div>
          </div>
        </div>

      </div>
                

    </div>
  )
}
