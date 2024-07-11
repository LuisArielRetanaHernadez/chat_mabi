import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// router dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuLayout from "./layouts/MenuLayout/Menu.layout";
import ListChatLayout from "./layouts/ListChatLayout/ListChat.layout";
import Auth from "./pages/Auth/Auth.page";
import Chat from "./pages/Chat/Chat.page";
import Profile from "./pages/Profile/Profile.page";

import { store } from "./store";
import { Provider } from "react-redux";

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
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode>
  </Provider>
);
