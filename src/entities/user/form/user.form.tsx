import { Stack, TextField } from "@mui/material";
import { type IUser, userRoleOptions } from "../model";
import type { FC } from "react";
import { USERS_TEXTS } from "shared/config/texts";
import { BaseSelect } from "shared/ui/select";

interface IProps {
  value: IUser;
  onChange: (value: IUser) => void;
}

const UserForm: FC<IProps> = ({ value, onChange }) => {
  return (
    <Stack spacing={2} sx={{ pt: 1 }}>
      <TextField
        size="small"
        label={USERS_TEXTS.columns.name}
        value={value.name}
        onChange={(event) => onChange({ ...value, name: event.target.value })}
        fullWidth
      />

      <TextField
        size="small"
        label={USERS_TEXTS.columns.email}
        value={value.email}
        onChange={(event) => onChange({ ...value, email: event.target.value })}
        fullWidth
      />

      <BaseSelect
        label={USERS_TEXTS.columns.role}
        value={value.role}
        options={userRoleOptions}
        onChange={(role) => onChange({ ...value, role })}
      />
    </Stack>
  );
};

export { UserForm };
