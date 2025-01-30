import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title, linkText }) => {
  return (
    <div className="text-center md:text-left space-y-16">
      <h2 className="text-7xl font-bold text-gray-900 mb-4">{title}</h2>
      <a
        href="#"
        className="text-amber-600 text-2xl font-medium flex items-center ml-4 justify-center md:justify-start group"
      >
        {linkText}
        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
      </a>
    </div>
  );
};

export default SectionHeader;
