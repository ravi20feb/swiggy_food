import React from "react";
import { useEffect,useState, useRef} from "react";

import useFilterBar from "../../utils/useFilterBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch,useSelector } from "react-redux";

import FilterPop from "./FilterPop";
import { openFiter } from "../../utils/constant";

export default function FilterBar(){
    const[istrue,setTrue] = useState(false)
    const[isOpenFiter,setOpenFilter] = useState('')
 
    const childRef = useRef(null)
    const dispatch = useDispatch()
    let selector = useSelector(store=>store.filterId.id)
    let selector1 = useSelector(store=>store.filterData.postData)


    let obj = Object.fromEntries(selector1);
    let postBody ={}

    console.log(obj)
    if(selector1.length>0){
        for (const iterator of selector1) {
            console.log(iterator)
            postBody = { ...postBody, ...iterator };
            // console.log(postBody)

        }
    }
    console.log(postBody)
    console.log(selector)
    console.log(selector1)
    const filterHookData = useFilterBar()  
    const [filterTitle,getFacetList,sortConfig]  = filterHookData
    //

    // console.log(isOpenFiter)
    const filterContain = document.getElementsByClassName('filter-contain')
    const filterContain1 = document.getElementsByClassName('filter-title-wrapper')
    // console.log(getFacetList)
    // console.log('sdsdfs')      
    // console.log(isOpenFiter)
    function hello(){
        let hello1 = document.getElementsByClassName('hello1')[0]
        let pop = document.getElementsByClassName('filter-pop')[0]
        console.log(hello)
        hello1.classList.add('absolute','w-full' ,'h-full','top-0','pt-16','left-0','overflow-hidden','justify-center','bg-[rgba(0,0,0,0.5)]','flex','scale-1','transition','ease-in-out','z-[9999]')
        // hello1.classList.remove('scale-0')
        pop.style.scale = '1'
        
        setTrue(true)
    } 


    function hello2(e){
        e.stopPropagation()
        let hello1 = document.getElementsByClassName('hello1')[0]

        // console.log(hello1)
        // console.log(e)
        hello1.classList.remove('absolute','w-full' ,'h-full','top-0','pt-16','left-0','overflow-hidden','bg-[rgba(0,0,0,0.5)]','flex','justify-center','scale-1','transition','z-[9999]')
    
        setTrue(false)
        
        // console.log('parent event propagation')

        // hello.classList.remove('scale-0')
    }
    const handleFilterPopClick = (event) => {
    
            event.stopPropagation();
            console.log('child event propation')
            //
    };




    

    

    const handleScroll = ()=>{


        if(!handleScroll.isRunning){
            handleScroll.isRunning = true
            setTimeout(()=>{
                // console.log('height:', ":-",document.documentElement.scrollHeight)
                // console.log('top:', ":-",document.documentElement.scrollTop)
                // console.log('window:', ":-",window.innerHeight)
                let contain = filterContain1?filterContain1:''
                // console.log(contain[0])


                if(contain[0]){
                    // console.log(contain[0].getBoundingClientRect())
                    const DomReact = contain[0].getBoundingClientRect()
                    if(DomReact.top < 0 ){

                        filterContain[0].style.height ='72px'
                        filterContain[0].classList.add('fixed','z-[10000]','top-0','left-0','h-[32px]','bg-white','w-full')
                        // console.log(DomReact.top)
            
                    }
                
                };
                if(contain[0]){
                    
                    const DomReact = contain[0].getBoundingClientRect()
                    if(DomReact.top > 0 ){
                        filterContain[0].style.height ='2.78rem'
                        filterContain[0].classList.remove('fixed','z-[10000]','top-0','left-0')
                        // console.log(DomReact.top)
            
                    }
                };
                handleScroll.isRunning = false;

            },200)
        }
    
            
        
        
    }  

    const  parentFunction = ()=>{
        
        childRef.current.childFunction();
    
    }

    // Call the fetchData function to initiate the request



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    

        // Remove the scroll event listener when the component unmounts
        // return () => {
        //     console.log('unmounting')
        //      window.removeEventListener("scroll", handleScroll);
        // };
    },[]);

//    
    
   useEffect(()=>{
    if(getFacetList !== ''){
        openFiter(getFacetList,setOpenFilter)
    }

    
   },[getFacetList])
//    useEffect(()=>{
//          if(selector1.length>0){
//         for (const iterator of selector1) {
//             console.log(iterator)
//             postBody = { ...postBody, ...iterator };
//             setFacet(postBody)
            
//         }
//     }
//    },[selector1])
   
    if(!getFacetList) return console.log(typeof getFacetList)




    return(
        <>
            {
               filterTitle ? 
               <div className="  filter-margin ease-linear ">
                    <div className=" filter-hero-wrapper ">
                        <div className="filter-title-wrapper">
                            <div className=" text-[1.5rem]  font-extrabold text-[rgba(2,6,12,.92)] sm:text-[1rem]">{filterTitle}</div>
                        </div>
                        <div className=""> 
                            <div className="hello1 z-10 " onClick={hello2}>

                             {/* filter pop start here  */}
                                
                                <FilterPop props={{isOpenFiter,getFacetList,hello2}} ref={childRef}/>
                                {/* filter pop end  here */}
                            </div>

                            {/* visible filter start here  */}
                            <div className="mt-4 sm:hidden">
                            
                                <div className="filter-contain ">
                                    <div>
                                        <div className="flex  justify-right mx-2 mt-4 ">
                                            <div onClick={()=>{
                                                hello()
                                                // parentFunction()
                                                }} className="mr-2 px-2 py-2   w-[max-content] rounded-[20px] border-[1px]   border-light-gray text-[16px] md:text-[12px] text-[rgba(2, 6, 12, 0.75)] font-extralight">
                                             FILTER 
                                             {istrue && <span className="ml-1"><FontAwesomeIcon icon={faXmark} /></span>}

                                            </div>
                                            {
                                               isOpenFiter.length>0 ? isOpenFiter.map((info,index)=>(
                                            <div key={index}>    
                                                <div  className="  mr-2 px-2 py-2 overflow-hidden   w-[max-content] rounded-[20px] border-[1px] md:text-[12px]   border-light-gray text-[16px] text-[rgba(2, 6, 12, 0.75)] font-extralight">
                                                {info.label}
                                               
                                                    <div className="clickBg bg-[rgba(2,6,12,.6)] mr-2 mx-[-9px] absolute  top-0 w-[150%] rounded-[20px] h-[100% scale-0]">
                                                    {/* {istrue && <span className="ml-1"><FontAwesomeIcon icon={faXmark} /></span>} */}
                                                    

                                                    </div>
                                                </div>
                                                
                                            </div>
                                               )) :null                                   
                                            }

                                           
                                        </div>
                                    </div>
                                    


                                </div> 

                                {/* visible filter end  here */}       
                            </div>

                        </div>
                      
                    </div>

                </div>
               :console.log('no value')
            }
          

            
        </>
    )

}