import { ActionIcon, ActionIconProps, Button, ButtonProps, Text } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { r } from 'app/router'
import { useAuth } from 'app/store'
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const modalOptions = {
  title: 'Wyloguj się',
  centered: false,
  children: <Text size="sm">Czy na pewno chcesz się wylogować?</Text>,
  labels: {
    confirm: 'Wyloguj się',
    cancel: 'Anuluj',
  },
}

export const LogoutButton = ({ children, ...props }: ButtonProps) => {
  const modals = useModals()
  const navigate = useNavigate()
  const clearAuthState = useAuth((state) => state.clearAuthState)

  const openLogoutModal = () =>
    modals.openConfirmModal({
      ...modalOptions,
      onConfirm: () => {
        clearAuthState()
        navigate(r['index'])
      },
    })

  return (
    <Button
      onClick={openLogoutModal}
      {...props}
    >
      {children}
    </Button>
  )
}

export const LogoutIconButton = (props: ActionIconProps) => {
  const modals = useModals()
  const navigate = useNavigate()
  const clearAuthState = useAuth((state) => state.clearAuthState)

  const openLogoutModal = () =>
    modals.openConfirmModal({
      ...modalOptions,
      onConfirm: () => {
        clearAuthState()
        navigate(r['index'])
      },
    })

  return (
    <ActionIcon
      onClick={openLogoutModal}
      {...props}
    >
      <MdLogout/>
    </ActionIcon>
  )
}