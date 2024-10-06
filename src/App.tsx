import { RouterProvider } from "react-router-dom";
import { authRouter, userRouter } from "./router";
import "./App.css";

const App = () => {
  const auth = false;

  return (
    <>
      <RouterProvider router={auth ? userRouter : authRouter} />
    </>
  );
};

export default App;
