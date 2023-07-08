import { Navbar, Text, useMantineTheme } from '@mantine/core'
import { SideNav } from './SideNav'
import { useLayout } from '../../../app/store'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const theme = useMantineTheme()
  const { isNavigationOpended } = useLayout((state) => state)

  return (
    <Navbar
      p="xs"
      width={{ base: 300 }}
      withBorder={false}
      sx={{
        backgroundColor: theme.colors['tw-sidebarBackground'][5],
      }}
      hidden={isNavigationOpended}
    >
      <Navbar.Section>
        <Text
          component={Link}
          to="/app/"
          className="flex items-center mb-5 font-bold md:mb-0 !text-3xl !text-slate-500 p-3"
        >
          <Text className="!text-primary">S</Text>W
        </Text>
      </Navbar.Section>
      <Navbar.Section grow={true} className="flex flex-col">
        <SideNav />
      </Navbar.Section>
    </Navbar>
  )
}
