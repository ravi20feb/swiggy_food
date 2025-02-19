import React from 'react'
import RestaurantCarousel from './RestaurantCarousel'
import DishSlider from './DishSlider'
import RestaurantAreaSlider from './RestaurantAreaSlider'
import FilterBar from './FilterBar'
import AddressFooter from '../../adddress/AddressFooter'
import RestaurnatListing from './RestaurantListing'

import HomePageShimer from '../HomeCarouselShimer'



export default function RestaurantMain() {

  return (
    <div className='  restaurnat-body-wrapper flex-grow lg:min-w-[auto] lg:max-w-[100vw] '>
        <div className='h-[100%]'>
            <div className='main-wrapper '>
                <main className='core-layout-wrapper flex w-[100%] h-[100%] flex-col bg-[rgb(255,255,255)] mt-[4.9rem] '>
                <RestaurantCarousel />
                <DishSlider></DishSlider>
                <hr className='line-break  my-8 '/>
                <RestaurantAreaSlider />
                <hr className='line-break  my-8 '/>
                <FilterBar />
               
                <RestaurnatListing />
                

                </main>
            </div>

        </div>
    </div>
  )
}
