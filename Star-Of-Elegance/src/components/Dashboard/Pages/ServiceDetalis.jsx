import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ServiceDetalis() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null); // لتخزين الملف الأصلي
    const { id } = useParams(); 
    const navigate = useNavigate();
    

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file); // حفظ الملف الأصلي
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const uploadImage = async () => {
        if (!file) {
            alert("Please choose a picture first!");
            return;
        }

        const formData = new FormData();
        formData.append("image", file); // "picture" هو اسم الحقل المتوقع من API

        try {
            const response = await axios.post(
                `https://starofelegance.com/api/services/${id}/upload-picture/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert("Uploaded successfully");
            navigate('/dashboard/services/view')
        } catch (error) {
            alert("uploading image failed");
        }
    };

    return (
        <>
            <div className="md:flex gap-14">
                <SideBar />
                <div className="mt-11 pl-28 md:pl-0">
                    <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
                    <p className="font-semibold text-2xl Poppins">Services</p>
                    <div className="mt-14">
                        <p className="font-bold text-xl dm">Details</p>
                        <p className="text-[#5F6165] font-normal text-lg dm">Update The picture here.</p>
                        <img src={lineservices} className="mt-7 " alt="line" />
                    </div>

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
            </div>
        </>
    );
}
