import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
      <nav>
        <h1>Elixir</h1>
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