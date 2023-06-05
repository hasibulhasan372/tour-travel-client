import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";


const DashBoardLayout = () => {
    return (
        <div className="min-h-screen gap-4 lg:flex">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;