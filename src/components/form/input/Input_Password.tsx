import { Box, PasswordInput, Popover, Progress, Text } from '@mantine/core'
import { useInputStyles } from 'app/styles/mantine'
import { getPasswordStrength, RequirementsType } from 'app/utils'
import { useState } from 'react'
import { RefCallBack } from 'react-hook-form'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import { BiLock } from 'react-icons/bi'
import { HiOutlineCheck } from 'react-icons/hi'
import { ImCross } from 'react-icons/im'
import { IconType } from 'react-icons/lib'

interface InputPasswordProps {
  name: string
  label?: string
  icon?: IconType
  description?: string
  placeholder?: string
  requirements?: RequirementsType[]
  required?: boolean
}

interface InputPasswordPureProps {
  label?: string
  icon?: IconType
  description?: string
  placeholder?: string
  error?: FieldError
  innerRef: RefCallBack
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value: string
  requirements?: RequirementsType[]
}

export const InputPassword = ({
  name,
  icon,
  requirements,
  ...props
}: InputPasswordProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        if (requirements)
          return (
            <InputPasswordPureWithRequirements
              {...field}
              {...props}
              innerRef={ref}
              error={error}
              icon={icon}
              requirements={requirements}
            />
          )
        else
          return (
            <InputPasswordPure
              {...field}
              {...props}
              innerRef={ref}
              error={error}
              icon={icon}
            />
          )
      }}
    />
  )
}

export const InputPasswordPureWithRequirements = ({
  icon: Icon,
  error,
  innerRef,
  value = '',
  onChange,
  requirements = [],
  ...props
}: InputPasswordPureProps) => {
  const [popoverOpened, setPopoverOpened] = useState(false)
  const checks = requirements.map(
    (requirement: RequirementsType, index: number) => (
      <PasswordRequirement
        key={index}
        label={requirement.label}
        meets={requirement.re.test(value)}
      />
    ),
  )

  const strength = getPasswordStrength(requirements, value)
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'
  const { classes } = useInputStyles()

  return (
    <Popover
      opened={popoverOpened}
      position="bottom-end"
      withArrow
      transition="pop-top-left"
    >
      <Popover.Target>
        <PasswordInput
          ref={innerRef}
          icon={Icon ? <Icon size={'1.2em'} /> : <BiLock size={'1.2em'} />}
          error={error?.message}
          onChange={onChange}
          value={value ?? ''}
          classNames={classes}
          size="md"
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
          {...props}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Progress
          color={color}
          value={strength}
          size={5}
          style={{ marginBottom: 10, width: '100%' }}
        />
        {checks}
      </Popover.Dropdown>
    </Popover>
  )
}

export const InputPasswordPure = ({
  icon: Icon,
  error,
  innerRef,
  value = '',
  onChange,
  ...props
}: InputPasswordPureProps) => {
  const { classes } = useInputStyles()
  return (
    <PasswordInput
      ref={innerRef}
      icon={Icon ? <Icon size={'1.2em'} /> : <BiLock size={'1.2em'} />}
      error={error?.message}
      onChange={onChange}
      value={value ?? ''}
      classNames={classes}
      size="md"
      {...props}
    />
  )
}

const PasswordRequirement = ({
  meets,
  label,
}: {
  meets: boolean
  label: string
}) => {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <HiOutlineCheck /> : <ImCross />} <Box ml={10}>{label}</Box>
    </Text>
  )
}
