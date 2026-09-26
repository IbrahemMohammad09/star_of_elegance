import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainTitle from "../components/sharedComponents/MainTitle";
import Title from "../components/sharedComponents/Title";
import "./OurProjects.css";
import TitleProject from "../components/TitleProject";
import { Link } from "react-router-dom";

// ==================================================
// BACKEND IMPORTS - DISABLED FOR STATIC DATA
// ==================================================
// import axios from "axios";
// import Api from "../constant/api";
// import { useEffect, useState } from "react";
// import Loading from "./Loading";

// ==================================================
// STATIC PROJECTS
// Keep project details here so the public gallery works without an API.
// ==================================================
const STATIC_PROJECTS = [
  {
    id: 1,
    name: "Custom Living Room",
    description: "A tailored living room with elegant furniture, warm finishes, and a layout designed around the client.",
    before_pictures: [],
    after_pictures: [],
  },
  {
    id: 2,
    name: "Restaurant Interior",
    description: "A welcoming restaurant interior combining durable materials, comfortable seating, and refined details.",
    before_pictures: [],
    after_pictures: [],
  },
  {
    id: 3,
    name: "Hotel Suite Furnishing",
    description: "A coordinated hotel suite with bespoke furnishings created for comfort and a polished guest experience.",
    before_pictures: [],
    after_pictures: [],
  },
];

const Card = ({ id, frontImage, title }) => (
  <div className="col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] m-4 cursor-pointer">
    <div className="container transform-style preserve-3d perspective-1000 relative">
      <div
        className="front bg-cover bg-center rounded-xl shadow-lg h-auto min-h-[280px] relative"
        style={{ backgroundImage: `url(${frontImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="inner absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-bold">
          <p>{title}</p>
        </div>
      </div>
      <div className="back absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#cedce7] to-[#596a72] rounded-xl flex items-center justify-center p-8 text-white">
        <Link to={`/view-project/${id}`} className="text-lg font-semibold text-white hover:underline">
          View More Details
        </Link>
      </div>
    </div>
  </div>
);

const OurProjects = () => (
  <div>
    <Navbar />
    <MainTitle title="Our Projects" />
    <div className="wrapper mt-16 sm:pt-36 w-[90%] mx-auto max-w-[80rem]">
      <Title />
      <TitleProject />
      <div className="cols flex flex-wrap justify-center">
        {STATIC_PROJECTS.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            frontImage={project.after_pictures[0]}
            title={project.name}
          />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

/*
BACKEND FETCH KEPT FOR REFERENCE:
useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(Api.GET.PROJECTSLIST);
    setExtractedList(response.data.map((item) => ({
      id: item.id,
      name: item.name,
      first_after_picture: item.after_pictures[0],
    })));
  };
  fetchData();
}, []);
*/

export default OurProjects;
