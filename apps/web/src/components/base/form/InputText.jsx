function InputText({
  value,
  onChange,
  ...props
}) {
  return (
    <input
      className="border-2 border-neutral-200 py-2 px-4 rounded-md focus:border-neutral-400"
      type="text"
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default InputText