
<div className="filter-pop  w-[45%]  focus:text-orange fixed  mt-16  bg-white" onClick={handleFilterPopClick}>
                                    <div className="pt-6 px-3 pb-3">
                                        <div className="font-extrabold leading-7 text-[rgba(2,6,12,.75)] bg-white" > Filter</div>
                                        <div className=" relative overflow-x-hidden overflow-y-scroll h-[50vh] ">
                                            <div className="  h-full w-full  ">

                                             {/* filter list  start here */}
                                                <ul className=" overflow-scroll  [&>li]:w-full [&>li]:relative [&>li]:flex [&>li]:pl-8 [&>li]:items-center  flex flex-col absolute h-full w-[30%] border-[1px] border-[rgb(240,240,245)]" >
                                                    {getFacetList ? getFacetList.map((label)=>(

                                                        
                                                           
                                                        <li className=" text-[20px] font-[300] tracking-tight antialiased  leading-6 text-[rgb(2,6,12,.75)] w-full py-2 hover:scale-[.95]" onClick= {(e)=>{
                                                            console.log(label.id)
                                                            setContent(label)
                                                            setSelectionType(label)
                                                            
                                                            }}>
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
                                                                                    setfilterPostData(item.id,getFacetList)

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
                                        <div className="p-2">
                                            <button onClick={(e)=>{
                                                e.stopPropagation()
                                                fetchData()

                                            }}>submit</button>
                                        </div>
                                        
                                    </div>
                                   
                                    
                                
                                </div>