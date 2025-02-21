import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./pages/Loading";
import ScrollToTop from "./components/sharedComponents/ScrollToTop";
import ProtectedRoute from "./components/Dashboard/SharedComponents/ProtectedRoute ";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OrderSuccessful = lazy(() => import("./pages/OrderSuccessful"));
const MessageSuccessful = lazy(() => import("./pages/MessageSuccessful"));
const Services = lazy(() => import("./pages/Services"));
const ContactInformation = lazy(() => import("./pages/ContactInformation"));
const NotFoundPage = lazy(() => import("./pages/Error"));
const Form = lazy(() => import("./pages/Form"));
const OurProjects = lazy(() => import("./pages/OurProjects"));
const OurProject = lazy(() => import("./pages/OurProject"));
const Login = lazy(() => import("./components/Dashboard/Pages/Login"));

const DashboardPages = {
  HomeDashoard: lazy(() => import("./components/Dashboard/Pages/Home")),
  ServiceDetalis: lazy(() => import("./components/Dashboard/Pages/ServiceDetalis")),
  ServiceView: lazy(() => import("./components/Dashboard/Pages/ServiceView")),
  ServiceEdit: lazy(() => import("./components/Dashboard/Pages/ServiceEdit")),
  Service: lazy(() => import("./components/Dashboard/Pages/Service")),
  Rate: lazy(() => import("./components/Dashboard/Pages/Rate")),
  ViewOrder: lazy(() => import("./components/Dashboard/Pages/ViewOrder")),
  ViewMessage: lazy(() => import("./components/Dashboard/Pages/ViewMessages")),
  DashboardProject: lazy(() => import("./components/Dashboard/Pages/DashboardProject")),
  ProjectView: lazy(() => import("./components/Dashboard/Pages/ProjectsView")),
  ProjectAdd: lazy(() => import("./components/Dashboard/Pages/ProjectDetails")),
  ProjectAddPhoto: lazy(() => import("./components/Dashboard/Pages/ProjectAddPhoto")),
  ServiceAdd: lazy(() => import("./components/Dashboard/Pages/ServiceAdd")),
};

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
          <Route path="/view-project/:id" element={<OurProject />} />
          <Route path="/dashboard" element={<Login />} />
          
          {Object.entries({
            "/dashboard/home": DashboardPages.HomeDashoard,
            "/dashboard/services": DashboardPages.Service,
            "/dashboard/services/view": DashboardPages.ServiceView,
            "/dashboard/service/add": DashboardPages.ServiceAdd,
            "/dashboard/services/add/photo/:id": DashboardPages.ServiceDetalis,
            "/dashboard/service/edit/:id": DashboardPages.ServiceEdit,
            "/dashboard/project": DashboardPages.DashboardProject,
            "/dashboard/project/view": DashboardPages.ProjectView,
            "/dashboard/project/add": DashboardPages.ProjectAdd,
            "/dashboard/project/add/photo/:id": DashboardPages.ProjectAddPhoto,
            "/dashboard/order/order-view": DashboardPages.ViewOrder,
            "/dashboard/messages": DashboardPages.ViewMessage,
            "/dashboard/rate": DashboardPages.Rate,
          }).map(([path, Component]) => (
            <Route key={path} path={path} element={<ProtectedRoute><Component /></ProtectedRoute>} />
          ))}
          
          <Route path="/error" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
