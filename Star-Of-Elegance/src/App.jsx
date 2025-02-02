import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import OrderSuccessful from "./pages/OrderSuccessful";
import MessageSuccessful from "./pages/MessageSuccessful";
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Services from "./pages/Services";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
