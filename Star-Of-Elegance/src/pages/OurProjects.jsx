import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainTitle from "../components/sharedComponents/MainTitle";
import Title from "../components/sharedComponents/Title";
import "./OurProjects.css";
import TitleProject from "../components/TitleProject";
import axios from "axios";
import Api from "../constant/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Card = ({ id,frontImage, title }) => (
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
        <a
          href={`/view-project/${id}`}
          className="text-lg font-semibold text-white hover:underline"
        >
          View More Details
        </a>
      </div>
    </div>
  </div>
);

const OurProjects = () => {
  const [loading, setLoading] = useState(true);
  const [extractedList,setextractedList] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchData = async  () =>{
      try{
        const response = await axios.get(Api.GET.PROJECTSLIST);

        const extracted = response.data.map(item => ({
          id: item.id,
          name: item.name,
          first_after_picture: item.after_pictures.images[0] 
      }));

      setextractedList(extracted)
      // console.log(extracted.name)
      
      } catch{
        navigate('/error');
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  },[])
  


  return (
    <div>
      <Navbar />
      <MainTitle title={"Our Projects"} />
      <div className="wrapper mt-16 sm:pt-36 w-[90%] mx-auto max-w-[80rem]">
        <Title />
        <TitleProject/>
        {loading?(
          <Loading />
        ):(
          <div className="cols flex flex-wrap justify-center">
          {extractedList.map((card) => (
            <Card key={card.id} id={card.id} frontImage={card.first_after_picture} title={card.name} />
          ))}
        </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default OurProjects;
