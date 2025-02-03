import { Link } from 'react-router-dom';
import './ServiceCard.css' 
import vector from '../../assets/image/Services/vector.svg'
import { div } from 'framer-motion/client';
const ServiceCard = ({ service }) => {
    const isEven = service.id % 2 !== 0;

    return (
        <div className='flex items-center justify-center'>
      <div className="flex flex-col items-start gap-16 max-w-[600px] px-14 md:pl-14 md:pr-36 md:flex-row  md:justify-center  container-CardService mb-36 ">
        <img src={service.image}alt="photo" className={`max-w-full w-80 md:w-96 object-cover rounded-md transition-transform duration-300 hover:scale-110 ${
            isEven ? "order-2 md:order-1" : "order-1 md:order-2"}`}/>
        <div className={`flex flex-col items-center sm:items-center md:items-start gap-6 md:gap-11 text-black md:text-start container-text ${
          isEven ? "order-1 md:order-2" : "order-2 md:order-1"}`}>
          <p className="text-xl md:text-4xl text-center container-text md:text-start font-normal kanit">{service.title}</p>
          <p className="text-lg md:text-2xl max-w-full w-80 md:w-96 nun font-normal ">{service.description}</p>
          <Link to="/">
          <button className="flex gap-3 border border-1px border-[#B47F3D] w-60 py-2 px-10  md:w-72 md:py-4 md:px-12 mt-7 text-[#B47F3D] font-normal text-xl right-4 rounded-lg  hover:bg-[#B47F3D] letter-spacing kanit hover:text-white kanit">Book Now <img src={vector} className='mt-4 md:mt-1' alt='icon'/></button>
          </Link>
        </div>
      </div>
      </div>
    );
};

export default ServiceCard;
