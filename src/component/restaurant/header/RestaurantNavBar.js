import React, { useState,useEffect } from 'react';
import { useRef } from 'react';

import { path } from '../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faXmark,faCrosshairs,faUser ,faLifeRing,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import { faLocationDot,faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { path2 } from '../../utils/constant';

import { useSelector } from 'react-redux';
import RestaurnatSliderNavbar from './RestaurantSliderNav';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
 




export default function RestNavBar() {
    const localAddress = JSON.parse(localStorage.getItem('address'));
    const {city,address2} = localAddress
    const childRef = useRef(null)
    const[isCity,setCity]=useState('')
    const[isAddress2,setAddress2]=useState('address2')
    const {resId} = useParams()
    const selector = useSelector(store=>store?.cart?.item)
    


    console.log(resId)
    console.log('param')

    useEffect(()=>{
        setCity(city)
        setAddress2(address2)

    })

    




useEffect(()=>{
        // resId ? document.getElementsByClassName('header-nav')[0].classList.add('absolute'):document.getElementsByClassName('header-nav')[0].classList.remove('absolute')
        if(resId){
             document.getElementsByClassName('header-nav')[0].classList.add('relative')
              document.getElementsByClassName('header-nav')[0].classList.remove('fixed')
        }
        else{
             document.getElementsByClassName('header-nav')[0].classList.add('fixed')
              document.getElementsByClassName('header-nav')[0].classList.remove('relative')
        }
},[resId])

    const  parentFunction = ()=>{
        
      childRef.current.childFunction();
    
    }

    


 


    
    
  return (
    <header className='header-nav block fixed top-0 bottom-0 left-0 right-0 bg-[#fff] z-[1000] h-[5rem] shadow-[0_15px_40px_-20px_rgba(40,44,63,.15)] px-[20px]  py-0 '>
        <div className='global-nav relative '>
            <div className='holder-container relative    flex items-center max-w-[75rem] min-w-[75rem]   sm:min-w-[auto] sm:max-w-[768px] sm:mx-1 xs:max-w-[480] xs:min-w-[auto] my-0 mx-auto h-[5rem] lg:min-w-[auto] lg:max-w-[100vw]'>
              
                {/*navBar Logo Start here */}
                <a href='/' className='block h-[49px] mr-4' >
                    <svg className="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019">
                        <path fillRule="evenodd" clipRule="evenodd" d={path} fill="url(#paint0_linear_19447_66107)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF993A">
                                </stop>
                                <stop offset="1" stopColor="#F15700">
                                </stop>
                            </linearGradient>
                        </defs>
                    </svg>

                </a>
                {/* navBar logo end  here */}

                {/* Address text start here */}
                <div className='address-show relative cursor-pointer flex item-center ml-[1.875rem] text-[0.88rem]   max-w-[18.75rem] h-[1.875rem]  mb-[-1px] pr-[.625rem] md:gap-1 md:ml-4' onClick={parentFunction}>
                    <span className='relative float-left '>
                    <span className='block min-w-[1.875rem] top-[8px] truncate   overflow-hidden border-b-2 border-[#3d4152] text[#3d4152] font-bold whitespace-nowrap'>{!city?'Other':isCity}</span>
                    </span>
                    <span className='block truncate pl-[5px] ml-[5px] text-[#686B78]   overflow-hidden whitespace-nowrap md:hidden '>{isAddress2}</span>
                    <span className='absolute icon-downArrow kVKTT text-[orange] text-[1.15rem] w-4 right-[-15px]'  ><FontAwesomeIcon icon={faAngleDown} /></span>
                </div>
                {/* Address text end  here */}

                <div className='flex-grow  '></div>
                 {/* navbar start here */}
                <ul className='relative  flex flex-row-reverse items-center md:flex-row md:right-0 '>

                    {/*cart section start here */}
                    <li className='mr-0 cart-icon-wrapper  sm:mr-1' >

                        <div className='relative   '>
                            <Link to={'/home/cart'}>
                                <div className='relative flex items-center h-[5rem] pl-[1.75rem]  text-[#686b78]'>
                                <span className='flex items-center '>
                                    <span className='absolute text-[1.5rem]'>
                                        <FontAwesomeIcon icon={faBagShopping} className='inline text-[#686b78] '/>
                                        {selector?.quatity >0 && <div className='absolute top-[-3px] left-3  w-[14px] h-[14px]  bg-orange rounded-full text-center  text-[white] text-[12px] '>{selector?.quatity}</div>}
                                    
                                        
                                    </span>
                                        <span className='text-[14px] pl-8' >Cart</span>
                                    
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </li>
                    {/*cart section end here */}

                    {/*user section start here */}
                    <li className='mr-[3.25rem] text-[#3d4152] text-[1rem]  font-medium md:hidden'>
                        <div className='relative flex items-center pl-7 h-[5rem] '>
                            <span className='mr-2'><FontAwesomeIcon className='text-[#686b78] fill-none' icon={faUser} /></span>
                            <span>
                                Sign in
                            </span>

                        </div>
                    </li>
                    {/*user section start here */}

                    {/*help section start here */}
                    <li className='mr-[3rem] text-[#3d4152] text-[1rem]  font-medium md:hidden'>
                        <div className='relative h-[5rem] flex item-center'>
                            <a className='flex items-center pl-7'><span className='mr-2'><FontAwesomeIcon className='text-[#686b78] '  icon={faLifeRing} /></span>Help</a>
                        </div>
                    </li>
                    {/*help section end here ---np*/}

                    {/*offer section start here */}
                    <li className='mr-[3rem] text-[#3d4152] text-[1rem]   font-medium md:hidden'>
                        <div className='relative h-[5rem] flex items-center pl-7'>
                            <a className='flex items-center '>
                                <span className='mr-2'><svg className="_1GTCc text-[1rem]" viewBox="0 0 32 32" height="19" width="19" fill="#686b78">
                                    <path d={path2}></path>
                                </svg></span>
                                offer
                                <span className=' absolute right-[-20px] text-[10px] top-[26px] text-[#ffa770]'>new</span>
                            </a>
                        </div>
                    </li>
                    {/* offer section end here */}

                    {/* search section start here */}
                    <li className=' mr-[3rem] text-[#3d4152] text-[1rem]  font-medium md:hidden'>
                        <div className='flex items-center h-[5rem] pl-7'>
                            <a className='flex item-center '>
                            <span className='mr-2'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <span>Search</span>

                            </a>
                        </div>
                    </li>
                    {/* search section end here */}
                </ul> 
            
            
             {/* navBar part 2  end  here */}
            </div>



         
            <RestaurnatSliderNavbar ref={childRef} />
             
           

        </div>
    </header>
  )
}
