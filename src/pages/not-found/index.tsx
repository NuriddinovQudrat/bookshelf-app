import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import pageNotFoundImg from "../../assets/images/page-not-found.png";
import { ROUTER } from "../../constants/router";

const NotFound = () => {
  return (
    <Stack
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={"20px"}
    >
      <Stack>
        <img src={pageNotFoundImg} alt="page not found" width={"300px"} />
      </Stack>
      <Typography variant="h2">Page Not Found</Typography>
      <Typography variant="body2" sx={theme => ({ color: theme.palette.primary.main })}>
        Coming soon...
      </Typography>
      <Button LinkComponent={Link} variant="contained" href={ROUTER.HOME}>
        Back to Home
      </Button>
    </Stack>
  );
};

export default NotFound;
