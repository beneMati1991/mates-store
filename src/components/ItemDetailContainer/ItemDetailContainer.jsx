import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItemCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams()

  useEffect(() => {
      fetch("../json/itemData.json")
      .then(response => response.json())
      .then(data => {
        const item1 = data.find(item => item.id.toString() === id)
        setItemCard(item1);
      })
      .finally(() => setIsLoading(false));
  }, [id]);
  //return isLoading ? <h2>Cargando...</h2> : <ItemDetail item={item} />;
  return isLoading ? <h2>Cargando...</h2> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
