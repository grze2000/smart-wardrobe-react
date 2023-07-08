import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { useAuth } from 'app/store'
import { LogoutButton } from '../special'
import { r } from 'app/router'

export const UserMenu = () => {
  const { email } = useAuth((state) => state)

  return (
    <>
      {email ? (
        <>
          <Button component={Link} to={r['dashboard']}>
            Moje konto
          </Button>
          <LogoutButton variant="outline">Wyloguj</LogoutButton>
        </>
      ) : (
        <>
          <Button variant="outline" component={Link} to={r['auth.login']}>
            Zaloguj się
          </Button>
          <Button component={Link} to={r['auth.register']}>
            Zarejestruj się
          </Button>
        </>
      )}
    </>
  )
}
