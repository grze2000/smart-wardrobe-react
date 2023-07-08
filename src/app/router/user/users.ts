import { BASE_URL } from 'app/config/env'

const prefix = `${BASE_URL}/app`;

export const usersRoutes = {
  'user.list': `${prefix}/users`,

  'user.create': `${prefix}/users/create`,

  'user.edit': (userId: number | string = ':userId') =>
    `${prefix}/users/${userId}/edit`,

  'user.view': (userId: number | string = ':userId') =>
    `${prefix}/users/${userId}`,
}
