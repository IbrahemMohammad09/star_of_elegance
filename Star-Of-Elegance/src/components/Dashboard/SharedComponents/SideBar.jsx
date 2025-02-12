import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../assets/image/logo.png";
import home from "../../../assets/image/Dashboard/SideBar/home.svg";
import services from "../../../assets/image/Dashboard/SideBar/services.svg";
import order from "../../../assets/image/Dashboard/SideBar/order.svg";
import rating from "../../../assets/image/Dashboard/SideBar/rating.svg";
import messages from "../../../assets/image/Dashboard/SideBar/messages.svg";
import projectwhite from "../../../assets/image/Dashboard/SideBar/projectwhite.svg";
import { useDispatch } from "react-redux";
import {logout} from '../../../redux/authSlice';
import { useNavigate } from "react-router-dom";
import store from "../../../redux/store";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    
    const handleLogout = () =>{

        dispatch(logout());
        navigate("/dashboard");
        
        
    }

    return (
        <>
            {/* Menu icon*/}
            <div className="md:hidden p-4 ">
                <FiMenu className="text-[#8B5715] text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
            </div>
            
            <div className={`bg-[#8B5715] w-64 flex flex-col items-center gap-6 fixed top-0 left-0 h-full z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-28`}>
                {/* close icon*/}
                <div className="w-full  p-4 md:hidden">
                    <FiX className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>
                
                <img src={logo} className="w-32 mt-4" alt="logo" />
                <button
                    onClick={handleLogout}
                    className="mt- w-[100px] border-4 border-[#B47F3D] text-[#B47F3D] text-lg font-medium rounded-3xl shadow-md bg-white hover:bg-[#B47F3D] hover:text-white transition-all"
                >
                    log out 
                </button>
                
                <div className="flex flex-col items-center gap-10 h-screen mt-6 px-4">
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/home" className="font-semibold text-base text-white Poppins">
                        <img src={home} className="w-10" alt="icon-home" />Home</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/services" className="font-semibold text-base text-white Poppins">
                        <img src={services} className="w-10" alt="icon-services" />Services</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/" className="font-semibold text-base text-white Poppins">
                        <img src={order} className="w-10" alt="icon-order" />Orders</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/rate" className="font-semibold text-base text-white Poppins">
                        <img src={rating} className="w-10" alt="icon-rating" />Rating</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/messages" className="font-semibold text-base text-white Poppins">
                        <img src={messages} className="w-10" alt="icon-messages" />Messages</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/project" className="font-semibold text-base text-white Poppins">
                        <img src={projectwhite} className="w-10" alt="icon-project" />Projects</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
