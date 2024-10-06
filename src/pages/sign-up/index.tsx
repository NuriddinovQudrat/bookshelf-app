import { Box, Button, Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { schema, SchemaType } from "./form.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserStore } from "../../store/user";
import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../apis/auth/sign-up";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constants/router";
import { toast } from "react-toastify";

const SignUp = () => {
  const setUserToStore = useUserStore(state => state.setUser);
  const navigate = useNavigate();

  const form = useForm<SchemaType>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: async (data: SchemaType) => {
      return await signUpUser(data);
    },
    onSuccess: res => {
      setUserToStore(res.data);
      navigate(ROUTER.HOME);
      toast.success("Successfully signed up!");
    },
  });

  function onSubmit(data: SchemaType) {
    mutate(data);
  }

  return (
    <FormProvider {...form}>
      <Container sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
        <Box
          component={"form"}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "500px",
            mt: "20px",
            mx: "auto",
          }}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Input name="name" type="string" control={form.control} placeholder={"Name"} />

          <Input name="email" type="email" control={form.control} placeholder={"Email"} />

          <Input name="key" type="string" control={form.control} placeholder={"Key"} />

          <Input name="secret" type="string" control={form.control} placeholder={"Secret"} />

          <Button type="submit">Sign Up</Button>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default SignUp;
