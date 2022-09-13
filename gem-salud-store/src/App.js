import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartProvider from './Context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Container } from '@mui/system';



function App() {
  return (
    <>
    <BrowserRouter>
    <Container maxWidth='1x'>
    <CartProvider>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    <Route path='detail/:detailId' element={<ItemDetailContainer/>}/>
    {/*<Route path='/about' element={< />} />*/}
    <Route path='/cart' element={<Cart/>} />
    {/*<Route path='/login' element={< />} />*/}
    </Routes>
    </CartProvider>
    </Container>
    </BrowserRouter>
    </>
  );
} 

export default App;
