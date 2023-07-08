import { Title, Text, Anchor } from '@mantine/core'
import { r } from 'app/router'
import { Link } from 'react-router-dom'
import { FormRegister } from './form/FormRegister'

const Register = () => {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12 max-w-md mx-auto">
        <Title order={2} mb={'xl'} align="center">
          Rejestracja
        </Title>
        <FormRegister />
        <Text align="center" py={'lg'}>
          Masz już konto?{' '}
          <Anchor component={Link} to={r['auth.login']}>
            Zaloguj się
          </Anchor>
        </Text>
      </div>
    </>
  )
}

export default Register
