
import { authStoreInitialState, useAuth } from 'app/store'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { refreshToken } from './auth/refreshToken'

interface AxiosReqConfig extends AxiosRequestConfig {
  _retry?: boolean
}

export interface ApiErrorData {
  status: number
  message: string
  error?: string
  errors?: {
    [s: string]: string[]
  }
}

export const setupAxios = () => {
  axios.interceptors.request.use(
    (config) => {
      const accessToken = useAuth.getState().accessToken      
      if (accessToken) config.headers!.Authorization = `Bearer ${accessToken}`

      return config
    },
    (err) => Promise.reject(err),
  )

  axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosReqConfig
      if (error.response?.status === 401) {
        if(originalRequest._retry) {
          // 401 even after refreshing token, clear user data
          useAuth.setState(authStoreInitialState);
          return Promise.reject(error)
        }
        originalRequest._retry = true

        refreshToken().then(({accessToken: token}) => {
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          originalRequest.headers!.Authorization = `Bearer ${token}`
          useAuth.setState({ accessToken: token })
          return axios(originalRequest)
        }).catch(err => {
          // Cannot refresh the token, clear user data
          useAuth.setState(authStoreInitialState);
          return Promise.reject(err)
        })
      }

      return Promise.reject(error)
    },
  )
}

export const revokeToken = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers!.Authorization = false
      return config
    },
    (err) => Promise.reject(err),
  )
}
