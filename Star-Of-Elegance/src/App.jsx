import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import Loading from "./pages/Loading";
import ScrollToTop from "./components/sharedComponents/ScrollToTop";
import SideBar from "./components/Dashboard/SharedComponents/SideBar";

// استخدم React.lazy لتحميل الصفحات بشكل ديناميكي
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OrderSuccessful = lazy(() => import("./pages/OrderSuccessful"));
const MessageSuccessful = lazy(() => import("./pages/MessageSuccessful"));
const Services = lazy(() => import("./pages/Services"));
const ContactInformation = lazy(() => import("./pages/ContactInformation"));
const NotFoundPage = lazy(() => import("./pages/Error"));
const Form = lazy(() => import("./pages/Form"));
const OurProjects = lazy(() => import('./pages/OurProjects'))
const OurProject = lazy (() => import('./pages/OurProject'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/order-successful" element={<OrderSuccessful />} />
          <Route path="/message-successful" element={<MessageSuccessful />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactInformation />} />
          <Route path="/book-your-service/:service-name" element={<Form />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="view-project" element={<OurProject />}/>
          <Route path="*/" element={<Navigate to={'/error'} />} />
          <Route path="/error" element={<NotFoundPage />} />
          <Route path="/side" element={<SideBar />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
