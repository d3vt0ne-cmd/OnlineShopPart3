import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProviders';

export default function UserLayout() {
  const { token } = useStateContext();
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!token) {
    return <Navigate to="/auth/login" />;
  }
  
  // Иначе показываем защищённые страницы
  return (
    <div>
      <Outlet />
    </div>
  );
}
