import { useState } from "react";
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg";
import SideBar from "../SharedComponents/SideBar";
import "../Dashboard.css";
import { Link } from "react-router-dom";

export default function ProjectAddPhoto() {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
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
          <p className="text-[#5F6165] font-normal text-lg dm">
            Update The picture here.
          </p>
          <img src={lineservices} className="mt-7" alt="line" />
        </div>
        <div className="mt-10 flex-row mr-10  md:flex gap-10">
          <div className="text-center">
            <p className="font-bold text-lg mb-2">Before</p>
            <label className="cursor-pointer border-dashed border-2 border-gray-300 p-16 flex items-center justify-center">
              {beforeImage ? (
                <img
                  src={beforeImage}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Upload</span>
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageChange(e, setBeforeImage)}
              />
            </label>
          </div>

          <div className="text-center">
            <p className="font-bold text-lg mb-2">After</p>
            <label className="cursor-pointer border-dashed border-2 border-gray-300 p-16 flex items-center justify-center">
              {afterImage ? (
                <img
                  src={afterImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Upload</span>
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageChange(e, setAfterImage)}
              />
            </label>
          </div>
        </div>
        <div className="mt-10">
          <Link className="font-extrabold text-xl text-white  px-20 py-4 bg-[#B47F3E] rounded-2xl hover:bg-white hover:text-[#B47F3E] transition-all duration-200 hover:border-[#B47F3E] hover:border-2">
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}
