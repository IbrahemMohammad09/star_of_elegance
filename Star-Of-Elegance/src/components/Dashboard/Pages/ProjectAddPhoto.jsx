import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function ProjectAddPhoto() {
  const { id } = useParams(); // استخراج ID المشروع من الـ URL
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [beforeFile, setBeforeFile] = useState(null);
  const [afterFile, setAfterFile] = useState(null);
  const [existingBeforeImages, setExistingBeforeImages] = useState([]);
  const [existingAfterImages, setExistingAfterImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://starofelegance.pythonanywhere.com/api/projects/")
      .then((response) => {
        const project = response.data.find((p) => p.id === Number(id));
        if (project) {
          setExistingBeforeImages(project.before_pictures || []);
          setExistingAfterImages(project.after_pictures || []);
        }
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, [id,existingBeforeImages,existingAfterImages]);

  const handleImageChange = (event, setImage, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // عرض الصورة في الواجهة
      setFile(file); // حفظ الصورة الأصلية لرفعها لاحقًا
    }
  };

  const handleUpload = async () => {
    try {
      if (beforeFile) {
        const beforeFormData = new FormData();
        existingBeforeImages.forEach((img) => beforeFormData.append("before_pictures", img));
        beforeFormData.append("before_pictures", beforeFile);

        await axios.post(
          `https://starofelegance.pythonanywhere.com/api/projects/${id}/upload-before-pictures/`,
          beforeFormData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      if (afterFile) {
        const afterFormData = new FormData();
        existingAfterImages.forEach((img) => afterFormData.append("after_pictures", img));
        afterFormData.append("after_pictures", afterFile);

        await axios.post(
          `https://starofelegance.pythonanywhere.com/api/projects/${id}/upload-after-pictures/`,
          afterFormData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      alert("Images uploaded successfully!");
      setAfterImage(null);
      setBeforeImage(null);
    } catch (error) {
      alert("An error occurred while uploading images.");
    }
  };


  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="mt-11 pl-28 md:pl-0 ">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Projects</p>
        <div className="mt-14">
          <p className="font-bold text-xl dm">Details</p>
          <p className="text-[#5F6165] font-normal text-lg dm">Update The picture here.</p>
          <img src={lineservices} className="mt-7" alt="line" />
        </div>
        <div className="mt-10 flex-row mr-10  md:flex gap-10">
          <div className="text-center">
            <p className="font-bold text-lg mb-2">Before</p>
            {existingBeforeImages.map((img, index) => (
              <img key={index} src={img} alt="Before" className="w-[350px] h-[350px] mb-4 object-cover" />
            ))}
            <label className="cursor-pointer border-dashed border-2 border-gray-300 p-16 flex items-center justify-center">
              {beforeImage ? (
                <img src={beforeImage} alt="Before" className="w-[350px] h-[350px] object-cover" />
              ) : (
                <span className="text-gray-500">Upload</span>
              )}
              <input type="file" className="hidden" onChange={(e) => handleImageChange(e, setBeforeImage, setBeforeFile)} />
            </label>
          </div>

          <div className="text-center">
            <p className="font-bold text-lg mb-2">After</p>
            {existingAfterImages.map((img, index) => (
              <img key={index} src={img} alt="After" className="w-[350px] h-[350px] mb-4 object-cover" />
            ))}
            <label className="cursor-pointer border-dashed border-2 border-gray-300 p-16 flex items-center justify-center">
              {afterImage ? (
                <img src={afterImage} alt="After" className="w-[350px] h-[350px] object-cover" />
              ) : (
                <span className="text-gray-500">Upload</span>
              )}
              <input type="file" className="hidden" onChange={(e) => handleImageChange(e, setAfterImage, setAfterFile)} />
            </label>
          </div>
        </div>
        <div className="mt-10 flex flex-row">
          <button onClick={handleUpload} className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E] rounded-2xl hover:bg-white hover:text-[#B47F3E] transition-all duration-200 hover:border-[#B47F3E] hover:border-2">
            upload photos
          </button>
          <button onClick={()=>navigate("/dashboard/project/view")} className="font-extrabold text-xl text-white mx-4 px-20 py-4 bg-[#B47F3E] rounded-2xl hover:bg-white hover:text-[#B47F3E] transition-all duration-200 hover:border-[#B47F3E] hover:border-2">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
