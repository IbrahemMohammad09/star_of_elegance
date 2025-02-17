import SideBar from "../SharedComponents/SideBar"
import lineservices from "../../../assets/image/Dashboard/Services/lineservices.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../../constant/api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../pages/Loading";

export default function ServiceEdit() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.SERVICELIST);
        const serviceId = Number(id);
        const foundService = response.data.find(service => service.id === serviceId);
        
        if (foundService) {
          setSelectedService(foundService);
          setName(foundService.name);
          setDescription(foundService.description);
        }
      } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
      }
    };

    fetchData();
  }, [id]);

  // ✅ منع الخطأ عند تحميل البيانات
  if (!selectedService) {
    return <Loading/>;
  }

  return (
    <>
      <div className="md:flex gap-14">
        <SideBar />
        <div className="pl-28 md:pl-0">
          <p className="font-bold text-2xl mt-16 mb-6 Poppins">Dashboard</p>
          <p className="font-semibold text-2xl Poppins">Services</p>
          <div className="my-14">
            <p className="font-bold text-xl dm">Details</p>
            <p className="text-[#5F6165] font-normal text-lg dm">Update The service here.</p>
            <img src={lineservices} className="mt-7" alt="line" />
          </div>
          <form>
            <div className="flex flex-col mb-7 mr-4">
              <label className="font-extrabold text-xl text-black dm">Name Of Service</label>
              <textarea 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                placeholder="Custom Furniture Manufacturing" 
                className="h-28 mr-3 w-full pl-3 py-7 border border-[#E9EAEC] rounded-lg dm">
              </textarea>
            </div>
            <div className="flex flex-col mb-7 mr-4">
              <label className="font-extrabold text-xl text-black dm">Description</label>
              <textarea 
                onChange={(e) => setDescription(e.target.value)} 
                value={description}  
                placeholder="We create unique, high-quality furniture" 
                className="h-28 w-full pl-3 py-9 border border-[#E9EAEC] rounded-lg dm">
              </textarea>
            </div>
            {selectedService?.picture && (
              <div className="flex flex-row">
                <img className="h-[350px] w-[350px] mb-10" src={selectedService.picture} alt="Service" />
              </div>
            )}
            <Link to={"/dashboard/services/add/photo"} className="font-extrabold text-xl text-white px-20 py-4 bg-[#B47F3E] rounded-2xl Abhaya hover:bg-white hover:text-[#B47F3E] hover:border-[#B47F3E] hover:border-2">Next</Link>
          </form>
        </div>
      </div>
    </>
  );
}
