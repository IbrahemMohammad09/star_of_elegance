import SideBar from "../SharedComponents/SideBar";
import edit from "../../../assets/image/Dashboard/projects/edit.svg";
import view from "../../../assets/image/Dashboard/services/view.svg";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <>
      <div className="md:flex  gap-14">
        <SideBar />
        <div className="pl-14 flex-1 md:pl-0">
          <p className=" mb-10 text-black font-bold text-2xl mt-32 Poppins ">
            Dashboard
          </p>
          <p className="font-semibold text-2xl mb-14 Poppins">Orders</p>
          <div className="flex flex-col md:flex-row gap-24">
            <Link
              to={"/dashboard/order/order-view"}
              className=" flex gap-6 font-semibold text-base text-black max-w-64 rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]"
            >
              <img src={view} className="w-6" alt="icon-view" />
              <p className="Poppins font-semibold text-base">View</p>
            </Link>
            <Link
              to={"/dashboard/order/edit"}
              className=" flex gap-6 font-semibold text-base text-black max-w-64 rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]"
            >
              <img src={edit} className="w-6" alt="icon-add" />
              <p className="Poppins font-semibold text-base">Edit</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
