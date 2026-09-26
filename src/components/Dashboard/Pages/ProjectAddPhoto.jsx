import { useParams } from "react-router-dom";
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";

// BACKEND IMPORTS - DISABLED FOR STATIC DASHBOARD
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const STATIC_PROJECTS = [
  { id: 1, name: "Custom Living Room", before_pictures: [], after_pictures: [] },
  { id: 2, name: "Restaurant Interior", before_pictures: [], after_pictures: [] },
  { id: 3, name: "Hotel Suite Furnishing", before_pictures: [], after_pictures: [] },
];

export default function ProjectAddPhoto() {
  const { id } = useParams();
  const project = STATIC_PROJECTS.find((item) => item.id === Number(id));

  /* BACKEND FETCH/UPLOAD KEPT FOR REFERENCE:
  useEffect(() => {
    axios.get("https://starofelegance.com/api/projects/").then((response) => {
      const project = response.data.find((item) => item.id === Number(id));
      if (project) {
        setExistingBeforeImages(project.before_pictures || []);
        setExistingAfterImages(project.after_pictures || []);
      }
    });
  }, [id]);

  const handleUpload = async () => {
    if (beforeFile) {
      const beforeFormData = new FormData();
      existingBeforeImages.forEach((image) => beforeFormData.append("before_pictures", image));
      beforeFormData.append("before_pictures", beforeFile);
      await axios.post(`https://starofelegance.com/api/projects/${id}/upload-before-pictures/`, beforeFormData,
        { headers: { "Content-Type": "multipart/form-data" } });
    }
    if (afterFile) {
      const afterFormData = new FormData();
      existingAfterImages.forEach((image) => afterFormData.append("after_pictures", image));
      afterFormData.append("after_pictures", afterFile);
      await axios.post(`https://starofelegance.com/api/projects/${id}/upload-after-pictures/`, afterFormData,
        { headers: { "Content-Type": "multipart/form-data" } });
    }
  };
  */

  const renderImageSlot = (label, images) => (
    <div className="text-center">
      <p className="font-bold text-lg mb-2">{label}</p>
      {images.map((image, index) => <img key={`${label}-${index}`} src={image} alt={`${label} project`} className="w-[350px] h-[350px] mb-4 object-cover" />)}
      <div className="border-dashed border-2 border-gray-300 p-16 flex items-center justify-center text-gray-500 opacity-60">{label} images are managed in static data</div>
      <button type="button" disabled title="Static preview only" className="mt-4 bg-gray-400 text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">Upload {label.toLowerCase()} photos</button>
    </div>
  );

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="mt-11 pl-28 md:pl-0">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Projects</p>
        <div className="mt-14">
          <p className="font-bold text-xl dm">{project?.name || "Project details"}</p>
          <p className="text-[#5F6165] font-normal text-lg dm">Static preview only. Add project images to the static data in this file.</p>
          <img src={lineservices} className="mt-7" alt="" />
        </div>
        <div className="mt-10 flex flex-col md:flex-row mr-10 gap-10">
          {renderImageSlot("Before", project?.before_pictures || [])}
          {renderImageSlot("After", project?.after_pictures || [])}
        </div>
      </div>
    </div>
  );
}
