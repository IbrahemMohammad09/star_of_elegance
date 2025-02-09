import { GrFacebookOption } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="mt-16">
        <div className="flex flex-col flex-wrap  justify-between bg-[#B47F3E] px-4 pt-28  pb-36 md:flex-row md:pl-8 md:pr-80 md:pt-28  lg:px-20">
          <div className="flex items-center mb-10 md:mb-0">
            <img
              src={logo}
              alt="logo"
              className="w-32 h-auto object-cover md:w-56 md:h-44"
            />
            <p className="ml-4 text-[#000000] w-40  font-black text-xl md:w-64 md:text-5xl inter lg:text-3xl ">
              STAR OF <span className="text-[#FFFFFF] inter">ELEGANCEINC</span>
            </p>
          </div>
          <div className="flex gap-4">
            <div className="mb-10 md:mb-0 mr-7">
              <p className="text-[#000000] font-bold text-xl mb-4 dm">Pages</p>
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm"
                >
                  About Us{" "}
                </Link>
                <Link
                  to="/services"
                  className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm"
                >
                  Services
                </Link>
                <a
                  href="#our project"
                  className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm"
                >
                  Our Project
                </a>
                <a
                  href="#contact us"
                  className="text-[#FFFFFF] font-normal text-lg  hover:text-black dm"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-58">
              <p className="text-[#000000] font-bold text-xl mb-4 dm">
                Contact us
              </p>
              <div className="flex items-center text-white mb-4">
                <MdOutlineEmail className="text-xl  hover:text-black" />
                <a
                  href="mailto:info@starofelegance.com"
                  className="ml-2 font-normal sm:text-lg text-sm  hover:text-black dm"
                >
                  info@starofelegance.com
                </a>
              </div>
              <div className="flex items-center text-white mb-4">
                <SlLocationPin className="text-xl  hover:text-black" />
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/rBVmmq94q5HMqbiX7"
                  className="ml-2 font-normal sm:text-lg text-sm dm hover:text-black"
                >
                  2480 Cawthra RD Unit 19 
                  CANADA . ON
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100091949269247&mibextid=ZbWKwL" className="text-white text-2xl  hover:text-black ">
                  <GrFacebookOption />
                </a>
                <a target="_blank" href="https://www.instagram.com/starofelegance?igsh=c2V0NncyeXBjMmVh" className="text-white text-2xl  hover:text-black">
                  <FaInstagram />
                </a>
                <a target="_blank" href="https://wa.me/16476840048" className="text-white text-2xl  hover:text-black">
                  <RiWhatsappFill />
                </a>
                <a target="_blank" href="https://wa.me/+16478861705" className="text-white text-2xl  hover:text-black">
                  <RiWhatsappFill />
                </a>


              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <p className="text-black font-normal  text-center pt-4 pb-4 nun">
            © Copyright by{" "}
            <a
              className=""
              style={{ color: "#2fb0cd" }}
              target="_blank"
              href="https://sparkengdev.com/"
            >
              SPARK
            </a>{" "}
            – All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
