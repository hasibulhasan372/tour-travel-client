import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Register/Login/Login";
import SignUp from "../pages/Register/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>

        },
        {
          path: "room/:id",
          element: <RoomDetails></RoomDetails>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signUp",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;