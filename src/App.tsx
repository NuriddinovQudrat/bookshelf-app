import { RouterProvider } from "react-router-dom";
import { authRouter, userRouter } from "./router";
import "./App.css";
import { useUserStore } from "./store/user";

const App = () => {
  const user = useUserStore(state => state.user);
  const isAuth = !!user;

  return (
    <>
      <RouterProvider router={isAuth ? userRouter : authRouter} />
    </>
  );
};

export default App;
