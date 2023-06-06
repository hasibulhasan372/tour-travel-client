import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Register/Login/Login";
import SignUp from "../pages/Register/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import DashBoardLayout from "../Layout/DashBoardLayout";
import PrivateRoute from "../Routes/PrivateRoute";
import AddRoom from "../pages/Dashborad/AddRoom/AddRoom";
import { room } from "../API/room";

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
          element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
          loader: ({params}) => room(params.id)

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
      element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      children: [
        {
          path: "addRoom",
          element: <AddRoom></AddRoom>
        }
      ]
    }
  ]);

export default router;