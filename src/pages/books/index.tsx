import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useBooks } from "../../hooks";
import { useState } from "react";
import { BookWithStatusProps } from "../../types/api/books";
import CardItem from "./components/card-item";
import CreateBookModal from "./modals/create-book-modal";

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
        {data?.data === null || data?.data?.length === 0 ? (
          <Stack width="100%" alignItems="center">
            <Typography color="text.secondary" variant="h3">
              No books found!
            </Typography>
          </Stack>
        ) : null}

        {data?.data?.map((item: BookWithStatusProps, index: number) => {
          return <CardItem item={item} key={index} />;
        })}
      </Grid>
    </Box>
  );
};

export default Books;
