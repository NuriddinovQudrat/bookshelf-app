import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { MENU_OPTIONS } from "./menu-options";
import { Link, useLocation } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";
import { useUserStore } from "../../../store/user";

const Sidebar = () => {
  const { pathname } = useLocation();
  const setClearUser = useUserStore(state => state.setClearUser);

  const logout = () => {
    setClearUser();
  };

  return (
    <Box>
      <AppBar
        sx={{
          position: "fixed",
          top: "60px",
          width: "300px",
          height: "calc(100vh - 60px)",
          left: 0,
          zIndex: 1,
          boxShadow: "none",
        }}
      >
        <List
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            {MENU_OPTIONS.map(({ Icon, path, title }, index) => (
              <Link
                key={index}
                to={path}
                style={{ textDecoration: "none", color: "#fff" }}
                className={pathname === path ? "active-link" : ""}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                    <Typography variant="h4" ml={"10px"}>
                      {title}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </Stack>
          <Stack>
            <ListItem
              onClick={logout}
              disablePadding
              sx={{ display: "block", bgcolor: "rgba(160, 0, 0, 0.5)" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                  }}
                >
                  <LogoutOutlined />
                </ListItemIcon>
                <Typography variant="h4" ml={"10px"}>
                  Log out
                </Typography>
              </ListItemButton>
            </ListItem>
          </Stack>
        </List>
      </AppBar>
    </Box>
  );
};

export default Sidebar;
