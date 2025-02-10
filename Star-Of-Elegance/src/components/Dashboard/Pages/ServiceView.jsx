import servicephoto from "../../../assets/image/Dashboard/services/servicephoto.svg"
import edit from "../../../assets/image/Dashboard/services/edit.svg"
import deleteicon from "../../../assets/image/Dashboard/services/deleteicon.svg"
import SideBar from "../SharedComponents/SideBar";
import '../Dashboard.css'
const services = [
    {
        title: "Custom Furniture manufacturing",
        description: "We create unique, high-quality furniture tailored to your style and needs. Whether it's for your home or office, we bring your vision to life with precision and craftsmanship.",
        img:servicephoto ,
    },
    {
        title: "Custom Furniture manufacturing",
        description: "We create unique, high-quality furniture tailored to your style and needs. Whether it's for your home or office, we bring your vision to life with precision and craftsmanship.",
        img: servicephoto,
    },
    {
        title: "Custom Furniture manufacturing",
        description: "We create unique, high-quality furniture tailored to your style and needs. Whether it's for your home or office, we bring your vision to life with precision and craftsmanship.",
        img: servicephoto,
    },
    
];

export default function ServiceView(){
    return<>
        <div className="md:flex  gap-14">
            <SideBar/>
        <div className="pl-14 md:pl-0">
            <p className=" mb-10 text-black font-bold text-2xl mt-32 Poppins ">Dashboard</p>
            <p className="font-semibold text-2xl mb-14 Poppins">Services</p>
            {services.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-24 md:w-[1100px] justify-center items-center mb-20 container-services2">
                    <div className="flex bg-[#D9D9D9] rounded-lg child-services ">
                        <img src={service.img} alt={service.title} />
                        <div className="pl-8 ">
                            <p className="font-normal text-3xl text-black kanit mb-12">{service.title}</p>
                            <p className="font-normal text-xl text-black nun mb-14">{service.description}</p>
                        </div>
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center w-44 gap-3.5 px-1.5 h-14 rounded-lg ">
                        <img src={deleteicon} className="w-8" alt="icon" />
                        <img src={edit} className="w-8" alt="icon" />
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>;
}