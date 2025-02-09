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
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Our Projects", path: "/our-projects" },
  ];

  return (
    <nav className="w-[1023px] p-0 lg:w-full top-0 left-0 z-50 bg-transparent  fixed">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl 2xl:px-10 2xl:py-4 flex items-center justify-between lg:px-2 lg:py-2 w-[90%] max-w-[1200px]">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10 w-10 md:h-24 md:w-32" />
            <div className="hidden lg:block leading-tight">
              <p className="text-black font-bold text-lg">STAR OF</p>
              <p className="text-[#8B5715] font-semibold text-md">
                ELEGANCE <span className="text-[#B37E3C]">INC</span>
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-10 xl:space-x-20">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={` text-2xl transition ${
                    location.pathname === item.path
                      ? "text-[#8B5715] font-bold" // Active
                      : "hover:text-[#8B5715]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="mt-4 lg:hidden fixed flex items-center space-x-2 bg-white text-black text-lg px-4 py-2 rounded-full shadow-md hover:bg-[#8B5715] hover:text-white transition left-4"
      >
        <FiMenu />
        <span>Menu</span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="fixed top-[80px] left-[5%] w-[80%] lg:hidden flex flex-col items-center bg-white shadow-lg rounded-2xl z-50 divide-y divide-gray-200">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-black text-lg text-center hover:bg-[#8B5715] rounded-2xl hover:text-white px-4 py-3 transition ${
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
