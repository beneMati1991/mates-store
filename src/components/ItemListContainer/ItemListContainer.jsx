import React from "react";
import ItemCount from "./../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemListContainer = ({ msg }) => {
  function onAdd(count) {
    Swal.fire(`Productos seleccionados: ${count}`);
  }

  return (
    <div className="container-fluid pt-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 text-center">
          <h1>Un Buen Mate</h1>
          <p>{msg}</p>
        </div>
        <div className="col-md-10">
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
