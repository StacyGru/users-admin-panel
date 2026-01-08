import { makeAutoObservable } from "mobx";
import type { IUser } from "./user.types";
import { initUsers } from "./user.init";
import { saveUsers } from "shared/lib/storage";

class UserStore {
  users: IUser[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadUsers() {
    this.users = initUsers();
  }

  addUser(user: IUser) {
    this.users.push(user);
  }

  editUser(updatedUser: IUser) {
    this.users.forEach((user) => {
      if (user.id === updatedUser.id) {
        Object.assign(user, updatedUser);
      }
    });
  }

  removeUser(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  save() {
    saveUsers(this.users);
  }
}

export const userStore = new UserStore();
