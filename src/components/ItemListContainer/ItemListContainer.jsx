import { React, useState, useEffect } from "react";
import ItemList from "./../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("../json/itemData.json")
      .then((response) => response.json())
      .then((data) => {
        if (id) {
          const itemsCat = data.filter(
            (item) => item.categoryId.toString() === id
          );
          setItems(itemsCat);
        } else {
          setItems(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    <div className="container">
      <ItemList itemList={items} />
    </div>
  );
};

export default ItemListContainer;
