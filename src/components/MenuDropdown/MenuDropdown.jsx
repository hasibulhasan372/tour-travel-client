import { useCallback, useState } from "react";
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Avater from "../../pages/shared/NavBar/Avater";


const MenuDropdown = () => {
    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const handleAddHome = () => {

    }
    const handleLogOut = () => {
        logOut()
    }
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])
    return (
        <div className="relative">
            <div className="flex items-center gap-4">
                {/* Tour Travel Home  */}
                <div
                    onClick={handleAddHome}
                    className=" border rounded-xl py-2 md:px-4 px-2 font-semibold"
                >
                    Tour Travel Your Home
                </div>
                {/* Drop Down Menu  */}
                <div onClick={toggleOpen} className="border py-4 md:py-1 px-4 md:px-4 rounded-full md:rounded-lg flex md:gap-2 items-center transition ">
                    <FaBars></FaBars>
                    <Avater></Avater>
                </div>
            </div>

            {
                isOpen ? <div className="absolute top-16 right-0 rounded-md font-semibold text-sm shadow-md overflow-hidden w-1/2 lg:w-2/3  ease-in-out z-10 bg-white">
                    <div className="flex flex-col gap-3 pl-2 py-2 transition duration-500">
                        
                        {
                            user ?<>
                            <Link to='/dashboard'> DashBoard</Link>
                             <button
                                onClick={handleLogOut}
                                className="btn btn-warning btn-sm md:w-1/2 capitalize font-semibold overflow-hidden">
                                Log Out
                            </button></> :
                                <div className="flex flex-col gap-3">
                                    <Link to="/">Home</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/signUp">Sign Up</Link>
                                </div>
                        }
                    </div>
                </div>
                    : ""
            }


        </div>
    );
};

export default MenuDropdown;