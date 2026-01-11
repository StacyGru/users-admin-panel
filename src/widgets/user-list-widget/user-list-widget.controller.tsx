import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { CustomTable } from "shared/ui/table";
import { getUserColumnList, getUserRowList, userTableStore } from "widgets/user-list-widget/model";
import { userStore } from "entities/user/model";

const UserListWidget = observer(() => {
  useEffect(() => {
    userStore.loadUsers();
  }, []);

  const rows = getUserRowList(userStore.users);
  const sortedRows = userTableStore.getProcessedRows(rows);

  const columns = getUserColumnList();

  return (
    <CustomTable
      columnList={columns}
      rowList={sortedRows}
      sortColumn={userTableStore.sortColumn}
      sortDirection={userTableStore.sortDirection}
      onSortChange={userTableStore.setSort}
    />
  );
});

export { UserListWidget };
