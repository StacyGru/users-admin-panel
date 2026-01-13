export const USERS_TEXTS = {
  name: "Пользователи",
  columns: {
    id: "ID",
    name: "Имя",
    email: "Email",
    role: "Роль"
  },
  entityActions: {
    create: "Создать",
    edit: "Редактировать",
    delete: "Удалить"
  },
  listActions: {
    sort: "Сортировать",
    filter: "Фильтровать"
  }
} as const;
