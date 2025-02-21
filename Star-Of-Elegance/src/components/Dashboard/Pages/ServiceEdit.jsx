import SideBar from "../SharedComponents/SideBar";
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../../constant/api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../pages/Loading";

export default function ServiceEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  // تحميل بيانات الخدمة بناءً على ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.SERVICELIST);
        const serviceId = Number(id);
        const foundService = response.data.find(service => service.id === serviceId);
        
        if (foundService) {
          setSelectedService(foundService);
          setName(foundService.name);
          setDescription(foundService.description);
        }
      } catch (error) {
      }
    };

    fetchData();
  }, [id]);

  // تحديث الخدمة
  const saveEdit = async () => {
    try {
      await axios.put(`https://starofelegance.com/api/services/${id}/update/`, {
        name: name,
        description: description,
      }, {
        headers: { "Content-Type": "application/json" }
      });

      alert("Service updated successfully!");
      window.location.reload(); // تحديث الصفحة بعد الحفظ
    } catch (error) {
      alert("Failed to save changes!");
    }
  };

  // تحميل الصورة
  const uploadImage = async () => {
    if (!file) {
      alert("Please choose a picture first!");
      return;
    }

    const formData = new FormData();
    formData.append("picture", file);

    try {
      await axios.post(
        `https://starofelegance.com/api/services/${id}/upload-picture/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Image uploaded successfully!");
      window.location.reload();
    } catch (error) {
      alert("Failed to load image!");
    }
  };

  // عند اختيار صورة جديدة
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  if (!selectedService) {
    return <Loading />;
  }

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="pl-28 md:pl-0">
        <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
        <p className="font-semibold text-2xl Poppins">Services</p>
        <div className="my-14">
          <p className="font-bold text-xl dm">Details</p>
          <p className="text-[#5F6165] font-normal text-lg dm">Update The service here.</p>
          <img src={lineservices} className="mt-7" alt="line" />
        </div>
        <div>
          <div className="flex flex-col mb-7 mr-4">
            <label className="font-extrabold text-xl text-black dm">Name Of Service</label>
            <textarea 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              placeholder="Custom Furniture Manufacturing" 
              className="h-28 mr-3 w-full pl-3 py-7 border border-[#E9EAEC] rounded-lg dm">
            </textarea>
          </div>
          <div className="flex flex-col mb-7 mr-4">
            <label className="font-extrabold text-xl text-black dm">Description</label>
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              value={description}  
              placeholder="We create unique, high-quality furniture" 
              className="h-28 w-full pl-3 py-9 border border-[#E9EAEC] rounded-lg dm">
            </textarea>
          </div>
          <button 
            onClick={saveEdit} 
            className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E] rounded-2xl Abhaya hover:bg-white hover:text-[#B47F3E] hover:border-[#B47F3E] hover:border-2"
          >
            Save Edit
          </button>

          {selectedService?.picture && (
            <div className="flex mt-4 flex-col md:flex-row gap-4">
              <img className="h-[350px] w-[350px] mb-10" src={selectedService.picture} alt="Service" />

              <div className="text-center w-[250px]">
                <label className="cursor-pointer border-dashed border-2 border-gray-300 p-16 flex items-center justify-center">
                  {image ? (
                    <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500">Upload</span>
                  )}
                  <input type="file" className="hidden" onChange={handleImageChange} />
                </label>
                {file && (
                  <button 
                    onClick={uploadImage} 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Upload picture
                  </button>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
