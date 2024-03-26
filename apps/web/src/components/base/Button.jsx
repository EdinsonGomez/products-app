import clsx from 'clsx';

function Button({
  onClick,
  children,
  className,
  outlined = false,
  text = false,
  ...props
}) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={clsx(
        'bg-indigo-500 text-white border-2 border-indigo-500 rounded-md px-3 md:px-5 py-2 md:text-lg disabled:opacity-50',
        {
          'bg-transparent text-indigo-500': outlined,
          'border-transparent bg-transparent text-black': text,
        },
        className ?? '',
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button