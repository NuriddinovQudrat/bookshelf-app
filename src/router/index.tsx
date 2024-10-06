import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTER } from "../constants/router";
import Layout from "../layout";
import NotFound from "../pages/not-found";
import SignUp from "../pages/sign-up";

export const userRouter = createBrowserRouter([
  {
    path: ROUTER.HOME,
    element: <Layout />,
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const authRouter = createBrowserRouter([
  {
    path: ROUTER.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <Navigate to={ROUTER.SIGN_UP} />,
  },
]);
