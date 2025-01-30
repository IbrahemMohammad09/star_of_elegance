import SectionHeader from "../components/SectionHeaderServices";

import projectImg1 from "../assets/image/HomePage/OurProjects/image1.jpeg";
import projectImg2 from "../assets/image/HomePage/OurProjects/image2.jpeg";
import projectImg3 from "../assets/image/HomePage/OurProjects/image3.jpeg";

const ProjectsSection = () => {
  return (
    <section className="py-16 px-8 h-screen bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 relative">
        {/* القسم الأيمن: العنوان والرابط */}
        <div className="flex-1 text-left space-y-6">
          <SectionHeader title="Our Projects" linkText="Show all" />
        </div>

        {/* القسم الأيسر: الصور */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* المربع الرمادي الخلفي */}
          <div className="absolute top-[-40px] right-[-600px] w-[702px] h-[224px] bg-gray-200 rounded-xl z-0"></div>

          {/* المربع البني الخلفي */}
          <div className="absolute top-[250px] left-[370px] w-[225px] h-[390px] bg-[#B47F3D] rounded-xl z-0"></div>

          {/* الصورة الكبيرة الخلفية */}
          <div className="relative w-[882px] h-[610px] top-20 right-[-480px] rounded-xl overflow-hidden shadow-lg z-10 group">
            <img
              src={projectImg1}
              alt="Project 1"
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
            />
          </div>

          {/* الصورة الوسطى */}
          <div className="absolute left-[140px] top-[460px] w-[430px] h-[430px] rounded-xl overflow-hidden shadow-lg z-20 group">
            <img
              src={projectImg2}
              alt="Project 2"
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
            />
          </div>

          {/* الصورة الأمامية */}
          <div className="absolute left-[-700px] top-[460px] w-[500px] h-[400px] rounded-xl overflow-hidden shadow-lg z-30 group">
            <img
              src={projectImg3}
              alt="Project 3"
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
