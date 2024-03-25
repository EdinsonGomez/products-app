function FormLabel({
  children,
  ...props
}) {
  return (
    <label {...props} className="font-semibold text-md">
      {children}
    </label>
  )
}

export default FormLabel