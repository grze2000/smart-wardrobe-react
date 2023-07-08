import { BASE_URL } from 'app/config/env'

const prefix = `${BASE_URL}/app`;

export const installationRoutes = {
  'installation.list': `${prefix}/installations`,

  'installation.create': `${prefix}/installations/create`,

  'installation.view': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}`,

  'installation.edit': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/edit`,

  'installation.reservoirs': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/reservoirs`,

  'installation.reservoirs.add': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/reservoirs/add`,

  'installation.pumps': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/pumps`,

  'installation.pumps.edit': (installationId: number | string = ':installationId', pumpId: number | string = ':pumpId') =>
    `${prefix}/installations/${installationId}/pumps/${pumpId}/edit`,

  'installation.pumps.add': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/pumps/add`,

  'installation.valves': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/valves`,

  'installation.valves.add': (installationId: number | string = ':installationId') =>
    `${prefix}/installations/${installationId}/valves/add`,
}
