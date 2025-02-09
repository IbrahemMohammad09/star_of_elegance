import SectionHeader from "../components/SectionHeaderServices";
import image1 from "../assets/image/HomePage/OurServices/image1.jpg";
import image2 from "../assets/image/HomePage/OurServices/image2.jpeg";
import image3 from "../assets/image/HomePage/OurServices/image3.jpeg";
import "../pages/Responsive.css";
const ServicesSection = () => {
  return (
    <div
      id="Services"
      className=" lg:mt-6 md:mt-[0%]  flex items-center justify-center "
    >
      <section className=" w-screen  py-0  ">
        <div className="flex  flex-col-reverse  lg:gap-24  xl:gap-20 2xl:gap-36 sm:flex-col lg:flex-row  ">
          {/* القسم الأيسر: قائمة المستطيلات */}
          <div className=" flex justify-center  items-center mt-32 2xl:ml-20  flex-1 flex-col gap-32  sm:space-y-10  xl:space-y-16 sm:w-auto sm:mt-32 lg:space-y-0 md:mt-28 lg:pl-16 xl:mt-6 xl:p-0 xl:relative xl:-ml-28 xl:gap-10">
            {/* العنصر الأول */}
            <div className="xl:mt-12 ml-[4%]  ">
              <div className="relative ourservicesCard1  flex items-center justify-center  w-[100%] h-[100px] rounded-3xl bg-black shadow-xl  sm:w-[100%] md:w-[100%] lg:w-[350px] lg:h-[120px] lg:-rotate-6 xl:w-[488px] xl:h-[181px] xl:-rotate-6">
                <img
                  src={image1}
                  alt="Restaurants"
                  className="absolute -top-20 left-[24%] w-[50%] object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 sm:-left-10 sm:w-[40%] lg:h-[100%] lg:w-[45%] lg:-left-16 xl:h-[120%] xl:w-[45%] xl:-left-14"
                />
                <h3 className="text-3xl ourservicesText1 font-semibold text-white px-28 sm:px-28 pt-8 sm:pt-0 md:px-52 xl:pl-64">
                  Restaurants
                </h3>
              </div>
            </div>

            {/* العنصر الثاني */}
            <div className="ml-[10%] lg:ml-20  xl:ml-44 xl:mt-12 md:ml-[20px] sm:ml-[0%]">
              <div className="relative ourservicesCard2  flex items-center justify-center w-[94%] h-[100px] rounded-3xl bg-[#B47F3D] shadow-xl sm:w-[101%] lg:w-[350px] lg:h-[120px] lg:-rotate-6  xl:w-[488px] xl:h-[181px] xl:-rotate-6">
                <img
                  src={image2}
                  alt="Hotels"
                  className="absolute -top-20 left-[24%] w-[50%] object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 sm:-left-10 sm:w-[40%] lg:h-[100%] lg:w-[45%] xl:-left-14 xl:w-[45%] xl:h-[120%]"
                />
                <h3 className="text-3xl ourservicesText2 font-semibold text-white px-40 pt-8 sm:px-36 sm:pt-0  md:px-60">
                  Hotels
                </h3>
              </div>
            </div>

            {/* عنصر زخرفي في الشاشات الكبيرة */}
            <div className="hidden  xl:block xl:ml-44 xl:absolute -left-[90%] top-72 mt-12">
              <div className="relative flex items-center w-[488px] h-[181px] rounded-3xl bg-[#B47F3D] shadow-xl transform -rotate-6"></div>
            </div>

            {/* العنصر الثالث */}
            <div className="xl:mt-12 ml-[10%]">
              <div className="relative ourservicesCard3  flex items-center justify-center w-[95%] h-[100px] rounded-3xl bg-black shadow-xl sm:w-[95%] lg:w-[350px] lg:h-[120px] lg:-rotate-6 xl:w-[488px] xl:h-[181px] xl:-rotate-6">
                <img
                  src={image3}
                  alt="Residential"
                  className="absolute -top-20 left-[24%] w-[50%] object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 sm:-left-10 sm:w-[40%] xl:-left-14 xl:w-[45%] xl:h-[120%]"
                />
                <h3 className="text-3xl ourservicesText3 font-semibold text-white px-32 pt-8 sm:px-32 sm:pt-0 xl:pl-64 md:px-56">
                  Residential
                </h3>
              </div>
            </div>
          </div>

          {/* القسم اليميني: العنوان والرابط */}
          <div className=" flex text-center items-center justify-center mt-10  space-y-16 w-[100%] px-[6rem]  md:mt-32  sm:px-44  sm:mt-70  md:px-52 lg:mt-10 lg:pl-0 lg:order-none xl:pl-40 xl:text-left sm:order-first xl:order-none">
            <SectionHeader title="Our Services" linkText="Show all" link={'/services'}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
