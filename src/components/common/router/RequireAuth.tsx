import { r } from 'app/router'
import { useAuth } from 'app/store'
import { Location, Navigate, useLocation } from 'react-router-dom'
import { PERMISSION_GLOBAL_ADMIN } from '../../../app/config/permissions'

export interface RouteGuardProps {
  roles?: string[]
  children: JSX.Element
}

export interface LocationState {
  from: Location
}

export const RequireAuth = ({
  roles,
  children,
}: RouteGuardProps): JSX.Element => {
  const userId = useAuth((state) => state.id)
  const userRoles = useAuth((state) => state.roles)
  const location = useLocation()

  if (!userId)
    return <Navigate to={r['auth.login']} state={{ from: location }} replace />

  const userHasRequiredRoles =
    !roles || userRoles?.includes(PERMISSION_GLOBAL_ADMIN) || (userRoles && roles.some((role) => userRoles.includes(role)))

  // TODO: ADD UNAUTHORIZED VIEW
  if (!userHasRequiredRoles) return <Navigate to={r['dashboard']} />

  return children
}
