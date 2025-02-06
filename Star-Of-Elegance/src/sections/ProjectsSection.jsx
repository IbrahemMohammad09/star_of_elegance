import SectionHeader from "../components/SectionHeaderServices";

import projectImg1 from "../assets/image/HomePage/OurProjects/image1.jpeg";
import projectImg2 from "../assets/image/HomePage/OurProjects/image2.jpeg";
import projectImg3 from "../assets/image/HomePage/OurProjects/image3.jpeg";

const ProjectsSection = () => {
  return (
    <div className="">
      <section className="xl:py-16  px-8 mb-36 bg-white overflow-hidden">
        <div className=" container mx-auto xl:flex flex md:block flex-col items-center xl:gap-16 relative  md:flex-row">
          {/* القسم الأيمن: العنوان والرابط */}
          <div className="flex-1 text-left space-y-6 mt-60 md:mt-20 xl:mt-0">
            <SectionHeader title="Our Projects" linkText="Show all" />
          </div>

          {/* القسم الأيسر: الصور */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* المربع الرمادي الخلفي */}
            <div className="absolute xl:top-[-40px] sm:w-[200px] sm:h-[140px] sm:right-[300px] md:top-[200px] lg:h-[200px]  lg:top-[50px] top-[140px] lg:right-[600px] md:right-[450px] xl:right-[-600px] right-[200px]  xl:w-[702px] w-[100px] xl:h-[224px] h-[100px] bg-gray-200 rounded-xl z-0"></div>

            {/* المربع البني الخلفي */}
            <div className="absolute xl:top-[250px] top-[130px] md:left-[450px] lg:left-[700px] xl:left-[370px] left-[150px] xl:w-[225px] w-[100px] xl:h-[390px] h-[160px] bg-[#B47F3D] rounded-xl z-0"></div>

            {/* الصورة الكبيرة الخلفية */}
            <div className="relative xl:w-[882px] lg:w-[400px] w-[300px] md:w-[350px] md:h-[250px] lg:h-[300px] xl:h-[610px] h-[200px] top-28 lg:right-[-450px] xl:right-[-480px] md:right-[-320px] right-[-200px] rounded-xl overflow-hidden shadow-lg z-10 group">
              <img
                src={projectImg1}
                alt="Project 1"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
              />
            </div>

            {/* الصورة الوسطى */}
            <div className="absolute xl:left-[140px] lg:left-[640px] md:left-[400px] left-[100px] xl:top-[460px] lg:top-[250px] top-[225px] xl:w-[430px] w-[100px] xl:h-[430px] h-[100px] rounded-xl overflow-hidden shadow-lg z-20 group">
              <img
                src={projectImg2}
                alt="Project 2"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
              />
            </div>

            {/* الصورة الأمامية */}
            <div className="absolute xl:left-[-700px] sm:w-[200px] sm:h-[150px] sm:left-[-150px]  md:left-[10px] left-[-10%] xl:top-[460px] md:top-[100px] top-[100px] xl:w-[500px] w-[100px] md:w-[200px] lg:w-[300px] xl:h-[400px] md:h-[150px] lg:h-[230px] h-[100px] rounded-xl overflow-hidden shadow-lg z-30 group">
              <img
                src={projectImg3}
                alt="Project 3"
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
