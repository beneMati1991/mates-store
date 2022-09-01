import React from "react";
import Item from "./Item";
import Swal from "sweetalert2";

const ItemList = ({ list }) => {
  function onAdd(count) {
    Swal.fire(`Productos seleccionados: ${count}`);
  }

  return (
    <div className="row">
      {list.map((item) => (
        <div className="col-md-3" key={item.id}>
          <Item item={item} initial={0} onAdd={onAdd} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
