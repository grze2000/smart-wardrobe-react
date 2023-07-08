import { Installation } from "./Installation"
import { User } from "./User"

export interface Area {
  id: number
  name: string
  installations: number[]
}

export interface AreaResponse extends Omit<Area, "installations"> {
  installations: Installation[]
  user?: User
}