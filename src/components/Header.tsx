
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Получаем данные пользователя при монтировании компонента
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    // Удаляем данные пользователя из localStorage
    localStorage.removeItem('currentUser');
    // Перенаправляем на страницу входа
    navigate('/login');
  };

  return (
    <header className="border-b py-4 px-6 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Управление товарами и заказами</h1>
        </div>
        
        {user && (
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Здравствуйте, <span className="font-medium">{user.name}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Выйти
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
