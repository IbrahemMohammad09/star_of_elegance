import SectionHeader from "../components/SectionHeaderServices";
import image1 from "../assets/image/HomePage/OurServices/image1.jpg";
import image2 from "../assets/image/HomePage/OurServices/image2.jpeg";
import image3 from "../assets/image/HomePage/OurServices/image3.jpeg";
const ServicesSection = () => {
  return (
    <section className="py-16 px-8 h-screen bg-white flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* القسم الأيسر: قائمة المستطيلات  */}
        <div className="flex-1 relative flex -ml-24 flex-col items-start gap-10">
          {/* العنصر الأول */}
          <div className="relative flex items-center rounded-3xl shadow-lg bg-black w-[488px] h-[181px] transform -rotate-6">
            <img
              src={image1}
              alt="Restaurants"
              className="absolute -top-20 -left-14 w-[218px] h-[213px] object-cover rounded-3xl border-4 border-white shadow-lg z-10 transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-white text-4xl font-semibold ml-52">
              Restaurants
            </h3>
          </div>

          {/* العنصر الثاني */}
          <div className="ml-44 mt-12">
            <div className="relative flex items-center rounded-3xl shadow-lg bg-[#B47F3D] w-[488px] h-[181px] transform -rotate-6">
              <img
                src={image2}
                alt="Hotels"
                className="absolute -top-20 -left-14 w-[218px] h-[213px] object-cover rounded-3xl border-4 border-white shadow-lg z-10 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-white text-4xl font-semibold ml-52">
                Hotels
              </h3>
            </div>
          </div>

          <div className="ml-44 mt-12 absolute -left-[90%] top-56">
            <div className="relative flex items-center rounded-3xl shadow-lg bg-[#B47F3D] w-[488px] h-[181px] transform -rotate-6"></div>
          </div>

          {/* العنصر الثالث */}
          <div className="mt-12">
            <div className="relative flex items-center rounded-3xl shadow-lg bg-black w-[488px] h-[181px] transform -rotate-6">
              <img
                src={image3}
                alt="Residential"
                className="absolute -top-20 -left-14 w-[218px] h-[213px] object-cover rounded-3xl border-4 border-white shadow-lg z-10 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-white text-4xl font-semibold ml-52">
                Residential
              </h3>
            </div>
          </div>
        </div>

        {/* القسم اليميني: العنوان والرابط */}
        <div className="flex-1 text-center ml-[25%] space-y-16 md:text-left">
          <SectionHeader title="Our Services" linkText="Show all" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
