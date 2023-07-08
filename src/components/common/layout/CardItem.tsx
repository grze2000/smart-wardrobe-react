import { Group, Stack } from "@mantine/core"
import classNames from "classnames"

export interface CardItemProps {
  title?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const CardItem = ({ children, className, title, icon }: CardItemProps) => {
  return (
    <Group className={classNames("p-4", className)}>
      <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cardElementBackgroundHover">
        {icon}
      </div>
      <Stack className="!grow text-sm text-gray-400" spacing={0}>
        <h2 className="">{title}</h2>
        <div className="">
          {children}
        </div>
      </Stack>
    </Group>
  )
}