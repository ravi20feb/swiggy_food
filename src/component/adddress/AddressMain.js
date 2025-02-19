import React from "react";
import {useState}  from 'react'
import ReactDOM  from "react-dom/client";
import png from '../../assests/Swiggy.png';
import heropng from '../../assests/tasty.png';
// import swiggyloc from '../../assests/swiggy(5).png';
import useAddressMain from "../utils/useAddressMain";
import Demo from './Demo'
import useGeoCode from "../utils/useGeoCode";









console.log('i an outer')

 function AddressMain(){



  let inputStore = useAddressMain();
  let[input,setInput,diffAddress,setDiffAddress]=inputStore;
  console.log('sequence')
  let zip = useGeoCode()
 let [setPlaceId,setAddress,setRestaurant] = zip
 console.log(diffAddress)


console.log(' i am rendering')


    return(
    <>

        <div className="content-wrapper w-full  top-0 right-0 ">
          <div className="input_content_wrapper top-0 right-0 relative w-auto  h-[540px] flex">
            <div className="input_content_wrapper_box1  absolute max-w-55% min-w-[auto] sm:w-full pr-16 pl-16 sm:px-4   ">
              <div className="input_content_wrapper_box2  w-auto      overflow-hidden">
                <div className="logo_button_wraper  relative h-16  bg-transparent  flex justify-between  ">
                 
                 <div className="logo absolute w-60  top-5 sm:top-8  h-16  left-[-21px] sm:left-[-18px] ">
                  <img src={png}  alt="logo" className=" w-52 h-[155px] xs:w-40 xs:h-[130px]  "/>
                 </div>
                 
                  
                  <div className="log_signin_button absolute  w-auto mt-20 h-14  right-0  m-2 font-semibold  leading-10">
                    <button className=" h-10 mb-4 w-24 border-0 hover:text-orange-500 xm:w-20 xm:text-[14px]">Login</button>
                    <button className="singnUp mb-4  h-10  w-24 border-0 bg-[#000] text-white xm:w-20 xm:text-[14px]">Signup</button>
                  </div>
                </div>
                <Demo ></Demo>
                <h2 className="  mt-2 font-normal text-[#686B78] tracking-[-0.01275em] text-[24px] sm:text-[16px] mr-24">Order food from favourite restaurants near you.</h2>
                <div className="inputbox-wrapper  relative w-full h-[3.75rem] mt-10 flex justify-between border-[1px] border-light-gray  focus-within:border-[1px]  focus-within:border-orange overflow-hidden">
                  <div className="inputbox  w-full rlative  overflow-hidden  flex justify-between gap-2">
                    <input className="w-full h-full ml-4 focus:outline-none xs:text-[12px]  text-lg font-medium sm:text-[14px] " 
                      value={input} onChange={(e)=>{
                        
                        setInput(e.target.value.toLowerCase())
                      
                      }} maxLength={30}
                      placeholder="Enter your delivery location " 
                    />

                    {
                      input.length>0?
                      <button className="clearInput m-2 absolute  hover:bg-e9 font-medium text-sm w-[6rem] h-10 right-32  xs:right-20 flex justify-center items-center ">
                        <span className="mr-1 text-orange" onClick={
                          ()=>{
                          setInput('')
                          


                        
                        }}>clear<i className="fa fa-close"></i> </span>
                      </button>:
                      <button   className="m-2 absolute  hover:bg-e9 font-medium text-sm w-[6rem] h-10 right-32 sm:right-[65px] flex justify-center items-center gap-2 sm:gap-0">
                        <svg className="ml-1" width="16px" height="16px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V7M12 17V21M3 12H7M17 12H21M12 12H12.01M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#535665" strokeWidth="1" strokeLinecap="round" stroklinejoin="round"></path> </g></svg>
                        <span className="mr-1 text-[#535665]  sm:mr-0">  Locate me</span>
                      </button>
                    }
                  </div>
                  <a className="link h-full w-[8.75rem] border-1 bg-orange text-center pt-4 text-white font-bold sm:w-[6rem] test-[12px]  "><span>Find Food</span></a>
                  
                </div>

                {input.length>2 &&

                
                  <div className=" absolute z-[100] border-[.2px] border-light-gray xs:min-w-[300px] xs:max-w-[44vh] ">
                    {
                      diffAddress.length>0?diffAddress.map((data)=>( 
                       
                         
                          <div className=" loco-effect-wrapper w-[36.75rem] xs:max-w-[100%] xs:text-[14px]    cursor-pointer  h-[3.75rem] flex items-center gap-5   bg-white overflow-hidden  text-[#535665] hover:text-orange " 
                            onClick={(e)=>{

                          // selector2.length>0?removeDispatch():console.log('restaurant item is empty')
                       
                          setPlaceId(data.place_id)
                          setAddress({})
                          // setRestaurant('')
                          }}  key={data.place_id}>
                          
                          
                          
                            <span className="hovImg  mb-3 "><img  src={require('../../assests/logosm.png')} alt="location logo" className="hovImg1 w-8 h-8 mt-2 b-1 ml-2"></img></span>
                            <span className=" imghov-wrap border-b-[1px] border-dashed border-[#BEBFC5] w-full h-full pt-[1rem]   truncate mr-3 " key={data.description.length}>{data.description}</span>
                                                  
                          </div>
                          
                         
                     
                        )
                       
                      ):<div></div>
                    } 
                  </div>
                }

                <h2 className=" mt-6 text-light-gray1 font-medium leading-4">
                  POPULAR CITIES IN INDIA
                </h2>
                <ul className="city [&>.city-name]:inline-block [&>li]:mr-2 [&>li]:font-semibold w-[35.625rem] h-[3rem] [&>:nth-child(odd)]:text-dark-city [&>:nth-child(even)]:text-light-gray ">
                  <li className="city-name"><a href="#">Ahmedambad</a></li>
                  <li className="city-name"><a href="#">Bangalore</a></li>
                  <li className="city-name"><a href="#">chennai</a></li>
                  <li className="city-name"><a href="#">Delhi</a></li>
                  <li className="city-name"><a href="#">Gurgaon</a></li>
                  <li className="city-name"><a href="#">Hyderabad</a></li>
                  <li className="city-name"><a href="#">Kolkata</a></li>
                  <li className="city-name"><a href="#">Mumbai</a></li>
                  <li className="city-name"><a href="#">Pune</a></li>
                  <li className="city-name"><a href="#">&more</a></li>
                </ul>
              </div>                 
            </div>            
            <div className=" absolute  max-w-[46%] min-w-[auto] h-100% top-0 bottom-0 sm:hidden   right-0">
              <img src={require('../../assests/tasty.png')} className='heropng  right-0 h-full  object-cover '>
              </img>
            </div>
          </div>


        </div>

        

    </>
    ) 
}

export default AddressMain