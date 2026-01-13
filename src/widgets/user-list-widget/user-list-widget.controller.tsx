import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { CustomTable } from "shared/ui/table";
import { getUserColumnList, getUserRowList, userListStore } from "widgets/user-list-widget/model";
import { userStore } from "entities/user/model";
import { DeleteUserDialog } from "features/delete-user";
import { EditUserDialog } from "features/edit-user/ui/dialog/edit-user-dialog.view.tsx";
import { CreateUserDialog } from "features/create-user";

const UserListWidget = observer(() => {
  useEffect(() => {
    userStore.loadUsers();
  }, []);

  const rows = getUserRowList(userStore.users);
  const sortedRows = userListStore.getProcessedRows(rows);

  const columns = getUserColumnList();

  return (
    <>
      <CustomTable
        columnList={columns}
        rowList={sortedRows}
        sortColumn={userListStore.sortColumn}
        sortDirection={userListStore.sortDirection}
        onSortChange={userListStore.setSort}
      />

      <CreateUserDialog />
      <EditUserDialog />
      <DeleteUserDialog />
    </>
  );
});

export { UserListWidget };
