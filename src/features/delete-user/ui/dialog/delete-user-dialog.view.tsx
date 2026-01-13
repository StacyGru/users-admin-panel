import { userStore } from "entities/user/model";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { FC } from "react";
import Typography from "@mui/material/Typography";

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

  // TODO: вынести текст в константы
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Удаление пользователя</DialogTitle>

      <DialogContent>
        <Typography>Вы уверены что хотите удалить пользователя {user?.name}?</Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={props.onClose} sx={{ color: "text.secondary" }}>
          Отмена
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { DeleteUserDialog };
