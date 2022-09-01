import { React, useState, useEffect } from "react";
import itemData from "./../../data/itemData";
import ItemList from './../ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemData);
      }, 2000);
    });

    getData
      .then((response) => setItems(response))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? <h2>Cargando...</h2> : <ItemList list={items} />;
};

export default ItemListContainer;
