import { FormProvider } from 'react-hook-form'
import { Stack } from '@mantine/core'
import { InputPassword, InputSubmit, InputText } from 'components/form/input'
import { useLocation, useNavigate } from 'react-router-dom'
import { r } from 'app/router'
import { showNotification } from '@mantine/notifications'
import axios, { AxiosError } from 'axios'
import { HookFormError } from 'components/form/helpers/HookFormError'
import { ApiErrorData } from 'app/api/axios'
import { useAuth } from 'app/store'
import { useFormMutation } from 'app/hooks'
import { login, LoginFormFields, LoginResponse, loginSchema } from 'app/api'
import { LocationState } from 'components/common'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { ImCross } from 'react-icons/im'

export const FormLogin = () => {
  const navigate = useNavigate()
  const setAuthState = useAuth((state) => state.setAuthState)
  const { state } = useLocation()
  const routeBack = (state as LocationState)?.from?.pathname

  const onSuccess = async (data: LoginResponse) => {
    console.log('Token from login response', data.accessToken);
    setAuthState(data)
    navigate(routeBack || r['dashboard'])
  }

  const onError = (error: AxiosError<ApiErrorData>) => {
    showNotification({
      title: 'Wystąpił błąd',
      message: error.response?.data.message,
      color: 'red',
      icon: <ImCross />,
    })
  }

  const { methods, handleSubmit } = useFormMutation<
    LoginFormFields,
    LoginResponse
  >(loginSchema, login, { onSuccess, onError })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <HookFormError />
        <Stack>
          <InputText
            required
            label="Email"
            placeholder="Email"
            name="email"
            icon={MdOutlineAlternateEmail}
          />

          <InputPassword
            required
            label="Hasło"
            placeholder="Hasło"
            name="password"
          />

          <InputSubmit value="Zaloguj się" mt={'md'} />
        </Stack>
      </form>
    </FormProvider>
  )
}
