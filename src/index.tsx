import { createRoot } from 'react-dom/client'
import { lazy, Suspense, useState } from 'react'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  createEmotionCache,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { useColorScheme } from '@mantine/hooks'
import 'public/css/main.css'
import { setupAxios } from 'app/api/axios'
import { ModalsProvider } from '@mantine/modals'
import { SpinnerOverlay } from 'components/common/layout'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.js'
import './app/styles/global.css'
import { useAuth } from 'app/store'
import { Config } from 'tailwindcss'
import { setupMocks } from 'app/api/mocks'
import "leaflet/dist/leaflet.css";

const App = lazy(() => import('App'))

setupAxios()
setupMocks()

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const fullTailwindConfig = resolveConfig(tailwindConfig as Config)

const tailwindColors = Object.entries(fullTailwindConfig.theme.colors).reduce(
  (prev, [key, value]) => {
    return {
      ...prev,
      [`tw-${key}`]:
        typeof value === 'string'
          ? new Array(10).fill(value)
          : Object.values(value as object),
    }
  },
  {},
)

const emotionCache = createEmotionCache({ key: 'x', prepend: false })

const Root = () => {
  const preferredColorScheme = useColorScheme('light')
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value ?? 'light')

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        emotionCache={emotionCache}
        theme={{
          fontFamily: 'Poppins',
          colors: tailwindColors,
          colorScheme,
          primaryColor: 'tw-primary',
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 640,
                  md: 768,
                  lg: 1024,
                  xl: 1280,
                  '2xl': 1536,
                  '3xl': 1920,
                },
              },
            },
            Paper: {
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors['tw-background'][5],
                  color: '#000'
                },
              }),
            },
          },
        }}
      >
        <NotificationsProvider>
          <ModalsProvider
            modalProps={{
              zIndex: 9999,
            }}
          >
            <Suspense fallback={<SpinnerOverlay/>}>
              <App />
            </Suspense>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

root.render(<Root />)
