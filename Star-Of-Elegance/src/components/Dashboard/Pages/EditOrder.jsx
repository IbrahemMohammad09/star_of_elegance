import { motion } from "framer-motion";
import DashboardOrderTitle from "../SharedComponents/DashboardOrder";
import SideBar from "../SharedComponents/SideBar";
function EditOrder() {
  return (
    <div className=" md:flex  h-screen gap-14 ">
      <SideBar />
      <motion.div
        className="p-6 sm:p-10  min-h-screen flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DashboardOrderTitle />
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Edit Order
        </h1>
        <form className="max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block mb-2  font-bold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="block mb-2  font-bold">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <label className="block mb-2  font-bold">Phone</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]"
              placeholder="Enter Phone Number"
            />
          </div>
          <div>
            <label className="block mb-2  font-bold">Service Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]"
              placeholder="Enter Service Name"
            />
          </div>
          <div>
            <label className="block mb-2  font-bold">Description</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div>
            <label className="block mb-2  font-bold">Type</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]"
              placeholder="Enter Type"
            />
          </div>
          <div>
            <label className="block mb-2  font-bold">Status</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B5715]">
              <option value="new">New</option>
              <option value="finish">Finish</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B5715] text-white py-2 rounded hover:bg-opacity-90"
          >
            Save Changes
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default EditOrder;
