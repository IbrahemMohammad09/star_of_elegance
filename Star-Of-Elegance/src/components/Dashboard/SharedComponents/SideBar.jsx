import logo from "../../../assets/image/logo.png"
import home from "../../../assets/image/Dashboard/SideBar/home.svg"
import services from "../../../assets/image/Dashboard/SideBar/services.svg"
import order from "../../../assets/image/Dashboard/SideBar/order.svg"
import rating from "../../../assets/image/Dashboard/SideBar/rating.svg"
import messages from "../../../assets/image/Dashboard/SideBar/messages.svg"
import projectwhite from "../../../assets/image/Dashboard/SideBar/projectwhite.svg"
import {Link} from "react-router-dom";
export default function SideBar(){
    return<>
       <div className="bg-[#8B5715] w-28 flex flex-col justify-center items-center   gap-16">
        <img src={logo} className="w-32" alt="logo" />
        <div className="">
            <img src={home} className="w-10" alt="icon-home"/>
            <Link to = "/" className="font-semibold text-base text-white  Poppins">Home</Link>
        </div>
        <div className="">
            <img src={services} className="w-10 " alt="icon-services"/>
            <Link to = "/" className="font-semibold text-base text-white Poppins">Services</Link>
        </div>
        <div>
            <img src={order} className="w-10" alt="icon-order"/>
            <Link to = "/" className="font-semibold text-base text-white  Poppins">Orders</Link>
        </div>
        <div>
            <img src={rating} className="w-10" alt="icon-rating"/>
            <Link to = "/" className="font-semibold text-base text-white  Poppins">Rating</Link>
        </div>
        <div>
            <img src={messages} className="w-10" alt="icon-messages"/>
            <Link to = "/" className="font-semibold text-base text-white  Poppins">Messages</Link>
        </div>
        <div>
            <img src={projectwhite} className="w-10" alt="icon-project"/>
            <Link to = "/" className="font-semibold text-base text-white  Poppins">Projects</Link>
        </div>
    </div>
    </>
}