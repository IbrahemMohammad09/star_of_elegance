import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Our Projects", path: "/ourprojects" },
  ];

  return (
    <nav className="w-full top-0 left-0 z-50 bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center mt-20 lg:mt-0 md:space-x-2 mx-auto md:mx-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-16 lg:z-50 hidden lg:block  md:h-28 md:w-32 mx-auto md:mx-0"
          />
          <div className="hidden lg:block leading-tight">
            <p className="text-black font-bold text-lg">STAR OF</p>
            <p className="text-[#8B5715] font-semibold text-md">
              ELEGANCE <span className="text-[#B37E3C]">INC</span>
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-10 xl:space-x-20 mx-auto">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-black text-2xl hover:text-[#8B5715] transition ${
                  location.pathname === item.path ? "text-[#8B5715]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden lg:z-50 flex items-center space-x-2 bg-white text-black text-lg px-4 py-2 rounded-full shadow-md hover:bg-[#8B5715] hover:text-white transition absolute left-4"
        >
          <FiMenu />
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute  top-[80px] left-[5%] w-[90%]  lg:hidden flex flex-col items-center bg-white shadow-lg rounded-2xl z-50 divide-y divide-gray-200">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-black text-lg text-center hover:bg-[#8B5715] rounded-2xl  hover:text-white px-4 py-3 transition ${
                  location.pathname === item.path
                    ? "bg-[#8B5715] text-white"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
