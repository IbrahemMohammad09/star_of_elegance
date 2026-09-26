import edit from "../../../assets/image/Dashboard/services/edit.svg";
import deleteicon from "../../../assets/image/Dashboard/services/deleteicon.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// BACKEND IMPORTS - DISABLED FOR STATIC DASHBOARD
// import axios from "axios";
// import Api from "../../../constant/api";
// import { useEffect } from "react";

const STATIC_SERVICES = [
    { id: 1, name: "Custom Furniture Design", description: "Furniture designed to suit your space, style, and needs.", picture: "" },
    { id: 2, name: "Interior Furniture Solutions", description: "Coordinated furniture solutions for refined and functional interiors.", picture: "" },
    { id: 3, name: "Bespoke Furniture", description: "Made-to-measure pieces with carefully selected materials and finishes.", picture: "" },
];

export default function ServiceView() {
    const [services] = useState(STATIC_SERVICES);
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 2;
    const navigate = useNavigate();

    // BACKEND FETCH KEPT FOR REFERENCE:
    // const response = await axios.get(Api.GET.SERVICELIST);
    // setServices(response.data.reverse());

    // حساب عدد الصفحات
    const totalPages = Math.ceil(services.length / servicesPerPage);

    // استخراج الخدمات الحالية بناءً على الصفحة
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = services.slice(indexOfFirstService, indexOfLastService);

    // التنقل بين الصفحات
    const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

    // BACKEND DELETE KEPT FOR REFERENCE:
    // await axios.delete(`https://starofelegance.com/api/services/${id}/delete/`);

    return (
        <div className="md:flex gap-14">
            <SideBar />
            <div className="pl-14 md:pl-0">
                <p className="mb-10 text-black font-bold text-2xl mt-32 Poppins">Dashboard</p>
                <p className="font-semibold text-2xl mb-14 Poppins">Services</p>
                {currentServices.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-10 md:w-[1100px] justify-center items-center mb-20 container-services2">
                        <div className="flex bg-[#D9D9D9] rounded-lg child-services">
                            {service.picture ? <img className="w-[350px] h-[320px] object-cover" src={service.picture} alt={service.name} /> : <div className="w-[350px] h-[320px] bg-gray-200 flex items-center justify-center text-gray-500">Service image</div>}
                            <div className="pl-8">
                                <p className="font-normal text-3xl text-black kanit mb-12">{service.name}</p>
                                <p className="font-normal text-xl text-black nun mb-14">{service.description}</p>
                            </div>
                        </div>
                        <button type="button" disabled title="Static preview only" className="opacity-50 cursor-not-allowed bg-[#D9D9D9] flex justify-center items-center w-44 gap-3.5 h-14 rounded-lg">
                            <img src={deleteicon} className="w-8" alt="icon" />
                        </button>
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
