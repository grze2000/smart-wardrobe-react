export interface Valve {
  id: number
  name: string
  state: string
  registerNumber: number
  installation?: {
    status: number
  }
}