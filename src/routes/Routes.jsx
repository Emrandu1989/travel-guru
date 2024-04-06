import {
    createBrowserRouter,
    
  } from "react-router-dom";
import LayOut from "../layout/LayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Booking from "../pages/Booking/Booking";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
         {
            path:'/',
            element: <Home />
         },
         {
            path:'/login',
            element: <Login />
         },
         {
            path:'/blog',
            element: <PrivateRoute><Blog/></PrivateRoute>
         },
       
         {
            path:'/register',
            element: <Register />
         },
         {
            path:'/booking',
            element: <Booking />
         },
      ]
    },
  ]);

  export default router