import React from "react";

const ItemListContainer = ({ msg }) => {
  return (
    <div class="container-fluid pt-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 text-center">
          <h1>Un Buen Mate</h1>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
