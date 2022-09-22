import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  //console.log(item.categoryId)
  return (
    <div className="d-flex justify-content-center">
      <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">{item.title}</div>
        <div className="card-body">
          <p className="card-text">
            {item.stock === 0 ? (
              <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-145a5.appspot.com/o/sinstock.png?alt=media&token=49fa0b1a-342f-4d05-8217-8185cf2069d1" alt="logo" />
            ) : (
              <img src={`${item.pictureUrl}`} alt="logo" />
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
