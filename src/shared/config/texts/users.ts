export const USERS_TEXTS = {
  name: "Пользователи",
  columns: {
    id: "ID",
    name: "Имя",
    email: "Email",
    role: "Роль"
  },
  columnActions: {
    sort: "Сортировать",
    filter: "Фильтровать"
  },
  rowActions: {
    edit: "Редактировать",
    delete: "Удалить"
  }
} as const;
