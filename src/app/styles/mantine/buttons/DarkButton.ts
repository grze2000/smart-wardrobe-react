import { createStyles } from "@mantine/core";

export const useDarkButtonStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors['tw-appBackgroundDark'][5],
    '&:hover': {
      backgroundColor: theme.colors['tw-cardElementBackgroundHover'][5],
    },
    fontWeight: 400,
    color: theme.colors['gray'][5],
  },
}))