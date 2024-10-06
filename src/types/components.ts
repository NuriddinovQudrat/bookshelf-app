import { TextFieldProps } from "@mui/material";
import { Control, FieldValues, Path, UseControllerProps } from "react-hook-form";

export interface ControlProps<T extends FieldValues> extends UseControllerProps<T> {
  name: Path<T>;
  control: Control<T>;
}

export type InputProps<T extends FieldValues> = Omit<TextFieldProps, "variant" | "id"> &
  ControlProps<T>;
