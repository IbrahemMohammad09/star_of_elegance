import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./pages/Loading";
import ScrollToTop from "./components/sharedComponents/ScrollToTop";
import HomeDashoard from "./components/Dashboard/Pages/Home";
import Login from "./components/Dashboard/Pages/Login";
import ServiceDetalis from "./components/Dashboard/Pages/ServiceDetalis";
import ServiceView from "./components/Dashboard/Pages/ServiceView";
import ServiceEdit from "./components/Dashboard/Pages/ServiceEdit";
import Service from "./components/Dashboard/Pages/Service";
import Rate from "./components/Dashboard/Pages/Rate";
// import { useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import ViewMessages from "./components/Dashboard/Pages/ViewMessage";
import ProtectedRoute from "./components/Dashboard/SharedComponents/ProtectedRoute ";

// استخدم React.lazy لتحميل الصفحات بشكل ديناميكي
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
const ViewOrder = lazy(() => import("./components/Dashboard/Pages/ViewOrder"));
// const EditOrder = lazy(() => import("./components/Dashboard/Pages/EditOrder"));
const ViewMessage = lazy(() =>
  import("./components/Dashboard/Pages/ViewMessages")
);
const DashboardProject = lazy(() =>
  import("./components/Dashboard/Pages/DashboardProject")
);
const ProjectView = lazy(() =>
  import("./components/Dashboard/Pages/ProjectsView")
);
const ProjectAdd = lazy(() =>
  import("./components/Dashboard/Pages/ProjectDetails")
);
const ProjectAddPhoto = lazy(() =>
  import("./components/Dashboard/Pages/ProjectAddPhoto")
);
const ServiceAdd = lazy(()=> import("./components/Dashboard/Pages/ServiceAdd"))

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
          {/* Protected Route */}
          <Route 
            path="/dashboard/message" 
            element={
            <ProtectedRoute>
              <ViewMessage />
            </ProtectedRoute>
            } />
          <Route
            path="/dashboard/home"
            element={
              <ProtectedRoute>
                <HomeDashoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/services"
            element={
              <ProtectedRoute>
                <Service />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/services/view"
            element={
              <ProtectedRoute>
                <ServiceView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/service/add"
            element={
              <ProtectedRoute>
                <ServiceAdd />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/services/add/photo/:id"
            element={
              <ProtectedRoute>
                <ServiceDetalis />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/service/edit/:id"
            element={
              <ProtectedRoute>
                <ServiceEdit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/project"
            element={
              <ProtectedRoute>
                <DashboardProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/project/view"
            element={
              <ProtectedRoute>
                <ProjectView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/project/add"
            element={
              <ProtectedRoute>
                <ProjectAdd />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/project/add/photo/:id"
            element={
              <ProtectedRoute>
                <ProjectAddPhoto />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/order/order-view"
            element={
              <ProtectedRoute>
                <ViewOrder />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/dashboard/order/edit"
            element={
              <ProtectedRoute>
                <EditOrder />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/dashboard/messages"
            element={
              <ProtectedRoute>
                <ViewMessage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/rate"
            element={
              <ProtectedRoute>
                <Rate />
              </ProtectedRoute>
            }
          />

          <Route path="/error" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;