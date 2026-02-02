import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface CartItem {
  id: string;
  type: 'pack' | 'service';
  name: string;
  description: string;
  price: number;
  priceUnit: string;
  hours: number;
  startDate: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateItemHours: (id: string, hours: number) => void;
  updateItemDate: (id: string, date: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  bookedDates: string[];
  checkDateAvailability: (date: string) => { available: boolean; nextAvailable: string };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Simulate some already booked dates
const BOOKED_DATES = [
  '2026-02-05',
  '2026-02-06',
  '2026-02-10',
  '2026-02-15',
];

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [bookedDates] = useState<string[]>(BOOKED_DATES);

  const checkDateAvailability = useCallback((date: string): { available: boolean; nextAvailable: string } => {
    const isBooked = bookedDates.includes(date);
    
    if (!isBooked) {
      return { available: true, nextAvailable: date };
    }

    // Find next available date
    let nextDate = new Date(date);
    let attempts = 0;
    while (attempts < 30) {
      nextDate.setDate(nextDate.getDate() + 1);
      const nextDateStr = nextDate.toISOString().split('T')[0];
      if (!bookedDates.includes(nextDateStr)) {
        return { available: false, nextAvailable: nextDateStr };
      }
      attempts++;
    }

    return { available: false, nextAvailable: date };
  }, [bookedDates]);

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === newItem.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          hours: updated[existingIndex].hours + newItem.hours,
        };
        return updated;
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateItemHours = useCallback((id: string, hours: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, hours: Math.max(1, hours) } : item
    ));
  }, []);

  const updateItemDate = useCallback((id: string, date: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, startDate: date } : item
    ));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => {
      return total + (item.price * item.hours);
    }, 0);
  }, [items]);

  const getTotalItems = useCallback(() => {
    return items.length;
  }, [items]);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateItemHours,
      updateItemDate,
      clearCart,
      getTotalPrice,
      getTotalItems,
      isCartOpen,
      setIsCartOpen,
      bookedDates,
      checkDateAvailability,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
