import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProviders';

export default function AuthLayout() {
  const { token } = useStateContext();
  
  // Если пользователь уже авторизован, перенаправляем на главную
  if (token) {
    return <Navigate to="/" />;
  }
  
  // Иначе показываем страницы авторизации/регистрации
  return (
    <div>
      <Outlet />
    </div>
  );
}