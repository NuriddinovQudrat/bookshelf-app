import { TextFieldProps } from "@mui/material";
import { Control, FieldValues, Path, UseControllerProps } from "react-hook-form";
import { type SelectProps as MuiSelectProps } from "@mui/material/Select";

export interface OptionProps {
  value: string | number;
  label: string | number;
  description?: string | null;
}
export interface ControlProps<T extends FieldValues> extends UseControllerProps<T> {
  name: Path<T>;
  control: Control<T>;
}

export type InputProps<T extends FieldValues> = Omit<TextFieldProps, "variant" | "id"> &
  ControlProps<T>;

export type SelectProps<T extends FieldValues> = Omit<
  MuiSelectProps,
  "value" | "renderValue" | "variant" | "defaultValue"
> & {
  options: OptionProps[];
  placeholder?: string;
  loading?: boolean;
} & ControlProps<T>;
