enum EUserRole {
  USER = "USER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN"
}

interface IUser {
  id: number;
  name: string;
  email: string;
  role: EUserRole;
}

export { EUserRole };
export type { IUser };
