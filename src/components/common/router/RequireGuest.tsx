import { r } from 'app/router'
import { useAuth } from 'app/store'
import { Navigate } from 'react-router-dom'
import { RouteGuardProps } from './RequireAuth'

export const RequireGuest = ({ children }: RouteGuardProps): JSX.Element => {
  const { id } = useAuth((state) => state)

  if (!id) {
    console.log('shall pass')
    return children
  } else {
    console.log('shall not pass')
    return <Navigate to={r['index']} />
  }
}
