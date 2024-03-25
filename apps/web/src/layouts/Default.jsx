import DefaultHeader from '@/components/defaultHeader/DefaultHeader';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className='h-[100vh] max-h-[100vh]'>
      <div className="h-full grid grid-cols-1 grid-rows-[auto_1fr] gap-12">
        <DefaultHeader />
        <main className='overflow-y-auto pb-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout