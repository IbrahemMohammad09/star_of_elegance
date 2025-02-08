import MainTitle from "../components/sharedComponents/MainTitle";
import Navbar from "../components/Navbar";
import Title from "../components/sharedComponents/Title";
import Footer from "../components/Footer";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import linecontact from '../assets/image/linecontact.svg'
import './ContactInformation.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../constant/api";
import axios from "axios";


export default function ContactInformation(){
   const navigate = useNavigate();

   const [name,setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [text, setText] = useState("");

   const [error,setError] = useState("");
   const [loading, setLoading]= useState(false)

   const validateForm = () => {
      let newErrors = {};
      if (!name) newErrors.name = "This field is required";
      if (!email) newErrors.email = "This field is required";
      if (!phone) newErrors.phone = "This field is required";
      if (!text) newErrors.text = "This field is required";

      setError(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
   if (!validateForm()) return;
   setLoading(true);

   const requestData = {
       name,
       email,
       phone,
   };

   try {
       const response = await axios.post(Api.POST.CREATEMESSAGE, requestData);
         navigate ('/order-successful')
   } catch (error) {
         navigate ('/error')

   } finally {
       setLoading(false);
   }
};


   return<>
   <div className="pt-40"></div>
      <MainTitle title={'Contact Us'} />
      <Navbar/>
      <Title/>
      <div className="flex justify-center "> 
         <div className="flex w-[90%] 2xl:w-[60%] flex-col md:flex-row gap-10 md:gap-8  md:px-12 mt-6 container-contact-information">
            <div className="flex flex-col items-start gap-6 border border-[#8B5715] rounded-lg md:p-12 pt-24 pb-24 sm:pb-60 px-6 md:px-16">
               <p className="text-[#8B5715] font-semibold text-2xl md:text-4xl  syne">Contact Information</p>
               <div className="flex gap-2 items-center">
                  <a href="https://maps.app.goo.gl/WPtv3ir4bm2RDDxY7" className="text-2xl text-[#8B5715]  hover:text-white hover:bg-[#8B5715]  border border-[#8B5715] rounded-full p-3">
                     <SlLocationPin /></a>
                  <a href="https://maps.app.goo.gl/WPtv3ir4bm2RDDxY7" className="font-medium text-base md:text-lg text-black montserrat">1901 Toronto - Canada</a>
               </div>
               <div className="flex gap-2 items-center">
                  <a href="mailto:starofelegance@gmail.com" className="text-2xl text-[#8B5715]  hover:text-white hover:bg-[#8B5715]  border border-[#8B5715] rounded-full p-3">
                     <MdOutlineEmail /></a>
                  < a href = "mailto:starofelegance@gmail.com" className="font-medium text-base md:text-lg text-black montserrat">info@starofelegance.com</a>
               </div>
               <div className="flex gap-4">
                  <a href="#" className="text-2xl text-[#8B5715] hover:text-white hover:bg-[#8B5715] border border-[#8B5715] rounded-full p-3">
                     <FaInstagram /></a>
                  <a href="#" className="text-2xl text-[#8B5715]  hover:text-white hover:bg-[#8B5715]  border border-[#8B5715] rounded-full p-3">
                     <FaSquareFacebook /></a>
                  <a href="#" className="text-2xl text-[#8B5715]  hover:text-white hover:bg-[#8B5715]  border border-[#8B5715] rounded-full p-3">
                     <RiWhatsappFill /></a>
               </div>
            </div>
            <div className="flex flex-col w-full ">
               <p className="font-semibold text-2xl md:text-4xl text-[#8B5715] syne">Have a Question?</p>
               <img src={linecontact} className="w-full md:w-[620px] my-3" />
               <p className="font-medium text-base md:text-lg ">
                  Business Hours: <span className="font-semibold text-lg montserrat">Mon – Fri:</span> 08:00 AM To 09:00 PM
                  <span className="font-semibold text-lg montserrat"> Sat: </span> 09:00 AM To 06:00 PM 
               </p>
               <form className="mt-6">
                  <div className="flex flex-col md:flex-row gap-8 ">
                     <div className="w-full">
                        <label className="font-medium text-lg text-black montserrat  ">Your Name</label>
                        <input 
                           type="text" 
                           className="w-full md:max-w-[341px] mt-1 block  shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" 
                           placeholder="JAN" 
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required />
                           {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
                     </div>
                     <div className="w-full">
                        <label className="font-medium text-lg text-black montserrat">Email</label>
                        <input 
                           type="email" 
                           className="w-full md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" 
                           placeholder="Example@Example.com"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           />
                           {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                     </div>
                  </div>
                  <div className="mt-4">
                     <label className="font-medium text-lg text-black montserrat ">Phone</label>
                     <input 
                        type="tel" 
                        className="w-full md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3 "
                        placeholder="657-473-9783"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        />
                    {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}
                  </div>
                  <div className="mt-4">
                     <label className="font-medium text-lg text-black montserrat">Message</label>
                     <textarea 
                        className="bg-white border border-[#8B5715] rounded-lg h-40 p-3 w-full "
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="How we can help you"
                        />
                     {error.text && <p className="text-red-500 text-sm">{error.text}</p>}
                  </div>
                  <button onClick={handleSubmit} type="submit" className="w-full md:w-52 bg-white text-black font-medium text-2xl border border-[#8B5715] rounded-lg py-4 px-6 hover:text-white hover:bg-[#8B5715] mt-4 crimson"> 
                     Send
                  </button>
               </form>
            </div>
         </div>
      </div>
      
      <Footer/>
   </>
}