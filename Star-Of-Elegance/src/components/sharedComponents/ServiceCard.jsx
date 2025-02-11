import { Link } from "react-router-dom";
import "./ServiceCard.css";
import vector from "../../assets/image/Services/vector.svg";

const ServiceCard = ({ service }) => {
    const isEven = service.id % 2 !== 0;
    const formattedTitle = encodeURIComponent(service.name.replace(/\s+/g, "-"));
    
    return (    
      <div className="flex items-center justify-center">
        <div className={`flex flex-col items-start gap-16 max-w-[600px] px-6 md:pl-14 md:px-36 md:flex-row md:justify-center container-CardService mb-32 ${isEven ? "md:flex-row-reverse" : ""}`}>
          <img src={service.picture} alt="photo" className="max-w-full w-80 md:w-96 object-cover rounded-md transition-transform duration-300 hover:scale-110"/>
          <div className="flex flex-col items-center md:items-start md:text-start md:gap-11 space-y-4 text-black text-center container-text">
            <p className="text-xl md:text-4xl font-normal kanit">{service.name}</p>
            <p className="text-lg md:text-2xl max-w-full w-80 md:w-96 nun font-normal">{service.description}</p>
            <Link to={`/book-your-service/${formattedTitle}`} className="flex gap-3 border border-[#B47F3D] w-60 py-2 px-10 md:w-72 md:py-4 md:px-12 mt-7 text-[#B47F3D] font-normal text-xl rounded-lg hover:bg-[#B47F3D] hover:text-white kanit letter-spacing">
              Book Now <img src={vector} className="mt-4 md:mt-1" alt="icon"/>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;
