interface FormSeparatorProps {
  children: React.ReactNode
}

export const FormSeparator = ({ children, ...props }: FormSeparatorProps) => {
  return (
    <div className="flex items-center my-5" {...props}>
      <div className="flex-1 h-[2px] bg-gradient-to-l from-gray-600 rounded-full"></div>
      <div className="px-3">{children}</div>
      <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-600 rounded-full"></div>
    </div>
  )
}
