
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Смартфон XYZ', quantity: 12 },
    { id: 2, name: 'Наушники Premium', quantity: 25 },
    { id: 3, name: 'Зарядное устройство', quantity: 38 },
  ]);

  const handleNameChange = (id: number, newName: string) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, name: newName } : product
    ));
  };

  const handleQuantityChange = (id: number, newQuantity: string) => {
    const quantity = parseInt(newQuantity) || 0;
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity } : product
    ));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <Card className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Наши товары</h1>
        
        <div className="space-y-6">
          {products.map(product => (
            <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <Input
                  value={product.name}
                  onChange={(e) => handleNameChange(product.id, e.target.value)}
                  className="border-none focus-visible:ring-1 bg-transparent"
                />
              </div>
              
              <div className="w-24">
                <Input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="text-center"
                  min="0"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Это скелет будущего проекта. Изменяйте названия и количество товаров.
        </div>
      </Card>
    </div>
  );
};

export default Index;
