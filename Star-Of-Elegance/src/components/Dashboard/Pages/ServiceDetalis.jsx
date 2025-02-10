import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg"
import vector from "../../../assets/image/Dashboard/services/vector.svg"
import SideBar from "../SharedComponents/SideBar"
import '../Dashboard.css'
import { Link } from "react-router-dom";
export default function ServiceDetalis(){
    return<>
    <div className="md:flex  gap-14">
        <SideBar/>
    
    <div className="mt-11 pl-28 md:pl-0">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Services</p>
        <div className="mt-14 ">
            <p className="font-bold text-xl dm">Details</p>
            <p className="text-[#5F6165] font-normal text-lg dm">Update The pictures here.</p>
            <img src={lineservices} className="mt-7 " alt="line"/>
        </div>
        <div className="mt-32">
            <Link to ='/'><img src={vector} className="borderdas mb-24 p-16" alt="vector"/></Link>
            <Link className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E]  rounded-2xl Abhaya
             hover:bg-white hover:text-[#B47F3E] hover:border-[#B47F3E] hover:border-2">Next</Link>
        </div>
    </div>
</div> 
    </>
}