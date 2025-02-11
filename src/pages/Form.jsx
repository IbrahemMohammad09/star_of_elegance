import {  useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/sharedComponents/Title";
import Footer from "../components/Footer";
import './Form.css'
import { useState,useEffect} from "react";
import axios from "axios";
import Api from "../constant/api";
import { useNavigate } from "react-router-dom";


export default function Form() {
    const [serviceNames, setServiceNames] = useState([]);

    const navigate = useNavigate();

    const { "service-name": serviceName } = useParams(); 
    const serviceNameFinal = encodeURIComponent(serviceName.replace(/-/g, " ").replace(/\s+/g, " ")).replace(/%20/g, " ");

    const [services, setServices] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    const [selectedName, setSelectedName] = useState(""); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState(`I need to book this service (${serviceNameFinal})...`);
    const [type, setType] = useState("restaurants");
    const [loading,setLoading] = useState(false);
    
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(Api.GET.SERVICELIST);
            setServices(response.data);
            const extractedData = response.data.map(({ id, name }) => ({ id, name }));
            setServiceNames(extractedData);
          } catch {
            navigate('/error');
          } finally {
            setLoading(false); 
          }
        };
    
        fetchData();
      }, []);

      useEffect(() => {
        if (services.length > 0) {
            const foundService = services.find(service => service.name === serviceNameFinal);
            setSelectedName(foundService ? foundService.name : "");
        }
    }, [services, serviceNameFinal]);  



      const validateForm = () => {
        let newErrors = {};
        if (!name) newErrors.name = "This field is required";
        if (!email) newErrors.email = "This field is required";
        if (!phone) newErrors.phone = "This field is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        const requestData = {
            name,
            email,
            phone,
            service_name: selectedName,
            description: text,
            service_type:type
        };

        try {
            const response = await axios.post(Api.POST.CREATEORDER, requestData);
                navigate('/message-successful');
        } catch (error) {
                navigate('/error');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Navbar />
            <div className="mt-52">
                <Title />
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-4xl crimson text-[#8B5715]">Appointment Form</p>
                <p className="font-normal text-xl text-center md:text-start crimson mt-5 mb-10 text-black">
                    Please fill the form below, it will only take 3 minutes
                </p>
                <div className="flex justify-between items-center p-4">
                    <form className="mt-4">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full">
                                <label className="font-medium text-lg text-black crimson">Your Name</label>
                                <input 
                                    type="text" 
                                    className="w-full md:max-w-[341px] mt-1 font-light block shadow-lg text-2xl bg-white border  border-[#8B5715] rounded-lg p-3 h-14 source letter-spacing3" 
                                    placeholder="JAN"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div className="w-full">
                                <label className="font-medium text-lg text-black crimson">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 tt letter-spacing3" 
                                    placeholder="Example@Example.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row gap-8">
                            <div className="w-full">
                                <label className="font-medium text-lg text-black crimson tt">Phone</label>
                                <input 
                                    type="tel" 
                                    className="w-full  md:max-w-[341px] mt-1 block shadow-lg text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" 
                                    placeholder="657-473-9783"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="serviceType" className="font-medium text-lg text-black crimson">Select Your Service Type</label>
                                <select 
                                    className="w-full md:max-w-[341px] text-[#949494] source font-light mt-1 block text-2xl bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3" 
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                    >
                                    <option value="restaurants">Restaurants</option>
                                    <option value="hotels">Hotels</option>
                                    <option value="residential">Residential</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-2">
                            <label htmlFor="serviceName" className="font-medium text-lg text-black crimson">Select Service Name</label>
                            
                            <select
                                className="w-full  text-[#949494] source font-light text-2xl mt-1 bg-white border border-[#8B5715] rounded-lg p-3 h-14 letter-spacing3"
                                value={selectedName} 
                                onChange={(e)=> setSelectedName(e.target.value)}
                                >
                                <option value={decodeURIComponent(serviceName)}>{decodeURIComponent(serviceName)}</option>
                                {services.map(service => (
                                    <option key={service.id} value={service.name}>
                                        {service.name}
                                    </option>

                                    ))}
                            </select>
                            
                        </div>
                        <div className="mt-10">
                            <label className="font-medium text-lg text-black crimson">Description (Optional)</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Please provide the name of the service you wish to book along with its details."
                                className="bg-white border border-[#8B5715] rounded-lg h-40 p-3 w-full"
                                />
                        </div>
                    </form>
                </div>
                <button 
                    type="submit" 
                    className="boder-3 w-[290px] bg-white text-[#8B5715] font-semibold text-4xl border border-3 border-[#8B5715] rounded-2xl py-4 px-6 hover:text-white hover:bg-[#8B5715] my-20 crimson"
                    onClick={handleSubmit}
                    >
                    Book Now
                </button>
            </div>
            <Footer />
        </>
    );
}
