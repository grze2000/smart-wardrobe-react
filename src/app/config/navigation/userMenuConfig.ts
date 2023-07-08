import { NavLinkProps } from '@mantine/core'
import { r } from 'app/router'
import { IconType } from 'react-icons'
import { To } from 'react-router-dom'
import { PERMISSION_GUEST, PERMISSION_ADMIN } from '../permissions'
import { MdLogout } from 'react-icons/md'
import { CgUserAdd } from 'react-icons/cg'
import { BiLogIn } from 'react-icons/bi'
import { IoSettings } from 'react-icons/io5'

export interface NavigationConfigItem extends Omit<NavLinkProps, 'icon'> {
  type: 'item' | 'divider' | 'changeTheme' | 'logout'
  value?: string
  route?: To | ((projectId: string | number) => To)
  icon?: IconType
  label?: string
  permissions?: string[],
  nestedItems?: NavigationConfigItem[],
}

export const userMenuConfig: NavigationConfigItem[] = [
  {
    type: 'item',
    route: '#',
    icon: IoSettings,
    label: 'Settings',
    permissions: [PERMISSION_ADMIN],
  },
  {
    type: 'item',
    route: r['auth.login'],
    icon: BiLogIn,
    label: 'Login',
    permissions: [PERMISSION_GUEST],
  },
  {
    type: 'item',
    route: r['auth.register'],
    icon: CgUserAdd,
    label: 'Register',
    permissions: [PERMISSION_GUEST],
  },
  {
    type: 'divider',
  },
  {
    type: 'logout',
    icon: MdLogout,
    label: 'Logout',
    permissions: [PERMISSION_ADMIN],
  },
  { type: 'changeTheme' },
]
