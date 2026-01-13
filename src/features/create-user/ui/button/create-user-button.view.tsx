import { Button } from "@mui/material";
import type { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { userListStore } from "widgets/user-list-widget/model";
import { USERS_TEXTS } from "shared/config/texts";

const CreateUserButton: FC = () => {
  return (
    <Button
      size="small"
      variant="outlined"
      color="primary"
      onClick={() => userListStore.openCreate()}
      endIcon={<AddIcon fontSize="small" />}
    >
      {USERS_TEXTS.entityActions.create}
    </Button>
  );
};

export { CreateUserButton };
