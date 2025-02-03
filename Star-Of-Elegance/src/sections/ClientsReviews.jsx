import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";
const ClientsReviews = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const swiperNavPrev = useRef(null); // المرجع للسهم الأيسر
  const swiperNavNext = useRef(null); // المرجع للسهم الأيمن

  const reviews = [
    {
      title: "Mpok Ina1",
      text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      rating: 5,
    },
    {
      title: "Mpok Ina2",
      text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      rating: 3,
    },
    {
      title: "Mpok Ina3",
      text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      rating: 4,
    },
    {
      title: "Mpok Ina4",
      text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      rating: 3,
    },
    {
      title: "Mpok Ina5",
      text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      rating: 5,
    },
    {
      title: "Mpok Ina6",
      text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      rating: 4,
    },
  ];

  return (
    <section className=" mt-20 md:px-20 bg-white text-center relative h-screen">
      {/* العنوان */}
      <h2 className="text-5xl font-bold text-[#B47F3D] mb-12">
        Our Clients Reviews
      </h2>

      {/* السلايدر */}
      <div className="relative max-w-[90%] mx-auto">
        {/* الأسهم خارج السلايدر */}
        <button
          ref={swiperNavPrev} // ربط السهم الأيسر بالمرجع
          className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 border-2 border-[#B47F3D] text-[#B47F3D] p-5 rounded-full shadow-lg bg-white hover:bg-[#B47F3D] hover:text-white transition-all z-10 hidden md:block"
        >
          <FaArrowLeft className="text-sm sm:text-sm md:text-xl lg:text-3xl" />
        </button>

        <button
          ref={swiperNavNext} // ربط السهم الأيمن بالمرجع
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
          className="pb-10 h-[700px]"
          navigation={{
            prevEl: swiperNavPrev.current, // ربط السهم الأيسر
            nextEl: swiperNavNext.current, // ربط السهم الأيمن
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="border-4 mt-10 border-[#B47F3D] p-8 rounded-xl text-center bg-white mx-auto max-w-[550px] h-[600px] flex flex-col justify-between"
                style={{
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {review.title}
                </h3>
                <p className="text-gray-600 text-lg">{review.text}</p>
                <div className="flex justify-center text-2xl space-x-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating
                          ? "text-[#F6973F]"
                          : "text-[#F6973F] opacity-30"
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
          <div className="bg-white p-8 rounded-3xl shadow-2xl lg:w-[800px] w-[400px] lg:h-[800px] h-auto text-center animate-slideUp relative">
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
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-10 py-2 border rounded-lg focus:ring-[#B47F3D] focus:border-[#B47F3D]"
                />
              </div>
              <div className="relative">
                <FaComment className="absolute left-3 top-6 transform -translate-y-1/2 text-gray-400" />
                <textarea
                  placeholder="Leave feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-full lg:h-[427px] px-10 py-2 border rounded-lg focus:ring-[#B47F3D] focus:border-[#B47F3D]"
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
  );
};

export default ClientsReviews;
