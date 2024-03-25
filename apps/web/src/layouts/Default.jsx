import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <header>
        <h1>Products App</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout