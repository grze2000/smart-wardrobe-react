import { ActionIcon } from '@mantine/core'
import { r } from 'app/router'
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const CreateProjectButton = () => {
  return (
    <ActionIcon
      sx={(theme) => ({
        '&:hover': {
          backgroundColor: theme.colors['tw-cardElementBackgroundHover'][5],
        },
      })}
      component={Link}
      to={r['installation.create']}
    >
      <BiPlus color="#5d5f63" />
    </ActionIcon>
  )
}
