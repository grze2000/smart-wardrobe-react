import axios, { AxiosResponse } from 'axios'
import * as yup from 'yup'
import { API_URL } from 'app/config/env'
import { User } from '../interfaces/User'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Nieprawidłowy format adresu email')
    .required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane'),
})

export interface LoginFormFields extends yup.InferType<typeof loginSchema> {}

export interface Company {
  id: number
  companyName: string
}

export interface LoginResponse {
  accessToken: string | null
  user: User
}



export const login = (
  data: LoginFormFields,
): Promise<AxiosResponse<LoginResponse>['data']> =>
  axios({ method: 'POST', url: `${API_URL}/auth/sign-in`, data }).then(
    ({ data }) => data,
  )
