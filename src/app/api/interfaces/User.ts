
export interface User {
  id: number
  email: string
  roles: string[]
  firstName: string
  lastName: string
  password: string
}

export interface EditUser {
  email: string
  firstName: string
  lastName: string
}
