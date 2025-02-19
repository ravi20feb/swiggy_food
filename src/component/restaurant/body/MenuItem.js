import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp,faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux'
import { ADD_CART,REMOVE_CART } from '../../utils/cartItemSlice';
import MenuItemShimer from '../MenuItemShimer';


export default function MenuItem({prop}) {
  const [isExpand, setisExpand] = useState({});
  const [isTemp,setTemp]  = useState({})
  let count = 0
  
 
  const selector = useSelector(store=>store.cart.item)
  const dispatch  = useDispatch()
 console.log('selector')
 console.log(selector)
 console.log('prop')
 console.log(prop)
 function handleAddDispatch(food){
  dispatch(ADD_CART(food?.card?.info))

 }
 function handleRemoveDispatch(food){
  dispatch(REMOVE_CART(food?.card?.info))

 }
 


  //  on intial click , isexpanded  -> {}. in toogle function , it access the state, intial -> {}so it dynamically add  property ,when we  click again , it find find the  property and the  update the  value
    const toggleExpand = (title) => {
  setisExpand((prevState) => ({
    ...prevState,
    [title]: !prevState[title],
  }));
};
   
                 
               
  return (
            <div>
                <div>
                    <div className='menu-item-wrapper '>
                    {
                    prop  &&   prop.map((item,index)=>{
                        return item?.card?.card?.itemCards && 
                            <div className=' mb-4 ' key={index}>
                                {/* {console.log(item)}  */}
                                <div className='flex justify-between'>
                                    <div className='text-[18px] text-[#3e4154] font-extrabold'>{item?.card?.card?.title} ({item?.card?.card?.itemCards.length})</div>
                                    <button
                                        onClick={() => toggleExpand(item?.card?.card?.title)}>
                                        <FontAwesomeIcon
                                          icon={isExpand[item?.card?.card?.title] ? faChevronUp : faChevronDown}/>
                                    </button>
                                
                                </div>
                                
                                {

                                isExpand[item?.card?.card?.title]  ?  item?.card?.card?.itemCards.map((food,index)=>{
                                        return <div className='mb-3 ml-2 ]' key={index}>
                                            <div className='flex justify-between  my-5'>
                                              <div className='pl-2'>
                                                <div className='flex item-center'>
                                                  <div className='border-[1.9px] border-[green] w-[12px] h-[12px] flex items-center justify-center' style={{ borderColor: food?.card?.info?.itemAttribute?.vegClassifier === 'VEG' ? 'green' : 'red'}}>
                                                    <div className=' w-[6px] h-[6px] bg-[green] rounded-3xl' style={{backgroundColor: food?.card?.info?.itemAttribute?.vegClassifier=='VEG'?'green':'red'}}>
                                                    </div>
                                                      
                                                  </div>
                                                  {food?.card?.info?.isBestseller && <div className='text-[#ee9c00] mt-[-.45rem] h-[6px] ml-2'><FontAwesomeIcon icon={faStar} style={{color: "#ee9c00",}} />Bestseller</div>}
                                                </div>
                                                  <div className='text-[18px] text-[#3e4154] font-semibold'>
                                                  {console.log('food')}
                                                  {/* {console.log(food)} */}
                                                  {/* {console.log(food?.card?.info)} */}


                                                  {food?.card?.info?.name} 
                                                  
                                                  </div>
                                                  <div className='text-[#3e4152] font-light'>₹{food?.card?.info?.price ? food?.card?.info?.price/100:food?.card?.info?.defaultPrice/100}</div>
                                                  <div className='text-[14px] text-[rgba(40,44,63,.45)] tracking-normal  leading-4'>{food?.card?.info?.description}</div>

                                              </div>  
                                            
                                                <div className='min-w-[118px] h-[120px] font-light ml-4 mr-1 mt-1'>
                                                    <span className='relative flex justify-center' >
                                                      <img className= "bg-cover rounded-lg border-[1px] border-[#686B78] h-[96px] w-[118px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+`${food?.card?.info?.imageId}`} />

                                                      {selector.cartItems[food?.card?.info?.id]?.id !==food?.card?.info?.id
                                                      ?<div className=' w-24 h-9 text-[#60b246] text-center font-bold text-[.93rem] border-[1px] border-[#d4d9d5] pt-2 absolute  bottom-[-15px]  rounded-[4px] bg-white p ' onClick={(e)=>{ e.stopPropagation()
                                                      dispatch(ADD_CART(food?.card?.info)) }}>
                                                  
                                                      ADD
                                                      <span className='absolute top-[-2px] right-0'>+</span>

                                                      </div>
                                                      
                                                      :<div className=' w-24 h-9 text-[#60b246] flex justify-between items-center px-2 font-bold text-[.93rem] border-[1px] border-[#d4d9d5] absolute  bottom-[-15px]  rounded-[4px] bg-white p'>
                                                      {console.log()}
                                                      <button className='left-3 font-semibold text-[24px]' onClick={()=>{
                                                        
                                                        handleAddDispatch(food)
                                                      }}>
                                                      +
                                                      </button>
                                                      <span>{selector.cartItems[food?.card?.info?.id].count}</span>
                                                      <button className='right-0 font-semibold text-[24px]' onClick={()=>{
                                                        
                                                        handleRemoveDispatch(food)
                                                      }}>
                                                        -
                                                      </button>
                                                      

                                                      </div>}
                                                    </span>
                                                    
                                                </div>
                                        
                                            </div>   
                                        </div>
                                            
                                    }):<div className='h-5 bg-[#f1f1f6]'></div>
                                }
                            </div>
                            

                        })
                    }
                        

                    </div>
                </div>
            </div>
  )
}
