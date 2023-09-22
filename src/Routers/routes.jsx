import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/HomePage/Home";
import SignLayout from "../components/layout/SignLayout";
import SignIn from "../components/pages/SignInPage/SignIn";
import SignUp from "../components/pages/SignUpPage/SignUp";
import NotFound from "../components/pages/NotFoundPage/NotFound";
import Article from "../components/pages/ArticlePage/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/article",
        element: <Article />,
      },
    ],
  },
  {
    path: "/auth",
    element: <SignLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
