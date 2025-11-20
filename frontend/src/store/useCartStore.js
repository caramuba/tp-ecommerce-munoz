import { create } from "zustand";
import { persist } from "zustand/middleware";

export const productsCart = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product) => {
        const itemsActuales = get().items;
        const itemExistente = itemsActuales.findIndex(
          (item) => item.producto.id === product.id
        );

        if (itemExistente >= 0) {
          const updatedItems = [...itemsActuales];
          updatedItems[itemExistente].cantidad += 1;
          set({ items: updatedItems });
        } else {
          set({
            items: [...itemsActuales, { producto: product, cantidad: 1 }],
          });
        }
      },
      removeItem: (productId) => {
        const itemsActuales = get().items;
        const itemExistente = itemsActuales.findIndex(
          (item) => item.product.id === productId
        );
        if (itemExistente >= 0) {
          const updatedItems = [...itemsActuales];
          if (updatedItems[itemExistente].cantidad > 1) {
            updatedItems.splice(itemExistente, 1);
          }
          set({ items: updatedItems });
        }
      },
      deleteItem: (productId) => {
        set({
          items: get().items.filter((items) => items.product.id !== productId),
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
      getTotal: () => {
        return get().item.reduce((total, item) => {
          return total + item.product.precio * item.cantidad;
        }, o);
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.cantidad, 0);
      },
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      togglecart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },
      getOrderData: () => {
        const items = get().items;
        const total = get().getTotal();
        return {
          productos: items.map((item) => ({
            id: item.producto.id,
            nombre: item.producto.nombre,
            precio: item.producto.precio,
            cantidad: item.cantidad,
          })),
          total: total,
          fecha: new Date().toISOString(),
        };
      },
    }),
    {
      name: "cart-memory",
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export const useCartStore = productsCart;
