import SideBar from "../SharedComponents/SideBar";
import view from "../../../assets/image/Dashboard/services/view.svg";
import edit from "../../../assets/image/Dashboard/projects/edit.svg";
import delet from "../../../assets/image/Dashboard/projects/delete.svg";
import add from "../../../assets/image/Dashboard/services/add.svg";

import { Link } from "react-router-dom";
function DashboardProject() {
  return (
    <>
      <div className=" md:flex h-screen gap-14 ">
        <SideBar />
        <div className="pt-20 md:space-y-20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:ml-20 text-center sm:text-center md:text-start">
            Dashboard
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold md:ml-20 text-gray-700 mb-6 text-center sm:text-center md:text-start">
            Projects
          </h2>

          <div className="flex flex-col md:flex-row  gap-24 mx-4 container-card-dash">
            <Link
              to={"/dashboard/project/view"}
              className=" flex gap-6 max-w-[315px] font-semibold text-base text-black rounded shadow-xl  py-16 px-20 hover:border hover:border-[#B47F3E]"
            >
              <img src={view} className="w-6" alt="icon-View" />
              <p className="Poppins font-semibold text-base">View</p>
            </Link>
            <Link
              to={"/dashboard/project/add"}
              className=" flex gap-6 font-semibold text-base text-black max-w-64 rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]"
            >
              <img src={add} alt="icon-add" />
              <p className="Poppins font-semibold text-base">Add</p>
            </Link>
            {/* <Link
              to="/dashboard/project/add"
              className=" flex gap-6 max-w-[315px] font-semibold text-base text-black rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]"
            >
              <img src={edit} className="w-6" alt="icon-edit-project" />
              <p className="Poppins font-semibold text-base">Edit</p>
            </Link>
            <Link className=" flex gap-6 max-w-[315px] font-semibold text-base text-black rounded shadow-xl py-16 px-20 hover:border hover:border-[#B47F3E]">
              <img src={delet} className="w-6" alt="icon-delete-project" />
              <p className="Poppins font-semibold text-base">Delete</p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardProject;
