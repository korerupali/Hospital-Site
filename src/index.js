import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Appointment from "./pages/Appointment";
import Doctor from "./pages/Doctor";
// import DoctorDetails from "./pages/DoctorDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
let allRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  
  {
    path: "doctor",
    element: <Doctor/>,
  },
  {
    path: "doctor/:speciality",
    element: <Doctor />,
  },
  // {
  //   path: "appointment/:id",
  //   element: <DoctorDetails/>,
  // },
  {
    path: "appointment",
    element: <Appointment />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={allRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
