import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: number;
  brand: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
