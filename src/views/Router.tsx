import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './public/@Routes'
import { dashboardRoutes } from './dashboard/@Routes'
import { r } from 'app/router'
import { RequireAuth } from 'components/common'
import { PERMISSION_ADMIN, PERMISSION_MANAGER, PERMISSION_USER } from 'app/config/permissions'
import { lazy } from 'react'
import { marketplaceRoutes } from './marketplace/@Routes'

const AppLayout = lazy(() => import('layout/AppLayout'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={r['dashboard']}
          path={r['dashboard']}
          element={
            <RequireAuth roles={[PERMISSION_MANAGER, PERMISSION_ADMIN, PERMISSION_USER]}>
              <AppLayout />
            </RequireAuth>
          }
        >
          {dashboardRoutes}
          {marketplaceRoutes}
        </Route>
      </Routes>
      <Routes>{publicRoutes}</Routes>
    </BrowserRouter>
  )
}

export default AppRouter
