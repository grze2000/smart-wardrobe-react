import { Avatar, Box, Group, Text, UnstyledButton, useMantineTheme } from "@mantine/core"
import { useAuth } from "app/store"

export const UserSection = () => {
  const { email, firstName, lastName } = useAuth((state) => state)
  const theme = useMantineTheme()

  return (
    <Box>
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.black,
          cursor: 'default'
        }}
      >
        <Group className="!flex-nowrap text-ellipsis overflow-hidden">
          <Avatar
            radius="xl"
            color={theme.colors['tw-primary'][5]}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Text size="sm" weight={500}>
              { firstName } { lastName }
            </Text>
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
    </Box>
  )
}