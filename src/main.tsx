import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// router dom
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./login/Login";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <ListLayout />,
        children: [{ path: "/chat/id", element: <Chat /> }],
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
