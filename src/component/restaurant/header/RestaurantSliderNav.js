import React, { forwardRef, useImperativeHandle } from 'react';

import { useRef } from 'react';

import { path } from '../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faXmark,faCrosshairs,faUser ,faLifeRing,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import useData from '../../utils/useData';
import { faLocationDot,faBagShopping } from '@fortawesome/free-solid-svg-icons';
import useAddressMain from '../../utils/useAddressMain';
import useGeoCode from '../../utils/useGeoCode';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import {restaurantData,removeData} from '../../utils/restaurantSlice';

 


const  RestaurnatSliderNavbar =forwardRef((props,ref)=>{

     const lat = JSON.parse(localStorage.getItem('lat'));
    const lng = JSON.parse(localStorage.getItem('lng'));
    const dispatch = useDispatch()
    const getGeoReturn = useGeoCode();
    // console.log(getGeoReturn)
    const [setPlaceId,setAddress,setLat,setLng] = getGeoReturn;

    const restData = useData(lat,lng);
    const [setRestaurant,restaruant,filterRestuarnat,setFilterRestaurant,setAllfetchObject] = restData;
    console.count(restaruant);
    // const [navInput,setNavInput] = useState('');
    const [input,setInput,diffAddress,setDiffAddress] =useAddressMain();
    console.log(diffAddress);
    const targetElementRef = useRef(null);
    const localAddress = JSON.parse(localStorage.getItem('address'));

    const {city,address2} = localAddress

        
        function navSlide(){
        const nav = targetElementRef.current;
        const navContain = document.getElementsByClassName('nav-contain')
        const hold = navContain[0]
        const ele = document.getElementsByClassName('nav-slide')
        // console.log(ele[0])
        // console.log(ele)
        // console.log(nav)
        
            if(hold){
                console.log(hold)
                hold.style.opacity = '2'
                hold.style.backgroundColor = '#fff'
            }
            if (nav) {
                nav.style.border = '2px solid orange';
                nav.style.transform = 'translate(0, 0)';
                nav.style.zIndex = '999';
                nav.style.backgroundColor = 'rgba(40, 44, 63, 0.37)'
                // nav.style.opacity = '.3'
                
                
                console.log('hello')
                

            }
        }
        function navHide(){
            const navhideButton = document.getElementsByClassName('nav-slide')
            const navhideButton1 = navhideButton[0]
            if (navhideButton1) {
                navhideButton1.style.transform = 'translate(-100%, 0)'; 
                
            }
        }
        function navFullHide(){
            console.log(' iam full hide')
            const navhideButton = document.getElementsByClassName('nav-slide')
            const navhideButton1 = navhideButton[0]
            if (navhideButton1) {
                navhideButton1.style.transform = 'translate(-100%, 0)'; 
                
            }
        }
        function successLocation(position){
   

            const {GeolocationPosition} = position
            localStorage.setItem('lat',JSON.stringify(position?.coords?.latitude))
            localStorage.setItem('lng',JSON.stringify(position?.coords?.longitude))
            dispatch(addLat({lat:position?.coords?.latitude})) 
            console.log('add  dispatch latitude')
            dispatch(addLat({lng:position?.coords?.longitude})) 
                console.log('add  dispatch longitude')

            console.log(position)
        }
        function errorLocation(error1){
            console.log(error1)
        }


        function accessLocation(){
            navigator.geolocation.getCurrentPosition(successLocation,errorLocation)
        }
        const childFunction = () => {
            navSlide()
            // we can perform any action you want here
        };

  // Expose the childFunction to the parent component using useImperativeHandle
        useImperativeHandle(ref, () => ({
        childFunction,
    }));


    return(
        <div className='nav-slide absolute h-screen flex  top-0 max-w-[1366px] min-w-[1366px] left-[-1.25rem] -translate-x-full   ' ref={targetElementRef} >
                
                    <div className='relative  z-[10000] bg-white  h-[100vh] w-[33rem] font-light top-0 left-0  overflow-y-scroll'>
                    {/* nav input field */}
                        <div className=' w-[30rem] pl-[4.75rem] pr-[2.5trem] mb-[5rem]  '>

                            <div className='  h-16 text-[1.5rem] mt-5 ' onClick={navHide} >
                                <span className='mt-5'><FontAwesomeIcon icon={faXmark} /></span>
                            </div>
                            <div className='  w-full  border-[1px] border-[#d4d5d9]'>
                             <input type='text' placeholder='Search for area, street name...' value={input} onChange={(e)=>setInput(e.target.value)} className='pl-[1rem] h-[3rem] w-full outline-none focus:drop-shadow-[1px_1px_3px_rgba(0,0,0,0.75)]'/> 


                            </div>
                            <div className='mt-[1.45rem]' >
                                <div className='p-0 cursor-pointer   mb-[1.25rem]' >
                                    
                                {diffAddress.length>0 ?
                                diffAddress.map((add)=>
                                    <div className='relative mb-[1rem]  px-4 py-10  hover:text-[orange]' key={add.place_id} onClick= {()=>{

                                        setPlaceId(add.place_id)
                                        setInput('')
                                        // dispatch(removeLngLat([]))
                                        // dispatch(removeData())
                                        dispatch(restaurantData(''))
                                        setAllfetchObject('')
                                        setRestaurant('')
                                        // localStorage.setItem(lat,'')
                                        // localStorage.setItem(lng,'')
                                        navFullHide()
                                        setLat('')
                                        setLng('')
                                        setAddress('')

                                        }}>
                                        <FontAwesomeIcon icon={faLocationDot} className=' absolute  text-[1rem] mr-6 top-3 text-orange'/>
                                        <div className='formadd flex flex-col  absolute ml-7 h-16  top-2 border-b-[1px] border-dashed border-[#93959f] overflow-hidden w-[22.5rem]'>
                                            <span className='  top-2 font-semibold text-[1rem]'>{add.structured_formatting.main_text}</span>
                                            <span className='text-[13px] leading-[1.3] text-[#93959f]   top-[-3px]'>{add.structured_formatting.secondary_text}</span>
                                         </div>
                                    </div>)
                                    
                                    :<div className=' relative pointer overflow-hidden'>
                                        <div >
                                            <span className='w-8 h-4 mr-3 text-[#535665] ' onClick={()=>accessLocation()}><FontAwesomeIcon className=' text-[1.2rem] font-[100]' icon={faCrosshairs} /></span>
                                            <span className='text-[1rem] font-medium text-[#282c3f]'>Get current Location</span>
                                        </div>
                                        <div className='text-[13px] mt-1 leading-[1.3] pl-8 text-[#93959f]'>
                                            Using GPS
                                        </div>
                                    </div>
                                }

                                </div>
                                
                               
                                
                            </div>
                        </div>

                        
                    </div>
                    
                 <div className='w-auto  right-0 flex-grow' onClick={navFullHide}>
{/* nothing */}
                 </div>       
                    
                
            </div>
    )
}

)

export default RestaurnatSliderNavbar