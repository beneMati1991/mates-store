import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const foundItem = cart.find(
      (itemCart) => itemCart.item.id === item.id
    )

    if (foundItem) {
      foundItem.quantity =quantity;
      setCart([...cart])
    }
    else {
      setCart([...cart, {id:uuidv4(), item: item, quantity: quantity}])
    }
    
  };

  const removeItem = (item) => {
    const filteredArray = cart.filter(
      (itemCart) => itemCart.item.id !== item.id
    );

    setCart(filteredArray);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    const auxCart = cart.filter((itemCart) => itemCart.item.id === itemId);
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
