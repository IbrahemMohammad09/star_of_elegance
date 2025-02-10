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

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

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
                <div className="flex flex-col items-center gap-10 h-screen mt-6 px-4">
                    <div className="flex flex-col items-center">
                        <img src={home} className="w-10" alt="icon-home" />
                        <Link to="/" className="font-semibold text-base text-white Poppins">Home</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={services} className="w-10" alt="icon-services" />
                        <Link to="/" className="font-semibold text-base text-white Poppins">Services</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={order} className="w-10" alt="icon-order" />
                        <Link to="/" className="font-semibold text-base text-white Poppins">Orders</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={rating} className="w-10" alt="icon-rating" />
                        <Link to="/" className="font-semibold text-base text-white Poppins">Rating</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={messages} className="w-10" alt="icon-messages" />
                        <Link to="/" className="font-semibold text-base text-white Poppins">Messages</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={projectwhite} className="w-10" alt="icon-project" />
                        <Link to="/" className="font-semibold text-base text-white Poppins">Projects</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
