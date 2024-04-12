import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { RequestProvider } from "react-request-hook";
import axios from "axios";
import "./index.css";
import Cards from "./Cards.jsx";
import Race from "./Race.jsx";

const axiosInstance = axios.create();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vehicles",
    element: <Cards />,
  },
  {
    path: "/race-condition",
    element: <Race />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <RouterProvider router={router} />
    </RequestProvider>
  </React.StrictMode>
);
