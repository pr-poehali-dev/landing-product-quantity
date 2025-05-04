
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Index = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Смартфон XYZ', quantity: 12 },
    { id: 2, name: 'Наушники Premium', quantity: 25 },
    { id: 3, name: 'Зарядное устройство', quantity: 38 },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, number: '001', date: '2025-05-01', items: [
      { productId: 1, quantity: 5 },
      { productId: 2, quantity: 8 }
    ]},
    { id: 2, number: '002', date: '2025-05-02', items: [
      { productId: 2, quantity: 10 },
      { productId: 3, quantity: 15 }
    ]},
    { id: 3, number: '003', date: '2025-05-03', items: [
      { productId: 1, quantity: 7 },
      { productId: 3, quantity: 23 }
    ]}
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

  const getProductName = (productId: number) => {
    const product = products.find(p => p.id === productId);
    return product ? product.name : 'Неизвестный товар';
  };

  const handleOrderQuantityChange = (orderId: number, productId: number, quantity: string) => {
    const newQuantity = parseInt(quantity) || 0;
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        const updatedItems = order.items.map(item => 
          item.productId === productId ? {...item, quantity: newQuantity} : item
        );
        return {...order, items: updatedItems};
      }
      return order;
    }));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Управление товарами и заказами</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Список товаров */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Товары</h2>
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
          </Card>

          {/* Список заказов */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Заказы</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">№ Заказа</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Товары</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.number}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        {order.items.map(item => (
                          <div key={`${order.id}-${item.productId}`} className="flex items-center justify-between">
                            <span className="text-sm">{getProductName(item.productId)}</span>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleOrderQuantityChange(order.id, item.productId, e.target.value)}
                              className="text-center w-20 h-8 text-sm"
                              min="0"
                            />
                          </div>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Это скелет будущего проекта. Изменяйте названия и количество товаров, а также распределение по заказам.
        </div>
      </div>
    </div>
  );
};

export default Index;
