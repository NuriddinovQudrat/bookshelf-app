import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "../../../../apis/books";
import { toast } from "react-toastify";
import { Input } from "../../../../components/input";
import { QUERY_KEYS } from "../../../../constants/query-keys";
import { schema, SchemaType } from "./form.schema";

interface IProps {
  openCreateBookModal: boolean;
  setOpenCreateBookModal: (open: boolean) => void;
}

const CreateBookModal = (props: IProps) => {
  const queryClient = useQueryClient();
  const { openCreateBookModal, setOpenCreateBookModal } = props;

  const onCancel = () => {
    setOpenCreateBookModal(false);
    form.reset();
  };

  const form = useForm<SchemaType>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SchemaType) => {
      return await createBook(data);
    },
    onSuccess: res => {
      onCancel();
      toast.success("Successfully added!");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_BOOKS],
      });
    },
  });

  function onSubmit(data: SchemaType) {
    mutate(data);
  }

  return (
    <Dialog
      open={openCreateBookModal}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Create a Book"}</DialogTitle>
      <DialogContent>
        <FormProvider {...form}>
          <Box
            component={"form"}
            sx={{
              width: "500px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Input name="isbn" type="number" control={form.control} placeholder={"ISBN"} />
            <Button type="submit" disabled={isPending}>
              Create
            </Button>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBookModal;
