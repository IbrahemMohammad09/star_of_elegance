import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SideBar from "../SharedComponents/SideBar";

import axios from "axios";
import Api from "../../../constant/api";
import { useNavigate } from "react-router-dom";

function ViewMessages() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [message, setMessage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.MESSAGELIST);
        setMessage(response.data.reverse());
      } catch (error) {
        navigate('/error')
      }
    };
    fetchData();
  }, [message]);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMessages = message.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(message.length / itemsPerPage);

  const deleteMessage = async (id) =>{
    try{
      await axios.delete(`https://starofelegance.com/api/messages/${id}/delete/`) 
      fetchData()
    }catch{}
  }
  
  const deleteItem =(id,name)=>{

      const confirmDelete = window.confirm(`Are you sure you want to delete the message sent from ${name}?`);

      if (confirmDelete) {
          deleteMessage(id)
          alert(`${name}'s message was deleted`);
      } 
  }

  return (
    <>
      <div className="md:flex gap-14">
        <SideBar />
        <div className="p-6 sm:p-10 flex-1 space-y-10 min-h-screen">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:ml-20 text-center sm:text-center md:text-start">
            Dashboard
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold md:ml-20 text-gray-700 mb-6 text-center sm:text-center md:text-start">
            Message
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="py-5 px-6">Name</th>
                  <th className="py-5 px-6">Email Address</th>
                  <th className="py-5 px-6">Phone</th>
                  <th className="py-5 px-6">Text Message</th>
                  <th className="py-5 px-6">Delete Message</th>
                  {/* <th className="py-5 px-6"></th> */}
                </tr>
              </thead>
              <tbody>
                {currentMessages.map((item) => (

                  <React.Fragment key={item.id}>
                    <tr className="border-b">
                      <td className="p-6 font-bold">{item.name}</td>
                      <td className="p-6">{item.email}</td>
                      <td className="p-6">{item.phone}</td>
                      <td
                        className="p-6 cursor-pointer max-w-xs truncate"
                        onClick={() => toggleExpand(item.id)}
                      >
                        {item.text}
                      </td>
                      <td className="p-3 py-6">
                        <button onClick={()=> deleteItem(item.id,item.name)} >
                          <MdOutlineDeleteSweep className="text-gray-500 text-2xl cursor-pointer" />
                        </button>
                      </td>
                    </tr>
                    {expandedRow === item.id && (
                      <tr>
                        <td colSpan={5} className="p-6 bg-gray-50">
                          {item.text}
                        </td>
                      </tr>
                    )}
                    </React.Fragment>

                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Section */}
          <div className="flex justify-between items-center space-x-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center space-x-2"
            >
              <FaArrowLeft />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-[#8B5715] text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center space-x-2"
            >
              <span>Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewMessages;
