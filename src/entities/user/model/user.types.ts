enum EUserRole {
  USER = "USER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN"
}

const EUserRoleLabels: Record<EUserRole, string> = {
  [EUserRole.USER]: "пользователь",
  [EUserRole.MANAGER]: "менеджер",
  [EUserRole.ADMIN]: "администратор"
};

interface IUser {
  id: string;
  name: string;
  email: string;
  role: EUserRole;
}

export { EUserRole, EUserRoleLabels };
export type { IUser };
