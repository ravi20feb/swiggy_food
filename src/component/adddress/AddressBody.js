import React from "react";


function AddressBody(){
    return <div className="body-wrapper sm:hidden ">
        <div className="bg-[#2B1E16]  px-5">
        <div className=" relative flex  justify-between text-[#fff] pb-20 max-w-[75rem] min-w-[75rem] sm:hidden mx-auto my-0 ">
            <div className="relative text-center">
                <div className=" flex items-end  justify-center h-[15.625rem]">
                    <img  src={require('../../assests/bodyIMg1.webp')} className="mb-[2.625rem] w-[6.50rem] h-[12.5rem] aspect-[auto 105/199] overflow-clip top-0"></img>
                </div>
                <div className=" text-[1.25rem] font-semibold mt-0">
                    No minimum Order
                </div>
                <div className="w-[16.25rem] text-[.9375rem] mt-[.625rem] leading-[1.215rem] text-[#E0CBC1]">Order in for yourself or for the group, with no restrictions on order value</div>
            </div>
            <div className="relative text-center">
                <div className="flex items-end justify-center h-[15.625rem]">
                    <img  src={require('../../assests/bodyImg2.webp')} className="mb-[2.625rem] w-[7rem] h-[12.875rem] aspect-[auto 105/199] overflow-clip top-0"></img>
                </div>
                <div className=" text-[1.25rem] font-semibold mt-0">
                    No minimum Order
                </div>
                <div className="w-[16.25rem] text-[.9375rem] mt-[.625rem] leading-[1.215rem] text-[#E0CBC1]">Order in for yourself or for the group, with no restrictions on order value</div>
            </div>
            <div className="relative text-center">
                <div className="flex items-end justify-center h-[15.625rem]">
                    <img  src={require('../../assests/bodyImg3.webp')} className="mb-[2.625rem] w-[7.75rem] h-[11.75rem] aspect-[auto 105/199] overflow-clip top-0"></img>
                </div>
                <div className=" text-[1.25rem] font-semibold mt-0">
                   Lightning-Fast Delivery

                </div>
                <div className="w-[16.25rem] text-[.9375rem] mt-[.625rem] leading-[1.215rem] text-[#E0CBC1]">Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
            </div>
            
        </div>
        </div>
        <div className="play-store-wrapper h-[35.650rem] px-28 py-0 overflow-hidden ">
            <div className=" relative min-w-[75rem] max-w-[75rem] h-full mx-auto my-0 flex flex-col justify-center" >
                <div className=" w-[18.75rem] text-[2.50rem] font-semibold tracking-[-.45px] leading-none text-[#282C3F]">Restaurants in your pocket</div>
                <div className="text-[1.25rem] w-[25rem] pt-5 pb-[3.75rem] text-[#7e808c] leading-tight">
                    Order from your favorite restaurants & track on the go, with the all-new Swiggy app.
                </div>
               <div >
                <a className="inline-block"><img src={require('../../assests/play.webp')} className="  h-[3.5rem]  mr-5"></img></a>
                <a className="inline-block"><img src={require('../../assests/iOS.webp')} className="  h-[3.5rem] "></img></a>
               </div> 
               <img src={require('../../assests/store1.webp')} className=" absolute w-[24rem] h-[30.5625rem] top-0 right-[18.75rem]"></img>
               <img src={require('../../assests/store2.webp')} className=" absolute w-[24rem] h-[30.5625rem] bottom-0 right-[-2.75rem]"></img>

            </div>

        </div>
    </div>
    
}
export default AddressBody