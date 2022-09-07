import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">{item.title}</div>
        <div className="card-body">
          <p className="card-text">
            {item.stock === 0 ? (
              <img src="/images/sinstock.png" alt="logo" />
            ) : (
              <img src={`/images/${item.pictureUrl}`} alt="logo" />
            )}
          </p>
          <h4 className="card-title">Precio: ${item.price}</h4>
          <div className="d-flex justify-content-center pt-2">
            <Link className="nav-link" to={`/item/${item.id}`}>
              <button className="btn btn-primary">+ Detalles</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
