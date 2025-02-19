import React from "react";
import ReactDOM from 'react-dom/client';
import Address from './component/adddress/Address'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import Restaurant from "./component/restaurant/Restaurant";
import Error from "./component/adddress/Errror";
import { Provider } from "react-redux";
import RestaurantMain from "./component/restaurant/body/RestaurantMain";


import store from "./component/utils/store";
import { RestaurantMenu } from "./component/restaurant/body/RestaurantMenu";
import FinalyCart from "./component/restaurant/body/FinalyCart";








function App(){
    console.log('i am app')
    return(
        <>
            <Provider store={store}>
                <Outlet />
            
            </Provider>
      </>  
    )
}

const appRouter = createBrowserRouter([
    {   
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children:[{
            path:'/',
            element: <Address />
        },
        {
            path:'home',
            element: <Restaurant />,
            children:[{
                path: '/home',
                element: <RestaurantMain />,

            },
            {
                path:'/home/restaurant/:resId',
                element:<RestaurantMenu />
            },
            {
             path:'/home/cart',
             element: <FinalyCart />
            }
           

            ]
        }
        ]
    },
    
    
     

])

const rootId = document.getElementById('root');
const root = ReactDOM.createRoot(rootId);

// root.render(<App />)
root.render(<RouterProvider  router={appRouter}/>)
  


