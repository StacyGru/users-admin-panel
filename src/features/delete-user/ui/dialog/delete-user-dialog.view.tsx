import { userStore } from "entities/user/model";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

interface IProps {
  open: boolean;
  userId: string | null;
  onClose: () => void;
}

const DeleteUserDialog: FC<IProps> = (props) => {
  const handleDelete = () => {
    if (!props.userId) return;

    userStore.removeUser(props.userId);
    userStore.save();
    props.onClose();
  };

  const user = userStore.users.find((user) => user.id === props.userId);

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Удалить пользователя {user?.name}?</DialogTitle>

      <DialogContent>
        <Typography>Это действие нельзя отменить</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={props.onClose}>Отмена</Button>
        <Button color="error" onClick={handleDelete}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { DeleteUserDialog };
