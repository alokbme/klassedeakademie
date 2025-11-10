import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import './index.css';
import customRouter from "./components/Routing";


// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application with the RouterProvider
root.render(
  <React.StrictMode>
    <RouterProvider router={customRouter} />
  </React.StrictMode>
);