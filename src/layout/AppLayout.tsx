import { Outlet } from 'react-router-dom'
import { Paper, Stack, useMantineTheme } from '@mantine/core'
import { Suspense } from 'react'
import { SpinnerOverlay } from 'components/common/layout'
import { AppHeader } from 'components/common/layout/AppHeader'
import { Sidebar } from 'components/common/layout/Sidebar'

const AppLayout = () => {
  const theme = useMantineTheme()

  return (
    <Paper
      radius={0}
      sx={{
        display: 'flex',
        flexGrow: 1,
        maxHeight: '100vh',
        backgroundColor: theme.colors['tw-appBackgroundDark'][5],
      }}
    >
      <Sidebar />
      <Stack className="w-full" spacing={0}>
        <AppHeader />
        <Suspense fallback={<SpinnerOverlay />}>
          <div className="overflow-auto flex flex-1">
            <Outlet />
          </div>
        </Suspense>
      </Stack>
    </Paper>
  )
}

export default AppLayout
