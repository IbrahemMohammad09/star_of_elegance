import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/sharedComponents/Title"; 

import axios from "axios";
import Api from "../constant/api";
import { useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";
import Loading from "./Loading";


const OurProjects = () => {
  const [activeImage, setActiveImage] = useState(0);

  const [loading,setLoading]= useState(true)
  const [selectedProject, setSelectedProject] = useState([]);
  const [imagesBefore,setImagesBefore] = useState([]);
  const [imagesAfter,setImagesAfter] = useState([]);
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.PROJECTSLIST);
        const projects = response.data; 
        const project = projects.find((item) => item.id === Number(id)); 
        setSelectedProject(project);
        setImagesAfter(project.after_pictures);
        setImagesBefore(project.before_pictures);

      } catch (error) {
        navigate('./error')
      }finally{
        setLoading(false);
      }
    };

    fetchData();

  },[])

  useEffect(() => {
    console.log("تم تحديث selectedProject:", selectedProject);

  }, [selectedProject]);

  const handlePrev = () => {
    setActiveImage((prev) => (prev === 0 ? imagesBefore.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImage((prev) => (prev === imagesBefore.length - 1 ? 0 : prev + 1));
  };

  return (
      <div>
        {loading?(
          <Loading />
        ):(
          <div className="justify-center items-center">
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
                <h2 className="text-4xl font-bold mb-2 text-[#B47F3E]  font-Poppins">
                  {selectedProject.name}
                </h2>
                <p className="text-lg mx-auto text-gray-700 w-[90%] md:w-[50%]">
                  {selectedProject.description}
                </p>
              </motion.div>
      
              <div className="flex flex-col lg:flex-row w-full max-w-6xl px-4 gap-20 justify-between mx-auto relative mt-0">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-0 lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full border-2 border-[#B47F3E] text-[#B47F3E] bg-transparent hover:bg-[#B47F3E] hover:text-white transition duration-300"
                >
                  <FaChevronLeft size={24} />
                </button>
      
                {/* Before Section */}
                <div className="slider-section w-full lg:w-1/2 relative text-center">
                  <h2 className="text-2xl font-bold mb-4 text-[#B47F3E] font-Poppins">
                    Before
                  </h2>
                  <motion.div
                    className="relative mx-auto w-[45vh] h-[45vh] bg-cover rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    style={{ backgroundImage: `url(${imagesBefore[activeImage]})` }}
                    key={activeImage}
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    exit={{ opacity: 0, x: -500 }}
                  />
                  <div className="flex justify-center mt-4 gap-2">
                    {imagesBefore.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer transform transition-all duration-300 thumbnail ${
                          activeImage === index
                            ? "border-4 border-[#B47F3E]"
                            : "opacity-60"
                        }`}
                        onClick={() => setActiveImage(index)}
                        whileHover={{ scale: 1.1 }}
                      />
                    ))}
                  </div>
                </div>
      
                {/* After Section */}
                <div className="slider-section w-full lg:w-1/2 relative text-center">
                  <h2 className="text-2xl font-bold mb-4 text-[#B47F3E] font-Poppins">
                    After
                  </h2>
                  <motion.div
                    className="relative mx-auto w-[45vh] h-[45vh] bg-cover rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    style={{ backgroundImage: `url(${imagesAfter[activeImage]})` }}
                    key={activeImage}
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    exit={{ opacity: 0, x: 500 }}
                  />
                  <div className="flex justify-center mt-4 gap-2">
                    {imagesAfter.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer transform transition-all duration-300 thumbnail ${
                          activeImage === index
                            ? "border-4 border-[#B47F3E]"
                            : "opacity-60"
                        }`}
                        onClick={() => setActiveImage(index)}
                        whileHover={{ scale: 1.1 }}
                      />
                    ))}
                  </div>
                </div>
      
                <button
                  onClick={handleNext}
                  className="absolute right-0 lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full border-2 border-[#B47F3E] text-[#B47F3E] bg-transparent hover:bg-[#B47F3E] hover:text-white transition duration-300"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>
            </motion.div>
            <Footer />
          </div>
          )}
      </div>
  );
};

export default OurProjects;
