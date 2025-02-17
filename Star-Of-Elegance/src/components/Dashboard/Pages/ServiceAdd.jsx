import SideBar from "../SharedComponents/SideBar"
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg"
import { useState } from "react";
import axios from "axios";
import Api from "../../../constant/api";
import { useNavigate } from "react-router-dom";

export default function ServiceAdd(){
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();

    const addService = async () =>{
        try{
            const response = await axios.post(Api.POST.CREATESERVICE, 
                {
                    name : name,
                    description : description,
                    "before_pictures": null,
                    "after_pictures": null
                }) 
                const selectedId = response.data.id;
                navigate("/dashboard/services/add/photo/:id"+selectedId);
                
        } catch{
            navigate('/error')
        }
    }

    return<>
        <div className=" md:flex  gap-14">
            <SideBar/>
            <div className="pl-28 md:pl-0">
                <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
                <p className="font-semibold text-2xl Poppins">Services</p>
                <div className="my-14 ">
                    <p className="font-bold text-xl dm ">Details</p>
                    <p className="text-[#5F6165] font-normal text-lg dm">Update The serivce here.</p>
                    <img src={lineservices} className="mt-7" alt="line"/>
                </div>
                <form>
                    <div className="flex flex-col mb-7 mr-4 ">
                    <label className="font-extrabold text-xl  text-black dm">Name Of Services</label>
                    <textarea value={name}  onChange={(event) => setName(event.target.value)} placeholder="Custom Furniture Manufacturing" className="h-28 mr-3 w-full  pl-3 py-7 border border-[#E9EAEC] rounded-lg dm"></textarea>
                    </div>
                    <div className="flex flex-col mb-24 mr-4">
                    <label className="font-extrabold text-xl  text-black dm">Description</label>
                    <textarea value={description}  onChange={(event) => setDescription(event.target.value)} placeholder="We create unique, high-quality furniture" className="h-28  w-full  pl-3 py-9 border border-[#E9EAEC] rounded-lg dm"></textarea>
                    </div>
                    <button 
                        onClick={(event)=>{
                            event.preventDefault();
                            addService();
                        }} 
                        className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E]  rounded-2xl Abhaya
                        hover:bg-white hover:text-[#B47F3E] hover:border-[#B47F3E] hover:border-2">Next</button>
                </form>
            </div>
        </div>
    </>
}