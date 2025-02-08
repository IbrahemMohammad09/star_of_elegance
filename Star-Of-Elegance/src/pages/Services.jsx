import ServiceCard from "../components/sharedComponents/ServiceCard";
import Navbar from "../components/Navbar";
import Title from "../components/sharedComponents/Title";
import Footer from "../components/Footer";
import MainTitle from "../components/sharedComponents/MainTitle";

import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../constant/api";
import Loading from "./Loading";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.SERVICELIST);
        setServices(response.data);
      } catch {
        <Navigate to={"/error"} />;
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-40 flex justify-center flex-col">
      <MainTitle title={"Services"} />
      <Navbar />
      <Title />
      {loading ? (
        <Loading />
      ) : (
        <div>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;
