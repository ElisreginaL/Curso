import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom"
import './index.css'
import Login from './views/Login/Login.jsx'
import Home from './views/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home />,
  }
  
  //{
 //   path: "/products",
 //   element: <Products/>,
 // },
 // {
 //   path: "/payment",
 //   element: <Payment/>,
 // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


