import Logo from "../Logo/Logo";
import { TbLogout } from 'react-icons/tb'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Sidebar = () => {
    const { user, logOut } = useAuth();
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate()



    const handleLogOut = () => {
        logOut();
        navigate("/")
    }
    return (
        <div className="w-72 border py-4 px-2 max-h-screen overflow-x-hidden bg-gray-100 hidden md:block ">
            <div className="w-full  text-center bg-pink-50 rounded-lg py-2 pl-20">
                <Logo></Logo>
            </div>
            <div className="flex flex-col justify-between items-center mt-12 h-[calc(100vh-130px)]">
                <div className=" text-center  w-full">

                    <div className="mb-8 space-x-2">
                        <span className="border rounded-lg px-4 py-2 bg-white peer-checked:bg-pink-400 font-bold">Guest</span>
                        <span className="border rounded-lg px-4 py-2 bg-white peer-checked:bg-pink-400 font-bold">Host</span>
                    </div>
                    {/* AddRoom  */}
                    <div className="py-2 bg-slate-200 flex items-center justify-center w-full ">
                        <Link to="/dashboard/addRoom" className="flex items-center text-lg font-bold"><FaHome className="mr-3"></FaHome> Add Room</Link>
                    </div>

                    {/* My Bookings  */}
                    <div className="lg:mt-4">
                        <Link to="/dashboard/myBookings" className="text-xl font-bold">My Bookings</Link>
                    </div>

                </div>

                <div className="py-6 flex flex-col  items-center w-full border-t-2">
                    <div className="flex  items-center gap-5 text-lg font-semibold mb-4"><AiFillSetting ></AiFillSetting> Profile</div>
                    <button onClick={handleLogOut} className="flex  items-center gap-2 text-lg font-semibold"><TbLogout ></TbLogout> Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
