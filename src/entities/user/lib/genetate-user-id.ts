import type { IUser } from "../model";

const USER_ID_LENGTH = 6;

const generateUserId = (users: IUser[]): string => {
  let id: string;

  do {
    id = Math.floor(Math.random() * Math.pow(10, USER_ID_LENGTH))
      .toString()
      .padStart(USER_ID_LENGTH, "0");
  } while (users.some((user) => user.id === id));

  return id;
};

export { generateUserId };
