import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Register/Login/Login";
import SignUp from "../pages/Register/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import DashBoardLayout from "../Layout/DashBoardLayout";
import AddRoom from "../pages/Dashborad/AddRoom/AddRoom";

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
    {
      path: "dashboard",
      element: <DashBoardLayout></DashBoardLayout>,
      children: [
        {
          path: "addRoom",
          element: <AddRoom></AddRoom>
        }
      ]
    }
  ]);

export default router;