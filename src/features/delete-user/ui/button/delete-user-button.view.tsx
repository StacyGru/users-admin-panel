import { USERS_TEXTS } from "shared/config/texts";
import IconButton from "@mui/material/IconButton";
import { userTableStore } from "widgets/user-list-widget/model";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { Tooltip } from "@mui/material";
import type { FC } from "react";
import type { IUserListWidgetRowModel } from "widgets/user-list-widget/types";

interface IProps {
  row: IUserListWidgetRowModel;
}

const DeleteUserButton: FC<IProps> = (props) => {
  return (
    <Tooltip title={USERS_TEXTS.rowActions.delete}>
      <IconButton size="small" onClick={() => userTableStore.openDelete(props.row.id)}>
        <DeleteOutlineTwoToneIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export { DeleteUserButton };
