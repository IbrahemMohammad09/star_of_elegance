import { MdOutlineDeleteSweep } from "react-icons/md";
// import { FiEdit3 } from "react-icons/fi";
import { FaLongArrowAltDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import DashboardOrderTitle from "../SharedComponents/DashboardOrder";
import SideBar from "../SharedComponents/SideBar";
import React from 'react';

// BACKEND IMPORTS - DISABLED FOR STATIC DASHBOARD
// import axios from "axios";
// import Api from "../../../constant/api";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const STATIC_ORDERS = [
  { id: 1, name: "Olivia Martin", email: "olivia@example.com", phone: "+1 647 555 0101", service_name: "Custom Furniture Design", description: "Looking for a custom dining table and matching chairs.", service_type: "residential", status: "new" },
  { id: 2, name: "Noah Anderson", email: "noah@example.com", phone: "+1 647 555 0102", service_name: "Interior Furniture Solutions", description: "Please contact me about furnishing a boutique hotel lobby.", service_type: "hotels", status: "finished" },
  { id: 3, name: "Sophia Taylor", email: "sophia@example.com", phone: "+1 647 555 0103", service_name: "Bespoke Furniture", description: "I need a consultation for a new restaurant seating area.", service_type: "restaurants", status: "new" },
];

function ViewOrder() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [order] = useState(STATIC_ORDERS);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // عدد العناصر في كل صفحة

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // BACKEND FETCH KEPT FOR REFERENCE:
  // const response = await axios.get(Api.GET.ORDERLIST);
  // setOrder(response.data.reverse());
  // BACKEND DELETE KEPT FOR REFERENCE:
  // await axios.delete(`https://starofelegance.com/api/requests/${id}/delete/`);
  // BACKEND STATUS UPDATE KEPT FOR REFERENCE:
  // const newStatus = status === "new" ? "finished" : "new";
  // await axios.put(`https://starofelegance.com/api/requests/${id}/update/`, {
  //   name, email, phone, service_name, description,
  //   status: newStatus, service_type,
  // }, { headers: { "Content-Type": "application/json" } });

  // حساب عدد الصفحات
  const totalPages = Math.ceil(order.length / itemsPerPage);

  // تحديد العناصر المعروضة في الصفحة الحالية
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = order.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="md:flex h-screen gap-14">
      <SideBar />
      <div className="p-6 sm:p-10 flex-1 space-y-10">
        <DashboardOrderTitle />

        <div className="overflow-x-auto">
          <table className="w-full shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-5 px-6">Name</th>
                <th className="py-5 px-6">Email Address</th>
                <th className="py-5 px-6">Phone</th>
                <th className="py-5 px-6">Service Name</th>
                <th className="py-5 px-6">Description</th>
                <th className="py-5 px-6">Type</th>
                <th className="py-5 px-6 text-left text-gray-700 font-semibold flex items-center gap-2">
                  Status
                  <FaLongArrowAltDown className="text-gray-500 text-base" />
                </th>
                <th className="py-5 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr className="border-b">
                    <td className="p-6 font-bold">{item.name}</td>
                    <td className="p-6">{item.email}</td>
                    <td className="p-6">{item.phone}</td>
                    <td className="p-6">{item.service_name}</td>
                    <td
                      className="p-6 cursor-pointer max-w-xs truncate"
                      onClick={() => toggleExpand(item.id)}
                    >
                      {item.description}
                    </td>
                    <td className="p-6">{item.service_type}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        {item.status === "new" ? (
                          <button type="button" disabled title="Static preview only" className="cursor-not-allowed">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                              <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                              New
                            </span> 
                          </button>
                        ) : (
                          <button type="button" disabled title="Static preview only" className="cursor-not-allowed">
                            <span className="bg-[#FFEDDB] text-[#FF850B] px-3 py-1 rounded-full flex items-center">
                              <span className="w-2 h-2 bg-[#FF850B] rounded-full mr-2"></span>
                              Finish
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-3 py-6 flex space-x-4">
                      <MdOutlineDeleteSweep aria-label="Delete disabled in static preview" className="text-gray-500 text-2xl opacity-50" />
                      {/* <FiEdit3
                        className="text-gray-500 text-2xl cursor-pointer"
                        onClick={() => navigate("/dashboard/order/edit")}
                      /> */}
                    </td>
                  </tr>
                  {expandedRow === item.id && (
                    <tr>
                      <td colSpan={8} className="p-6 bg-gray-50">
                        {item.description}
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
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center space-x-2" 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-[#8B5715] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button 
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center space-x-2" 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
