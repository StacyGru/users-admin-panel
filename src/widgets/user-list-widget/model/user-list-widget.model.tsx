import type { IUser } from "entities/user/model";
import type {
  IUserListWidgetColumnModel,
  IUserListWidgetRowModel
} from "widgets/user-list-widget/types";
import { USERS_TEXTS } from "shared/config/texts";

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
      sortable: true
    },
    {
      name: "name",
      title: USERS_TEXTS.columns.name,
      sortable: true
    },
    {
      name: "email",
      title: USERS_TEXTS.columns.email,
      sortable: true
    },
    {
      name: "role",
      title: USERS_TEXTS.columns.role,
      sortable: true
    }
  ];
};

export { getUserColumnList, getUserRowList };
