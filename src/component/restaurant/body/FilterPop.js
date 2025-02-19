import React, { forwardRef, useEffect } from 'react'
import { useState,useRef } from 'react'
import { useImperativeHandle } from 'react';
import {nonSelectedPath} from '../../utils/constant'
import {selectedPath1,selectedPath2,selectedCheckPath,nonSelectedCheck } from "../../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { ADD_ID } from "../../utils/filterIdSlice";
import { ADD_FILTER_POST_DATA } from "../../utils/filterDataSlice";
import { restaurantFilterData } from '../../utils/FilterPostDataSlice';




 const FilterPop = forwardRef(({props},ref)=> {
  const {isOpenFiter,getFacetList,hello2} = props
  const[isContent,setContent] = useState(null)
  const[isSelectionType,setSelectionType] = useState(null)
  const[facet1,setFacet] = useState('')
  const[istrue,setTrue] = useState(false)
   const[ radio,setRadio]  = useState(false)
    const [isFilter,setFilter] = useState('')
    let selector = useSelector(store=>store.filterId.id)
    let selector1 = useSelector(store=>store.filterData.postData)


    const targetref = useRef(null)
    const dispatch = useDispatch()
    let postBody ={}

    console.log(selector,selector1)



    const lat = localStorage.getItem('lat')
    const lng = localStorage.getItem('lng')
    const csrf1 = localStorage.getItem('csrf_id')

    isFilter && console.log(isFilter)

    const handleFilterPopClick = (event) => {
    
    event.stopPropagation();
    console.log('child event propation')
    //
   };

  //  hello class defines in filterbar pop defines in 
    function hello(){
      let hello1 = document.getElementsByClassName('hello1')[0]
      let pop = document.getElementsByClassName('filter-pop')[0]
     
      hello1.classList.add('absolute','w-full' ,'h-full','top-0','pt-16','left-0','overflow-hidden','justify-center','bg-[rgba(0,0,0,0.5)]','flex','scale-1','transition','ease-in-out','z-[99999]')
      // hello1.classList.remove('scale-0')
      pop.classList.add('scale-1')
      
      setTrue(true)
      console.log('i done it')
    } 
    function childFunction(){
      hello();

    }

    function setfilterPostData(childrenId,getFacetList){
        
      console.log(childrenId,getFacetList)
      for (const value of getFacetList) {
          for (const key in value) {
            if(key=="facetInfo"){
              for (const iterator of value[key]) {
                  if(iterator.id == childrenId){
                      dispatch(ADD_FILTER_POST_DATA([isContent.id,iterator.id]))
                      console.log('iscontentId')
                      console.log(isContent.id,iterator.id)

                  }
                  
              }
            }
          
          }
          
      }
      

    }
    
    //filter  post fetch start  
    async function fetchData(csrf1,facet1) {
      
        const url = 'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update';
        const csrf = csrf1; // Replace with your CSRF token
        const facet = facet1; // Replace with your facet value
        console.log(csrf)

        

        const body1 = {
            lat: lat,
            lng: lng,
            page_type: 'DESKTOP_WEB LISTING',
            seo_Params: {
            apiName: "FoodHomePage",
            pageType: "FOOD_HOMEPAGE",
            seoUrl: "https://www.swiggy.com/"
            },
            _csrf: csrf,
            filters: {
            isFiltered: true,
            facets: facet
            }
           
        };

        
        let requestBody = JSON.stringify(body1);

         
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',

            },
            body: requestBody,
            
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(restaurantFilterData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))

        
            // Handle the response data here

            console.log(data);
            console.log(5000)
        } 
        catch (error) {
            console.error('Fetch error:', error);
        }
    }
    // filter post fetch end  here



    useImperativeHandle(ref, () => ({
      childFunction,
    }));

    useEffect(()=>{
        setFilter(props)
    },[isFilter])



    useEffect(()=>{
         
     selector1.length>0 && setFacet({...selector1})
    },[getFacetList])

    useEffect(()=>{
      if(selector1.length>0){
    for (const iterator of selector1) {
        console.log(iterator)
        postBody = { ...postBody, ...iterator };
        setFacet(postBody)
        console.log(selector1)
        
    }
    }
   },[selector1])


    

   
    console.log(' i am fiter props')
    console.log(props)
  return (
   <>
      <div className="filter-pop   w-[45%]  focus:text-orange fixed z-[999]   mt-16  bg-white" onClick={handleFilterPopClick} ref={targetref}>
        <div className="pt-6 px-3 pb-3">
          <div className="font-extrabold leading-7 text-[rgba(2,6,12,.75)] bg-white" > Filter</div>
          <div className=" relative overflow-x-hidden overflow-y-scroll h-[50vh] ">
            <div className="  h-full w-full  ">

            {/*  filter list  start here */}
                <ul className=" overflow-scroll  [&>li]:w-full [&>li]:relative [&>li]:flex [&>li]:pl-8 [&>li]:items-center  flex flex-col absolute h-full w-[30%] border-[1px] border-[rgb(240,240,245)]" >
                  {getFacetList ? getFacetList.map((label,index)=>(

                      
                        
                    <li className=" text-[20px] font-[300] tracking-tight antialiased  leading-6 text-[rgb(2,6,12,.75)] w-full py-2 hover:scale-[.95]" onClick= {(e)=>{
                      console.log(label.id)
                      setContent(label)
                      setSelectionType(label)
                      
                      }} key={index}>
                      <div className="">{label.label}</div>
                
                    </li>
                        
                  )):null}
                      
                    
                </ul>
                {/* filter list end here  */}

                {/* filter by start  */}
                {<div className="content relative ml-[30%] h-full pl-6  pt-10 pr-3 w-full border-[1px] border-[rgb(240,240,245)] overflow-scroll ">
                    {isContent?Object.entries(isContent).map((isContent)=>
                        (
                          <div className=" flex flex-col-reverse">
                            <div className="absolute top-0">
                            {  isContent[0] == 'subLabel' ? isContent[1]:null }
                            </div>

                              {
                                <div className=" flex flex-col  " >
                                    {
                                      isContent[0] == 'facetInfo' ? isContent[1].map(((item)=>(
                                        <> 
                                        <input className="input h-0 w-0" type={isSelectionType.selection == "SELECT_TYPE_MULTISELECT" ? 'checkbox' : "radio"} name={isSelectionType.label} id={item.id} value={item.id}/>
                                        <label className="pl-6  py-2" for={item.id}  onClick= {(e)=>{
                                        setfilterPostData(item.id,getFacetList,dispatch,ADD_FILTER_POST_DATA)
                                          console.log(item.id)
                                          console.log('itemId')
                                        dispatch(ADD_ID(item.id))
                                        setRadio(item.id)


                                        e.stopPropagation()
                                        }}  >{item.label}</label>

                                        
                                        <span className="mt-[-1.8rem] z-[-3] mb-5 w-fit">
                                            {isSelectionType.selection== "SELECT_TYPE_MULTISELECT" ? 
                                              <span>
                                                <>
                                                  {selector.includes(item.id)?<svg width="16" height="16" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="#F15700"><path fill="#F15700" fill-rule="evenodd" clip-rule="evenodd" d={selectedCheckPath}></path></svg>  :
                                                      
                                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path fill="rgba(2, 6, 12, 0.92)" fill-rule="evenodd" clip-rule="evenodd" d={nonSelectedCheck} fill-opacity="0.6"></path></svg>
                                                  
                                                  }
                                                </>
                                              
                                              </span>
                                            :<span>
                                              { item.id ==radio?
                                                <svg width="16" height="16" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="#F15700">
                                                    <path fill="#F15700" fill-rule="evenodd" clip-rule="evenodd" d={selectedPath1}></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d={selectedPath2}></path>
                                                </svg>:
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                                    <path fill="rgba(2, 6, 12, 0.92)" fill-rule="evenodd" clip-rule="evenodd" d={nonSelectedPath} fill-opacity="0.6"></path>
                                                </svg> 
                                                
                                                }
                                            </span>

                                                }

                                        </span>
                                        
                                        {/* {console.log(item)} */}
                                        
                                        </>
                                      ))):null
                                    }
                                
                                </div>
                              }
                            
                          </div>
                        )
                    
                        
                    ):console.log(' no isContent')}
                  </div>
                }
                {/* filter by end */}
            </div>
          </div>
            <div className="p-2 float-right w-16 h-10 bg-orange right-0">
                <button onClick={(e)=>{
                    e.stopPropagation()
                    fetchData(csrf1,facet1,lat,lng)
                    hello2(e)

                }}>submit</button>
            </div>
            
        </div>
                                      
                                        
                                    
       </div>
    </>   
      )
    }
)
export default FilterPop  

