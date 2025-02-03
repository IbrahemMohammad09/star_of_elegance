import { GrFacebookOption } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../assets/image/logo.png"
import { Link } from 'react-router-dom';
export default function Footer(){
    return<>
    <div className="mt-16">
    <div className="flex flex-col flex-wrap  justify-between bg-[#B47F3E] px-4 pt-28  pb-36 md:flex-row md:pl-8 md:pr-80 md:pt-28  lg:px-20">
        <div className="flex items-center mb-10 md:mb-0">
            <img src={logo} alt="logo" className="w-32 h-auto object-cover md:w-56 md:h-44"/>
            <p className="ml-4 text-[#000000] w-40  font-black text-xl md:w-64 md:text-5xl inter lg:text-3xl ">
                STAR OF <span className="text-[#FFFFFF] inter">ELEGANCEINC</span>
            </p>
        </div>
        <div className="flex gap-4">
        <div className="mb-10 md:mb-0">
            < p className="text-[#000000] font-bold text-xl mb-4 dm">Pages</p>
            <div className="flex flex-col"> 
            <Link to="/" className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm">Home</Link>
            <Link to="/aboutus" className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm">About Us </Link>
            <Link to="/services" className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm">Services</Link>
            <a href="#our project"className="text-[#FFFFFF] font-normal text-lg mb-2  hover:text-black dm">Our Project</a>
            <a href="#contact us" className="text-[#FFFFFF] font-normal text-lg  hover:text-black dm">Contact Us</a>
            </div>
        </div>
        <div>
            <p className="text-[#000000] font-bold text-xl mb-4 dm">Contact us</p>
            <div className="flex items-center text-white mb-4">
                <MdOutlineEmail className="text-xl  hover:text-black" />
                <a href="mailto:stivalo@gmail.com" className="ml-2 font-normal text-lg  hover:text-black dm">info@starofelegance.com</a>
            </div>
            <div className="flex items-center text-white mb-4">
                <SlLocationPin className="text-xl  hover:text-black" />
                <a href="https://maps.app.goo.gl/WPtv3ir4bm2RDDxY7" className="ml-2 font-normal text-lg dm hover:text-black">1901 Toronto - Canada</a>
            </div>
            <div className="flex gap-4 mt-4">
                <a href="#" className="text-white text-2xl  hover:text-black"><GrFacebookOption /></a>
                <a href="#" className="text-white text-2xl  hover:text-black"><RiWhatsappFill /></a>
                <a href="#" className="text-white text-2xl  hover:text-black"><FaInstagram /></a>
            </div>
        </div>
        </div>
    </div>
    <div className="bg-white">
        <p className="text-black font-normal  text-center pt-4 pb-4 nun">© Copyright by SPARK – All rights reserved.</p>
    </div>
   </div>
    </>
}