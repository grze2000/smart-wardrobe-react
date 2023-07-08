import { LoginResponse } from 'app/api'
import { revokeToken, setupAxios } from 'app/api/axios'
import { PERMISSION_GUEST } from 'app/config/permissions'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface AuthStore {
  accessToken: string | null
  id: number | null
  email: string | null
  roles: string[] | null
  firstName: string | null
  lastName: string | null
  setAuthState: ({
    user: { id, email, roles, firstName, lastName },
  }: LoginResponse) => void
  clearAuthState: () => void
}

export const authStoreInitialState = {
  accessToken: null,
  id: null,
  email: null,
  roles: [PERMISSION_GUEST],
  firstName: null,
  lastName: null,
}

export const useAuth = create<AuthStore>()(
  devtools(
    persist((set) => ({
      ...authStoreInitialState,
      setAuthState: ({
        user: { id, email, roles, firstName, lastName },
        accessToken,
      }: LoginResponse) => {
        set({ accessToken, id, email, roles, firstName, lastName })
      },
      clearAuthState: () => {
        revokeToken()
        set(authStoreInitialState)
      },
    }), {
      name: 'auth-storage',
    }),
  ),
)
