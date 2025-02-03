import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Logo from "../assets/image/logo.png";
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
  // الحالة لتخزين حجم الشاشة
  const [screenSize, setScreenSize] = useState(() => {
    const width = window.innerWidth;
    return width < 768
      ? "small"
      : width < 1024
      ? "medium"
      : width < 1280
      ? "large"
      : width < 1536
      ? "xl"
      : "2xl";
  });

  // مراقبة تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize("small");
      } else if (width < 1024) {
        setScreenSize("medium");
      } else if (width < 1280) {
        setScreenSize("large");
      } else if (width < 1536) {
        setScreenSize("xl");
      } else {
        setScreenSize("2xl");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // للتحقق من الحجم الحالي عند تحميل الصفحة

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Trigger animation completion after 5 seconds
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 5000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen lg:w-full">
      <div className="lg:relative h-screen bg-gray-100 overflow-hidden shadow-lg shadow-gray-500/50">
        {/* Curtains Animation */}
        <motion.img
          src={CurtainLeft}
          alt="Left Curtain"
          initial={{ x: 0, width: "100%" }}
          animate={{
            x: "-22%",
            width: "50%",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute w-full top-0 left-0 h-screen object-cover z-40"
        />
        <motion.img
          src={CurtainRight}
          alt="Right Curtain"
          initial={{ x: 0, width: "100%" }}
          animate={{
            x: "22%",
            width: "50%",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute w-full top-0 right-0 h-screen object-cover z-40"
        />

        {/* Apply animation for all screens */}
        <div className="flex items-center justify-center">
          {screenSize === "small" ? (
            // إذا كانت الشاشة صغيرة، عرض العناصر بدون Motion
            <div className=" flex justify-center items-center mt-[250px] mr-[15px] sm:mt-[300px] sm:mr-[-100px]  w-[80%]">
              {/* Left Chair */}
              <img
                src={Ch}
                alt="Left Chair"
                className="   mt-[34%]"
                style={{ width: "10%", top: "55%", marginRight: "-10%" }}
              />
              {/* Sofa */}
              <img
                src={Sofa}
                alt="Sofa"
                className=" w-[100%] h-[50%] sm:w-[80%] sm:h-[20%]"
              />
              {/* Right Chair */}
              <img
                src={Ch}
                alt="Right Chair"
                className="  mt-[34%] "
                style={{ width: "10%", top: "55%", marginLeft: "-10%" }}
              />

              {/* Left Light */}
              <div className="mx-auto">
                <img
                  src={Light}
                  alt="Left Light"
                  className="absolute left-[18%] "
                  style={{ width: "15%", top: "38%" }}
                />
                {/* Right Light */}
                <img
                  src={Light}
                  alt="Right Light"
                  className="absolute right-[18%] "
                  style={{ width: "15%", top: "38%" }}
                />
              </div>
            </div>
          ) : (
            // إذا كانت الشاشة كبيرة، عرض العناصر مع Motion
            <motion.div className="flex justify-center items-center">
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
                className="absolute  left-[-240px] top-[200px] lg:top-44 lg:left-52 xl:left-56 transform -translate-x-1/2  "
              >
                {/* Left Chair */}
                <motion.img
                  src={Ch}
                  alt="Left Chair"
                  className="absolute"
                  initial={{ width: "300px", top: "500px", marginLeft: "0px" }}
                  animate={
                    screenSize === "medium"
                      ? {
                          width: animationComplete ? "15vh" : "12%",
                          marginLeft: animationComplete ? "38%" : "30%",
                          top: animationComplete ? "50%" : "55%",
                        }
                      : screenSize === "large"
                      ? {
                          width: animationComplete ? "25%" : "23%",
                          marginLeft: animationComplete ? "90%" : "87%",
                          top: animationComplete ? "47%" : "50%",
                        }
                      : screenSize === "xl"
                      ? {
                          width: animationComplete ? "18%" : "20%",
                          marginLeft: animationComplete ? "94%" : "92%",
                          top: animationComplete ? "46%" : "44%",
                        }
                      : screenSize === "2xl"
                      ? {
                          width: animationComplete ? "18%" : "23%",
                          marginLeft: animationComplete ? "95%" : "93%",
                          top: animationComplete ? "47%" : "45%",
                        }
                      : {
                          // هذا سيشمل "large" أو أي قيمة أخرى لم يتم تعريفها
                          width: animationComplete ? "18%" : "23%",
                          marginLeft: animationComplete ? "95%" : "93%",
                          top: animationComplete ? "47%" : "45%",
                        }
                  }
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
                {/* Sofa */}
                <motion.img
                  src={Sofa}
                  alt="Sofa"
                  className="z-20"
                  animate={
                    screenSize === "medium"
                      ? {
                          width: animationComplete ? "55vh" : "600px",
                          height: animationComplete ? "500px" : "1096px",
                          marginLeft: animationComplete ? "50vh" : "325px",
                          top: "0px",
                        }
                      : screenSize === "large"
                      ? {
                          width: animationComplete ? "600px" : "700px",
                          marginLeft: animationComplete ? "-10px" : "-40px",
                          top: "500px",
                        }
                      : screenSize === "xl"
                      ? {
                          width: animationComplete ? "800px" : "1096px",
                          marginLeft: animationComplete ? "320px" : "190px",
                          top: "500px",
                        }
                      : screenSize === "2xl"
                      ? {
                          width: animationComplete ? "800px" : "1096px",

                          marginLeft: animationComplete ? "320px" : "190px",
                          top: "500px",
                        }
                      : {
                          width: "",
                          marginLeft: "",
                          top: "",
                        }
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                {/* Right Chair */}
                <motion.img
                  src={Ch}
                  alt="Right Chair"
                  className="absolute"
                  initial={{ width: "300px", top: "500px", marginRight: "0px" }}
                  animate={
                    screenSize === "medium"
                      ? {
                          width: animationComplete ? "14%" : "12%",
                          marginLeft: animationComplete ? "95%" : "93%",
                          top: animationComplete ? "48%" : "55%",
                        }
                      : screenSize === "large"
                      ? {
                          width: animationComplete ? "25%" : "23%",
                          marginLeft: animationComplete ? "-18%" : "-22%",
                          top: animationComplete ? "47%" : "50%",
                        }
                      : screenSize === "xl"
                      ? {
                          width: animationComplete ? "18%" : "20%",
                          marginLeft: animationComplete ? "94%" : "92%",
                          top: animationComplete ? "46%" : "44%",
                        }
                      : screenSize === "2xl"
                      ? {
                          width: animationComplete ? "18%" : "23%",
                          marginLeft: animationComplete ? "16%" : "0%",
                          top: animationComplete ? "48%" : "44%",
                        }
                      : {
                          // هذا سيشمل "large" أو أي قيمة أخرى لم يتم تعريفها
                          width: animationComplete ? "18%" : "23%",
                          marginLeft: animationComplete ? "95%" : "93%",
                          top: animationComplete ? "47%" : "45%",
                        }
                  }
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              {/* Left Light */}
              <motion.div className="">
                <motion.img
                  src={Light}
                  alt="Left Light"
                  initial={{
                    y: "-100%",
                    opacity: 0,
                    width: "280px",
                    top: "208px",
                  }} // البداية كما هي
                  animate={
                    screenSize === "medium"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "120px" : "120px",
                          top: animationComplete ? "170px" : "20%",
                        }
                      : screenSize === "large"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "160px" : "160px",
                          top: animationComplete ? "250px" : "20%",
                        }
                      : screenSize === "xl"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "800px" : "1096px",

                          top: animationComplete ? "170px" : "20%",
                        }
                      : screenSize === "2xl"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "13%" : "15%",
                          top: animationComplete ? "25%" : "20%",
                        }
                      : {
                          width: "",
                          marginLeft: "",
                          top: "",
                        }
                  }
                  transition={{
                    delay: 4,
                    duration: 1,
                    type: "spring",
                    stiffness: 90,
                    damping: 10,
                  }}
                  className="absolute lg:left-[230px] xl:left-1/4 lg:w-[13%]  lg:top-[25%] lg:mt-0 mt-[100px] left-[150px]"
                />

                {/* Right Light */}
                <motion.img
                  src={Light}
                  alt="Right Light"
                  initial={{
                    y: "-100%",
                    opacity: 0,
                    width: "280px",
                    top: "25%",
                  }} // البداية كما هي
                  animate={
                    screenSize === "medium"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "120px" : "120px",
                          top: animationComplete ? "170px" : "20%",
                        }
                      : screenSize === "large"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "160px" : "160px",
                          top: animationComplete ? "250px" : "20%",
                        }
                      : screenSize === "xl"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "800px" : "1096px",

                          top: animationComplete ? "170px" : "20%",
                        }
                      : screenSize === "2xl"
                      ? {
                          y: 0, // لا تغيير في y
                          opacity: 1, // لا تغيير في opacity
                          width: animationComplete ? "13%" : "15%",
                          top: animationComplete ? "25%" : "20%",
                        }
                      : {
                          width: "",
                          marginLeft: "",
                          top: "",
                        }
                  }
                  transition={{
                    delay: 4,
                    duration: 1,
                    type: "spring",
                    stiffness: 90,
                    damping: 10,
                  }}
                  className="absolute lg:top-[25%] right-[19%] lg:mt-0 mt-[100px] lg:right-1/4 "
                />
              </motion.div>
            </motion.div>
          )}
        </div>
        {/* Final Reveal Animation (Navbar, Text, and Scroll Indicator) */}
        {screenSize === "small" ? (
          <>
            {/* Navbar بدون Motion */}
            <div className="absolute z-50 top-0 w-full">
              <Navbar />
            </div>

            {/* Title & Icons بدون Motion */}
            <div className="flex items-center justify-center ">
              <div className="absolute top-[192px] ml-[165px]  transform -translate-x-1/2 text-center">
                {/* صورة قبل النص */}
                <div className="flex items-center justify-center ">
                  <div className="absolute w-[100%] top-[-50px] left-1/2 transform -translate-x-1/2">
                    <img
                      src={Logo}
                      alt="Logo"
                      className=" w-36 h-32 mx-auto -mt-20  "
                    />
                  </div>

                  <h1 className="text-5xl text-gray-800">
                    Star of <br /> Elegance
                  </h1>
                </div>
                {/* Icons */}
                <div className="flex justify-center space-x-4 mt-4">
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                    <FaFacebook className="text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                    <FaTwitter className="text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                    <FaInstagram className="text-sm" />
                  </div>
                </div>

                {/* Line with Circle */}
                <div className="mt-2 ml-8 mx-auto relative">
                  <div className="h-1 bg-gray-800 w-[120px]"></div>
                  <div className="absolute right-6 top-[-4px] w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Scroll Indicator بدون Motion */}
              <div className=" -mt-[100px] mr-[20px] ">
                <Link to="Services" smooth={true} duration={1500} offset={0}>
                  <div className="circle-container flex items-center justify-center border-2 rounded-full hover:cursor-pointer p-4 text-[#8B5715] hover:bg-[#8B5715] hover:text-white transition-all duration-300 relative group">
                    <div className="circle-text">
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
                    <FaChevronDown className="text-3xl text-[#8B5715] group-hover:text-white transition-all duration-300 mt-4 animate-bounce" />
                  </div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Navbar مع Motion */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: animationComplete ? 1 : 0,
                y: animationComplete ? 0 : -50,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="absolute top-0 w-full md:z-50"
            >
              <Navbar />
            </motion.div>

            {/* Title & Icons مع Motion */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: animationComplete ? 1 : 0,
                y: animationComplete ? 0 : -50,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="absolute top-48 lg:left-[275px] xl:left-1/3 md:ml-[200px] lg:ml-10  transform -translate-x-1/2 text-center"
            >
              <h1 className="text-2xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-gray-800">
                Star of Elegance
              </h1>

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
                  className="absolute -right-3 top-[-4px] w-3 h-3 bg-gray-800 rounded-full"
                ></motion.div>
              </motion.div>

              {/* Icons */}
              <div className="flex justify-center space-x-4 lg:mt-14 mt-4">
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

            {/* Scroll Indicator مع Motion */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: animationComplete ? 1 : 0,
                y: animationComplete ? 0 : 50,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="absolute bottom-[12%] left-[40%] xl:bottom-[3%] lg:bottom-[4%] lg:left-[40%] xl:left-[45%] transform -translate-x-1/2 flex flex-col items-center"
            >
              <Link to="Services" smooth={true} duration={1500} offset={0}>
                <div className="circle-container flex items-center justify-center border-2 rounded-full hover:cursor-pointer p-4 text-[#8B5715] hover:bg-[#8B5715] hover:text-white transition-all duration-300 relative group">
                  <div className="circle-text">
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
                  <FaChevronDown className="text-3xl text-[#8B5715] group-hover:text-white transition-all duration-300 mt-4 animate-bounce" />
                </div>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
