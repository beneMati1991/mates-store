import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemDetailContainer = () => {
  const [item, setItemCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams()

  const getItem = async (idItem) => {
      const document = doc(db, "items", idItem)
      const response = await getDoc(document)
      const data = {id: response.id, ...response.data()}
      setItemCard(data)
      setIsLoading(false)
  }
  useEffect(() => {
    getItem(id)
  }, [id]);

  return isLoading ? <h2>Cargando...</h2> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
