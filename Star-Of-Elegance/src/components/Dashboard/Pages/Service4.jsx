import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg"
import vector from "../../../assets/image/Dashboard/services/vector.svg"
import SideBar from "../SharedComponents/SideBar"
import '../Dashboard.css'
export default function Services4(){
    return<>
    <div className="flex gap-24 ">
        <SideBar/>
    
    <div className="mt-11">
        <p className="font-bold text-2xl mt-16 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Services</p>
        <div className="mt-14 ">
            <p className="font-bold text-xl dm">Details</p>
            <p className="text-[#5F6165] font-normal text-lg dm">Update The pictures here.</p>
            <img src={lineservices} className="mt-7" alt="line"/>
        </div>
        <div className="mt-32">
            <img src={vector} className="borderdas p-16" alt="vector"/>
            <button className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E] mt-32 rounded-2xl Abhaya hover:bg-white hover:text-[#B47F3E] hover:border-[#B47F3E] hover:border-2">Next</button>
        </div>
    </div>
</div> 
    </>
}