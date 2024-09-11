import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
      <nav>
        <h1 className="logo">Elixir</h1>
        <div>
            <button>Categorias</button>
            <button>Productos</button>
            <button>Contacto</button>
        </div>
     
        <CartWidget />
        </nav>
    );
}
export default NavBar