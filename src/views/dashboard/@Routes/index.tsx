import { PERMISSION_ADMIN, PERMISSION_MANAGER, PERMISSION_USER } from 'app/config/permissions'
import { RequireAuth } from 'components/common'
import { lazy } from 'react'
import { Route } from 'react-router-dom'

const Dashboard = lazy(() => import('../View_Dashboard'))

export const dashboardRoutes = [<Route index element={
  <RequireAuth roles={[PERMISSION_MANAGER, PERMISSION_ADMIN, PERMISSION_USER]}>
    <Dashboard />
  </RequireAuth>
} />]
