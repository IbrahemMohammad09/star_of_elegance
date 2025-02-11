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
import "./../pages/Responsive.css";
const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  // الحالة لتخزين حجم الشاشة
  const [screenSize, setScreenSize] = useState(() => {
    const width = window.innerWidth;
    return width <= 768
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

      if (width <= 768) {
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
    handleResize();

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
      <div className="relative xl:h-screen responsiveHigh  bg-gray-100 overflow-hidden shadow-lg shadow-gray-500/50">
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
          className="absolute h-full w-full xl:h-screen top-0 left-0  object-cover z-40"
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
          className="absolute h-full w-full top-0 right-0 xl:h-screen object-cover z-40"
        />

        {/* Apply animation for all screens */}
        <div className="flex items-center justify-center">
          {screenSize === "small" ? (
            // إذا كانت الشاشة صغيرة، عرض العناصر بدون Motion
            <div className=" flex justify-center items-center w-[70%]   mt-[350px] mr-[15px] sm:w-[80%] sm:mt-[300px] sm:mr-[10px] ">
              {/* Left Chair */}
              <img
                src={Ch}
                alt="Left Chair"
                className=" mt-[75px] mr-[-20px] w-[60px] sm:mr-[-30px] sm:w-[100px]  sm:mt-[100px]"
              />
              {/* Sofa */}
              <img
                src={Sofa}
                alt="Sofa"
                className=" w-[100%] ml-[-10px] h-[50%] sm:w-[80%] sm:h-[20%]"
              />
              {/* Right Chair */}
              <img
                src={Ch}
                alt="Right Chair"
                className="w-[60px] ml-[-30px] mt-[75px] sm:w-[100px] sm:ml-[-40px] sm:mt-[100px] "
              />

              {/* Left Light */}
              <div className="mx-auto">
                <img
                  src={Light}
                  alt="Left Light"
                  className="absolute left-[18%] "
                  style={{ width: "15%", top: "370px" }}
                />
                {/* Right Light */}
                <img
                  src={Light}
                  alt="Right Light"
                  className="absolute right-[18%] "
                  style={{ width: "15%", top: "370px" }}
                />
              </div>
            </div>
          ) : (
            <motion.div className="">
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
                className=" md:flex md:mt-[70%] md:ml-[-320px] lg:mt-[220px] lg:ml-[50px] 2xl:ml-[-200px] 2xl:mt-[140px] xl:ml-[200px] transform -translate-x-1/2  "
              >
                {/* Left Chair */}
                <motion.img
                  src={Ch}
                  alt="Left Chair"
                  className="absolute w-[300px] top-[500px] "
                  animate={
                    screenSize === "small"
                      ? {
                          width: animationComplete ? "10vh" : "10vh",
                          marginLeft: animationComplete ? "280px" : "280px",
                          top: animationComplete ? "48%" : "48%",
                        }
                      : screenSize === "medium"
                      ? {
                          width: animationComplete ? "10vh" : "10vh",
                          marginLeft: animationComplete ? "260px" : "260px",
                          top: animationComplete ? "48%" : "48%",
                        }
                      : screenSize === "large"
                      ? {
                          width: animationComplete ? "25%" : "23%",
                          marginLeft: animationComplete ? "88%" : "85%",
                          top: animationComplete ? "47%" : "50%",
                        }
                      : screenSize === "xl"
                      ? {
                          width: animationComplete ? "180px" : "180px",
                          marginLeft: animationComplete ? "-210px" : "-240px",
                          top: animationComplete ? "340px" : "380px",
                        }
                      : screenSize === "2xl"
                      ? {
                          width: animationComplete ? "20%" : "23%",
                          marginLeft: animationComplete ? "95%" : "93%",
                          top: animationComplete ? "47%" : "45%",
                        }
                      : {
                          width: "",
                          marginLeft: "",
                          top: "",
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
                    screenSize === "small"
                      ? {
                          width: "40vh",
                          height: "50%",
                          marginLeft: "350px",
                          top: "0px",
                        }
                      : screenSize === "medium"
                      ? {
                          width: "40vh",
                          height: "50%",
                          marginLeft: "350px",
                          top: "0px",
                        }
                      : screenSize === "large"
                      ? {
                          width: animationComplete ? "550px" : "650px",
                          marginLeft: animationComplete ? "-20px" : "-40px",
                          top: "500px",
                        }
                      : screenSize === "xl"
                      ? {
                          width: animationComplete ? "800px" : "900px",
                          marginLeft: animationComplete ? "-100px" : "-100px",
                          top: "500px",
                        }
                      : screenSize === "2xl"
                      ? {
                          width: animationComplete ? "850px" : "1100px",
                          marginLeft: animationComplete ? "200px" : "200px",
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
                  className="absolute w-[300px] top-[500px]"
                  animate={
                    screenSize === "small"
                      ? {
                          width: "10vh",
                          marginLeft: "95%",
                          top: "47%",
                        }
                      : screenSize === "medium"
                      ? {
                          width: "10vh",
                          marginLeft: "96%",
                          top: "47%",
                        }
                      : screenSize === "large"
                      ? {
                          width: animationComplete ? "25%" : "23%",
                          marginLeft: animationComplete ? "-20%" : "-20%",
                          top: animationComplete ? "47%" : "50%",
                        }
                      : screenSize === "xl"
                      ? {
                          width: animationComplete ? "180px" : "180px",
                          marginLeft: animationComplete ? "540px" : "650px",
                          top: animationComplete ? "340px" : "380px",
                        }
                      : screenSize === "2xl"
                      ? {
                          width: animationComplete ? "20%" : "23%",
                          marginLeft: animationComplete ? "6%" : "0%",
                          top: animationComplete ? "49%" : "44%",
                        }
                      : {
                          width: "",
                          marginLeft: "",
                          top: "",
                        }
                  }
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              {/* Left Light */}
              <motion.div className="mx-auto">
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
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "120px" : "120px",
                          top: animationComplete ? "120px" : "10%",
                        }
                      : screenSize === "large"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "160px" : "160px",
                          top: animationComplete ? "250px" : "20%",
                        }
                      : screenSize === "xl"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "250px" : "250px",
                          top: animationComplete ? "250px" : "250px",
                        }
                      : screenSize === "2xl"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "220px" : "250px",
                          marginLeft: animationComplete ? "0px" : "-50px",
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
                  className="absolute left-[150px] mt-[100px] md:block md:ml-[3%] lg:ml-[0] xl:ml-[0] 2xl:ml-[0] lg:w-[13%] md:mt-[250px] lg:top-[25%] lg:mt-0 lg:left-[230px] xl:left-[18%] xl:mt-[-50px]  2xl:left-[28%] 2xl:mt-[2%]"
                />

                {/* Right Light */}
                <motion.img
                  src={Light}
                  alt="Right Light"
                  initial={{
                    y: "-100%",
                    opacity: 0,
                    width: "280px",
                    top: "208px",
                  }}
                  animate={
                    screenSize === "medium"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "120px" : "120px",
                          top: animationComplete ? "120px" : "10%",
                        }
                      : screenSize === "large"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "160px" : "160px",
                          top: animationComplete ? "250px" : "20%",
                        }
                      : screenSize === "xl"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "250px" : "250px",
                          top: animationComplete ? "250px" : "250px",
                        }
                      : screenSize === "2xl"
                      ? {
                          y: 0,
                          opacity: 1,
                          width: animationComplete ? "220px" : "250px",
                          marginLeft: animationComplete ? "0px" : "50px",
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
                  className="absolute right-[19%] mt-[100px]  md:block md:mr-[0] lg:mr-[0] xl:mr-[0] 2xl:mr-[0] md:mt-[250px] lg:w-[13%] lg:top-[25%] lg:mt-0 lg:right-[225px] xl:left-[65%] xl:mt-[-50px] 2xl:left-[60%] 2xl:mt-[2%]"
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
              <div className="absolute top-[25%] left-[50%]   transform -translate-x-1/2 text-center">
                {/* صورة قبل النص */}
                <div className="flex items-center justify-center ">
                  <div className="absolute w-[100%] top-[-50px] left-[50%] transform -translate-x-1/2">
                    <img
                      src={Logo}
                      alt="Logo"
                      className=" w-36 h-32 mx-auto -mt-20  "
                    />
                  </div>

                  <h1 className="text-4xl sm:text-5xl text-gray-800">
                    Star of <br /> Elegance
                  </h1>
                </div>
                {/* Icons */}
                <div className="flex justify-center space-x-4 mt-4 z-40">
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100091949269247&mibextid=ZbWKwL"><FaFacebook className="text-sm" /></a>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                    <a target="_blank" href="https://www.instagram.com/starofelegance?igsh=c2V0NncyeXBjMmVh"><FaInstagram className="text-sm" /></a>
                  </div>
                </div>

                {/* Line with Circle */}
                <div className="mt-2 sm:ml-8 ml-[20%] mx-auto relative">
                  <div className="h-1 bg-gray-800 w-[70%] "></div>
                  <div className="absolute right-[20%] sm:right-10 top-[-4px] w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Scroll Indicator بدون Motion */}
              <div className="mt-[-17%]  mr-[20px]  ">
                <Link to="Services" smooth={true} duration={1500} offset={0}>
                  <div className="circle-container  flex items-center justify-center border-2 rounded-full hover:cursor-pointer p-4 text-[#8B5715] hover:bg-[#8B5715] hover:text-white transition-all duration-300 relative group">
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
                    <FaChevronDown className="text-2xl text-[#8B5715] group-hover:text-white transition-all duration-300 mt-4 animate-bounce" />
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
              className=" ml-[0px] mt-[-500px] sm:mt-[-65%] md:mt-[-65%] lg:ml-[0px] lg:mt-[-550px] xl:left-1/3 xl:mt-[-750px] 2xl:mt-[-800px] transform -translate-x-1/2 text-center lg:z-50 xl:z-50 2xl:z-40"
            >
              <h1 className="  md:text-5xl lg:text-5xl xl:text-7xl font-bold text-gray-800">
                Star of Elegance
              </h1>

              {/* Icons */}
              <div className=" flex justify-center items-center space-x-4 lg:mt-4 xl:mt-14 mt-4 ">
                <div className="flex items-center justify-center z-40 w-12 h-12 2xl:w-16 2xl:h-16 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100091949269247&mibextid=ZbWKwL"><FaFacebook className="text-2xl 2xl:text-3xl" /></a>
                </div>
                <div className="flex items-center justify-center z-40 w-12 h-12 2xl:w-16 2xl:h-162xl:w-16 2xl:h-16 border-2 border-black rounded-full transition-all duration-300 hover:bg-black hover:border-black hover:text-white">
                 <a target="_blank" href="https://www.instagram.com/starofelegance?igsh=c2V0NncyeXBjMmVh"> <FaInstagram className="text-2xl 2xl:text-3xl" /></a>
                </div>
              </div>
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
              className=" ml-[0%]  sm:mt-[200px] md:mt-[45%] lg:mt-[300px] xl:mt-[330px] 2xl:mt-[320px]  transform -translate-x-1/2 flex flex-col items-center"
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
