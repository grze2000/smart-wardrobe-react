import { Pump } from "./Pump"
import { Reservoir } from "./Reservoir"
import { User } from "./User"
import { Valve } from "./Veleve"

export interface Installation {
  id: number
  name: string
  ipAddress: string
  address: string
  location: {
    latitude: number
    longitude: number
  }
  roofSurface: number
  greenArea: number
  panelPower: number
  turbinePower: number
  reservoirs: Reservoir[]
  fillingOfReservoirs: number
  pumps: Pump[]
  valves: Valve[]
  weatherForecast: {
    description?: string
    rain?: number
    pop?: number
  },
  status: number
  weatherForecastRegisterNumber: number
  emergencyWaterDischargeRegisterNumber: number
  emergencyDrainState: 'ON' | 'OFF'
}

export interface InstallationResponse extends Installation{
  user: User
}