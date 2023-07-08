import { BASE_URL } from 'app/config/env'

const prefix = `${BASE_URL}/app`

export const locationsRoutes = {
  'location.installations': `${prefix}/locations/installations`,

  'location.map': `${prefix}/locations/map`,

  'location.createInstallation': `${prefix}/locations/installations/create`,

  'location.view': (locationId: number | string = ':locationId') =>
    `${prefix}/locations/${locationId}`,

  // Areas
  'location.areas': `${prefix}/areas`,

  'location.createArea': `${prefix}/areas/create`,

  'location.areaView': (areaId: number | string = ':areaId') =>
    `${prefix}/areas/${areaId}`,

  'location.editArea': (areaId: number | string = ':areaId') =>
    `${prefix}/areas/${areaId}/edit`,
}
