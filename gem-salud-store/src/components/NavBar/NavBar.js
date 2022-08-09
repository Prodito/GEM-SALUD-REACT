import './NavBar.css';
import '../logo/logo.png';
import CartWidget from './CartWidget.js';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container'>
        <nav>
        <ul className="list">
        <li className="list-items">
        <Link to={'/'}>Home</Link>
        </li>
        <li className="list-items">
        <Link to={'/products'}>Products</Link>
        </li>
        <li className="list-items">
        <Link to={'/about'}>About</Link>
        </li>
        <li className="list-items">
        <Link to={'/login'}>Login</Link>
        </li>
        <li className="list-items">
        <Link to={'/cart'}>Shop Cart<CartWidget/>
        </Link>
        </li>
        </ul>
        </nav>
        </div>
    )
}

export default NavBar;