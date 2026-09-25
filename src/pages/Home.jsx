import HeroSection from "../sections/HeroSection";
import Footer from "../components/Footer";
import ServicesSection from "../sections/ServicesSection";
import ProjectsSection from "../sections/ProjectsSection";
import ClientsReviews from "../sections/ClientsReviews";
import MainTitle from "../components/sharedComponents/MainTitle";

const Home = () => {
  return (
    <div>
      <MainTitle title={'Home'} />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsReviews />
      <Footer />
    </div>
  );
};

export default Home;
