import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { IUser } from "entities/user/model";
import { userStore } from "entities/user/model";
import { observer } from "mobx-react-lite";
import { UserForm } from "entities/user/form";
import { type FC, useEffect, useState } from "react";

interface IProps {
  open: boolean;
  userId: string | null;
  onClose: () => void;
}

const EditUserDialog: FC<IProps> = observer(({ open, userId, onClose }) => {
  const user = userStore.users.find((user) => user.id === userId);

  const [formData, setFormData] = useState<IUser | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  if (!user || !formData) return null;

  const handleSubmit = () => {
    userStore.editUser(formData);
    userStore.save();
    onClose();
  };

  // TODO: вынести текст в константы
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Редактирование пользователя</DialogTitle>

      <DialogContent>
        <UserForm value={formData} onChange={setFormData} onSubmit={handleSubmit} />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} sx={{ color: "text.secondary" }}>
          Отмена
        </Button>
        <Button onClick={handleSubmit} variant="outlined" color="success">
          Сохранить
        <Button form="user-form" type="submit" variant="outlined" color="success">
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export { EditUserDialog };
