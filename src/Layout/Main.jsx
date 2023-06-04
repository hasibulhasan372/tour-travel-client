import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";


const Main = () => {
    return (
        <>
            <NavBar></NavBar>
           <div className="md:pt-20">
           <Outlet></Outlet>
           </div>
        </>
    );
};

export default Main;