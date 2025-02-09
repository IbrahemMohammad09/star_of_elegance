import SideBar from "../SharedComponents/SideBar"
import servicesp from "../../../assets/image/Dashboard/Home/servicesp.svg"
import project from "../../../assets/image/Dashboard/Home/project.svg"
import orderp from "../../../assets/image/Dashboard/Home/orderp.svg"
import message from "../../../assets/image/Dashboard/Home/message.svg"
import ratingp from "../../../assets/image/Dashboard/Home/ratingp.svg"
export default function HomeDahboard(){
    return<>
   <div className=" flex gap-20 ">
    <SideBar/>
    <div>
        <p className=" mb-20 text-black font-bold text-2xl mt-16  Poppins">Dashboard</p>
        <div className="flex flex-col md:flex-row  gap-24">
        <div className=" flex gap-6 font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]">
            <img src={servicesp} alt="icon-services"/>
            <p className="Poppins font-semibold text-base">Services</p>
        </div>
        <div className=" flex gap-6 font-semibold text-base text-black rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]">
            <img src={project} alt="icon-project"/>
            <p className="Poppins font-semibold text-base">Projects</p>
        </div>
        
        </div>
        <div className="flex flex-col md:flex-row gap-24 mt-32">
        <div className=" flex gap-6 font-semibold text-base text-black rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]">
            <img src={orderp} alt="icon-order"/>
            <p className="Poppins font-semibold text-base">Orders</p>
        </div>
        <div className=" flex gap-6 font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]">
            <img src={message} alt="icon-message"/>
            <p className="Poppins font-semibold text-base">Messages</p>
        </div>
        
        </div>
        <div className="flex  mt-32 mb-5">
        <div className=" flex gap-6 font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E] ">
            <img src={ratingp} alt="icon-rating"/>
            <p className="Poppins font-semibold text-base">Rating</p>
        </div>
        
        </div>
    </div>
  </div>
    </>
}