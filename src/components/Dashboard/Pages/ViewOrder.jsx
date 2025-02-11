import { MdOutlineDeleteSweep } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { FaLongArrowAltDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardOrderTitle from "../SharedComponents/DashboardOrder";
import SideBar from "../SharedComponents/SideBar";

function ViewOrder() {
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className=" md:flex h-screen  gap-14 ">
      <SideBar />
      <div className="p-6 sm:p-10 flex-1 space-y-10 ">
        <DashboardOrderTitle />

        <div className="overflow-x-auto">
          <table className=" w-full shadow-md rounded-lg overflow-hidden">
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
              {[1, 2, 3, 4].map((id) => (
                <>
                  <tr key={id} className="border-b">
                    <td className="p-6 font-bold">Demi Wilkinson</td>
                    <td className="p-6">demi@untitledui.com</td>
                    <td className="p-6"> 657-473-9783</td>
                    <td className="p-6">Service Name</td>
                    <td
                      className="p-6 cursor-pointer max-w-xs truncate"
                      onClick={() => toggleExpand(id)}
                    >
                      I need a service that requires extensive details and
                      information.
                    </td>
                    <td className="p-6">restaurant</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        {id % 2 === 0 ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                            <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                            New
                          </span>
                        ) : (
                          <span className="bg-[#FFEDDB] text-[#FF850B] px-3 py-1 rounded-full flex items-center">
                            <span className="w-2 h-2 bg-[#FF850B] rounded-full mr-2"></span>
                            Finish
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 py-6 flex space-x-4">
                      <MdOutlineDeleteSweep className="text-gray-500 text-2xl cursor-pointer" />
                      <FiEdit3
                        className="text-gray-500 text-2xl cursor-pointer"
                        onClick={() => navigate("/dashboard/order/edit")}
                      />
                    </td>
                  </tr>
                  {expandedRow === id && (
                    <tr>
                      <td colSpan={8} className="p-6 bg-gray-50">
                        Full description: I need a service that requires
                        extensive details and information, and this should be
                        fully visible when expanded.
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-between items-center space-x-4 mt-6">
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center space-x-2">
            <FaArrowLeft />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-[#8B5715] text-white rounded">
              1
            </button>
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              2
            </button>
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              3
            </button>
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              4
            </button>
          </div>

          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center space-x-2">
            <span>Next</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
