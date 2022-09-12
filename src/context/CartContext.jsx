import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const auxCart = cart;
    auxCart.push({item: item, quantity: quantity});
    setCart(auxCart)
    console.log(cart);
  };

  const removeItem = (item) => {
    const auxCart = cart.filter((itemCart) => itemCart.id !== item.id);
    setCart(auxCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    const auxCart = cart.filter((itemCart) => itemCart.id !== itemId);
    if (auxCart.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addItem, removeItem, clear, isInCart }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export { CartContext, CartProvider };
