import "./App.css";
import NavBar from "./NavBar/NavBar.jsx";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
//import ItemCount from "./ItemCount/ItemCount.jsx";
//import Swal from "sweetalert2";

function App() {
  /*function onAdd(count) {
    Swal.fire(`Productos seleccionados: ${count}`);
  }*/

  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid pt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 text-center">
            <h1>Un Buen Mate</h1>
            <p>Bienvenidos a la boutique del mate!</p>
          </div>
          {/* <div className="col-md-10">
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div> */}
          <div className="col-md-10">
            <ItemListContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
