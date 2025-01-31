
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import "./Scroll.css";
import Navbar from "../components/Navbar";
import CurtainLeft from "../assets/image/HomePage/HeroSection/curtains-L.png";
import CurtainRight from "../assets/image/HomePage/HeroSection/curtains-R.png";
import Sofa from "../assets/image/HomePage/HeroSection/Sofa.png";
import Ch from "../assets/image/HomePage/HeroSection/c.png";
import Light from "../assets/image/HomePage/HeroSection/light.png";

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation completion after 5 seconds
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 5000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden shadow-lg shadow-gray-500/50">
      {/* Curtains Animation */}
      <motion.img
        src={CurtainLeft}
        alt="Left Curtain"
        initial={{ x: 0, width: "100%" }}
        animate={{ x: "-22%", width: "50%" }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 h-screen object-cover z-49"
      />
      <motion.img
        src={CurtainRight}
        alt="Right Curtain"
        initial={{ x: 0, width: "100%" }}
        animate={{ x: "22%", width: "50%" }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 h-screen object-cover z-49"
      />

      {/* Furniture Animation */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{
          delay: 3,
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="absolute top-44 left-56 transform -translate-x-1/2 flex items-center"
      >
        {/* Left Chair */}
        <motion.img
          src={Ch}
          alt="Left Chair"
          className={`absolute`}
          initial={{ width: "300px", top: "500px", marginLeft: "0px" }}
          animate={{
            width: animationComplete ? "18%" : "23%", // التغيير  عند التبديل
            top: animationComplete ? "47%" : "44%", // الموقع عند التبديل
            marginLeft: animationComplete ? "17%" : "0px", // المسافة اليسرى عند التبديل
          }}
          transition={{
            duration: 1, // مدة التأثير
            ease: "easeInOut", // تأثير الانتقال
          }}
        />
        {/* Sofa */}
        <motion.img
          src={Sofa}
          alt="Sofa"
          className={`z-20`}
          initial={{ width: "1096px", marginLeft: "190px" }}
          animate={{
            width: animationComplete ? "800px" : "1096px",

            marginLeft: animationComplete ? "320px" : "190px",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
        {/* Right Chair */}
        <motion.img
          src={Ch}
          alt="Right Chair"
          className={`absolute`}
          initial={{ width: "300px", top: "500px", marginRight: "0px" }}
          animate={{
            width: animationComplete ? "18%" : "23%",
            top: animationComplete ? "46%" : "44%",
            marginLeft: animationComplete ? "94%" : "92%",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Left Light */}
      <motion.img
        src={Light}
        alt="Left Light"
        initial={{ y: "-100%", opacity: 0, width: "280px", top: "208px" }} // البداية كما هي
        animate={{
          y: 0, // لا تغيير في y
          opacity: 1, // لا تغيير في opacity
          width: animationComplete ? "13%" : "15%", // تغيير الـ width فقط بعد تفعيل animationComplete
          top: animationComplete ? "25%" : "20%", // تغيير الـ top فقط بعد تفعيل animationComplete
        }}
        transition={{
          delay: 4,
          duration: 1,
          type: "spring",
          stiffness: 90,
          damping: 10,
        }}
        className="absolute left-1/4"
      />

      {/* Right Light */}
      <motion.img
        src={Light}
        alt="Right Light"
        initial={{ y: "-100%", opacity: 0, width: "280px", top: "25%" }} // البداية كما هي
        animate={{
          y: 0, // لا تغيير في y
          opacity: 1, // لا تغيير في opacity
          width: animationComplete ? "13%" : "15%", // تغيير الـ width فقط بعد تفعيل animationComplete
          top: animationComplete ? "25%" : "20%", // تغيير الـ top فقط بعد تفعيل animationComplete
        }}
        transition={{
          delay: 4,
          duration: 1,
          type: "spring",
          stiffness: 90,
          damping: 10,
        }}
        className="absolute right-1/4 "
      />

      {/* Final Reveal Animation (Navbar, Text, and Scroll Indicator) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // تغيير من الأعلى
        animate={{
          opacity: animationComplete ? 1 : 0,
          y: animationComplete ? 0 : -50, // الوصول إلى مكانه الطبيعي
        }}
        transition={{
          delay: 0.4, // تأخير  مع حركة العناصر الأخرى
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="absolute top-0 w-full"
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }} // تغيير من الأعلى
        animate={{
          opacity: animationComplete ? 1 : 0,
          y: animationComplete ? 0 : -50,
        }}
        transition={{
          delay: 0.4, // تأخير  مع حركة العناصر الأخرى
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="absolute top-48 left-1/3 ml-10 transform -translate-x-1/2 text-center"
      >
        {/* Title */}
        <h1 className="text-7xl font-bold text-gray-800">Star of Elegance</h1>

        {/* Animated Line with Circle */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 mx-auto relative"
        >
          <div className="h-1 bg-gray-800"></div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -right-3 top-[-4px] w-3 h-3 bg-gray-800 rounded-full "
          ></motion.div>
        </motion.div>

        {/* Icons */}
        <div className="flex justify-center space-x-4 mt-14">
          <div className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
            <FaFacebook className="text-2xl" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
            <FaTwitter className="text-2xl" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
            <FaInstagram className="text-2xl" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // البداية من أسفل الشاشة
        animate={{
          opacity: animationComplete ? 1 : 0,
          y: animationComplete ? 0 : 50, // الوصول إلى مكانه الطبيعي
        }}
        transition={{
          delay: 0.4, // تأخير  مع حركة العناصر الأخرى
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="absolute bottom-[3%] left-[48.5%] transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="circle-container  flex items-center justify-center border-2 rounded-full p-4 text-[#8B5715] hover:bg-[#8B5715] hover:text-white transition-all duration-300 relative group">
          <div className="circle-text group-hover:animate-spin">
            <span className="letter">S</span>
            <span className="letter">C</span>
            <span className="letter">R</span>
            <span className="letter">O</span>
            <span className="letter">L</span>
            <span className="letter">L</span>

            <span className="letter">D</span>
            <span className="letter">O</span>
            <span className="letter">W</span>
            <span className="letter">N</span>

            <span className="letter">F</span>
            <span className="letter">O</span>
            <span className="letter">R</span>

            <span className="letter">W</span>
            <span className="letter">O</span>
            <span className="letter">R</span>
            <span className="letter">K</span>

            <span className="letter">T</span>
            <span className="letter">O</span>
            <span className="letter">G</span>
            <span className="letter">E</span>
            <span className="letter">T</span>
            <span className="letter">H</span>
            <span className="letter">E</span>
          </div>
          {/* السهم في المنتصف */}
          <FaChevronDown className="text-3xl text-[#8B5715] group-hover:text-white transition-all duration-300 mt-4 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

