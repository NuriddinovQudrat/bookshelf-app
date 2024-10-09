import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useBooks } from "../../hooks";
import CreateBookModal from "./modals/create-book-modal";
import { useState } from "react";
import { BookWithStatusProps } from "../../types/api/books";
import coverImg from "../../assets/images/cover.jpg";

const Books = () => {
  const { data, isLoading, isError } = useBooks();

  const [openCreateBookModal, setOpenCreateBookModal] = useState<boolean>(false);

  if (isLoading) {
    return (
      <Stack alignItems="center">
        <Typography color="text.secondary" variant="h3">
          Loading...
        </Typography>
      </Stack>
    );
  }
  if (isError) {
    return (
      <Stack alignItems="center">
        <Typography color="text.secondary" variant="h3">
          An Error Occured!
        </Typography>
      </Stack>
    );
  }

  return (
    <Box>
      {
        <CreateBookModal
          openCreateBookModal={openCreateBookModal}
          setOpenCreateBookModal={setOpenCreateBookModal}
        />
      }

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">Books</Typography>
        <Button
          variant="contained"
          sx={{ width: "250px" }}
          onClick={() => setOpenCreateBookModal(true)}
        >
          Create a Book
        </Button>
      </Stack>
      <Grid container spacing={2} mt={"20px"}>
        {data?.data === null ? (
          <Stack width="100%" alignItems="center">
            <Typography color="text.secondary" variant="h3">
              No books found!
            </Typography>
          </Stack>
        ) : null}
        {data?.data?.map((item: BookWithStatusProps, index: number) => {
          return (
            <Grid size={3} key={index}>
              <Card sx={{ width: "100%", border: "1px solid #00000030" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.book.cover ? item.book.cover : coverImg}
                    alt={item.book.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Author: {item.book.author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Title: {item.book.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Books;
