import { BASE_URL } from 'app/config/env'
import { publicRoutes } from './public'
import { userRoutes } from './user'

export const r = {
  index: `${BASE_URL}/`,
  ...publicRoutes,
  ...userRoutes,
}
