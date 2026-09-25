import React, { useState, useEffect } from 'react';
import Star from "../../../assets/image/Dashboard/Rate/Star.svg";
import SideBar from '../SharedComponents/SideBar';
import right from "../../../assets/image/Dashboard/Rate/right.svg";
import starempty from "../../../assets/image/Dashboard/Rate/starempty.svg";
import left from "../../../assets/image/Dashboard/Rate/left.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';
import Api from '../../../constant/api';

const ITEMS_PER_PAGE = 7; // عدد العناصر في كل صفحة

const Rate = () => {
  const [initialData, setInitialData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.RATESALLLIST);
        setInitialData(response.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(initialData.length / ITEMS_PER_PAGE);

  const paginatedData = initialData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const starImages = {
    filled: Star,
    empty: starempty,
  };

  const stateChange = async (id, itemState,name,message,rate) => {
    try {
        const response = await axios.put(
            `https://starofelegance.com/api/rates/${id}/update/`,
            { id : id,
              name : name,
              message : message,
              rate : rate,
              state: itemState,
             },
            { headers: { "Content-Type": "application/json" } }
        );

        setInitialData(prevData =>
            prevData.map(item => 
                item.id === id ? { ...item, state: itemState } : item
            )
        );

        fetchData();

    } catch (error) {
      
    }
};

const deleteRate = async (id) => {
  const response = await axios.delete(`https://starofelegance.com/api/rates/${id}/delete/`)
}

const deleteItem =(id,name)=>{

  const confirmDelete = window.confirm(`Are you sure you want to delete the rate sent from ${name}?`);

  if (confirmDelete) {
    deleteRate(id)
    alert(`${name}'s order was deleted`);
    fetchData();
  } 
}


  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className='mb-28 md:w-full pl-12 md:pl-0 mr-6 mt-11'>
        <p className='Poppins font-bold text-2xl'>Dashboard</p>
        <p className='Poppins font-semibold text-2xl my-6'>Rate</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className='bg-[#F9FAFB] border border-[#EAECF0]'>
                <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left">Name</th>
                <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left">Text Message</th>
                <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left">Status</th>
                <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-center">Rate</th>
                
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2 inter font-medium text-sm text-[#101828]">{item.name}</td>
                  <td className="px-4 py-2 inter font-medium text-xs text-[#667085]">{item.message}</td>
                  <td  className="px-4 py-2 inter font-medium text-xs text-[#667085]" >
                      {item.state ? (
                        <button onClick={()=>stateChange(item.id,!item.state,item.name,item.message,item.rate)}>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                            <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                            active
                          </span>
                        </button>
                        ) : (
                        <button onClick={()=>stateChange(item.id,!item.state,item.name,item.message,item.rate)}>
                          <span className="bg-[#FFEDDB] text-[#FF850B] px-3 py-1 rounded-full flex items-center">
                            <span className="w-2 h-2 bg-[#FF850B] rounded-full mr-2"></span>
                            inactive
                          </span>
                        </button>
                        )}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {Array(5).fill().map((_, index) => (
                      <img key={index} src={index < item.rate ? starImages.filled : starImages.empty} alt="star" className="inline w-4" />
                    ))}
                  </td>
                  <td className="px-4 py-5 space-x-2">
                    <button onClick={()=>deleteItem(item.id,item.name)}><RiDeleteBin6Line className='text-[#667085]' /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* أزرار التنقل بين الصفحات */}
          <div className='flex justify-between mx-3 mt-6'>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex gap-1 py-2 rounded-lg border w-[114px] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#B47F3E]'}`}
            >
              <img className=' mt-1 ' src={right} alt="right-arrow" />
              <span className='inter font-medium text-[#344054]'>Previous</span>
            </button>

            <div className='flex gap-3.5'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`text-[#667085]  inter font-medium text-base ${currentPage === index + 1 ? 'text-[#B47F3E] font-bold' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex  gap-1 py-2 rounded-lg border w-[114px] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#B47F3E]'}`}
            >
              <span className='inter font-medium text-[#344054] pl-4'>Next</span>
              <img className='w-3 mt-2 ml-1' src={left} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
