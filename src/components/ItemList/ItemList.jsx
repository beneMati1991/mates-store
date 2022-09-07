import React, { useState, useEffect } from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ itemList }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCard = itemList.map((item, indice) => (
      <Grid key={indice} xs={2} sm={3} md={3} >
        <Item item={item} />
      </Grid>
    ));
    setItems(itemCard);
  }, [itemList]);

  return (
    <Grid container spacing={1}>
      {items}
    </Grid>
  );
};

export default ItemList;
