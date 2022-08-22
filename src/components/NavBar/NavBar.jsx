import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Como Comprar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <CartWidget quantity='4' />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
