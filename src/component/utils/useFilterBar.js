import { useState,useEffect } from "react"
import { useSelector } from "react-redux";


function useFilterBar(){
    const [filterText,setFilterText] = useState('')
    const [filterTitle,setFilterTitle] = useState('')
    const[getFacetList,setGetFacetList] = useState('')
    const[sortConfig,setSortConfig] = useState('')

    
    const selector = useSelector(store=>store.restaurant.card)
    selector[0] && console.log(selector)
    selector[0] ? localStorage.setItem('csrf_id',selector[0]?.csrfToken) : console.log('no csrf')
    console.warn('warning')



    function getTitle(){
    console.log(selector[0])
    console.log('selector')

        if(selector[0]){
        const cards = [...selector[0]?.data?.cards]
        console.log(cards)
        
            for( const card of cards){
                
                if( card.card.card.id == 'popular_restaurants_title'){
                    setFilterTitle(card.card.card.title)
                    console.log(card.card.card.title)
                    break
                }
            }        
            for( const card of cards){
                console.log('cards is here')
                // console.log('restaurantCount :-' `${card.card.card.restaurnatCount}`)
                
                if( card.card.card.restaurantCount ){
                    setGetFacetList(card?.card?.card?.facetList)
                    setSortConfig(card?.card?.card?.sortConfigs)
                    
                    console.log(card?.card?.card?.restaurantCount)
                    break
                }
            }    

        }
    }
    
    


    useEffect(()=>{
        console.log('not running')
        getTitle()        
    },[selector])

    // if (!filterTitle) return null

    return[ filterTitle,getFacetList,sortConfig]

}
  export default useFilterBar