import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const CartButton = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const itemCount = getTotalItems();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="relative"
      onClick={() => setIsCartOpen(true)}
    >
      <ShoppingCart className="w-5 h-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
          {itemCount}
        </span>
      )}
    </Button>
  );
};

export default CartButton;
