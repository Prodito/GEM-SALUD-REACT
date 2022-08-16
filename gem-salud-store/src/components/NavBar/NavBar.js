import './NavBar.css';
import CartWidget from './CartWidget.js';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar-primary'>
        <Link to={'/'}><img className="logo" src="/assets/logo.png" alt="logo gemsalud"/></Link>    
        <ul className="list">
        <li>
        <Link className="list-item" to={'/category/gadgets'}>Hospital Gadgets</Link>
        </li>
        <li>
        <Link className="list-item" to={'/category/generals'}>Hospital Generals</Link>
        </li>
        <li>
        <Link className="list-item" to={'/about'}>About</Link>
        </li>
        <li>
        <Link className="list-item" to={'/login'}>Login</Link>
        </li>
        <li>
        <Link to={'/cart'}><CartWidget className="list-item"/>
        </Link>
        </li>
        </ul>
        </div>
    )
}

export default NavBar;