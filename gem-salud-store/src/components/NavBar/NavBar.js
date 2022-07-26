import './NavBar.css';
import '../logo/logo.png';
import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
        <div>
        <header className ="Navbar">
        <div className ="Toolbar">
        <div className="Logo"><img className ='LogoBox' src={"../logo/logo.png"} alt="Logo GemSalud"/>
        </div>
        <div className="Title">Gem Salud Store</div>
        <div>
        <ul className="ListItems">
        <li>
        <a href="#Home">Home</a>
        </li>
        <li>
        <a href="#Products">Products</a>
        </li>
        <li>
        <a href="#About">About</a>
        </li>
        <li>
        <a href="#Login">Login</a>
        </li>
        <li>
        <a href="#ShopCart"><CartWidget/></a>
        </li>
        </ul>
        </div>
        </div>
        </header>
        </div>
    )
}

export default NavBar;