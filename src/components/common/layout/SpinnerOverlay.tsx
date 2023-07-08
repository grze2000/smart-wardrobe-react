import { Loader, Paper } from '@mantine/core'

interface SpinnerOverlayProps {
  color?: string | [string, string]
}

export const SpinnerOverlay = ({ color }: SpinnerOverlayProps) => {
  return (
    <Paper
      radius={0}
      aria-busy
      sx={(theme) => ({
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: !color
          ? window?.location?.pathname?.startsWith("/app") ? theme.colors['tw-appBackgroundDark'][5] : theme.colors['tw-background'][5]
          : !Array.isArray(color)
          ? color
          : theme.colorScheme === 'dark'
          ? color[0]
          : color[1],
      })}
    >
      <Loader />
    </Paper>
  )
}
