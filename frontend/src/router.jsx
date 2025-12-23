import { createBrowserRouter } from 'react-router-dom';

// Импортируем страницы
import Login from './views/Login';
import Signup from './views/Signup';
import Main from './views/Main';
import User from './views/User';
import NotFound from './views/NotFound';
import MenuLayout from './components/MenuLayout';
import CoffeeMenu from './components/CoffeeMenu.jsx';
import { Navigate } from 'react-router-dom';

// Импортируем макеты
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import UserLayout from './components/UserLayout';

// Создаём роутер с маршрутами
const router = createBrowserRouter([
  {
    path: '/menu',
    element: <MenuLayout />,
    children: [
        {
            path: 'coffee',
            element: <CoffeeMenu />
        },
        {
            index: true,
            element: <Navigate to="coffee" replace />
        }
    ]
},
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,  // Главная страница по пути /
        element: <Main />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',  // /auth/login
        element: <Login />
      },
      {
        path: 'signup',  // /auth/signup
        element: <Signup />
      }
    ]
  },
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      {
        path: 'info',  // /user/info
        element: <User />
      }
    ]
  },
  {
    path: '*',  // Любой другой путь
    element: <NotFound />
  }
]);

export default router;