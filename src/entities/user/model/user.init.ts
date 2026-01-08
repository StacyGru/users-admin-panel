import { createUserListMock } from "./user.mock";
import type { IUser } from "./user.types";
import { getUsers, saveUsers } from "shared/lib/storage";

function initUsers(): IUser[] {
  const storedUsers = getUsers();

  if (storedUsers && storedUsers.length > 0) {
    return storedUsers;
  }

  const users = createUserListMock();
  saveUsers(users);

  return users;
}

export { initUsers };
