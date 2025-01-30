import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/image/HomePage/0ee3342a2f15112216948762df2356e3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" w-full top-0 left-0 z-50 bg-transparent p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-28 w-32 z-50" />
          <div className="leading-tight">
            <p className="text-black font-bold text-lg">STAR OF</p>
            <p className="text-[#8B5715] font-semibold text-md">
              ELEGANCE <span className="text-[#B37E3C]">INC</span>
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-20 mx-auto ">
          {["Home", "About Us", "Services", "Contact Us", "Our Projects"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="text-black text-2xl  hover:text-brown-700 transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-black text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white p-4 shadow-lg rounded-lg">
          {["Home", "About Us", "Services", "Contact Us", "Our Projects"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="text-black  hover:text-brown-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
