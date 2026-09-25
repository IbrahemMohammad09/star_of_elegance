import servicephoto from "../../../assets/image/Dashboard/services/servicephoto.svg";
import edit from "../../../assets/image/Dashboard/services/edit.svg";
import deleteicon from "../../../assets/image/Dashboard/services/deleteicon.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";
import axios from "axios";
import Api from "../../../constant/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceView() {
    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 2;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(Api.GET.SERVICELIST);
                setServices(response.data.reverse());
            } catch {
                navigate("/error");
            }
        };
        fetchData();
    }, []);

    // حساب عدد الصفحات
    const totalPages = Math.ceil(services.length / servicesPerPage);

    // استخراج الخدمات الحالية بناءً على الصفحة
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = services.slice(indexOfFirstService, indexOfLastService);

    // التنقل بين الصفحات
    const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

    const deleteService = async (id) =>{
        try{
            const response = await axios.delete(`https://starofelegance.com/api/services/${id}/delete/`);
        } catch{}
    }

    const deleteItem =(id,name)=>{

        const confirmDelete = window.confirm(`Are you sure you want to delete this service ${name} ?`);
    
        if (confirmDelete) {
            deleteService(id)
            alert(`this service:${name} has been deleted`);
            fetchData();
        } 
    }

    return (
        <div className="md:flex gap-14">
            <SideBar />
            <div className="pl-14 md:pl-0">
                <p className="mb-10 text-black font-bold text-2xl mt-32 Poppins">Dashboard</p>
                <p className="font-semibold text-2xl mb-14 Poppins">Services</p>
                {currentServices.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-10 md:w-[1100px] justify-center items-center mb-20 container-services2">
                        <div className="flex bg-[#D9D9D9] rounded-lg child-services">
                            <img className="w-[350px] h-[320px]" src={service.picture} alt={service.name} />
                            <div className="pl-8">
                                <p className="font-normal text-3xl text-black kanit mb-12">{service.name}</p>
                                <p className="font-normal text-xl text-black nun mb-14">{service.description}</p>
                            </div>
                        </div>
                        <div onClick={()=>deleteItem(service.id,service.name)} className=" hover:cursor-pointer bg-[#D9D9D9] flex justify-center items-center w-44 gap-3.5  h-14 rounded-lg">
                            <img src={deleteicon} className="w-8" alt="icon" />
                        </div>
                        <div onClick={() => navigate("/dashboard/service/edit/" + service.id)} className=" hover:cursor-pointer bg-[#D9D9D9] flex justify-center items-center w-44 gap-3.5  h-14 rounded-lg">
                            <img src={edit} className="w-8" alt="icon" />    
                        </div>
                    </div>
                ))}

                {/* أزرار الترقيم الصفحي */}
                <div className="flex justify-center mt-8 gap-4">
                    <button 
                        onClick={prevPage} 
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
                    >
                        Previous
                    </button>

                    <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>

                    <button 
                        onClick={nextPage} 
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
