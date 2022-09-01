import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      const misProductos = await fetch("./json/itemData.json");
      const response = await misProductos
        .json()
        .finally(() => setIsLoading(false));
      setItem(response);
    };
    getProductos();
  }, []);
  return isLoading ? <h2>Cargando...</h2> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
