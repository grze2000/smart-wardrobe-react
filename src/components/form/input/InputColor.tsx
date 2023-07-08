import { ColorInput, ColorInputProps } from "@mantine/core"
import { Controller, useFormContext } from "react-hook-form"

export interface InputColorProps extends ColorInputProps {
  name: string
}

export const InputColor = ({ name, icon, ...props }: InputColorProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        return (
          <ColorInput
            {...field}
            {...props}
            withPicker={true}
          />
        )
      }}
    />
  )
}