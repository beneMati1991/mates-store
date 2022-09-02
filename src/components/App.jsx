import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Contact from './NavBar/Contact';
import MenuBar from "./MenuBar/MenuBar";
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <MenuBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path="*" element={<ItemListContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
