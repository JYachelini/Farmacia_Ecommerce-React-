import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const product = { name: item.name, price: item.price, quantity: quantity, id: item.id };
    const existingIndex = cart.findIndex((product) => product.name === item.name);
    // Se checkea si esta repetido o no
    existingIndex >= 0
      ? (cart[existingIndex] = { ...cart[existingIndex], quantity: cart[existingIndex].quantity + quantity })
      : setCart((curr) => [...curr, product]);
  };

  const removeItem = (item) => {
    // Checkea si existe el producto
    const existingIndex = cart.findIndex((product) => product.name === item.name);
    // Copia el array del carrito
    const cartCopy = Array.from(cart);
    if (existingIndex >= 0) {
      // Se borra el item del carrito
      cartCopy.splice(existingIndex, 1);
      // Se retorna el carrito actualizado
      setCart(cartCopy);
    }
  };

  const clearCart = () => {
    // Se retorna el carrito vacio
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, setCart, addToCart, removeItem, clearCart }}>{children}</CartContext.Provider>;
}
