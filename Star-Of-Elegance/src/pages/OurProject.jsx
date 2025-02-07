import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainTitle from "../components/sharedComponents/MainTitle";
const OurProjects = () => {
  const [activeImage, setActiveImage] = useState(0);

  const imagesBefore = [
    "https://unsplash.it/505/505?image=1",
    "https://unsplash.it/505/505?image=2",
    "https://unsplash.it/505/505?image=3",
    "https://unsplash.it/505/505?image=4",
    "https://unsplash.it/505/505?image=5",
  ];
  const imagesAfter = [
    "https://unsplash.it/505/505?image=6",
    "https://unsplash.it/505/505?image=7",
    "https://unsplash.it/505/505?image=8",
    "https://unsplash.it/505/505?image=9",
    "https://unsplash.it/505/505?image=10",
  ];

  const handlePrev = () => {
    setActiveImage((prev) => (prev === 0 ? imagesBefore.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImage((prev) => (prev === imagesBefore.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setActiveImage(index);
  };

  return (
    <div className=" justify-center items-center">
      <Navbar />
      <div className="relative w-full  min-h-screen bg-gray-100 overflow-hidden">
        {/* Title & Description */}
        <motion.div
          className="section-title text-center mb-10 relative z-10 px-4 mt-52"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-2">Our Projects</h2>
          <p className="text-lg mx-auto text-gray-700 w-[50%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            similique expedita veniam exercitationem maxime fuga odio ratione
            nulla mollitia error?
          </p>
        </motion.div>

        {/* Split Screen Section */}
        <div className="flex flex-col lg:flex-row   w-full max-w-6xl px-4 gap-2 justify-between mx-auto">
          {/* Before Section */}
          <div className="slider-section w-full  lg:w-1/2 relative">
            <div className="relative lg:w-[850px] lg:-ml-72">
              {/* Large Image with Animation */}
              <motion.div
                className="relative w-[100%]  lg:h-[600px] bg-cover rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${imagesBefore[activeImage]})` }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Thumbnails below */}
              <div className="flex justify-center mt-4 gap-2">
                {imagesBefore.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer transform transition-all duration-300 thumbnail ${
                      activeImage === index
                        ? "border-4 border-blue-500"
                        : "opacity-60"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* After Section */}
          <div className="slider-section w-full lg:w-1/2 relative">
            <div className="relative lg:w-[850px]">
              {/* Large Image with Animation */}
              <motion.div
                className="relative w-full h-80 lg:h-[600px] bg-cover rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${imagesAfter[activeImage]})` }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Thumbnails below */}
              <div className="flex justify-center mt-4 gap-2">
                {imagesAfter.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer transform transition-all duration-300 thumbnail ${
                      activeImage === index
                        ? "border-4 border-blue-500"
                        : "opacity-60"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              className="text-white bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
            >
              ←
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="text-white bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurProjects;
