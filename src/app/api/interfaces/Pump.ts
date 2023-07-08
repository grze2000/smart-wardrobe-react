import { installations } from "../mocks/installations"

export interface Pump {
  id: number
  name: string
  capacity: number
  state: string
  registerNumber: number
  installation?: {
    status: number
  }
}