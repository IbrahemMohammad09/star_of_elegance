import SideBar from "../SharedComponents/SideBar";
import lineservices from "../../../assets/image/Dashboard/services/lineservices.svg";

// BACKEND IMPORTS - DISABLED FOR STATIC DASHBOARD
// import axios from "axios";
// import Api from "../../../constant/api";
// import { useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  // BACKEND CREATE KEPT FOR REFERENCE:
  // const response = await axios.post(Api.POST.CREATEPROJECT, { name, description });
  // navigate("/dashboard/project/add/photo/" + response.data.id);

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="pl-28 md:pl-0">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Projects</p>
        <div className="my-14">
          <p className="font-bold text-xl dm">Details</p>
          <p className="text-[#5F6165] font-normal text-lg dm">Static preview only. Project editing is disabled.</p>
          <img src={lineservices} className="mt-7" alt="" />
        </div>
        <form>
          <div className="flex flex-col mb-7 mr-4">
            <label className="font-extrabold text-xl text-black dm">Name Of Project</label>
            <textarea readOnly placeholder="Custom Living Room" className="h-28 mr-3 w-full pl-3 py-7 border border-[#E9EAEC] rounded-lg dm" />
          </div>
          <div className="flex flex-col mb-24 mr-4">
            <label className="font-extrabold text-xl text-black dm">Description</label>
            <textarea readOnly placeholder="A tailored living room with elegant furniture and warm finishes." className="h-28 w-full pl-3 py-9 border border-[#E9EAEC] rounded-lg dm" />
          </div>
          <button type="button" disabled title="Static preview only" className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E] rounded-2xl opacity-50 cursor-not-allowed">Next</button>
        </form>
      </div>
    </div>
  );
}
