import React from "react";

const Item = ({ item }) => {
  return (
    <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{item.title}</div>
      <div className="card-body">
        <p className="card-text">
          <img href="#" src="/images/nofound.png" alt="logo" />
        </p>
        <h4 className="card-title">Precio: {item.price}</h4>
        <div className="d-flex justify-content-center pt-2">
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
