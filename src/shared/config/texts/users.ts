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
  },
  dialogs: {
    create: {
      title: "Создание пользователя"
    },
    edit: {
      title: "Редактирование пользователя"
    },
    delete: {
      title: "Удаление пользователя",
      text: "Вы уверены что хотите удалить пользователя {name}?"
    }
  }
} as const;
