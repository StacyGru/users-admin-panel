import type { IUser } from "entities/user/model";

const USERS_STORAGE_KEY = "users";

function getUsers(): IUser[] {
  const raw = localStorage.getItem(USERS_STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw) as IUser[];
  } catch {
    return [];
  }
}

function saveUsers(users: IUser[]): void {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

export { getUsers, saveUsers };
