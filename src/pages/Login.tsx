
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

// Простой список пользователей. В реальном приложении нужно хранить на сервере.
const USERS = [
  { id: 1, email: 'admin@company.ru', password: 'admin123', name: 'Администратор' },
  { id: 2, email: 'user@company.ru', password: 'user123', name: 'Менеджер' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Имитация задержки, как при API запросе
    setTimeout(() => {
      const user = USERS.find(
        (user) => user.email === email && user.password === password
      );
      
      if (user) {
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('currentUser', JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
        }));
        
        toast({
          title: "Успешный вход",
          description: `Добро пожаловать, ${user.name}!`,
        });
        
        navigate('/dashboard');
      } else {
        toast({
          title: "Ошибка авторизации",
          description: "Неверный email или пароль",
          variant: "destructive",
        });
      }
      
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Вход в систему</h1>
          <p className="text-sm text-gray-500 mt-2">
            Управление товарами и заказами
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="mail@company.ru" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <div className="mb-2">Тестовые учетные записи:</div>
          <div>Email: admin@company.ru / Пароль: admin123</div>
          <div>Email: user@company.ru / Пароль: user123</div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
