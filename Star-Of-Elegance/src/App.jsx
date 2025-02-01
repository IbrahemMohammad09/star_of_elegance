import "./App.css";
import ClientsReviews from "./sections/ClientsReviews";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";

function App() {
  return (
    <>
      <div className="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1896px]">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsReviews />
      </div>
    </>
  );
}

export default App;
