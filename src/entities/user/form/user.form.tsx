import { Stack, TextField } from "@mui/material";
import { type IUser, userRoleOptions } from "../model";
import { type FC, type FormEvent } from "react";
import { USERS_TEXTS } from "shared/config/texts";
import { BaseSelect } from "shared/ui/select";

interface IProps {
  value: IUser;
  onChange: (value: IUser) => void;
  onSubmit: (value: IUser) => void;
}

const UserForm: FC<IProps> = ({ value, onChange, onSubmit }) => {
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidForm = (): boolean => {
    if (!value.name.trim()) return false;
    if (!value.email.trim() || !isValidEmail(value.email)) return false;
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidForm()) {
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="user-form">
      <Stack spacing={2} sx={{ pt: 1 }}>
        <TextField
          size="small"
          label={USERS_TEXTS.columns.name}
          value={value.name}
          onChange={(event) => onChange({ ...value, name: event.target.value })}
          fullWidth
          required
        />

        <TextField
          size="small"
          type="email"
          label={USERS_TEXTS.columns.email}
          value={value.email}
          onChange={(event) => onChange({ ...value, email: event.target.value })}
          fullWidth
          required
        />

        <BaseSelect
          label={USERS_TEXTS.columns.role}
          value={value.role}
          options={userRoleOptions}
          onChange={(role) => onChange({ ...value, role })}
          required
        />
      </Stack>
    </form>
  );
};

export { UserForm };
