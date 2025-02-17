import SideBar from "../SharedComponents/SideBar"
import servicesp from "../../../assets/image/Dashboard/Home/servicesp.svg"
import project from "../../../assets/image/Dashboard/Home/project.svg"
import orderp from "../../../assets/image/Dashboard/Home/orderp.svg"
import message from "../../../assets/image/Dashboard/Home/message.svg"
import ratingp from "../../../assets/image/Dashboard/Home/ratingp.svg"
import { Link } from "react-router-dom"




export default function HomeDahboard(){
    


    return<>
   <div className=" md:flex  gap-14 ">
    <SideBar/>
    <div>
        <p className=" mb-20 text-black font-bold text-2xl mt-16 pl-5 md:pl-0 Poppins">Dashboard</p>
        <div className="flex flex-col md:flex-row  gap-24 mx-4 container-card-dash">
            <Link to={"/dashboard/services"} className=" flex gap-6 max-w-[315px] font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]">
                <img src={servicesp}  className="w-6" alt="icon-services"/>
                <p className="Poppins font-semibold text-base">Services</p>
            </Link>
            <Link to={"/dashboard/project"} className=" flex gap-6 max-w-[315px] font-semibold text-base text-black rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]">
                <img src={project} alt="icon-project"/>
                <p className="Poppins font-semibold text-base">Projects</p>
            </Link>
        
        </div>
        <div className="flex flex-col md:flex-row gap-24 mx-4 mt-32 container-card-dash">
            <Link to={"/dashboard/order/order-view"} className=" flex max-w-[315px] gap-6 font-semibold text-base text-black rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]">
                <img src={orderp} alt="icon-order"/>
                <p className="Poppins font-semibold text-base">Orders</p>
            </Link>
            <Link to={"/dashboard/messages"} className=" flex gap-6 max-w-[315px] font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]">
                <img src={message} alt="icon-message"/>
                <p className="Poppins font-semibold text-base">Messages</p>
            </Link>
        
        </div>
        <div className="flex flex-col md:flex-row mx-4 mt-32 mb-5 container-card-dash">
            <Link to={"/dashboard/rate"} className=" max-w-[315px] flex gap-6 font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E] ">
                <img src={ratingp} alt="icon-rating"/>
                <p className="Poppins font-semibold text-base">Rating</p>
            </Link>
        
        </div>
    </div>
  </div>
    </>
}