import { useState, useEffect } from "react";

export function UseRestaurantListing(ele,setDefaultRestData,setFilterFetch,defaultRestData,isFilterFetch) {
  const [page, setPage] = useState(8);
  const [loading, setLoading] = useState(false);
  const lat = localStorage.getItem('lat');
  const lng = localStorage.getItem('lng');
  let element = ele && ele;

  async function getRestaurantMore() {
    setLoading(true)

    
    try {
      const response = await fetch(
        'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lat: lat,
            lng: lng,
            nextOffset: 'COVCELQ4KID4ruup+9+KczCnEzgD',
            seoParams: {
              apiName: "FoodHomePage",
              pageType: "FOOD_HOMEPAGE",
              seoUrl: "https://www.swiggy.com/",
            },
            widgetOffset: {
              NewListingView_Topical_Fullbleed: '',
              NewListingView_category_bar_chicletranking_TwoRows: '',
              NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
              collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(page),
            },
          }),
        }
      );

      const data = await response.json();
     
        let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
        setDefaultRestData(prev => [...prev,...newRestaurants])
        isFilterFetch && setFilterFetch(prev => [...prev,...newRestaurants])
        return newRestaurants
     
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
   

    // Call the fetchData function when the page number changes.
    getRestaurantMore();
  }, [page]);




 function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop +1 >=
      document.documentElement.scrollHeight
    ) {
      // When you reach the bottom, increment the page number to fetch more data.
      setPage((prevPage) => prevPage + 8);
    }
  }

  // Attach the scroll event listener.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



   // Adjust the return value as needed for your component.
   return loading
}
