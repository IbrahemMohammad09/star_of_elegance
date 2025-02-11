import { MdOutlineDeleteSweep } from "react-icons/md";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SideBar from "../SharedComponents/SideBar";
function ViewMessages() {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

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
                  <th className="py-5 px-6">Date</th>
                  <th className="py-5 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7].map((id) => (
                  <>
                    <tr key={id} className="border-b">
                      <td className="p-6 font-bold">Olivia Rhye</td>
                      <td className="p-6">olivia@untitledui.com</td>
                      <td className="p-6">657-473-9783</td>
                      <td
                        className="p-6 cursor-pointer max-w-xs truncate"
                        onClick={() => toggleExpand(id)}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo nisi aperiam cum nihil beatae vero officia eveniet.
                        Voluptatum, sapiente iure.
                      </td>
                      <td className="p-6">2025-02-10</td>
                      <td className="p-3 py-6">
                        <MdOutlineDeleteSweep className="text-gray-500 text-2xl cursor-pointer" />
                      </td>
                    </tr>
                    {expandedRow === id && (
                      <tr>
                        <td colSpan={6} className="p-6 bg-gray-50">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Asperiores cupiditate quidem nisi nihil
                          repellendus. Consectetur quod ipsa, enim cum minus
                          error eius quae, nesciunt repudiandae id illo dolores
                          rerum ducimus nulla et molestiae dolorem voluptas
                          quisquam. Illo dolorum deleniti doloribus enim
                          repellendus neque, illum repudiandae voluptate, rerum
                          architecto asperiores fugiat.
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
    </>
  );
}

export default ViewMessages;
