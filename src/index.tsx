import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Suspense } from "./components/suspense";
import { queryClient } from "./configs/react-query";
import theme from "./configs/theme";
import { ContainerToastProps } from "./configs/toast";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Suspense>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <ToastContainer {...ContainerToastProps} theme="dark" />
      </ThemeProvider>
    </QueryClientProvider>
  </Suspense>,
);
