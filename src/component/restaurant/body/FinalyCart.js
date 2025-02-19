import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux'
import { ADD_CART,REMOVE_CART } from '../../utils/cartItemSlice';

export default function FinalyCart() {

    const selector = useSelector(store=>store?.cart?.item)
    const [isTotal,setTotal] = useState(null)
    const dispatch  = useDispatch()
   
    function total(){
         let totalValue =0
        if (Object.values(selector?.cartItems).length>0) {
            for (const iterator of Object.values(selector?.cartItems)) {
                totalValue += iterator.count*iterator.price/100
                // console.log(totalValue)

            }
           return totalValue
            
        }

    }

 const totalsum = selector?.quatity>0 ? total() : 0
 const discount =totalsum*10/100
 const totalBill = 59+totalsum-discount



 console.log(isTotal,totalsum)

    function handleAddDispatch1(food){
       dispatch(ADD_CART(food))

    }

    function handleRemoveDispatch1(food){
       dispatch(REMOVE_CART(food))

    }
     useEffect(()=>{
        finalTotal = totalsum.toFixed(2)

    setTotal(finalTotal)
 },[totalsum])
    console.log('final')
    console.log(selector)
  return (
    <div className=' relative w-full flex  top-20  h-[90vh]   '>
        <div className='flex mx-[11rem] w-full sm:flex-col sm:mx-0    grow  md:mx-0'>
            <div className='  overflow-y-scroll overflow-x-hidden  bg-[#fff] '>
            
                {
                    selector?.quatity > 0 &&<div className=' min-h-[200px] max-h-[400px] overflow-y-scroll  mx-10  sm:mx-4' >
                      
                            {Object.values(selector?.cartItems).map((item)=>(
                                <div className='overflow-hidden my-2' key={item.id}>
                                    <div className='m-1 flex   items-center '>
                                        <img className= "bg-cover rounded-lg border-[1px] border-[#686B78] h-[74px] max-w-[78px] min-w-auto" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${item?.imageId}`} />
                                        <div className='text-[14px] ml-2  font-normal w-48 '>{item.name}</div>
                                            <div className='flex  gap-3 justify-center items-center   text-[#60b246] ml-3 h-5'>
                                                <button className='left-3 font-semibold text-[14px]  py-[auto] px-1 h-6 border-2 rounded-md  border-[#60b246] text-[#60b246]' onClick={(e)=>{
                                                    handleAddDispatch1(item)          
                                                    e.stopPropagation()
                                                
                                                    }}>
                                                    <span className='flex items-center justify-center'>+</span>
                                                </button>
                                                <div className='text-center w-6'>{item.count}</div> 
                                                <button className='right-0 font-semibold text-[14px]  py-[auto] px-1 h-6 rounded-md   border-2 border-[#60b246] text-[#60b246]' onClick={(e)=>{
                                                    e.stopPropagation()
                                                    handleRemoveDispatch1(item)
                                                    }}>
                                                    <span className='flex items-center justify-center'>-</span>
                                                </button>
                                            <div className='text-[#686b7b] ml-8 min-w-[5.75rem] '><span> </span>₹ {item.count*item.price/100}</div>

                                            
                                            

                                        </div>


                                    </div>

                                    
                                    
                                </div>
                            ))}
                        

                       
                        
                        
                    </div>
                }

                
            </div>
            { selector.quatity >0 && 
                <div className='  bg-white h-[400px]  text-[#686B69] text-[18px] border-l-[1px] border-dashed border-[#686B69] font-normal flex-1 p-2 '>
                    <div className='text-[1.5rem] '>
                        Order Summary
                    </div>
                  
                    <div className='text-[#] flex mb-3 gap-28 justify-between'>
                        <span className=' whitespace-nowrap'>Item total</span>
                        <span className='w-24 '>₹ {isTotal}</span> 
                    </div>
                    <div className=' mb-3  flex justify-between'>
                       <span className=''>Delivery charges </span>
                       <span className='w-24 '>₹ 59</span> 
                    </div>
                    <div className=' mb-3 flex justify-between'>
                        <span className=''>Discount </span>
                        <span className='w-24 '>₹ {discount.toFixed(2)}</span>
                    </div>
                    <div className='  flex justify-between text-[1.5rem] text-[#000]'>
                        <span className=''>Total Amount </span>
                        <span className='w-24  '>₹ {totalBill.toFixed(2)}</span>
                     </div>
                </div>
            }  
            { selector?.quatity===0 && <div className='my-auto mx-auto text-[2rem]  '>       
                        
                Your cart is empty.........
                 </div>
            }
                

        </div>
     
    </div>
  )
}
