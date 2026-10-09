"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = {
  key: string;
  flavourId: string;
  name: string;
  weight: "75g" | "40g";
  price: number;
  image: string;
  quantity: number;
};

type AddCartLine = Omit<CartLine, "key" | "quantity">;
type CartContextValue = {
  items: CartLine[];
  itemCount: number;
  subtotal: number;
  hydrated: boolean;
  addItem: (item: AddCartLine) => void;
  setQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = "snaxsa-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed as CartLine[]);
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((item: AddCartLine) => {
    const key = `${item.flavourId}:${item.weight}`;
    setItems((current) => {
      const existing = current.find((line) => line.key === key);
      return existing
        ? current.map((line) => line.key === key ? { ...line, quantity: line.quantity + 1 } : line)
        : [...current, { ...item, key, quantity: 1 }];
    });
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setItems((current) => quantity < 1 ? current.filter((line) => line.key !== key) : current.map((line) => line.key === key ? { ...line, quantity } : line));
  }, []);

  const removeItem = useCallback((key: string) => setItems((current) => current.filter((line) => line.key !== key)), []);
  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    hydrated,
    addItem,
    setQuantity,
    removeItem,
    clearCart,
  }), [items, hydrated, addItem, setQuantity, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
