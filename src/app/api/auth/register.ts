import { LoginResponse } from 'app/api'
import axios, { AxiosResponse } from 'axios'
import * as yup from 'yup'
import { API_URL } from 'app/config/env'

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Nieprawidłowy format adresu email')
    .required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane'),
  confirmPassword: yup
    .string()
    .required('Powtórz hasło')
    .oneOf([yup.ref('password'), null], 'Podane hasła muszą być takie same.'),
  firstName: yup.string().required('Imię jest wymagane'),
  lastName: yup.string().nullable(),
})

export interface RegisterFormFields
  extends yup.InferType<typeof registerSchema> {}

export const register = async (
  data: RegisterFormFields,
): Promise<AxiosResponse<LoginResponse>['data']> =>
  await axios({
    method: 'POST',
    url: `${API_URL}/auth/sign-up`,
    data,
  }).then(({ data }) => data)
