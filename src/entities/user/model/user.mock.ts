import { faker } from "shared/lib/mock";
import type { IUser } from "./user.types";
import { EUserRole } from "./user.types";

const USERS_COUNT = 30;

const EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "yandex.ru",
  "mail.ru"
] as const;

function createUserMock(): IUser {
  const sex = faker.person.sex() as "male" | "female";
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName(sex);
  const fullName = `${lastName} ${firstName}`;

  const login = faker.internet.username({ firstName, lastName }).toLowerCase();
  const domain = faker.helpers.arrayElement(EMAIL_DOMAINS);
  const email = `${login}@${domain}`;

  return {
    id: faker.number.int({ min: 100000, max: 999999 }).toString(),
    name: fullName,
    email,
    role: faker.helpers.arrayElement([EUserRole.ADMIN, EUserRole.MANAGER, EUserRole.USER])
  };
}

function createUserListMock() {
  return faker.helpers.multiple(createUserMock, {
    count: USERS_COUNT
  });
}

export { createUserListMock };
