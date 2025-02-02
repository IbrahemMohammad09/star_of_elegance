import SectionHeader from "../components/SectionHeaderServices";
import image1 from "../assets/image/HomePage/OurServices/image1.jpg";
import image2 from "../assets/image/HomePage/OurServices/image2.jpeg";
import image3 from "../assets/image/HomePage/OurServices/image3.jpeg";

const ServicesSection = () => {
  return (
    <section className=" bg-white px-8 py-16 items-center flex">
      <div className="mx-screen flex flex-col-reverse  items-center gap-36 sm:flex-col lg:flex-row  ">
        {/* القسم الأيسر: قائمة المستطيلات */}
        <div className="flex flex-1 flex-col items-start w-[100%] gap-32 sm:space-y-10 xl:space-y-16 sm:w-auto sm:mt-0 lg:space-y-0 lg:pl-16 xl:mt-6 xl:p-0 xl:relative xl:ml-10 xl:gap-10">
          {/* العنصر الأول */}
          <div className="xl:mt-12 ">
            <div className="relative flex items-center justify-center w-[100%] h-[150px] rounded-3xl bg-black shadow-xl sm:px-auto sm:w-[100%] md:w-[100%] lg:w-[350px] lg:h-[120px] lg:-rotate-6 xl:w-[488px] xl:h-[181px] xl:-rotate-6">
              <img
                src={image1}
                alt="Restaurants"
                className="absolute -top-20 left-[24%] w-[50%] object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 sm:-left-10 sm:w-[40%] lg:h-[100%] lg:w-[45%] lg:-left-16 xl:h-[120%] xl:w-[45%] xl:-left-14"
              />
              <h3 className="text-4xl font-semibold text-white px-28 pt-10 sm:pt-0 md:px-44 xl:pl-48">
                Restaurants
              </h3>
            </div>
          </div>

          {/* العنصر الثاني */}
          <div className="lg:ml-20 xl:ml-44 xl:mt-12 ">
            <div className="relative flex items-center justify-center w-[125%] h-[150px] rounded-3xl bg-[#B47F3D] shadow-xl sm:w-[100%] lg:w-[350px] lg:h-[120px] lg:-rotate-6  xl:w-[488px] xl:h-[181px] xl:-rotate-6">
              <img
                src={image2}
                alt="Hotels"
                className="absolute -top-20 left-[24%] w-[50%] object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 sm:-left-10 sm:w-[40%] lg:h-[100%] lg:w-[45%] xl:-left-14 xl:w-[45%] xl:h-[120%]"
              />
              <h3 className="text-4xl font-semibold text-white px-28 pt-10 sm:px-40 sm:pt-0 md:px-56">
                Hotels
              </h3>
            </div>
          </div>

          {/* عنصر زخرفي في الشاشات الكبيرة */}
          <div className="hidden  xl:block xl:ml-44 xl:absolute -left-[90%] top-72 mt-12">
            <div className="relative flex items-center w-[488px] h-[181px] rounded-3xl bg-[#B47F3D] shadow-xl transform -rotate-6"></div>
          </div>

          {/* العنصر الثالث */}
          <div className="xl:mt-12">
            <div className="relative flex items-center justify-center w-[100%] h-[150px] rounded-3xl bg-black shadow-xl sm:w-[100%] lg:w-[350px] lg:h-[120px] lg:-rotate-6 xl:w-[488px] xl:h-[181px] xl:-rotate-6">
              <img
                src={image3}
                alt="Residential"
                className="absolute -top-20 left-[24%] w-[50%] object-cover rounded-3xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 sm:-left-10 sm:w-[40%] xl:-left-14 xl:w-[45%] xl:h-[120%]"
              />
              <h3 className="text-4xl font-semibold text-white px-28 pt-10 sm:px-32 sm:pt-0 xl:pl-48 md:px-48">
                Residential
              </h3>
            </div>
          </div>
        </div>

        {/* القسم اليميني: العنوان والرابط */}
        <div className=" flex text-center space-y-16 w-[100%] px-[6rem]  mt-80  sm:px-44  sm:mt-70 md:mt-96 md:px-52 lg:mt-10 lg:pl-0 lg:order-none xl:pl-40 xl:text-left sm:order-first xl:order-none">
          <SectionHeader title="Our Services" linkText="Show all" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
