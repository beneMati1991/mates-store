import CartWidget from "./CartWidget";
import ItemOption from "./ItemOption";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img href="#" src="/images/mate-logo.png" alt="logo" id="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarColor01"
          >
            <ul className="navbar-nav justify-content-end">
              <ItemOption text="Inicio" />
              <ItemOption text="Productos" />
              <ItemOption text="Como Comprar" />
              <ItemOption text="Contacto" />
              <CartWidget quantity="4" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
