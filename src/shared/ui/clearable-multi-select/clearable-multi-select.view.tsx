import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
  type SelectProps
} from "@mui/material";
import React from "react";
import type { SelectOption } from "shared/types";

export type ClearableMultiSelectProps<T extends string | number> = Omit<
  SelectProps<T[]>,
  "multiple" | "value" | "onChange"
> & {
  value: T[];
  options: SelectOption<T>[];
  onChange: (value: T[]) => void;
  label?: string;
};

const ClearableMultiSelect = <T extends string | number>({
  value,
  options,
  onChange,
  label,
  ...props
}: ClearableMultiSelectProps<T>) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange(event.target.value as T[]);
  };

  const labelId = React.useId();

  const optionsMap = React.useMemo(
    () => new Map(options.map((option) => [option.value, option.label])),
    [options]
  );

  const renderValue: SelectProps<T[]>["renderValue"] = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.5,
          maxHeight: 64,
          overflowY: "auto"
        }}
      >
        {value.map((selectedOption) => (
          <Chip
            key={selectedOption}
            size="small"
            label={optionsMap.get(selectedOption) ?? selectedOption}
            onMouseDown={(event) => event.stopPropagation()}
            onDelete={() => {
              onChange(value.filter((option) => option !== selectedOption));
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <FormControl sx={props.sx} fullWidth={props.fullWidth} size={props.size ?? "small"}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}

      <Select
        {...props}
        labelId={labelId}
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={renderValue}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{ height: "40px", p: 1 }}>
            <Checkbox checked={value.includes(option.value)} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { ClearableMultiSelect };
