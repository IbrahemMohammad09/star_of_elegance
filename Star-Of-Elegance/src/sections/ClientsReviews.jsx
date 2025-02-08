import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaComment,
  FaUserAlt
} from "react-icons/fa";

import Api from "../constant/api";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

const ClientsReviews = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [swiper, setSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] =useState([]);
  


  useEffect(()=>{
    const fetchData= async ()=>{
      try {
        const response = await axios.get(Api.GET.RATESLIST);
        setReviews(response.data);
      } catch {
        <Navigate to={"/error"} />;
      } finally {
        setLoading(false); 
      }

      
    }


    fetchData();
  },[])

  
  

  return (
    <div>
      {loading ?(
        <Loading/>
      ):(
        <section className="mt-20 md:px-20 bg-white text-center relative">
          <h2 className="text-5xl font-bold text-[#B47F3D] mb-12">Our Clients Reviews</h2>
          <div className="relative max-w-[90%] mx-auto">
            <button
              onClick={() => swiper?.slidePrev()}
              className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 border-2 border-[#B47F3D] text-[#B47F3D] p-5 rounded-full shadow-lg bg-white hover:bg-[#B47F3D] hover:text-white transition-all z-10 hidden md:block"
            >
              <FaArrowLeft className="text-sm sm:text-sm md:text-xl lg:text-3xl" />
            </button>

            <button
              onClick={() => swiper?.slideNext()}
              className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 border-2 border-[#B47F3D] text-[#B47F3D] p-5 rounded-full shadow-lg bg-white hover:bg-[#B47F3D] hover:text-white transition-all z-10 hidden md:block"
            >
              <FaArrowRight className="text-sm sm:text-sm md:text-xl lg:text-3xl" />
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10 h-[600px]"
              onSwiper={setSwiper}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="border-4 mt-10 border-[#B47F3D] p-8 rounded-xl text-center bg-white mx-auto max-w-[300px] h-[400px] flex flex-col justify-between"
                    style={{
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600 text-lg">{review.message}</p>
                    <div className="flex justify-center text-2xl space-x-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rate ? "text-[#F6973F]" : "text-[#F6973F] opacity-30"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
            {/* زر التقييم */}
          <button
            onClick={() => setShowPopup(true)}
            className="mt-4 px-6 py-3 w-[318px] border-4 border-[#B47F3D] text-[#B47F3D] text-lg font-medium rounded-3xl shadow-md bg-white hover:bg-[#B47F3D] hover:text-white transition-all"
          >
            Rate Us
          </button>

          {/* Popup التقييم */}
          {showPopup && (
            <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
              <div className="bg-white p-8 rounded-3xl shadow-2xl lg:w-[400px] w-[400px] lg:h-[600px] h-auto text-center animate-slideUp relative">
                {/* زر الإغلاق */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 left-4 text-gray-500 hover:text-red-500 transition-all"
                >
                  <FaTimes size={24} />
                </button>

                <h2 className="text-3xl font-bold text-[#B47F3D] mb-4">
                  Thank You
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Please rate our service
                </p>

                {/* التقييم بالنجوم */}
                <div className="flex justify-center mb-6 text-2xl space-x-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < (hoverRating || rating)
                          ? "text-[#F6973F]"
                          : "text-gray-300"
                      }
                      onMouseEnter={() => setHoverRating(i + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                </div>

                {/* إدخال البريد والتعليق */}
                <div className="space-y-4">
                  <div className="relative">
                    <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-10 py-2 border rounded-lg focus:ring-[#B47F3D] focus:border-[#B47F3D]"
                    />
                  </div>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-6 transform -translate-y-1/2 text-gray-400" />
                    <textarea
                      placeholder="Leave feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full h-full lg:h-[250px] px-10 py-2 border rounded-lg focus:ring-[#B47F3D] focus:border-[#B47F3D]"
                    />
                  </div>
                </div>

                {/* زر الإرسال */}
                <button className="mt-6 px-6 py-3 w-full border-2 border-[#B47F3D] text-[#B47F3D] text-lg font-medium rounded-3xl shadow-md bg-white hover:bg-[#B47F3D] hover:text-white transition-all">
                  Submit
                </button>
              </div>
            </div>
          )}
      </section>
      )}
    </div>
  );
};

export default ClientsReviews;
