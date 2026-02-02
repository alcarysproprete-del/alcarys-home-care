import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon, ShoppingCart, AlertCircle, Check, Plus, Minus } from "lucide-react";
import { useCart, CartItem } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: string;
    type: 'pack' | 'service';
    name: string;
    description: string;
    price: number;
    priceUnit: string;
  } | null;
}

const AddToCartModal = ({ isOpen, onClose, item }: AddToCartModalProps) => {
  const [hours, setHours] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { addItem, checkDateAvailability, bookedDates } = useCart();

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const dateStr = format(date, 'yyyy-MM-dd');
    const { available, nextAvailable } = checkDateAvailability(dateStr);
    
    if (!available) {
      toast({
        title: "Date non disponible",
        description: `Cette date est déjà réservée. Nous vous proposons le ${format(parseISO(nextAvailable), 'PPP', { locale: fr })}.`,
      });
      setSelectedDate(parseISO(nextAvailable));
    } else {
      setSelectedDate(date);
    }
  };

  const isDateDisabled = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return bookedDates.includes(dateStr) || date < new Date();
  };

  const handleAddToCart = () => {
    if (!item || !selectedDate) {
      toast({
        title: "Information manquante",
        description: "Veuillez sélectionner une date de début.",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: `${item.id}-${Date.now()}`,
      type: item.type,
      name: item.name,
      description: item.description,
      price: item.price,
      priceUnit: item.priceUnit,
      hours: hours,
      startDate: format(selectedDate, 'yyyy-MM-dd'),
    });

    toast({
      title: "Ajouté au panier !",
      description: `${item.name} - ${hours}h à partir du ${format(selectedDate, 'PPP', { locale: fr })}`,
    });

    // Reset and close
    setHours(1);
    setSelectedDate(undefined);
    onClose();
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Ajouter au panier
          </DialogTitle>
          <DialogDescription>
            Configurez votre prestation
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Item info */}
          <div className="bg-muted/50 rounded-xl p-4">
            <span className={`text-xs px-2 py-1 rounded-full ${
              item.type === 'pack' ? 'bg-bleu-doux/30 text-foreground' : 'bg-sauge/30 text-foreground'
            }`}>
              {item.type === 'pack' ? 'Pack' : 'Service'}
            </span>
            <h3 className="font-playfair font-semibold text-lg mt-2">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <p className="text-lg font-bold text-gradient mt-2">
              {item.price}€ {item.priceUnit}
            </p>
          </div>

          {/* Hours selector */}
          <div className="space-y-2">
            <Label>Nombre d'heures</Label>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setHours(Math.max(1, hours - 1))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Input 
                type="number" 
                value={hours}
                onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center"
                min={1}
              />
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setHours(hours + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
              <span className="text-muted-foreground">heures</span>
            </div>
          </div>

          {/* Date picker */}
          <div className="space-y-2">
            <Label>Date de début préférée</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP', { locale: fr }) : "Choisir une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={isDateDisabled}
                  locale={fr}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Les dates en gris sont déjà réservées
            </p>
          </div>

          {/* Total */}
          <div className="bg-gradient-to-r from-or/10 to-or-fonce/10 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total estimé :</span>
              <span className="text-2xl font-bold text-gradient">
                {(item.price * hours).toFixed(2)} €
              </span>
            </div>
          </div>

          {/* Add to cart button */}
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full"
            onClick={handleAddToCart}
          >
            <Check className="w-5 h-5 mr-2" />
            Ajouter au panier
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
