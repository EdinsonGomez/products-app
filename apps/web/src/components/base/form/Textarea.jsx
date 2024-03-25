function Textarea({
  value,
  onChange,
  id,
  ...props
}) {
  return (
    <textarea
      className="border-2 border-neutral-200 rounded-md py-2 px-4 focus:border-neutral-400"
      id={id}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Textarea