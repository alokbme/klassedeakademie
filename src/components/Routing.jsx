import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import GermanCourses from "./Courses";
import CareerConsulting from "./CareerConsulting";
import Testimonials from "./Testimonials";
import HomePage from "./Home";


const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default route for "/"
        element: <HomePage />,
      },
      {
        path: "/", 
        element: <HomePage />,
      },
        {
        path: "/contact", 
        element: <ContactUs />,
      },
       {
        path: "/about", 
        element: <AboutUs />,
      },
        {
        path: "/courses", 
        element: <GermanCourses />,
      },
        {
        path: "/carrier", 
        element: <CareerConsulting />,
      },
        {
        path: "/testimonials", 
        element: <Testimonials />,
      },
    ],  
  },
]);

export default customRouter;
