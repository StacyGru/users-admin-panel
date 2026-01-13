import { userStore } from "entities/user/model";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { FC } from "react";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import { userListStore } from "widgets/user-list-widget/model";
import { BASE_TEXTS, USERS_TEXTS } from "shared/config/texts";

const DeleteUserDialog: FC = observer(() => {
  const open = Boolean(userListStore.deletingUserId);
  const userId = userListStore.deletingUserId;
  const user = userStore.users.find((user) => user.id === userId);

  const handleClose = () => {
    userListStore.closeDelete();
  };
  const handleDelete = () => {
    if (!userId) return;

    userStore.removeUser(userId);
    userStore.save();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{USERS_TEXTS.dialogs.delete.title}</DialogTitle>

      <DialogContent>
        <Typography>
          {USERS_TEXTS.dialogs.delete.text.replace("{name}", user?.name || "")}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleClose} sx={{ color: "text.secondary" }}>
          {BASE_TEXTS.buttons.cancel}
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          {BASE_TEXTS.buttons.delete}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export { DeleteUserDialog };
