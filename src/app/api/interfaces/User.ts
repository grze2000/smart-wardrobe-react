import { Area } from "./Area"
import { Installation } from "./Installation"

export interface User {
  id: number
  email: string
  roles: string[]
  firstName: string
  lastName: string
}

export interface EditUser {
  email: string
  firstName: string
  lastName: string
}

export interface UserResponse extends Omit<User, "installations" | "areaId"> {
  installations?: Installation[]
  area?: Area
}