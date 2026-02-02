import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CartDrawer = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateItemHours,
    updateItemDate,
    getTotalPrice,
    checkDateAvailability,
    bookedDates 
  } = useCart();

  const handleDateChange = (itemId: string, date: Date | undefined) => {
    if (!date) return;
    
    const dateStr = format(date, 'yyyy-MM-dd');
    const { available, nextAvailable } = checkDateAvailability(dateStr);
    
    if (!available) {
      toast({
        title: "Date non disponible",
        description: `Cette date est déjà réservée. La prochaine date disponible est le ${format(parseISO(nextAvailable), 'PPP', { locale: fr })}.`,
        variant: "destructive",
      });
      updateItemDate(itemId, nextAvailable);
    } else {
      updateItemDate(itemId, dateStr);
    }
  };

  const isDateDisabled = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return bookedDates.includes(dateStr) || date < new Date();
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-playfair">
            <ShoppingCart className="w-5 h-5" />
            Mon Panier ({items.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">Votre panier est vide</p>
              <Button 
                variant="link" 
                onClick={() => setIsCartOpen(false)}
                className="mt-2"
              >
                Découvrir nos services
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-muted/50 rounded-xl p-4 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'pack' ? 'bg-bleu-doux/30 text-foreground' : 'bg-sauge/30 text-foreground'
                      }`}>
                        {item.type === 'pack' ? 'Pack' : 'Service'}
                      </span>
                      <h4 className="font-playfair font-semibold mt-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Hours selector */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Nombre d'heures :</span>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateItemHours(item.id, item.hours - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <Input 
                        type="number" 
                        value={item.hours}
                        onChange={(e) => updateItemHours(item.id, parseInt(e.target.value) || 1)}
                        className="w-16 text-center h-8"
                        min={1}
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateItemHours(item.id, item.hours + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Date picker */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Date de début :</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-[180px] justify-start text-left font-normal h-8",
                            !item.startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {item.startDate ? format(parseISO(item.startDate), 'PPP', { locale: fr }) : "Choisir une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar
                          mode="single"
                          selected={item.startDate ? parseISO(item.startDate) : undefined}
                          onSelect={(date) => handleDateChange(item.id, date)}
                          disabled={isDateDisabled}
                          locale={fr}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {item.price}€ × {item.hours}h
                    </span>
                    <span className="font-bold text-gradient">
                      {(item.price * item.hours).toFixed(2)} €
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-playfair text-lg">Total :</span>
              <span className="text-2xl font-bold text-gradient">
                {getTotalPrice().toFixed(2)} €
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-sauge/10 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 text-sauge" />
              <span>Paiement sécurisé : CB, PayPal, CESU acceptés</span>
            </div>

            <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
              <Button variant="cta" size="lg" className="w-full">
                <CreditCard className="w-5 h-5 mr-2" />
                Procéder au paiement
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
