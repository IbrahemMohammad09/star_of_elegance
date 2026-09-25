import ServiceCard from "../components/sharedComponents/ServiceCard";
import Navbar from "../components/Navbar";
import Title from "../components/sharedComponents/Title";
import Footer from "../components/Footer";
import MainTitle from "../components/sharedComponents/MainTitle";

import { useEffect, useState } from "react";

// ==================================================
// BACKEND IMPORTS - DISABLED FOR NOW
// ==================================================
// import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";
// import Api from "../constant/api";
// import Loading from "./Loading";

// ==================================================
// STATIC SERVICES
// ==================================================

const STATIC_SERVICES = [
  {
    id: 1,
    name: "Custom Furniture Design",
    title: "Custom Furniture Design",
    description:
      "We create unique furniture designs tailored to your space, style, and personal vision, turning your ideas into elegant and functional pieces.",
    image: `${import.meta.env.BASE_URL}images/custom-furniture.jpg`,
  },
  {
    id: 2,
    name: "Interior Furniture Solutions",
    title: "Interior Furniture Solutions",
    description:
      "We provide carefully designed furniture solutions that complement your interior and create a harmonious balance between beauty, comfort, and functionality.",
    image: `${import.meta.env.BASE_URL}images/interior-solutions.jpg`,
  },
  {
    id: 3,
    name: "Bespoke Furniture",
    title: "Bespoke Furniture",
    description:
      "Every detail is designed specifically for you. From dimensions and materials to finishes and style, we create furniture that reflects your unique taste.",
    image: `${import.meta.env.BASE_URL}images/bespoke-furniture.jpg`,
  },
  {
    id: 4,
    name: "Furniture Renovation",
    title: "Furniture Renovation",
    description:
      "We give existing furniture a new life through professional restoration, refinishing, and thoughtful design improvements while preserving its character.",
    image: `${import.meta.env.BASE_URL}images/furniture-renovation.jpg`,
  },
  {
    id: 5,
    name: "Furniture Consultation",
    title: "Furniture Consultation",
    description:
      "Our consultation service helps you choose the right design, materials, colors, and dimensions to bring your furniture vision to life.",
    image: `${import.meta.env.BASE_URL}images/consultation.jpg`,
  },
  {
    id: 6,
    name: "Design & Craftsmanship",
    title: "Design & Craftsmanship",
    description:
      "We combine modern design concepts with high-quality craftsmanship to create furniture pieces that are elegant, durable, and made to last.",
    image: `${import.meta.env.BASE_URL}images/craftsmanship.jpg`,
  },
];

// ==================================================
// SERVICES COMPONENT
// ==================================================

const Services = () => {
  const [services, setServices] = useState(STATIC_SERVICES);

  // ==================================================
  // BACKEND FETCH - DISABLED FOR NOW
  // ==================================================

  /*
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.SERVICELIST);
        setServices(response.data);
      } catch {
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  */

  // ==================================================
  // UI
  // ==================================================

  return (
    <div className="pt-40 flex justify-center flex-col">

      <MainTitle title={"Services"} />

      <Navbar />

      <Title />

      {/* ==================================================
          STATIC SERVICES
      ================================================== */}

      <div>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;