import ServiceCard from "../components/sharedComponents/ServiceCard";
import Navbar from "../components/Navbar";
import Title from "../components/sharedComponents/Title";
import Footer from "../components/Footer";
import service1 from "../assets/image/Services/service1.svg"
import service2 from "../assets/image/Services/service2.svg"
import service3 from "../assets/image/Services/service3.svg"
import service4 from "../assets/image/Services/service4.svg"
import service5 from "../assets/image/Services/service5.svg"
import service6 from "../assets/image/Services/service6.svg"
import service7 from "../assets/image/Services/service7.svg"


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
  
  return(
    <div className="">
      <Navbar/>
      <Title/>
      <div>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />

          //   <div className="flex flex-col items-start gap-16 w-full px-14 md:pl-14 md:pr-36 md:flex-row  md:justify-evenly mt-28 container-CardService mb-36">
          //   <img src={service.image}alt="photo" className={`max-w-full w-80 md:w-96 object-cover rounded-md ${
          //       isEven ? "order-2 md:order-1" : "order-1 md:order-2"}`}/>
          //   <div className={`flex flex-col items-center sm:items-center md:items-start gap-6 md:gap-11 text-black md:text-start container-text ${
          //     isEven ? "order-1 md:order-2" : "order-2 md:order-1"}`}>
          //     <p className="text-xl md:text-4xl text-center container-text md:text-start font-normal kanit">{service.title}</p>
          //     <p className="text-lg md:text-2xl max-w-full w-80 md:w-96 nun font-normal ">{service.description}</p>
          //     <Link to="/">
          //     <button className="flex gap-3 border border-1px border-[#B47F3D] w-60 py-2 px-10  md:w-72 md:py-4 md:px-12 mt-7 text-[#B47F3D] font-normal text-xl right-4 rounded-lg  hover:bg-[#B47F3D] letter-spacing kanit hover:text-white kanit">Book Now <img src={Vector} className='mt-4 md:mt-1' alt='icon'/></button>
          //     </Link>
          //   </div>
          // </div>
          ))}
        </div>
      <Footer/>
    </div>
    );
};

export default Services;
