import SideBar from "../SharedComponents/SideBar";
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import { useParams } from "react-router-dom";

// BACKEND IMPORTS - DISABLED FOR STATIC DASHBOARD
// import axios from "axios";
// import Api from "../../../constant/api";
// import { useEffect, useState } from "react";

const STATIC_SERVICES = [
  { id: 1, name: "Custom Furniture Design", description: "Furniture designed to suit your space, style, and needs.", picture: "" },
  { id: 2, name: "Interior Furniture Solutions", description: "Coordinated furniture solutions for refined and functional interiors.", picture: "" },
  { id: 3, name: "Bespoke Furniture", description: "Made-to-measure pieces with carefully selected materials and finishes.", picture: "" },
];

export default function ServiceEdit() {
  const { id } = useParams();
  const selectedService = STATIC_SERVICES.find((service) => service.id === Number(id));

  /* BACKEND FETCH/UPDATE/IMAGE UPLOAD KEPT FOR REFERENCE:
  const response = await axios.get(Api.GET.SERVICELIST);
  const service = response.data.find((item) => item.id === Number(id));
  await axios.put(`https://starofelegance.com/api/services/${id}/update/`, {
    name,
    description,
  }, { headers: { "Content-Type": "application/json" } });

  const formData = new FormData();
  formData.append("picture", file);
  await axios.post(`https://starofelegance.com/api/services/${id}/upload-picture/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  */

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="pl-28 md:pl-0">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Services</p>
        <div className="my-14">
          <p className="font-bold text-xl dm">Details</p>
          <p className="text-[#5F6165] font-normal text-lg dm">Static preview only. Editing is disabled.</p>
          <img src={lineservices} className="mt-7" alt="" />
        </div>
        <div className="flex flex-col mb-7 mr-4">
          <label className="font-extrabold text-xl text-black dm">Name Of Service</label>
          <textarea readOnly value={selectedService?.name || ""} placeholder="Service name" className="h-28 mr-3 w-full pl-3 py-7 border border-[#E9EAEC] rounded-lg dm" />
        </div>
        <div className="flex flex-col mb-7 mr-4">
          <label className="font-extrabold text-xl text-black dm">Description</label>
          <textarea readOnly value={selectedService?.description || ""} placeholder="Service description" className="h-28 w-full pl-3 py-9 border border-[#E9EAEC] rounded-lg dm" />
        </div>
        <button type="button" disabled title="Static preview only" className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E] rounded-2xl opacity-50 cursor-not-allowed">Save Edit</button>
        <div className="flex mt-4 flex-col md:flex-row gap-4">
          {selectedService?.picture ? <img className="h-[350px] w-[350px] mb-10 object-cover" src={selectedService.picture} alt={selectedService.name} /> : <div className="h-[350px] w-[350px] mb-10 bg-gray-200 flex items-center justify-center text-gray-500">Service image</div>}
          <button type="button" disabled title="Static preview only" className="text-center w-[250px] h-40 border-dashed border-2 border-gray-300 text-gray-500 opacity-50 cursor-not-allowed">Upload image</button>
        </div>
      </div>
    </div>
  );
}
