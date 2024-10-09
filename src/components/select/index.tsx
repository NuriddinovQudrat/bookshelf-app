import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import { Controller, type FieldValues } from "react-hook-form";
import { SelectProps } from "../../types/components";

export const Select = <T extends FieldValues>({
  id,
  name,
  label,
  control,
  options,
  loading,
  multiple,
  placeholder,
  ...props
}: SelectProps<T>) => {
  return (
    <FormControl
      fullWidth
      sx={{
        fontSize: "14px",
        ".placeholder": {
          fontSize: "14px",
        },
        ".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input": {
          padding: "9.25px 14px",
        },
        ".MuiOutlinedInput-input": {
          paddingLeft: "16px !important",
          paddingRight: "45px !important",
        },
      }}
    >
      <Controller
        {...props}
        name={name}
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <>
              {label && (
                <InputLabel id={id} error={invalid}>
                  {label}
                </InputLabel>
              )}

              <MuiSelect
                {...props}
                {...field}
                readOnly={props.readOnly || options?.length < 1}
                value={field.value || []}
                labelId={id}
                label={label}
                error={invalid}
                sx={{
                  height: "auto",
                  padding: "0",
                }}
                multiple={multiple}
                displayEmpty={props.displayEmpty ?? true}
              >
                {options.map(option => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </MuiSelect>
              <FormHelperText error={invalid}>{error?.message}</FormHelperText>
            </>
          );
        }}
      />
    </FormControl>
  );
};
