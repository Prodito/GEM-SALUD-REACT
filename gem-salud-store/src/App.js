import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import Login from "./components/Login/Login";
import CartProvider from './components/Context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/products' element={<ItemListContainer />} />
    <Route path='/about' element={<ItemListContainer />} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
} 

export default App;
