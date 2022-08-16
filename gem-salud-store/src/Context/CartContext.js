import React,{useState,useContext} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item,newQuantity) => {
        const newCart = cart.filter(product => product.id !== item.id);
        newCart.push({...item,quantity: newQuantity});
        setCart(newCart)
    }

    const clearCart = () => setCart([]); //limpiar carrito de compras

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; //si esta el producto en el carrito

    const removeProd = (id) => setCart(cart.filter(product => product.id !== id)); //borrar un producto del carrito

return (
    <CartContext.Provider value = {{
        clearCart,
        isInCart,
        removeProd,
        addProduct
    }}>
        {children}
    </CartContext.Provider>

)
}
export default CartProvider;