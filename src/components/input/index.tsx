import TextField from "@mui/material/TextField";
import { type FieldValues, useController } from "react-hook-form";
import { InputProps } from "../../types/components";

export const Input = <T extends FieldValues>({ label, name, control, ...props }: InputProps<T>) => {
  const {
    field: { ref, disabled, onChange, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...props}
      {...inputProps}
      id={name}
      label={label}
      error={invalid}
      variant="outlined"
      helperText={error?.message as string}
      value={inputProps?.value ?? ""}
      inputRef={props.inputRef ?? ref}
      onChange={e => {
        onChange(e);
        if (props.onChange) {
          props.onChange(e);
        }
      }}
    />
  );
};
