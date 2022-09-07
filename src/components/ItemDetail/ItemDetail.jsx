import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="card mb-3">
          <h3 className="card-header">{item.title}</h3>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle text-muted">{item.title}</h6>
          </div>
          <img src={`/images/${item.pictureUrl}`} alt="logo" />
          <div className="card-body">
            <p className="card-text">
              {item.description}
            </p>
          </div>
          <div className="card-body">
            <p>va los botones de agregar compra.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
