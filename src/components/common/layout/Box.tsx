import { Group, Stack } from "@mantine/core"
import classNames from "classnames"
import { GoPrimitiveDot } from "react-icons/go"

export interface BoxProps {
  children?: React.ReactNode
  title?: string
  icon?: React.ReactNode
  className?: string
  color?: string
  rightSection?: React.ReactNode
  stateIndicator?: 'active' | 'inactive'
}

export const Box = ({ children, className, title, icon, color, rightSection, stateIndicator }: BoxProps) => {
  return (
    <Group className={classNames("rounded-xl bg-cardElementBackground p-4", className)}>
      {!!icon && <div className="rounded-full w-10 h-10 flex justify-center items-center" style={{
        backgroundColor: color
      }}>
        {icon}
      </div>}
      <Stack className="!grow text-sm" spacing={2}>
        {!!title && (
          <h2 className="text-lg flex items-center">{title}
            {stateIndicator === 'active' ? (
              <GoPrimitiveDot className="text-green-500" />
            ) : stateIndicator === 'inactive' ? (
              <GoPrimitiveDot className="text-gray-500" />
            ) : (
              <></>
            )}
          </h2>
        )}
        <div className="text-gray-400">
          {children}
        </div>
      </Stack>
      {rightSection}
    </Group>
  )
}