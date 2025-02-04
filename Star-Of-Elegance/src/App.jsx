import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import OrderSuccessful from "./pages/OrderSuccessful";
import MessageSuccessful from "./pages/MessageSuccessful";
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Services from "./pages/Services";
import ContactInformation from "./pages/ContactInformation";
import NotFoundPage from "./pages/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/aboutus" element={<About />} />
          <Route path="/ordersuccessful" element={<OrderSuccessful />} />
          <Route path="/messagesuccessful" element={<MessageSuccessful />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactInformation/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
