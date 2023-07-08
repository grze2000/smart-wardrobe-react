import { Title, Paper, Text, Anchor } from '@mantine/core'
import { FormLogin } from './form/FormLogin'
import { r } from 'app/router'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12 max-w-md mx-auto">
        <Title order={2} mb={'xl'} align="center">
          Logowanie
        </Title>
        <FormLogin />
        <Text align="center" py={'sm'}>
          Nie masz konta?{' '}
          <Anchor component={Link} to={r['auth.register']}>
            Zarejestruj się
          </Anchor>
        </Text>
      </div>
    </>
  )
}

export default Login
