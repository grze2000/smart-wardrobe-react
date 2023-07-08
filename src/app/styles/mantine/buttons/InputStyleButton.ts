import { createStyles } from "@mantine/core";

export const useInputStyleButtonStyles = createStyles((theme) => ({
  root: {
    borderWidth: '2px',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors['tw-primary'][5],
    },
    ...(theme.colorScheme === 'dark'
      ? {
          borderColor: theme.colors.gray[7],
          color: theme.colors.dark[0],
        }
      : {
          borderColor: theme.colors.gray[3],
          color: theme.colors.gray[3],
        }),
  },
}))