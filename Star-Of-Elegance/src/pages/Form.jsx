import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/sharedComponents/Title";
import Footer from "../components/Footer";
export default function Form() {
    const { "service-name": serviceName } = useParams(); 
    return (
        <>
            <Navbar />
            <div className="mt-56">
                <Title />
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-4xl crimson text-[#8B5715]">Appointment Form</p>
                <p className="font-normal text-xl text-center md:text-start crimson mt-5 mb-10 text-black">
                    Please fill the form below, it will only take 3 minutes
                </p>
                <div className="flex justify-between items-center p-4">
                    <form className="mt-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full">
                                <label className="font-medium text-lg text-black crimson">Your Name</label>
                                <input type="text" className="w-full md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" placeholder="JAN" />
                            </div>
                            <div className="w-full">
                                <label className="font-medium text-lg text-black crimson">Email</label>
                                <input type="email" className="w-full md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" placeholder="Example@Example.com" />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row gap-8">
                            <div className="w-full">
                                <label className="font-medium text-lg text-black crimson">Phone</label>
                                <input type="tel" className="w-full md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" placeholder="657-473-9783" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="serviceType" className="font-medium text-lg text-black crimson">Select Your Service Type</label>
                                <select className="w-full md:max-w-[341px] text-[#949494] source font-light mt-1 block text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" >
                                    <option value="">Restaurants</option>
                                    <option value="service1">Hotel</option>
                                    <option value="service2">Residential</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-2">
                            <label htmlFor="serviceName" className="font-medium text-lg text-black crimson">Select Service Name</label>
                            <select className="w-full md:max-w-[341px] text-[#949494] source font-light text-2xl mt-1 bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3"
                               defaultValue={decodeURIComponent(serviceName)} >
                                <option value={decodeURIComponent(serviceName)}>{decodeURIComponent(serviceName)}</option>
                                <option value="Custom Furniture manufacturing">Custom Furniture manufacturing</option>
                                <option value="3D Design and CNC Fabrication">3D Design and CNC Fabrication</option>
                                <option value="Custom headboard design and Implementation">Custom headboard design and Implementation</option>
                                <option value="Furniture restoration and Reupholstery">Furniture restoration and Reupholstery</option>
                                <option value="Reviving old furniture with modern techniques">Reviving old furniture with modern techniques</option>
                                <option value="Upholstery services">Upholstery services</option>
                                <option value="Curtains and blackout curtains">Curtains and blackout curtains</option>
                            </select>
                        </div>
                        <div className="mt-20">
                            <label className="font-medium text-lg text-black crimson">Description (Optional)</label>
                            <textarea className="bg-white border border-[#8B5715] rounded-lg h-40 p-3 w-full"></textarea>
                        </div>
                    </form>
                </div>
                <button type="submit" className="boder-3 w-[290px] bg-white text-[#8B5715] font-semibold text-4xl border border-3 border-[#8B5715] rounded-2xl py-4 px-6 hover:text-white hover:bg-[#8B5715] my-20 crimson">
                    Book Now
                </button>
            </div>
            <Footer />
        </>
    );
}
