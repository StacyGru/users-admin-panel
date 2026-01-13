import { USERS_TEXTS } from "shared/config/texts";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import type { FC } from "react";
import type { IUserListWidgetRowModel } from "widgets/user-list-widget/types";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { userTableStore } from "widgets/user-list-widget/model";

interface IProps {
  row: IUserListWidgetRowModel;
}

const EditUserButton: FC<IProps> = (props) => {
  return (
    <Tooltip title={USERS_TEXTS.rowActions.edit}>
      <IconButton size="small" onClick={() => userTableStore.openEdit(props.row.id)}>
        <EditTwoToneIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export { EditUserButton };
