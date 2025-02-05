import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/sharedComponents/Title";
const NotFoundPage = () => {
  return (
    <div className="pt-20 h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center  text-center py-20 p-4">
        <Title />
        {/* Page Title with Animation */}
        <motion.h1
          className="text-6xl font-bold text-[#8B5715] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Oops! Error 404
        </motion.h1>

        {/* Message with Animation */}
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Something went wrong! The page you are looking for does not exist.
        </motion.p>

        {/* Button with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-[#8B5715] text-white rounded-full shadow-md hover:bg-[#B37E3C] transition"
          >
            Go Back to Home
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
