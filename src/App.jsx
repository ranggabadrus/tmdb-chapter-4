import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/search",
      element: <div>ini adalah search</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
