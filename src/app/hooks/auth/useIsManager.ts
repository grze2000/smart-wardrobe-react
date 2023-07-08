import { PERMISSION_GLOBAL_ADMIN, PERMISSION_MANAGER } from "app/config/permissions"
import { useAuth } from "app/store"

export const useIsManager = () => {
  const userRoles = useAuth((state) => state.roles)
  return userRoles?.includes(PERMISSION_MANAGER) || userRoles?.includes(PERMISSION_GLOBAL_ADMIN)
}