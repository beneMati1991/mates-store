import React from "react";
import useCounter from './../../hooks/useCounter';

const Item = ({ item, initial, onAdd }) => {
  const { add, substract, count } = useCounter(item.stock, initial);
  return (
    <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{item.title}</div>
      <div className="card-body">
        <p className="card-text">
          <img href="#" src="/images/nofound.png" alt="logo" />
        </p>
        <h4 className="card-title">Precio: {item.price}</h4>
        <p className="card-text">Cantidad: {count}</p>
        <div className="d-flex justify-content-center">
            <button className="btn btn-light" onClick={substract}> - </button>
            <button className="btn btn-dark" onClick={add}> + </button>
        </div>
        <div className="d-flex justify-content-center pt-2">
          <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={count===0}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
