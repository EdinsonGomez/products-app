function CardHeader({
  className,
  children
}) {
  return (
    <div className={`text-2xl font-semibold ${className ?? ''} mb-4`}>
      {children}
    </div>
  )
}

export default CardHeader