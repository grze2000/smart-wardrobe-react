import { BASE_URL } from 'app/config/env'
import { installationRoutes } from './installations'
import { locationsRoutes } from './locations'
import { usersRoutes } from './users'

export const userRoutes = {
  'dashboard': `${BASE_URL}/app`,
  ...installationRoutes,
  ...locationsRoutes,
  ...usersRoutes,
}
