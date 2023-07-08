import { Box, Group, Text } from "@mantine/core"

export interface ProgressBarBoxProps {
  icon?: React.ReactNode
  title?: string
  max?: number
  min?: number
  value?: number
  unit?: string
  color?: string
  rightSection?: React.ReactNode
  children?: React.ReactNode
}

export const ProgressBarBox = ({ title, icon, max = 100, min = 0, value = 0, color = '#ff00ff', rightSection, unit, children }: ProgressBarBoxProps) => {
  const progress = Math.round((value - min) / (max - min) * 100)

  return (
    <Group align="center" className="rounded-md border-l-[5px] bg-cardElementBackground py-2 px-4" style={{
      borderColor: color
    }}>
      {!!icon && (
        <div className="rounded-full w-10 h-10 flex items-center justify-center" style={{
          backgroundColor: color
        }}>{icon}</div>
      )}
      <div className="!grow">
        <Text>{title}</Text>
        <Box className="text-gray-400 text-sm">{children}</Box>
      </div>
      <Text color="dimmed" size="sm">{value} {unit}</Text>
      <div className="bg-cardBackground rounded-md min-w-[250px] h-3" style={{
        boxShadow: `inset 0px 0px 20px -10px ${color}`
      }}>
        <div style={{ backgroundColor: color, width: `${progress}%` }} className="h-full rounded-md"></div>
      </div>
      <span className="font-bold" style={{
        color
      }}>{progress}%</span>
      {rightSection}
    </Group>
  )
}