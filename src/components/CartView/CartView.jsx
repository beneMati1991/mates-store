import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, removeItem, getTotal, clear } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          {cart.length > 0 ? (
            <div>
              <h3>Carrito de compras</h3>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cant. Seleccion</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(
                    (itemCart) => <tr key={itemCart.id}>
                        <th scope="row"><img src={`${itemCart.item.pictureUrl}`} alt="logo" /></th>
                        <td>{itemCart.item.title}</td>
                        <td>$ {itemCart.item.price}</td>
                        <td>{itemCart.quantity}</td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => removeItem(itemCart.item.id)}>Eliminar</button>
                        </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div>
                <h4 className="d-flex flex-column align-items-end">Precio Total: ${getTotal()}</h4>
              </div>
              <div className="d-flex flex-column align-items-end pt-1 pb-5">
                <Link to="/finCompra"><button className="btn btn-primary" onClick={()=> clear()}>Finalizar compra</button></Link>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
                <h3>Carrito vacío</h3>
                <Link to="/"><button className="btn btn-info mt-4">Ver Productos</button></Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartView;
