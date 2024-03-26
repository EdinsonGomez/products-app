import UserSection from "./UserSection";

function DefaultHeader() {
  return (
    <header className="flex items-center py-4 pl-4 lg:py-7 pr-1 lg:pr-8 bg-white shadow-xl">
      <h1 className="grow text-2xl lg:text-3xl font-semibold">Products App</h1>
      <UserSection />
    </header>
  )
}

export default DefaultHeader