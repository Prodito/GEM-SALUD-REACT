import './NavBar.css';
import '../ItemProduct/ItemProduct.css';
import CartWidget from './CartWidget.js';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar-primary'>
        <Link to={'/'}><img src="/assets/logo.png" alt="logo gemsalud"/></Link>    
        <ul className="list">
        <li className="list-item">
        <Link to={'/products'}>Products</Link>
        </li>
        <li className="list-item">
        <Link to={'/about'}>About</Link>
        </li>
        <li className="list-item">
        <Link to={'/login'}>Login</Link>
        </li>
        <li className="list-item">
        <Link to={'/cart'}><CartWidget/>
        </Link>
        </li>
        </ul>
        </div>
    )
}

export default NavBar;