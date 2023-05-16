import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../SignUp/SignUP";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
      },
      {
        path:"signup",
        element:<SignUP></SignUP>
    },
    {
      path:"checkout/:id",
      element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
      loader:({params})=>fetch(`https://car-doctor-crud-server-alpha.vercel.app/services/${params.id}`)
  },
  {
    path:'bookings',
    element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
  }
  
      ]
    },
  ]);
  export default router;