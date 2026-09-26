import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/sharedComponents/Title";
import { useParams } from "react-router-dom";

// ==================================================
// BACKEND IMPORTS - DISABLED FOR STATIC DATA
// ==================================================
// import axios from "axios";
// import Api from "../constant/api";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Loading from "./Loading";

// ==================================================
// STATIC PROJECTS
// Keep each project's gallery data in this page.
// ==================================================
const STATIC_PROJECTS = [
  { id: 1, name: "Custom Living Room", description: "A tailored living room with elegant furniture, warm finishes, and a layout designed around the client.", before_pictures: [], after_pictures: [] },
  { id: 2, name: "Restaurant Interior", description: "A welcoming restaurant interior combining durable materials, comfortable seating, and refined details.", before_pictures: [], after_pictures: [] },
  { id: 3, name: "Hotel Suite Furnishing", description: "A coordinated hotel suite with bespoke furnishings created for comfort and a polished guest experience.", before_pictures: [], after_pictures: [] },
];

const OurProject = () => {
  const { id } = useParams();
  const selectedProject = STATIC_PROJECTS.find((project) => project.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const imagesBefore = selectedProject?.before_pictures ?? [];
  const imagesAfter = selectedProject?.after_pictures ?? [];
  const imageCount = Math.max(imagesBefore.length, imagesAfter.length);

  const handlePrev = () => setActiveImage((current) => (current === 0 ? imageCount - 1 : current - 1));
  const handleNext = () => setActiveImage((current) => (current === imageCount - 1 ? 0 : current + 1));

  if (!selectedProject) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <p className="py-40 text-center text-2xl">Project not found.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <motion.div
        className="relative w-full pb-20 min-h-screen bg-gray-100 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="section-title text-center mb-10 relative z-10 px-4 mt-16 lg:mt-52"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title />
          <h2 className="text-4xl font-bold mb-2 text-[#B47F3E] font-Poppins">{selectedProject.name}</h2>
          <p className="text-lg mx-auto text-gray-700 w-[90%] md:w-[50%]">{selectedProject.description}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl px-4 gap-20 justify-between mx-auto relative">
          {imageCount > 1 && (
            <>
              <button onClick={handlePrev} aria-label="Previous project image" className="absolute left-0 lg:left-[-50px] top-1/2 z-10 p-3 rounded-full border-2 border-[#B47F3E] text-[#B47F3E]">
                <FaChevronLeft size={24} />
              </button>
              <button onClick={handleNext} aria-label="Next project image" className="absolute right-0 lg:right-[-50px] top-1/2 z-10 p-3 rounded-full border-2 border-[#B47F3E] text-[#B47F3E]">
                <FaChevronRight size={24} />
              </button>
            </>
          )}

          {[{ label: "Before", images: imagesBefore }, { label: "After", images: imagesAfter }].map(({ label, images }) => (
            <div key={label} className="slider-section w-full lg:w-1/2 relative text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#B47F3E] font-Poppins">{label}</h2>
              <motion.div
                className="relative mx-auto w-[45vh] h-[45vh] bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${images[activeImage] || images[0]})` }}
                key={`${label}-${activeImage}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              />
              <div className="flex justify-center mt-4 gap-2">
                {images.map((image, index) => (
                  <img
                    key={`${label}-${image}-${index}`}
                    src={image}
                    alt={`${label} view ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${activeImage === index ? "border-4 border-[#B47F3E]" : "opacity-60"}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

/*
BACKEND FETCH KEPT FOR REFERENCE:
const response = await axios.get(Api.GET.PROJECTSLIST);
const project = response.data.find((item) => item.id === Number(id));
setSelectedProject(project);
setImagesAfter(project.after_pictures);
setImagesBefore(project.before_pictures);
*/

export default OurProject;
