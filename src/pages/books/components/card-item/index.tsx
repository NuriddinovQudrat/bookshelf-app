import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BookWithStatusProps } from "../../../../types/api/books";
import coverImg from "../../../../assets/images/cover.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../../../../apis/books";
import { toast } from "react-toastify";
import { QUERY_KEYS } from "../../../../constants/query-keys";
import { useState } from "react";
import UpdateBookModal from "./modal/update-book-modal";

interface IProps {
  item: BookWithStatusProps;
}

const CardItem = (props: IProps) => {
  const { item } = props;
  const queryClient = useQueryClient();

  const [openUpdateBookModal, setOpenUpdateBookModal] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: number) => {
      return await deleteBook(id);
    },
    onSuccess: res => {
      toast.success("Successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_BOOKS],
      });
    },
  });

  return (
    <Grid size={4} key={item.book.id}>
      <UpdateBookModal
        openUpdateBookModal={openUpdateBookModal}
        setOpenUpdateBookModal={setOpenUpdateBookModal}
        item={item}
      />

      <Card variant="outlined">
        <CardActionArea>
          <Stack position={"relative"} width={"100%"}>
            {item.status === 0 ? (
              <Chip
                label="New"
                color="info"
                sx={{ position: "absolute", right: "10px", top: "10px" }}
              />
            ) : null}
            {item.status === 1 ? (
              <Chip
                label="Reading"
                color="warning"
                sx={{ position: "absolute", right: "10px", top: "10px" }}
              />
            ) : null}
            {item.status === 2 ? (
              <Chip
                label="Finished"
                color="success"
                sx={{ position: "absolute", right: "10px", top: "10px" }}
              />
            ) : null}
            <CardMedia
              component="img"
              height="300"
              image={item.book.cover ? item.book.cover : coverImg}
              alt={item.book.title}
            />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.book.author}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.book.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Isbn: {item.book.isbn}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="text" onClick={() => setOpenUpdateBookModal(true)}>
              Update
            </Button>
            <Button
              size="small"
              variant="text"
              disabled={isPending}
              onClick={() => mutate(item.book.id)}
            >
              Delete
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardItem;
