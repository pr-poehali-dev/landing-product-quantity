
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Проверяем, авторизован ли пользователь
  const isAuthenticated = () => {
    const user = localStorage.getItem('currentUser');
    return !!user;
  };

  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // Если авторизован, показываем защищенный контент
  return <>{children}</>;
};

export default PrivateRoute;
