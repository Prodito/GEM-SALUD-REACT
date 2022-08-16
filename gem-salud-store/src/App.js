import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Login from "./components/Login/Login";
import CartProvider from './Context/CartContext';


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/products' element={<ItemListContainer />} />
    <Route path='/products/:productsId' element={<ItemListContainer />}/>
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
