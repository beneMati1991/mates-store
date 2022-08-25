import React from "react";
import useCounter from "../../hooks/useCounter";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { add, substract, count } = useCounter(stock, initial);

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card border-secondary" style={{ maxWidth: "20rem" }}>
          <div className="card-header">Desafio Contador</div>
          <div className="card-body">
            <h4 className="card-title">Producto</h4>
            <p className="card-text">Cantidad: {count}</p>
            <div className="d-flex justify-content-center">
                <button className="btn btn-light" onClick={substract}> - </button>
                <button className="btn btn-dark" onClick={add}> + </button>
            </div>
            <div className="d-flex justify-content-center pt-2">
                <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={count===0}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
