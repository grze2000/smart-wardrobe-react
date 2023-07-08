import { Group } from '@mantine/core';
import classNames from 'classnames';

export interface CardProps {
  children?: React.ReactNode
  title?: string
  actionButton?: React.ReactNode
  className?: string
}

export const Card = ({ children, className, title, actionButton }: CardProps) => {
  return (
    <div className={classNames("rounded-xl bg-cardBackground p-4", className)}>
      <Group position="apart">
        {!!title && (
          <h2 className="text-xl mb-2">{title}</h2>
        )}
        {!!actionButton && actionButton}
      </Group>
      {children}
    </div>
  )
} 