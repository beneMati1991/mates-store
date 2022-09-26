import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, getTotal, clear, getQuantity } = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });

  const { Nombre, Email, Telefono } = buyer;
  const navigate = useNavigate();
  const generateOrder = async (data) => {
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, data);
      console.log(order.id)
      setOrderId(order.id);
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cart.map((e) => {
      return { id: e.id, title: e.item.title, price: e.item.price };
    });
    const dia = new Date();
    const cantidad = getQuantity();
    const total = getTotal();
    const data = { buyer, items, dia, cantidad, total };
    generateOrder(data);
    navigate("/finCompra", { state: { orderId: orderId } });
  };

  const handleClear = () => {
    clear();
    console.log("vacio carrito");
    navigate("/cart");
  };

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h2>Finalizando Compra</h2>
        </div>
        <div className="d-flex flex-column align-items-center pt-4">
          <h4>Completar Datos:</h4>
          <form onSubmit={handleSubmit} className="pt-4">
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              value={Nombre}
              onChange={handleInputChange}
            />
            <input
              type="mail"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Telefono"
              placeholder="Telefono"
              value={Telefono}
              onChange={handleInputChange}
            />
            <input
              type="submit"
              value="Finalizar Compra"
              className="btn btn-success"
            />
          </form>

          <button className="btn btn-danger" onClick={handleClear}>
            Cancelar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
