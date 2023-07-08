import {
  PERMISSION_ADMIN,
  PERMISSION_MANAGER,
  PERMISSION_USER,
} from 'app/config/permissions'
import { RequireAuth } from 'components/common'
import { lazy } from 'react'
import { Route } from 'react-router-dom'

const ViewMarketplace = lazy(() => import('../View_Marketplace'))

export const marketplaceRoutes = [
  <Route
    key="marketplace"
    path="marketplace"
    element={
      <RequireAuth
        roles={[PERMISSION_MANAGER, PERMISSION_ADMIN, PERMISSION_USER]}
      >
        <ViewMarketplace />
      </RequireAuth>
    }
  />,
]
