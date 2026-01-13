import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { IUser } from "entities/user/model";
import { userStore } from "entities/user/model";
import { observer } from "mobx-react-lite";
import { UserForm } from "entities/user/form";
import { type FC, useEffect, useState } from "react";
import { userListStore } from "widgets/user-list-widget/model";
import { BASE_TEXTS, USERS_TEXTS } from "shared/config/texts";

const EditUserDialog: FC = observer(() => {
  const open = Boolean(userListStore.editingUserId);
  const user = userStore.users.find((user) => user.id === userListStore.editingUserId);

  const [formData, setFormData] = useState<IUser | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  if (!user || !formData) return null;

  const handleClose = () => {
    userListStore.closeEdit();
  };

  const handleSubmit = () => {
    userStore.editUser(formData);
    userStore.save();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{USERS_TEXTS.dialogs.edit.title}</DialogTitle>

      <DialogContent>
        <UserForm value={formData} onChange={setFormData} onSubmit={handleSubmit} />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleClose} sx={{ color: "text.secondary" }}>
          {BASE_TEXTS.buttons.cancel}
        </Button>
        <Button form="user-form" type="submit" variant="outlined" color="success">
          {BASE_TEXTS.buttons.save}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export { EditUserDialog };
