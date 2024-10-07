import { Paper, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Suspense } from "../components/suspense";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Layout = () => {
  return (
    <Stack component="main" minHeight="100vh" width="100%">
      <Suspense>
        <Header />
        <Sidebar />
        <Paper
          sx={{
            position: "fixed",
            width: "calc(100% - 340px)",
            height: "calc(100vh - 80px)",
            left: "320px",
            right: "20px",
            top: "80px",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Paper>
      </Suspense>
    </Stack>
  );
};

export default Layout;
