import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import Loading from "./pages/Loading";
import ScrollToTop from "./components/sharedComponents/ScrollToTop";
import HomeDashoard from "./components/Dashboard/Pages/Home";
import Login from "./components/Dashboard/Pages/Login";
import Services4 from "./components/Dashboard/Pages/Service4";
import Services2 from "./components/Dashboard/Pages/Service2";
import Services3 from "./components/Dashboard/Pages/Service3";
import Service from "./components/Dashboard/Pages/Service";
import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

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
          <Route path="/about-us" element={<About />} />
          <Route path="/order-successful" element={<OrderSuccessful />} />
          <Route path="/message-successful" element={<MessageSuccessful />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactInformation />} />
          <Route path="/book-your-service/:service-name" element={<Form />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/view-project/:id" element={<OurProject />}/>

          {/* <Route path="/dashboard" element={<Login />} />
          <Route path="/dashboard/home" element={<HomeDashoard />} />
          <Route path="/dashboard/services" element={<Service/>} />
          <Route path="/dashboard/services/view" element={<Services2/>} />
          <Route path="/dashboard/service/edit" element={<Services3/>} />
          <Route path="/dashboard/services/detalis" element={<Services4/>} /> */}

          <Route path="/error" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
