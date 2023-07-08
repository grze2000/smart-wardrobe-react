import {
  Container,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { UserMenu } from './UserMenu'

export const PublicHeader = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = useMemo(() => colorScheme === 'dark', [colorScheme])

  return (
    <header className="w-full">
      <Container
        size={1920}
        className="flex flex-col flex-wrap justify-end items-center py-5 mx-auto md:flex-row"
        px={'10%'}
      >
        <div className="flex relative flex-col md:flex-row mr-0 md:mr-auto">
          <Text
            component={Link}
            to="/"
            className="flex items-center mb-5 font-bold md:mb-0 !text-3xl !text-slate-500"
          >
            <Text className="!text-primary">Smart&nbsp;</Text>
            Wardrobe
          </Text>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <UserMenu />
        </div>
      </Container>
    </header>
  )
}
