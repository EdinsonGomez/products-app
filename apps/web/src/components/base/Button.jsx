import clsx from 'clsx';

function Button({
  onClick,
  children,
  className,
  ...props
}) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={clsx(
        className ?? '',
        'bg-indigo-500 text-white rounded-md px-3 md:px-5 py-2 md:text-lg disabled:opacity-50'
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button