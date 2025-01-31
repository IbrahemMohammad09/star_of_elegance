import "./App.css";

import ClientsReviews from "./sections/ClientsReviews";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";

import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter , Routes , Route } from "react-router-dom"






function App() {
  return (
    <>

      <div className="w-[1896px]">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsReviews />
      </div>


//     <BrowserRouter>
//                <Routes>
//                  <Route index element={<Home/>}/>
//                  <Route path="/aboutus" element={<About/>} />
//                </Routes>
            
//             </BrowserRouter>


    </>
  );
}

export default App;
