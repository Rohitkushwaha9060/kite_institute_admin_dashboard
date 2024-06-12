import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./styles/global.css";

import { AuthLayout, MainLayout } from "./layouts";
import { Home } from "./pages";
import { ReactQueryProvider } from "./lib";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ReactQueryProvider>
      <RouterProvider router={router}></RouterProvider>
    </ReactQueryProvider>
    <Toaster reverseOrder={false} />
  </>
);
