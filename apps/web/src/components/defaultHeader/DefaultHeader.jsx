import UserSection from "./UserSection";

function DefaultHeader() {
  return (
    <header className="flex items-center py-4 pl-7 pr-3 bg-white shadow-xl">
      <h1 className="grow text-3xl font-semibold">Products App</h1>
      <UserSection />
    </header>
  )
}

export default DefaultHeader