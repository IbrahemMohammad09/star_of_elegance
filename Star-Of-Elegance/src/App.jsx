import "./App.css";
import ClientsReviews from "./sections/ClientsReviews";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";

function App() {
  return (
    <>
      <div className="w-[1896px]">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsReviews />
      </div>
    </>
  );
}

export default App;
