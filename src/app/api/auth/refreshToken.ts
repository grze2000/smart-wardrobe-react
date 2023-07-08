import { API_URL } from 'app/config/env'
import axios, { AxiosResponse } from 'axios'

export interface RefreshTokenReturnData {
  accessToken: string | null
}

export const refreshToken = async (): Promise<
  AxiosResponse<RefreshTokenReturnData>['data']
> => {
  const res = await axios({
    method: 'POST',
    url: `${API_URL}/auth/refresh-token`,
    withCredentials: true,
  })
  return await res.data
}
