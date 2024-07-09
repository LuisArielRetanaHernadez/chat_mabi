import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// router dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuLayout from "./layouts/MenuLayout/Menu.layout";
import ListChatLayout from "./layouts/ListChatLayout/ListChat.layout";
import Auth from "./pages/Auth/Auth.page";
import Chat from "./pages/Chat/Chat.page";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/",
        element: <ListChatLayout />,
        children: [{ path: "/chat/:id", element: <Chat /> }],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
