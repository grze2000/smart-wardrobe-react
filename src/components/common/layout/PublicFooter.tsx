import {
  Container,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { useMemo } from 'react'

export const PublicFooter = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = useMemo(() => colorScheme === 'dark', [colorScheme])

  return (
    <footer className="w-full flex justify-center">
    </footer>
  )
}
