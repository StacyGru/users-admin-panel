import { IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { type FC } from "react";

const ClearableTextField: FC<TextFieldProps> = (props) => {
  const handleClear = () => {
    props.onChange?.({
      target: { value: "" }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const hasValue = props.value != null && props.value.toString() !== "";

  return (
    <TextField
      {...props}
      slotProps={{
        ...props.slotProps,
        input: {
          ...props.slotProps?.input,
          endAdornment: hasValue ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClear} edge="end">
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : null
        }
      }}
    />
  );
};

export { ClearableTextField };
