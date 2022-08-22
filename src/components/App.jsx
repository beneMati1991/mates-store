import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer msg='Bienvenidos a mi tienda!'/>
    </div>
  );
}

export default App;
