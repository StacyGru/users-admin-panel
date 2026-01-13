import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
  type SelectProps
} from "@mui/material";
import React from "react";
import type { SelectOption } from "shared/types";

export type BaseSelectProps<T extends string | number> = Omit<
  SelectProps<T>,
  "value" | "onChange"
> & {
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  label?: string;
};

const BaseSelect = <T extends string | number>({
  value,
  options,
  onChange,
  label,
  ...props
}: BaseSelectProps<T>) => {
  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event.target.value as T);
  };

  const labelId = React.useId();

  return (
    <FormControl fullWidth={props.fullWidth} size={props.size ?? "small"} sx={props.sx}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}

      <Select<T>
        {...props}
        labelId={labelId}
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { BaseSelect };
