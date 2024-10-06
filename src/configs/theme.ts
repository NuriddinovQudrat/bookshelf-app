import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(25, 170, 117)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f48fb1",
      contrastText: "#000000",
    },
    background: {
      default: "#000000",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#66bb6a",
    },
  },
  typography: {},
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: () => ({
          transitionDuration: "0.2s",
          borderRadius: "4px",
          textTransform: "inherit",
          color: "#ffffff",
          fontSize: "16px",
          padding: "10px 20px",
        }),
      },
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
          }),
        },
        {
          props: { variant: "outlined" },
          style: () => ({
            color: "#ffffff",
            borderColor: "#ffffff",
          }),
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: () => ({
          fontSize: "18px",
        }),
      },
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: () => ({
            fontSize: "48px",
            fontWeight: "700",
          }),
        },
        {
          props: {
            variant: "h2",
          },
          style: () => ({
            fontSize: "36px",
            fontWeight: "600",
          }),
        },
        {
          props: {
            variant: "body1",
          },
          style: () => ({
            fontSize: "14px",
            fontWeight: "400",
          }),
        },
        {
          props: {
            variant: "body2",
          },
          style: () => ({
            fontSize: "16px",
            fontWeight: "400",
          }),
        },
      ],
    },
  },
});

export default theme;
