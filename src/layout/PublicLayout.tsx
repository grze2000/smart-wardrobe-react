import { Outlet } from 'react-router-dom'
import { Container, Paper } from '@mantine/core'
import { Suspense } from 'react'
import { PublicHeader, SpinnerOverlay } from 'components/common/layout'
import { PublicFooter } from '../components/common/layout/PublicFooter'

const PublicLayout = () => {
  return (
    <Paper radius={0} className="!flex flex-col grow">
      <PublicHeader />
      <Container size={1920} className="!grow lg:w-1/2" mb={'lg'} px={'10%'}>
        <Suspense fallback={<SpinnerOverlay />}>
          <Outlet />
        </Suspense>
      </Container>
      <PublicFooter/>
    </Paper>
  )
}

export default PublicLayout
