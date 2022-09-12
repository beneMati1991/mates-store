import React, {useContext} from "react";
import ItemCount from "./../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import Swal from "sweetalert2";

const ItemDetail = ({ item,  }) => {

  const { addItem } = useContext(CartContext);

  function onAdd(count) {
    Swal.fire(`Productos seleccionados: ${item.id}, ${item.title}, ${item.id} y cantidad ${count}`);
    addItem(item, count)
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="card mb-3">
          <h3 className="card-header">{item.title}</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle text-muted">{item.title}</h6>
              </div>
              <img src={`/images/${item.pictureUrl}`} alt="logo" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-body">
                <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
