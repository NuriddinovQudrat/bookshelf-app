import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTER } from "../constants/router";
import Layout from "../layout";
import SignUp from "../pages/sign-up";
import Books from "../pages/books";

export const userRouter = createBrowserRouter([
  {
    path: ROUTER.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTER.BOOKS,
        element: <Books />,
      },
    ],
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <Books />,
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
