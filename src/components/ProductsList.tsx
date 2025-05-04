
import { useState } from 'react';
import ProductRow from './ProductRow';
import { Card } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  quantity: number;
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([
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
    <Card className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Наши товары</h1>
      
      <div className="space-y-6">
        {products.map(product => (
          <ProductRow
            key={product.id}
            id={product.id}
            name={product.name}
            quantity={product.quantity}
            onNameChange={handleNameChange}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Это скелет будущего проекта. Изменяйте названия и количество товаров.
      </div>
    </Card>
  );
};

export default ProductsList;
