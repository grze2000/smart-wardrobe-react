import { createStyles } from '@mantine/core'

export const useInputStyles = createStyles((theme) => ({
  input: {
    backgroundColor: 'transparent',
    borderWidth: '2px',
    ...(theme.colorScheme === 'dark'
      ? {
          borderColor: theme.colors.gray[7],
        }
      : {
          borderColor: theme.colors.gray[3],
        }),
    ':-webkit-autofill': {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: `${theme.colors.dark[0]} !important`,
    },
  },
}))
