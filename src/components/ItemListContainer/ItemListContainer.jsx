import { React, useState, useEffect } from "react";
import ItemList from "./../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getItems = async (id) => {
      const document = id ? query(collection (db, "items"), where("categoryId", "==", parseInt(id))) : collection (db, "items")
      const coleccion = await getDocs(document)
      const items = coleccion.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
      setItems(items)
      setIsLoading(false)
  }

  useEffect(() => {
    getItems(id)
  }, [id])

  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    <div className="container">
      <ItemList itemList={items} />
    </div>
  );
};

export default ItemListContainer;
