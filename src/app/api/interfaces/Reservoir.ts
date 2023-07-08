export interface Reservoir {
  id: number
  name: string
  capacity: number
  liquidLevel: number
  state: number
  registerNumber: number
  installation?: {
    status: number
  }
}