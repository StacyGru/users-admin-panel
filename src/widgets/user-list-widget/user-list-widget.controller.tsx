import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { CustomTable } from "shared/ui/table";
import { getUserColumnList, getUserRowList } from "widgets/user-list-widget/model";
import { userStore } from "entities/user/model";

const UserListWidget = observer(() => {
  useEffect(() => {
    userStore.loadUsers();
  }, []);

  return <CustomTable columnList={getUserColumnList()} rowList={getUserRowList(userStore.users)} />;
});

export { UserListWidget };
