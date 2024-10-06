import { Box, Button, Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { schema, SchemaType } from "./form.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const form = useForm<SchemaType>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit(data: SchemaType) {
    console.log(data);
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
