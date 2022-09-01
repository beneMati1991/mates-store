import React from "react";

const ItemDetail = ({ item }) => {

  return (
    <div className="d-flex justify-content-center">
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">{item.title}</div>
        <div className="card-body">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">
            {item.description}
          </p>
          <p><strong>Precio: {item.price}</strong></p>
        </div>
      </div> 
    </div>
  );
};

export default ItemDetail;
