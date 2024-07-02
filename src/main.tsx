import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// router dom
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./login/Login";
import MenuLayout from "./layouts/MenuLayout/Menu.layout";
import ListChatLayout from "./layouts/ListChat.layout";
import Chat from "./components/chat/Chat";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/",
        element: <ListChatLayout />,
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
