import { createBrowserRouter } from 'react-router-dom';
import ProductsPage from './pages/Products';
import WelcomePage from './pages/Welcome';
import DefaultLayout from './layouts/Default';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
    
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/app',
    element: <DefaultLayout />,
    children: [
      {
        path: '/app/products',
        element: <ProductsPage />
      }
    ]
  },
]);

export default router;