import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { UserForm } from "entities/user/form";
import { EUserRole, type IUser, userStore } from "entities/user/model";
import { userListStore } from "widgets/user-list-widget/model";
import { generateUserId } from "entities/user/lib";
import { BASE_TEXTS, USERS_TEXTS } from "shared/config/texts";

const emptyUser: IUser = {
  id: "",
  name: "",
  email: "",
  role: EUserRole.USER
};

const CreateUserDialog = observer(() => {
  const [formData, setFormData] = useState(emptyUser);

  useEffect(() => {
    if (userListStore.creatingUser) {
      setFormData(emptyUser);
    }
  }, [userListStore.creatingUser]);

  const handleSubmit = () => {
    const id = generateUserId(userStore.users);

    userStore.addUser({
      ...formData,
      id
    });

    userStore.save();
    userListStore.closeCreate();
  };

  return (
    <Dialog
      open={userListStore.creatingUser}
      onClose={userListStore.closeCreate}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{USERS_TEXTS.dialogs.create.title}</DialogTitle>

      <DialogContent>
        <UserForm value={formData} onChange={setFormData} onSubmit={handleSubmit} />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={userListStore.closeCreate} sx={{ color: "text.secondary" }}>
          {BASE_TEXTS.buttons.cancel}
        </Button>
        <Button form="user-form" type="submit" variant="outlined" color="success">
          {BASE_TEXTS.buttons.create}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export { CreateUserDialog };
