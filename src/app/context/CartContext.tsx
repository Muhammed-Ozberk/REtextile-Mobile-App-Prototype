import { createContext, useContext, useState, ReactNode } from "react";

interface Material {
  id: number;
  type: string;
  condition: string;
  delivery: string;
  image: string;
  title: string;
}

interface CartContextType {
  cart: Material[];
  addToCart: (material: Material) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Material[]>([]);

  const addToCart = (material: Material) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === material.id)) {
        return prev;
      }
      return [...prev, material];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id: number) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
