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

const userRoleOptions = Object.values(EUserRole).map((role) => ({
  value: role,
  label: EUserRoleLabels[role]
}));

interface IUser {
  id: string;
  name: string;
  email: string;
  role: EUserRole;
}

export { EUserRole, EUserRoleLabels, userRoleOptions };
export type { IUser };
