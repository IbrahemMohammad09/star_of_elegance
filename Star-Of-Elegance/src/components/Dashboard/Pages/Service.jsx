import SideBar from "../SharedComponents/SideBar"
import add from "../../../assets/image/Dashboard/services/add.svg"
import view from "../../../assets/image/Dashboard/services/view.svg"
export default function Service(){
    return<>
    <div className="md:flex  gap-14">
        <SideBar/>
        <div className="pl-14 md:pl-0">
        <p className=" mb-10 text-black font-bold text-2xl mt-32 Poppins ">Dashboard</p>
            <p className="font-semibold text-2xl mb-14 Poppins">Services</p>
            <div className="flex flex-col md:flex-row gap-24">
               <div className=" flex gap-6 font-semibold text-base text-black max-w-64 rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]">
               <img src={view} alt="icon-view"/>
               <p className="Poppins font-semibold text-base">View</p>
            </div>
            <div className=" flex gap-6 font-semibold text-base text-black max-w-64 rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]">
                <img src={add} alt="icon-add"/>
               <p className="Poppins font-semibold text-base">Add</p>
            </div>
        
        </div>

        </div>
    </div>
    </>
}