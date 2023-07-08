import { FormProvider } from 'react-hook-form'
import { Group, Stack } from '@mantine/core'
import { InputPassword, InputSubmit, InputText } from 'components/form/input'
import { useNavigate } from 'react-router-dom'
import { r } from 'app/router'
import { showNotification } from '@mantine/notifications'
import { AxiosError } from 'axios'
import { HookFormError } from 'components/form/helpers/HookFormError'
import {
  LoginResponse,
  register,
  RegisterFormFields,
  registerSchema,
} from 'app/api'
import { ApiErrorData } from 'app/api/axios'
import { useFormMutation } from 'app/hooks'
import { useInputStyleButtonStyles } from 'app/styles/mantine/buttons/InputStyleButton'
import { useAuth } from 'app/store'
import { ImCross } from 'react-icons/im'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const passwordRequirements = [
  { re: /^[\w\W]{6,}$/, label: 'Zawiera minimum 6 znaków' },
  { re: /[0-9]/, label: 'Zawiera liczbę' },
  { re: /[a-z]/, label: 'Zawiera małą literę' },
  { re: /[A-Z]/, label: 'Zawiera dużą literę' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Zawiera symbol specjalny' },
]

export const FormRegister = () => {
  const navigate = useNavigate()
  const setAuthState = useAuth((state) => state.setAuthState)
  const { classes } = useInputStyleButtonStyles()

  const onSuccess = (data: LoginResponse) => {
    setAuthState(data)
    navigate(r['index'])
  }

  const onError = (err: AxiosError<ApiErrorData>) => {
    showNotification({
      title: 'Wystąpił błąd',
      message: err.response?.data.message,
      color: 'red',
      icon: <ImCross />,
    })
  }

  const { methods, handleSubmit, isLoading } = useFormMutation<
    RegisterFormFields,
    LoginResponse
  >(registerSchema, register, {
    onSuccess,
    onError,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <HookFormError />
        <Stack>
          <Group>
            <div className="flex-1 !grow">
              <InputText
                required
                label="Imię"
                placeholder="Imię"
                name="firstName"
                icon={BsFillPersonFill}
              />
            </div>
            <div className="flex-1 !grow">
              <InputText
                required
                label="Nazwisko"
                placeholder="Nazwisko"
                name="lastName"
                icon={BsFillPersonFill}
              />
            </div>
          </Group>

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
            requirements={passwordRequirements}
          />

          <InputPassword
            required
            label="Powtórz hasło"
            placeholder="Powtórz hasło"
            name="confirmPassword"
          />

          <InputSubmit value="Zarejestruj się" mt={'md'} loading={isLoading} />
        </Stack>
      </form>
    </FormProvider>
  )
}
