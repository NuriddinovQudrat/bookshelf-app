import { createBrowserRouter } from "react-router-dom";
import { ROUTER } from "../constants/router";
import Layout from "../layout";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: ROUTER.HOME,
    element: <Layout />,
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <NotFound />,
  },
]);
