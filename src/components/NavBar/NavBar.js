import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="NavBar">
        <Link to={`/`}>
        <h1 className="logo">Elixir</h1>
        </Link>
        <div className='Categorias'>
            <NavLink to={`/category/man`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hombres</NavLink>
            <NavLink to={`/category/woman`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mujeres</NavLink>
            <NavLink to={`/category/teenager`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Adolescente</NavLink>  
        </div>  
        <CartWidget />
        </nav>
    )
}
export default NavBar