import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { QUERY_KEYS } from "../../../../../../constants/query-keys";
import { updateBook } from "../../../../../../apis/books";
import { schema, SchemaType } from "./form.schema";
import { Select } from "../../../../../../components/select";
import { BookWithStatusProps } from "../../../../../../types/api/books";
import { useEffect } from "react";

interface IProps {
  openUpdateBookModal: boolean;
  setOpenUpdateBookModal: (open: boolean) => void;
  item: BookWithStatusProps;
}

const UpdateBookModal = (props: IProps) => {
  const queryClient = useQueryClient();
  const { openUpdateBookModal, setOpenUpdateBookModal, item } = props;

  const onCancel = () => {
    setOpenUpdateBookModal(false);
    form.reset();
  };

  const form = useForm<SchemaType>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SchemaType) => {
      return await updateBook(data, item.book.id);
    },
    onSuccess: res => {
      onCancel();
      toast.success("Successfully updated!");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_BOOKS],
      });
    },
  });

  function onSubmit(data: SchemaType) {
    mutate(data);
  }

  useEffect(() => {
    form.setValue("status", item.status.toString());
  }, [item, form]);

  return (
    <Dialog
      open={openUpdateBookModal}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Update Book"}</DialogTitle>
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
            <Select
              control={form.control}
              name="status"
              fullWidth
              defaultValue={"0"}
              options={[
                { label: "New", value: "0" },
                { label: "Reading", value: "1" },
                { label: "Finished", value: "2" },
              ]}
            />
            <Button type="submit" disabled={isPending}>
              Update
            </Button>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookModal;
