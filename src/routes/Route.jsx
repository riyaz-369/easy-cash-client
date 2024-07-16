import MainLayout from "../layout/MainLayout";
import Register from "../pages/Authentications/Register";
import LogIn from "../pages/Authentications/LogIn";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
