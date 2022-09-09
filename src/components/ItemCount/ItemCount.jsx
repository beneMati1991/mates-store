import React from "react";
import useCounter from "../../hooks/useCounter";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { add, substract, count } = useCounter(stock, initial);

  return (
      <div className="col-md-12">
        <div className="card border-secondary" style={{ maxWidth: "20rem" }}>
          <div className="card-body">
            <p className="card-text">Cantidad: {count}</p>
            <div className="d-flex justify-content-center">
                <button className="btn btn-light" onClick={substract}> - </button>
                <button className="btn btn-dark" onClick={add}> + </button>
            </div>
            <div className="d-flex justify-content-center pt-2">
                <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={count===0}>Agregar al Carro</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemCount;
