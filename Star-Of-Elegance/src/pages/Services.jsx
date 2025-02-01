import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";

import logo from "../assets/image/logo.png"
import service1 from "../assets/image/Service/service1.svg"
import service2 from "../assets/image/Service/service2.svg"
import service3 from "../assets/image/Service/service3.svg"
import service4 from "../assets/image/Service/service4.svg"
import service5 from "../assets/image/Service/service5.svg"
import service6 from "../assets/image/Service/service6.svg"
import service7 from "../assets/image/Service/service7.svg"


const services = [
  { id: 1, title: "01. Custom Furniture manufacturing", description: "We create unique, high-quality furniture tailored to your style and needs. Whether it's for your home or office, we bring your vision to life with precision and craftsmanship.", image: service1 },
  { id: 2, title: "02. 3D Desgin and CNC FAbrication", description: "We provide professional 3D design services and precision CNC fabrication to turn your ideas into reality. From concept to final product, we ensure accuracy and high-quality finishes.!", image:service2 },
  { id: 3, title: "03. Custom headboard design and Implemntation ", description: "We design and create bespoke headboards that match your style and comfort preferences. From concept to installation, we ensure a perfect fit for your bedroom.", image:service3 },
  { id: 4, title: "04. Furniture restoration and Reupholstery", description: "We bring new life to your old furniture through expert restoration and reupholstery services. Preserve your cherished pieces while giving them a fresh, updated look.", image: service4 },
  { id: 5, title: "05. Reviving old furniture with modern techniques", description: "We transform your old furniture using modern methods to enhance its durability and style. Keep the charm of your pieces while giving them a contemporary touch.", image: service5 },
  { id: 6, title: "06. Upholstery services ", description: "We offer professional upholstery services to refresh and customize your furniture. Choose from a wide range of fabrics and designs to suit your style and comfort needs.", image: service6 },
  { id: 7, title: "07. Curtains and blackout curtains", description: "We design and install elegant curtains and effective blackout curtains to enhance your space. Enjoy style, privacy, and light control tailored to your needs.", image: service7 },
];
const Services = () => {
  return<>
  <Navbar/>
  <Title/>
      <div>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    <Footer/>
    </>;
};

export default Services;
