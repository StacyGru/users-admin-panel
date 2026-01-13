import { EUserRoleLabels, type IUser, userRoleOptions } from "entities/user/model";
import type {
  IUserListWidgetColumnModel,
  IUserListWidgetRowModel
} from "widgets/user-list-widget/types";
import { USERS_TEXTS } from "shared/config/texts";
import { ClearableTextField } from "shared/ui/clearable-text-field";
import { userTableStore } from "widgets/user-list-widget/model/user-list-widget.store.ts";
import { ClearableMultiSelect } from "shared/ui/clearable-multi-select";
import Stack from "@mui/material/Stack";
import { EditUserButton } from "features/edit-user/ui/button/edit-user-button.view.tsx";
import { DeleteUserButton } from "features/delete-user/ui/button";

const getUserRowList = (users: IUser[]): IUserListWidgetRowModel[] =>
  users.map<IUserListWidgetRowModel>((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
  });

const getUserColumnList = (): Array<IUserListWidgetColumnModel<IUserListWidgetRowModel>> => {
  return [
    {
      name: "id",
      title: USERS_TEXTS.columns.id,
      sortable: true,
      filterable: true,
      isFilterActive: userTableStore.filters.id !== "",
      renderFilter: () => (
        <ClearableTextField
          size="small"
          value={userTableStore.filters.id}
          onChange={(event) => userTableStore.setFilter("id", event.target.value)}
          label={USERS_TEXTS.columns.id}
        />
      )
    },
    {
      name: "name",
      title: USERS_TEXTS.columns.name,
      sortable: true,
      filterable: true,
      isFilterActive: userTableStore.filters.name !== "",
      renderFilter: () => (
        <ClearableTextField
          size="small"
          value={userTableStore.filters.name}
          onChange={(event) => userTableStore.setFilter("name", event.target.value)}
          label={USERS_TEXTS.columns.name}
        />
      )
    },
    {
      name: "email",
      title: USERS_TEXTS.columns.email,
      sortable: true,
      filterable: true,
      isFilterActive: userTableStore.filters.email !== "",
      renderFilter: () => (
        <ClearableTextField
          size="small"
          value={userTableStore.filters.email}
          onChange={(event) => userTableStore.setFilter("email", event.target.value)}
          label={USERS_TEXTS.columns.email}
        />
      )
    },
    {
      name: "role",
      title: USERS_TEXTS.columns.role,
      render: (row: IUserListWidgetRowModel) => EUserRoleLabels[row.role],
      sortable: true,
      filterable: true,
      isFilterActive: userTableStore.filters.roles.length > 0,
      renderFilter: () => (
        <ClearableMultiSelect
          value={userTableStore.filters.roles}
          options={userRoleOptions}
          onChange={(value) => userTableStore.setFilter("roles", value)}
          label={USERS_TEXTS.columns.role}
          sx={{ width: 300 }}
        />
      )
    },
    {
      name: "actions",
      title: "",
      render: (row: IUserListWidgetRowModel) => (
        <Stack direction="row" spacing={1}>
          <EditUserButton row={row} />
          <DeleteUserButton row={row} />
        </Stack>
      )
    }
  ];
};

export { getUserColumnList, getUserRowList };
