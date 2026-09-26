import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";
import { useParams } from "react-router-dom";

// BACKEND IMPORTS - DISABLED FOR STATIC DASHBOARD
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function ServiceDetalis() {
  const { id } = useParams();

  // BACKEND IMAGE UPLOAD KEPT FOR REFERENCE:
  // const formData = new FormData();
  // formData.append("image", file);
  // await axios.post(`https://starofelegance.com/api/services/${id}/upload-picture/`, formData);

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="mt-11 pl-28 md:pl-0">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Services</p>
        <div className="mt-14">
          <p className="font-bold text-xl dm">Details</p>
          <p className="text-[#5F6165] font-normal text-lg dm">Static preview only. Image upload is disabled.</p>
          <img src={lineservices} className="mt-7" alt="" />
        </div>
        <div className="text-center w-[250px] mt-8">
          <div className="border-dashed border-2 border-gray-300 p-16 flex items-center justify-center text-gray-500">Service image {id}</div>
          <button type="button" disabled title="Static preview only" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">Upload picture</button>
        </div>
      </div>
    </div>
  );
}
