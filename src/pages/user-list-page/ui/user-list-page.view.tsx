import { type FC } from "react";
import { UserListWidget } from "widgets/user-list-widget";

interface IProps {}

const UserListView: FC<IProps> = () => {
  return <UserListWidget />;
};

export { UserListView };
