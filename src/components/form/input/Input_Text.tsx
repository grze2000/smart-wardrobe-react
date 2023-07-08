import { TextInput, TextInputProps } from '@mantine/core'
import { useInputStyles } from 'app/styles/mantine'
import { RefCallBack } from 'react-hook-form'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import { IconType } from 'react-icons/lib'

interface InputTextProps extends Omit<TextInputProps, 'icon'> {
  name: string
  label?: string
  icon?: IconType
  description?: string
  placeholder?: string
  required?: boolean
  type?: string
}

interface InputTextPureProps {
  label?: string
  icon?: IconType
  description?: string
  placeholder?: string
  error?: FieldError
  innerRef?: RefCallBack
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  type?: string
  required?: boolean
  disabled?: boolean
  styles?: object
  className?: string
}

export const InputText = ({ name, icon, ...props }: InputTextProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        return (
          <InputTextPure
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


export const InputTextPure = ({
  icon: Icon,
  error,
  innerRef,
  onChange,
  value,
  ...props
}: InputTextPureProps) => {
  const { classes } = useInputStyles()

  return (
    <TextInput
      ref={innerRef}
      icon={Icon ? <Icon size={'1.2em'} /> : null}
      error={error?.message}
      onChange={onChange}
      value={value ?? ''}
      classNames={classes}
      size="md"
      {...props}
    />
  )
}
