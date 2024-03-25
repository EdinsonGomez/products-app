function Card({ children }) {
  return (
    <div className="shadow-lg bg-white p-3 rounded-lg flex flex-col gap-y-4">
      {children}
    </div>
  )
}

export default Card