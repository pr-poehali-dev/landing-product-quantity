
import { Input } from '@/components/ui/input';

interface ProductRowProps {
  id: number;
  name: string;
  quantity: number;
  onNameChange: (id: number, name: string) => void;
  onQuantityChange: (id: number, quantity: string) => void;
}

const ProductRow = ({ 
  id, 
  name, 
  quantity, 
  onNameChange, 
  onQuantityChange 
}: ProductRowProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex-1">
        <Input
          value={name}
          onChange={(e) => onNameChange(id, e.target.value)}
          className="border-none focus-visible:ring-1 bg-transparent"
          placeholder="Название товара"
        />
      </div>
      
      <div className="w-24">
        <Input
          type="number"
          value={quantity}
          onChange={(e) => onQuantityChange(id, e.target.value)}
          className="text-center"
          min="0"
          placeholder="Кол-во"
        />
      </div>
    </div>
  );
};

export default ProductRow;
