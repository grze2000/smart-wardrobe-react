import { Burger, Group, Menu, Text } from '@mantine/core'
import { useAuth, useLayout } from 'app/store'
import { Link, useNavigate } from 'react-router-dom'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { IoShirtOutline } from 'react-icons/io5'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { InputTextPure } from 'components/form/input'
import { useState } from 'react'
import { useModals } from '@mantine/modals'

export const AppHeader = () => {
  const { isNavigationOpended, toggleNavigation } = useLayout((state) => state)
  const [searchPhrase, setSearchPhrase] = useState('')
  const modals = useModals()
  const navigate = useNavigate()
  const clearAuthState = useAuth((state) => state.clearAuthState)

  const openLogoutModal = () =>
    modals.openConfirmModal({
      title: 'Wyloguj się',
      centered: false,
      children: <Text size="sm">Czy na pewno chcesz się wylogować?</Text>,
      labels: {
        confirm: 'Wyloguj się',
        cancel: 'Anuluj',
      },
      onConfirm: () => {
        clearAuthState()
        navigate('/')
      },
    })

  return (
    <Group className="p-6">
      <Burger
        opened={!isNavigationOpended}
        onClick={toggleNavigation}
        title="Open navigation"
        className="lg:hidden"
      />
      <div className="hidden sm:flex gap-4">
        <div className="bg-[#f5f5f5] h-12 rounded-full flex items-center">
          <InputTextPure
            placeholder="Szukaj"
            styles={{
              input: {
                border: 0,
              },
            }}
            className="w-[40vw] min-w-64"
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.currentTarget.value)}
          />
        </div>
        <Link
          to="/app"
          className="bg-[#f5f5f5] hover:bg-[#e9e9e9] rounded-full w-12 h-12 flex justify-center items-center text-gray-700"
        >
          <TbAdjustmentsHorizontal size={20} />
        </Link>
      </div>
      <Group className="ml-auto">
        <Link
          to="/app/"
          className="bg-[#f5f5f5] hover:bg-[#e9e9e9] rounded-full w-12 h-12 flex justify-center items-center text-gray-700"
        >
          <IoShirtOutline size={20} />
        </Link>
        <Link
          to="/app/marketplace"
          className="bg-[#f5f5f5] hover:bg-[#e9e9e9] rounded-full w-12 h-12 flex justify-center items-center text-gray-700"
        >
          <RiShoppingBag3Line size={20} />
        </Link>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button className="bg-[#f5e0da] rounded-full w-12 h-12 flex justify-center items-center">
              <img
                src="https://api.dicebear.com/6.x/miniavs/svg?seed=Arek"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Konto</Menu.Label>
            {/* <Menu.Item>Ustawienia</Menu.Item> */}
            <Menu.Divider />
            <Menu.Item onClick={openLogoutModal}>Wyloguj się</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  )
}
